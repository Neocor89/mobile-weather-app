import axios from "axios";
import { apiKey } from "../constants";

//+ RESTART HERE

const forecastEndpoint = (params) =>
  `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${params.cities}`;
const locationsEndpoint = (params) =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${params.cities}&details=true&offset=5`;
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

// http://dataservice.accuweather.com/locations/v1/${params.cities}/search?apikey=${apiKey}=${params.cities}&language=us-US&details=true&offset=1

// http://dataservice.accuweather.com/locations/v1/${params.countries}/US

// http://dataservice.accuweather.com/locations/v1/${params.cities}/autocomplete

// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${params.cities}&details=true&offset=5

// http://dataservice.accuweather.com/forecasts/v1/daily/5day/{params}
// OR
// http://dataservice.accuweather.com/forecasts/v1/daily/5day/{params.cities}
