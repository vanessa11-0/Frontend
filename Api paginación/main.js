import { getPokemonData } from './service.js';
import { renderPokemonCards, showLoading, updatePaginationText, displayError } from './ui.js';

let state = {
    limit: 20,
    offset: 0,
    totalItems: 0
};

async function loadApp() {
    showLoading(true);
    try {
        const data = await getPokemonData(state.limit, state.offset);
        state.totalItems = data.total;

        renderPokemonCards(data.results);
        
        const currentPage = Math.floor(state.offset / state.limit) + 1;
        const totalPages = Math.ceil(state.totalItems / state.limit);
        updatePaginationText(currentPage, totalPages); 

    } catch (error) {
        displayError("Hubo un problema al cargar los Pokémon."); 
    } finally {
        showLoading(false);
    }
}

window.navigate = (direction) => {
    const totalPages = Math.ceil(state.totalItems / state.limit);
    const currentPage = Math.floor(state.offset / state.limit);

    if (direction === 'next' && (currentPage + 1) < totalPages) state.offset += state.limit;
    else if (direction === 'prev' && state.offset > 0) state.offset -= state.limit;
    else if (direction === 'first') state.offset = 0;
    else if (direction === 'last') state.offset = (totalPages - 1) * state.limit; 

    loadApp();
};

window.changeLimit = (newLimit) => {
    state.limit = parseInt(newLimit); 
    state.offset = 0; 
    loadApp();
};

loadApp();