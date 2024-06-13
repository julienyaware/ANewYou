import axios from "axios";
import { OW_Key } from "./OpenWeatherKey";

const OWServer = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
})

OWServer.interceptors.request.use(
    async (config) => {
        config.headers.Accept = 'application/json'

        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)



export const getWeather = async (lat, long) => {
    try {
      const response = await OWServer.get(
         `?lat=${lat}&lon=${long}&units=imperial&appid=${OW_Key}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error fetching weather data: ' + error.message);
    }
  };
export default OWServer;