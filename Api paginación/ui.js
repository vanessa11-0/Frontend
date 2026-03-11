const grid = document.getElementById('pokemonGrid');
const loader = document.getElementById('loading');
const pageIndicator = document.getElementById('pageIndicator');

export function showLoading(isVisible) {
    loader.style.display = isVisible ? 'block' : 'none'; 
}

export function renderPokemonCards(pokemons) {
    grid.innerHTML = ''; 
    pokemons.forEach(poke => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${poke.sprites.front_default}" alt="${poke.name}">
            <h3>${poke.name.toUpperCase()}</h3>
            <p>ID: #${poke.id}</p>
        `;
        grid.appendChild(card);
    });
}

export function updatePaginationText(current, total) {
    pageIndicator.innerText = `Página ${current} de ${total}`;
}

export function displayError(message) {
    grid.innerHTML = `<p class="error-msg">${message}</p>`;
}