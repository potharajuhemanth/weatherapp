 async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = '4fc89ad53990c0cb9d30661d04b1ae93';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=&units=metrics';   
     const weatherDiv = document.getElementById('weather');

    if (!city) {
        document.body.style.backgroundImage = '';
        weatherDiv.innerHTML = https://api.openweathermap.org/data/2.5/weather?nellore={lat}&lon={lon}&appid=
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            let backgroundImage = '';
            const weatherMain = data.weather[0].main.toLowerCase();

            if (weatherMain.includes('clear')) {
                backgroundImage = "url('images/sunny.png.jpg')";
            } else if (weatherMain.includes('cloud')) {
                backgroundImage = "url('images/cloudy.png.jpg')";
            } else if (weatherMain.includes('rain')) {
                backgroundImage = "url('images/rainy.png.jpg')";
            } else {
                backgroundImage = "url('images/cloudy.png.jpg')";
            }

            document.body.style.backgroundImage = backgroundImage;

            weatherDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>☁ Condition: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind: ${data.wind.speed} m/s</p>
            `;
        } else {
            document.body.style.backgroundImage = '';
            weatherDiv.innerHTML = <p>⚠ ${data.message}</p>;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        document.body.style.backgroundImage = '';
        weatherDiv.innerHTML = <p>❌ Error loading weather data. Try again later.</p>;
    }
}
