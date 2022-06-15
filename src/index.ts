/* eslint-disable import/extensions */
import "./style.css";
import weather from "./modules/weather";

let weatherData;
weather
  .getWeather("Timbuktu")
  .then((result) => {
    weatherData = result;
    console.log(weatherData);
  })
  .catch((error) => {
    console.log(error);
  });
