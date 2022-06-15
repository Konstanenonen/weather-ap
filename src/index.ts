/* eslint-disable import/extensions */
import "./style.css";
import Weather from "./modules/weather";

document
  .querySelector(".location-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const countryField = document.querySelector(
      "#country-field"
    ) as HTMLInputElement;
    const location: string = countryField.value;
    const weatherData = await Weather.getWeather(location);
    console.log(weatherData);
  });
