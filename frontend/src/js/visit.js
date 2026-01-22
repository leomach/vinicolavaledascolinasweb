const titleElement = document.getElementById('visit-title');
const descriptionElement = document.getElementById('visit-description');

async function loadVisitDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const visitId = urlParams.get('id');

    if (!visitId) {
        titleElement.textContent = "Visita não especificada";
        descriptionElement.textContent = "Por favor, selecione uma visita na página anterior.";
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/visits/${visitId}`);
        if (!response.ok) {
            throw new Error('Visita não encontrada');
        }
        const visit = await response.json();

        document.title = `${visit.name} | Vale das Colinas`;
        titleElement.textContent = visit.name;
        descriptionElement.innerHTML = visit.description.replace(/\n/g, '<br>');

    } catch (error) {
        console.error('Erro ao carregar detalhes da visita:', error);
        titleElement.textContent = "Erro";
        descriptionElement.textContent = "Não foi possível carregar os detalhes da visita.";
    }
}

loadVisitDetails();
