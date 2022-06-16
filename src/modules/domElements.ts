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

export { locationForm, countryField, weatherSection, weatherImage };
