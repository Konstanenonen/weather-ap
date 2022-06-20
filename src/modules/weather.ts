const Weather = (() => {
  const filterResult = (data: {
    clouds: { all: number };
    main: {
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
    };
    name: string;
    weather: { description: string; main: string }[];
    wind: { speed: string; deg: string };
  }) => {
    const { clouds, main, name, weather, wind } = data;
    return {
      clouds: clouds.all,
      temp: main.temp,
      feelsLike: main.feels_like,
      pressure: main.pressure,
      humidity: main.humidity,
      name,
      weather: weather[0].description,
      main: weather[0].main,
      windSpeed: wind.speed,
      windDeg: wind.deg,
    };
  };

  const render = (data: {
    clouds: number;
    temp: number;
    feelsLike: number;
    pressure: number;
    humidity: number;
    name: string;
    weather: string;
    main: string;
    windSpeed: string;
    windDeg: string;
  }) =>
    `<h2 class="location-name">${data.name}</h2>
    <h3 class="weather-description">${data.weather}</h3>
    <p class="weather-item">Temperature: ${data.temp}</p>
    <p class="weather-item">Feels like: ${data.feelsLike}</p>
    <p class="weather-item">Pressure: ${data.pressure}</p>
    <p class="weather-item">Humidity: ${data.humidity}</p>
    <p class="weather-item">Wind speed: ${data.windSpeed}</p>
    <p class="weather-item">Wind direction: ${data.windDeg}</p>`;

  const getWeatherCelsius = async (location: string) => {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99db9462bd58a911d124e10b8af800a9&units=metric`
    );
    const data = await result.json();
    return filterResult(data);
  };

  const getWeatherFarenheit = async (location: string) => {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99db9462bd58a911d124e10b8af800a9`
    );
    const data = await result.json();
    return filterResult(data);
  };

  return { getWeatherCelsius, render, getWeatherFarenheit };
})();

export default Weather;
