const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemonData(limit, offset) {
    try {
        const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
        if (!response.ok) throw new Error('No se pudo conectar con la API'); 
        
        const data = await response.json();

        const detailPromises = data.results.map(pokemon => 
            fetch(pokemon.url).then(res => res.json())
        );
        
        const details = await Promise.all(detailPromises);
        
        return {
            total: data.count,
            results: details
        };
    } catch (error) {
        throw error; 
    }
}