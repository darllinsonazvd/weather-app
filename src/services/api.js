const API_KEY = '83559090acfc4e3e935142404220408';

const fetchData = async (city) => {
  const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  const fetchResponse = await fetch(API_URL);
  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
