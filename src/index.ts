/* eslint-disable import/extensions */
import Weather from "./modules/weather";
import ImageSearch from "./modules/imageSearch";
import {
  locationForm,
  countryField,
  weatherSection,
  weatherImage,
  unitRadioButtons,
  errorSpan,
} from "./modules/domElements";
import "./style.css";

locationForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!countryField.validity.valid) {
    if (countryField.value === "") {
      errorSpan.innerText = "Enter the location";
    } else {
      errorSpan.innerText = "Location must be at least 3 characters long";
    }
    return;
  }

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
    weatherSection.innerHTML =
      "<p class='weather-item'>Didn't find that location :(</p>";
    console.log(`Error in the event listener: ${error}`);
  }
});

countryField.addEventListener("input", () => {
  errorSpan.innerText = "";
  countryField.checkValidity();
});

countryField.addEventListener("invalid", () => {
  if (countryField.value === "") {
    errorSpan.innerText = "Enter the location";
  } else {
    errorSpan.innerText = "Location must be at least 3 characters long";
  }
});
