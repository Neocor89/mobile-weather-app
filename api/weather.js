export function endPointURL() {
  `http://dataservice.accuweather.com/`;
}

const locationEndPointURL = (params) =>
  `http://dataservice.accuweather.com/${params}/v1/`;

const searchEndPointURL = (params) =>
  `http://dataservice.accuweather.com/${params}/v1/`;

const searchURL = (params, paramsCities, apiKey) =>
  `https://dataservice.accuweather.com/${params}/v1/${paramsCities}/search?apikey=${apiKey}`;
