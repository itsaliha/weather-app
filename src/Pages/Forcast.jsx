import { useState, useEffect, useContext } from "react"
import { WeatherContext } from "../Context/WeatherContext"
import { getForecastData } from "../Services/weatherApi"

import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiDayCloudy,
} from "react-icons/wi"

function Forcast() {

  const { city } = useContext(WeatherContext)

  const [forecast, setForecast] = useState([])

  useEffect(() => {

    const fetchForecast = async () => {

      const data = await getForecastData(city)

      if (data && data.list) {
        setForecast(data.list.slice(0, 8))
      }

    }

    fetchForecast()

  }, [city])

  const weatherIcons = {
    Clear: <WiDaySunny />,
    Clouds: <WiCloudy />,
    Rain: <WiRain />,
    Drizzle: <WiRain />,
    Thunderstorm: <WiRain />,
    Snow: <WiCloudy />,
    Mist: <WiCloudy />,
    Fog: <WiCloudy />,
    Haze: <WiDayCloudy />,
  }

  return (

    <div>

      <h1
        className="
          text-white
          text-4xl
          font-bold
          mb-8
        "
      >
        Forecast
      </h1>

      <p
        className="
          text-gray-300
          text-3xl
          mb-8
        "
      >
        Weather forecast for {city}
      </p>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >

        {forecast.map((item, index) => (

          <div
            key={index}
            className="
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              rounded-3xl
              p-6
              text-center
              hover:scale-105
              hover:bg-white/20
              transition-all
              duration-300
            "
          >

            <p className="text-gray-300">
              {new Date(item.dt_txt).toLocaleDateString()}
            </p>

            <p className="text-gray-400 mt-2">
              {new Date(item.dt_txt).toLocaleTimeString([], {
                hour: "numeric",
              })}
            </p>

            <div
              className="
                text-6xl
                text-white
                flex
                justify-center
                my-4
              "
            >
              {weatherIcons[item.weather[0].main]}
            </div>

            <h3
              className="
                text-white
                text-3xl
                font-bold
              "
            >
              {Math.round(item.main.temp)}°
            </h3>

            <p
              className="
                text-gray-300
                mt-2
              "
            >
              {item.weather[0].main}
            </p>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Forcast