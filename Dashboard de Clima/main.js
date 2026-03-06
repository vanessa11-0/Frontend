import { Service } from './service.js';
import { UI } from './ui.js';

const form = document.getElementById('weather-form');
const input = document.getElementById('city-input');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const cityName = input.value.trim();

    if (!cityName) return;

    UI.showLoading();

    try {
        const location = await Service.getCoordinates(cityName);
        
        if (!location) {
            UI.renderError("La ciudad no existe o no se encontraron resultados.");
            return;
        }

        const weather = await Service.getWeather(location.latitude, location.longitude);

        UI.renderWeather(location, weather);

    } catch (error) {
        UI.renderError(error.message || "Ocurrió un error inesperado."); 
    }
});