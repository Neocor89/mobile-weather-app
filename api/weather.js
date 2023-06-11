import axios from "axios";

//+ RESTART HERE
// TODO
//: CREATE ENV FILE AND FIND PROCESS FOR APIKEY

const apiKey = "";

const forecastEndpoint = (params) =>
  //: NEW API
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;

// AFTER http://dataservice.accuweather.com/locations/v1/${params.cities}/autocomplete
// BEFORE `http://dataservice.accuweather.com/forecasts/v1/daily/${params.days}day/${params.cities}`

const locationsEndpoint = (params) =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${params.cities}`;

// http://dataservice.accuweather.com/locations/v1/${params.cities}/search

// NEW /locations/v1/${params.cities}/search?apikey=${apiKey}&q=${params.cities}
// BEFORE http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${params.cities}

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return {};
  }
};

export const fetchWeatherForecast = (params) => {
  return apiCall(forecastEndpoint(params));
};
export const fetchLocations = (params) => {
  return apiCall(locationsEndpoint(params));
};

// http://dataservice.accuweather.com/locations/v1/${params.cities}/search?apikey=${apiKey}=${params.cities}&language=us-US&details=true&offset=1

// http://dataservice.accuweather.com/locations/v1/${params.countries}/US

// http://dataservice.accuweather.com/locations/v1/${params.cities}/autocomplete

// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${params.cities}&details=true&offset=5

// http://dataservice.accuweather.com/forecasts/v1/daily/5day/{params}
// OR
// http://dataservice.accuweather.com/forecasts/v1/daily/5day/{params.cities}
