const weatherLocation = document.querySelector('.weather__location');
const weatherTemperature = document.querySelector('.weather__temperature');
const weatherDescription = document.querySelector('.weather__description');
const weatherDetailsBtn = document.querySelector('.weather__details-btn');
const weatherDetails = document.querySelector('.weather__details');

function fetchWeatherData(city) {
  const apiKey = 'ffeddea4bf4039b56dc5181920e48db2';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const convertKelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const location = data.name;
      const temperature = convertKelvinToCelsius(data.main.temp);
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon; 
      const minTemperature = convertKelvinToCelsius(data.main.temp_min);
      const maxTemperature = convertKelvinToCelsius(data.main.temp_max);
      const pressure = data.main.pressure;
      const humidity = data.main.humidity;

      weatherLocation.textContent = `Location: ${location}`;
      weatherTemperature.textContent = `Temperature: ${temperature}°C`;
      weatherDescription.textContent = `Description: ${description}`;
      weatherDetails.textContent = '';

      const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
      const weatherIconImg = document.querySelector('.weather__icon-img');
      weatherIconImg.src = iconUrl;

      weatherDetails.textContent = `Min Temperature: ${minTemperature}°C\nMax Temperature: ${maxTemperature}°C\nPressure: ${pressure} hPa\nHumidity: ${humidity}%`;
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
      weatherLocation.textContent = 'Error fetching weather data';
      weatherTemperature.textContent = '';
      weatherDescription.textContent = '';
      weatherDetails.textContent = '';
    });
}

fetchWeatherData('Yosemite Valley');
