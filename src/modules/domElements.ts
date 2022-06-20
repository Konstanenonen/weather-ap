const locationForm = document.querySelector(
  ".location-form"
) as HTMLFormElement;

const countryField = document.querySelector(
  "#country-field"
) as HTMLInputElement;

const weatherSection = document.querySelector(
  ".weather-information"
) as HTMLDivElement;

const weatherImage = document.querySelector(".weather-img") as HTMLImageElement;

const unitRadioButtons = Array.from(
  document.querySelectorAll("input[type='radio']")
) as HTMLInputElement[];

const errorSpan = document.querySelector(".error-message") as HTMLSpanElement;

export {
  locationForm,
  countryField,
  weatherSection,
  weatherImage,
  unitRadioButtons,
  errorSpan,
};
