/* eslint-disable import/extensions */
import Weather from "./modules/weather";
import ImageSearch from "./modules/imageSearch";
import {
  locationForm,
  countryField,
  weatherSection,
  weatherImage,
  unitRadioButtons,
} from "./modules/domElements";
import "./style.css";

locationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    weatherSection.classList.remove("hidden");
    weatherSection.innerText = "Loading...";
    const location: string = countryField.value;

    const selectedUnit = unitRadioButtons.find((input) => input.checked).value;

    const weatherData =
      selectedUnit === "celsius"
        ? await Weather.getWeatherCelsius(location)
        : await Weather.getWeatherFarenheit(location);
    weatherSection.innerHTML = Weather.render(weatherData);

    const imageUrl: string = await ImageSearch.getPictureUrl(weatherData.main);
    weatherImage.src = imageUrl;
    weatherImage.classList.remove("hidden");

    countryField.value = "";
  } catch (error) {
    weatherSection.innerText = "Didn't find that location :(";
    console.log(`Error in the event listener: ${error}`);
  }
});
