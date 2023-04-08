const API = `http://api.weatherapi.com/v1/current.json?key=4bc4d337dda043ceb7b152100230801`;

export async function seachWeater(city) {
  try {
    let API_LINK = `${API}&q=${city}&aqi=no`;
    const response = await fetch(API_LINK);
    const data = await response.json();

    const { name: cityName, region, country } = data.location;
    const {
      temp_c: tempC,
      temp_f: tempF,
      humidity,
      last_updated: lastUpdated,
    } = data.current;

    return {
      cityName,
      region,
      country,
      tempC,
      tempF,
      humidity,
      lastUpdated,
    };
  } catch (error) {}
}
