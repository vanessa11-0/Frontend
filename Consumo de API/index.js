const API_URL = 'https://rickandmortyapi.com/api/character';    
const container = document.getElementById('container-character'); 

async function fetchCharacters() { // Función asíncrona para obtener los personajes
    try {
        const response = await fetch(API_URL);  // Realiza la solicitud a la API
        if (!response.ok) {  // Verifica si la respuesta es exitosa
            throw new Error(`HTTP error! status: ${response.status}`); 
        }
        const data = await response.json(); 
        renderCards(data.results);  
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        container.innerHTML = `<p>Hubo un error al cargar los personajes.</p>`;
    }
}


function renderCards(characters) {  // Recibe un array de personajes
    container.innerHTML = ''; // Limpiar contenedor

    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('card');

// Agregar contenido a cada cuadro
        card.innerHTML = `      
            <img src="${character.image}" alt="${character.name}">
            <div class="card-info">
                <span class="status-tag">${character.status}</span>
                <h3>${character.name}</h3>
                <span class="location-label">Última ubicación:</span>
                <p class="location-name">${character.location.name}</p>
            </div>  // Cerrar card-info
        `;  
        // Agregar el cuadro al contenedor
        container.appendChild(card);
    });
}
    // Llamar a la función para iniciar el proceso
fetchCharacters();