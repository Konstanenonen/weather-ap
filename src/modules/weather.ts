/* eslint-disable consistent-return */
const Weather = (() => {
  const filterResult = (data: {
    clouds: { all: number };
    main: object;
    name: string;
    weather: object[];
    wind: object;
  }) => {
    const { clouds, main, name, weather, wind } = data;
    return {
      clouds: clouds.all,
      main,
      name,
      weather: weather[0],
      wind,
    };
  };

  const getWeather = async (location: string) => {
    try {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99db9462bd58a911d124e10b8af800a9&units=metric`
      );
      const data = await result.json();
      return filterResult(data);
    } catch (error) {
      console.log(`Error in fetch chain ${error}`);
    }
  };

  return { getWeather };
})();

export default Weather;
