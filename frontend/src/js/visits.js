const visitsContainer = document.querySelector('.visit-options');

async function loadVisits() {
    try {
        const response = await fetch('http://localhost:3000/api/visits');
        const visits = await response.json();

        visitsContainer.innerHTML = '';

        visits.forEach(visit => {
            const hr = document.createElement('hr');
            
            const anchor = document.createElement('a');
            anchor.href = `./visit.html?id=${visit.id}`;

            const divOption = document.createElement('div');
            divOption.className = 'option';

            const h4 = document.createElement('h4');
            h4.textContent = visit.name;

            const divIcons = document.createElement('div');
            divIcons.className = 'icons';
            divIcons.innerHTML = visit.includesHtml;

            divOption.appendChild(h4);
            divOption.appendChild(divIcons);
            anchor.appendChild(divOption);

            visitsContainer.appendChild(hr);
            visitsContainer.appendChild(anchor);
        });
        
        const finalHr = document.createElement('hr');
        visitsContainer.appendChild(finalHr);

    } catch (error) {
        console.error('Erro ao carregar visitas:', error);
    }
}

loadVisits();
