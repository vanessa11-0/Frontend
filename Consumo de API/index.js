const API_URL = 'https://rickandmortyapi.com/api/character';    
const container = document.getElementById('container-character'); 
const btn = document.getElementById('fetch-btn');

btn.addEventListener('click', () => {
    fetchCharacters();
});

async function fetchCharacters() { 
    btn.innerText = "Cargando...";
    btn.disabled = true;

    try {
        const response = await fetch(API_URL);  
        
        if (!response.ok) {  
            throw new Error(`HTTP error! status: ${response.status}`); 
        }

        const data = await response.json(); 
        renderCards(data.results);  

        btn.innerText = "Actualizar Personajes";

    } catch (error) {
        console.error("Error al obtener los datos:", error);
        container.innerHTML = `<p>Hubo un error al cargar los personajes.</p>`;
        btn.innerText = "Reintentar consulta";
    } finally {
        // finally se ejecuta siempre, haya error o no, para reactivar el botón
        btn.disabled = false;
    }
}

function renderCards(characters) { 
    container.innerHTML = ''; // Limpiar contenedor para no duplicar datos

    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `      
            <img src="${character.image}" alt="${character.name}">
            <div class="card-info">
                <span class="status-tag">${character.status}</span>
                <h3>${character.name}</h3>
                <span class="location-label">Última ubicación:</span>
                <p class="location-name">${character.location.name}</p>
            </div>  
        `;  
        
        container.appendChild(card);
    });
}

