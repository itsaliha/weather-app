import axios from "axios"

const API_KEY = "YOUR_OWN_API_KEY"

export const getWeatherData = async (city) => {

  try {

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )

    return response.data

  } catch (error) {

    console.log("API ERROR:", error.response?.data || error.message)

    return null
  }

}

export const getForecastData = async (city) => {
  try {

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )

    return response.data

  } catch (error) {

    console.log(error)

    return null

  }
}