var temperature = document.getElementById('temperature');
var cityName = document.getElementById('city-name');
var humidity = document.getElementById('humidity');
var windSpeed = document.getElementById('wind-speed');
var searchInput = document.getElementById('search-input');
var searchIcon = document.getElementById('search-icon');
var weatherIcon = document.getElementById('weather-icon');
var weatherInfo = document.getElementById('weather-info');
var details = document.getElementById('details');
async function fetchWeather(city) {
    const apiKey = 'f27b269d54e4fa1e72993364a80fa8bd';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    if (response.ok) {
        temperature.innerHTML = Math.floor(data.main.temp) + '°C';
        cityName.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + '%';
        windSpeed.innerHTML = data.wind.speed + ' km/h';

        const weatherCondition = data.weather[0].main;
        updateWeatherIcon(weatherCondition);

        weatherInfo.style.display = 'flex';
        details.style.display = 'flex';
    } else {
        alert('City not found. Please enter a valid city name.');
    }
}
searchIcon.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});
