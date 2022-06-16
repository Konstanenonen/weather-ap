/* eslint-disable import/extensions */
import Weather from "./modules/weather";
import ImageSearch from "./modules/imageSearch";
import {
  locationForm,
  countryField,
  weatherSection,
  weatherImage,
} from "./modules/domElements";
import "./style.css";

locationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    weatherSection.classList.remove("hidden");
    weatherSection.innerText = "Loading...";
    const location: string = countryField.value;

    const weatherData = await Weather.getWeather(location);
    weatherSection.innerHTML = Weather.render(weatherData);

    const imageUrl = await ImageSearch.getPictureUrl(weatherData.weather);
    weatherImage.src = imageUrl;
    weatherImage.classList.remove("hidden");

    countryField.value = "";
  } catch (error) {
    weatherSection.innerText = "Didn't find that location :(";
    console.log(`Error in the event listener: ${error}`);
  }
});
