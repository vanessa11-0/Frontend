export const Service = {
    async getCoordinates(cityName) {
        try {
            const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=es&format=json`;
            const response = await fetch(url);
            const data = await response.json();

            return data.results ? data.results[0] : null;
        } catch (error) {
            throw new Error("Error al conectar con el servicio de geolocalización.");
        }
    },

    async getWeather(lat, lon) {
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
            const response = await fetch(url);
            if (!response.ok) throw new Error();
            return await response.json();
        } catch (error) {
            throw new Error("No se pudo obtener el clima actual.");
        }
    }
};