document.addEventListener('DOMContentLoaded', async () => {
    const winesContainer = document.getElementById('wines-list');
    
    try {
        const response = await fetch('/api/wines');
        if (!response.ok) {
            const error = response.statusText || 'Erro ao buscar vinhos';
            throw new Error(error);
        }
        const wines = await response.json();

        wines.forEach((wine, index) => {
            const sectionClass = index % 2 === 0 ? 'container-wine' : 'container-yellow';
            const textClass = index % 2 === 0 ? 'text-wine' : 'text-yellow';

            const agingHtml = wine.aging ? `
                <div class="item item-1">
                    <i class="fa-solid fa-clock"></i>
                    <p>${wine.aging}</p>
                </div>
            ` : '';

            const wineHtml = `
                <section class="${sectionClass}">
                    <img src="${wine.imageUrl}" alt="${wine.name}">
                    <div class="${textClass}">
                        <h2>${wine.name}</h2>
                        <div class="list">
                            <div class="item item-50">
                                <i class="fa-solid fa-location-dot" style="padding: 5px 7px;"></i>
                                <p>${wine.location}</p>
                            </div>
                            <div class="item item-50">
                                <i class="fa-solid fa-snowflake" style="padding: 5px 6px;"></i>
                                <p>${wine.temperature}</p>
                            </div>
                            <div class="item item-1">
                                <i class="fa-solid fa-wine-glass-empty" style="padding: 5px 8px;"></i>
                                <p>${wine.type}</p>
                            </div>
                            <div class="item item-1">
                                <i class="fa-solid fa-wine-bottle"></i>
                                <p>${wine.grape}</p>
                            </div>
                            ${agingHtml}
                            <div class="item item-1">
                                <i class="fa-solid fa-list-check"></i>
                                <p>${wine.description}</p>
                            </div>
                            <div class="item item-1">
                                <i class="fa-solid fa-utensils"></i>
                                <p>${wine.harmonization}</p>
                            </div>
                        </div>
                    </div>
                </section>
            `;

            winesContainer.insertAdjacentHTML('beforeend', wineHtml);
        });
    } catch (error) {
        console.error('Erro ao carregar vinhos:', error);
        winesContainer.innerHTML = '<p>Erro ao carregar a lista de vinhos.</p>';
    }
});
