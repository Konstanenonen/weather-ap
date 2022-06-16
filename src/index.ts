/* eslint-disable import/extensions */
import Weather from "./modules/weather";
import {
  locationForm,
  countryField,
  weatherSection,
} from "./modules/domElements";
import "./style.css";

locationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  weatherSection.innerText = "Loading...";
  const location: string = countryField.value;
  const weatherData = await Weather.getWeather(location);
  weatherSection.innerHTML = Weather.render(weatherData);
});
