const weatherDescriptions = {
    0: "Cielo despejado ☀️",
    1: "Principalmente despejado 🌤️",
    2: "Parcialmente nublado ⛅",
    3: "Nublado ☁️",
    45: "Niebla 🌫️",
    48: "Niebla con escarcha 🌫️❄️",
    51: "Llovizna ligera 🌦️",
    53: "Llovizna moderada 🌦️",
    55: "Llovizna densa 🌦️",
    61: "Lluvia ligera 🌧️",
    63: "Lluvia moderada 🌧️",
    65: "Lluvia fuerte 🌧️",
    71: "Nieve ligera ❄️",
    95: "Tormenta eléctrica ⛈️"
};

export const UI = {
    container: document.getElementById('weather-container'),

    getWeatherText(code) {
        return weatherDescriptions[code] || `Estado desconocido (Código ${code})`;
    },

    renderWeather(cityData, weatherData) {
        const { temperature, windspeed, weathercode, time } = weatherData.current_weather;

        const formattedTime = new Date(time).toLocaleString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: 'long'
        });

        this.container.innerHTML = `
            <div class="weather-card">
                <h2>📍 ${cityData.name}</h2>
                <p style="color: #718096; margin-bottom: 5px;">${cityData.admin1 || ''}, ${cityData.country}</p>
                
                <div class="temp-main">${Math.round(temperature)}°C</div>
                <p class="weather-desc">${this.getWeatherText(weathercode)}</p>
                
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Viento</strong><br>
                        🍃 ${windspeed} km/h
                    </div>
                    <div class="info-item">
                        <strong>Humedad</strong><br>
                        💧 Datos abiertos
                    </div>
                </div>
                
                <p style="margin-top:20px; font-size:0.75rem; color:#a0aec0;">
                    Medición: ${formattedTime}
                </p>
            </div>
        `;
    },

    renderError(message) {
        this.container.innerHTML = `
            <div class="error-msg">
                <p>✨ Oops... ${message}</p>
            </div>
        `;
    },

    showLoading() {
        this.container.innerHTML = `
            <div style="text-align:center; padding: 20px;">
                <p class="loading-text">✨ Consultando a las nubes...</p>
            </div>
        `;
    }
};