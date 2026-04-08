async function loadMarketplace() {
    const response = await fetch('market.json');
    const data = await response.json();
    const marketGrid = document.getElementById('items');

    data.catalog.forEach(item => {
        const itemCard = `
            <div class="item-card">
                <img src="${item.imageUrl}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price} Robux</p>
                <button onclick="buyItem('${item.id}', ${item.price})">Buy</button>
            </div>
        `;
        marketGrid.innerHTML += itemCard;
    });
}
