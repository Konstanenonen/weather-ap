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
    const weatherSection = document.querySelector(
      ".weather-information"
    ) as HTMLDivElement;

    weatherSection.innerText = "Loading...";
    const location: string = countryField.value;
    const weatherData = await Weather.getWeather(location);
    weatherSection.innerHTML = weatherData;
  });
