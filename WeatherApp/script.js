document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const weatherForm = document.getElementById('weather-form');
    const loadingMessage = document.getElementById('loading-message');
    const errorMessage = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    const weatherDisplay = document.getElementById('weather-display');
    const cityNameElement = document.getElementById('city-name');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    const mockWeatherResponses = {
        "Karachi": { "description": "Partly cloudy", "temp": 30.5 },
        "Lahore": { "description": "Hazy sunshine", "temp": 35.0 },
        "Islamabad": { "description": "Clear", "temp": 28.2 },
        "Faisalabad": { "description": "Hot", "temp": 38.7 },
        "Rawalpindi": { "description": "Thunderstorms", "temp": 29.1 },
        "Multan": { "description": "Sunny", "temp": 37.0 },
        "Peshawar": { "description": "Light rain", "temp": 32.5 }
    };

    const fetchWeatherData = async (cityName) => {
        loadingMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        weatherDisplay.classList.add('hidden');

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const normalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
            const data = mockWeatherResponses[normalizedCityName];

            if (data) {
                cityNameElement.textContent = normalizedCityName;
                temperatureElement.textContent = `${data.temp}°C`;
                descriptionElement.textContent = data.description;
                weatherDisplay.classList.remove('hidden');
            } else {
                throw new Error('City not found');
            }

        } catch (err) {
            errorText.textContent = `Error: ${err.message}. Please try one of: Karachi, Lahore, Islamabad, Faisalabad, Rawalpindi, Multan, Peshawar.`;
            errorMessage.classList.remove('hidden');
            console.error("Error fetching weather data:", err);
        } finally {
            loadingMessage.classList.add('hidden');
        }
    };

    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = cityInput.value.trim();
        if (city) {
            fetchWeatherData(city);
        } else {
            errorText.textContent = 'Please enter a city name.';
            errorMessage.classList.remove('hidden');
            weatherDisplay.classList.add('hidden');
        }
    });
});
