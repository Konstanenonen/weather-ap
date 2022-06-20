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

function showFormError() {
  if (countryField.value === "") {
    errorSpan.innerText = "Enter the location";
  } else {
    errorSpan.innerText = "Location must be at least 3 characters long";
  }
}

locationForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!countryField.validity.valid) {
    showFormError();
    return;
  }

  try {
    weatherSection.classList.remove("hidden");
    weatherSection.innerHTML = "<h2 class='location-name'>Loading...</h2>";
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
      "<h2 class='location-name'>Didn't find that location :(</h2>";
    console.log(`Error in the event listener: ${error}`);
  }
});

countryField.addEventListener("input", () => {
  errorSpan.innerText = "";
  countryField.checkValidity();
});

countryField.addEventListener("invalid", () => {
  showFormError();
});
