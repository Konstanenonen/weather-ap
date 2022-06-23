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

  const render = (
    data: {
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
    },
    unit: "°F" | "°C"
  ) =>
    `<h2 class="location-name">${data.name}</h2>
    <h3 class="weather-description">${data.weather}</h3>
    <div class="flex-pair">
      <div class="pair-item">
        <div class="temperature-container">
        <p class="weather-temperature">${data.temp}</p>
        <p class="weather-unit">${unit}</p>
        </div>
      </div>
      <div class="pair-item">
        <p>Feels like: ${data.feelsLike} ${unit}</p>
        <p>Pressure: ${data.pressure}</p>
        <p>Humidity: ${data.humidity} %</p>
      </div>
    </div>`;

  const getWeatherCelsius = async (location: string) => {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99db9462bd58a911d124e10b8af800a9&units=metric`
    );
    const data = await result.json();
    return filterResult(data);
  };

  const getWeatherFarenheit = async (location: string) => {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99db9462bd58a911d124e10b8af800a9&units=imperial`
    );
    const data = await result.json();
    return filterResult(data);
  };

  return { getWeatherCelsius, render, getWeatherFarenheit };
})();

export default Weather;
