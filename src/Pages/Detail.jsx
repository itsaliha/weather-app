import { useContext } from "react"
import { WeatherContext } from "../Context/WeatherContext"

import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiDaySunny,
  WiCloud,
  WiSunrise,
  WiSunset,
} from "react-icons/wi"

function Detail() {

  const { weather } = useContext(WeatherContext)

  if (!weather) {
    return (
      <div className="
        text-white
        text-3xl
        flex
        items-center
        justify-center
        min-h-[70vh]
      ">
        Loading...
      </div>
    )
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
        Weather Details
      </h1>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >

        {/* HUMIDITY */}
        <div className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-6
          hover:scale-105
          hover:bg-white/20
          transition-all
          duration-300
        ">
          <h3 className="text-gray-300 flex items-center gap-2">
            <WiHumidity size={32} />
            Humidity
          </h3>

          <p className="text-white text-4xl mt-4">
            {weather.main.humidity}%
          </p>
        </div>

        {/* WIND */}
        <div className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-6
          hover:scale-105
          hover:bg-white/20
          transition-all
          duration-300
        ">
          <h3 className="text-gray-300 flex items-center gap-2">
            <WiStrongWind size={32} />
            Wind Speed
          </h3>

          <p className="text-white text-4xl mt-4">
            {weather.wind.speed} km/h
          </p>
        </div>

        {/* PRESSURE */}
        <div className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-6
          hover:scale-105
          hover:bg-white/20
          transition-all
          duration-300
        ">
          <h3 className="text-gray-300 flex items-center gap-2">
            <WiBarometer size={32} />
            Pressure
          </h3>

          <p className="text-white text-4xl mt-4">
            {weather.main.pressure} hPa
          </p>
        </div>

        {/* VISIBILITY */}
        <div className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-6
          hover:scale-105
          hover:bg-white/20
          transition-all
          duration-300
        ">
          <h3 className="text-gray-300">
            👁 Visibility
          </h3>

          <p className="text-white text-4xl mt-4">
            {weather.visibility / 1000} km
          </p>
        </div>

        {/* FEELS LIKE */}
        <div className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-6
          hover:scale-105
          hover:bg-white/20
          transition-all
          duration-300
        ">
          <h3 className="text-gray-300 flex items-center gap-2">
            <WiDaySunny size={32} />
            Feels Like
          </h3>

          <p className="text-white text-4xl mt-4">
            {Math.round(weather.main.feels_like)}°
          </p>
        </div>

        {/* CLOUDS */}
        <div className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-6
          hover:scale-105
          hover:bg-white/20
          transition-all
          duration-300
        ">
          <h3 className="text-gray-300 flex items-center gap-2">
            <WiCloud size={32} />
            Cloud Coverage
          </h3>

          <p className="text-white text-4xl mt-4">
            {weather.clouds.all}%
          </p>
        </div>

        {/* SUNRISE */}
        <div className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-6
          hover:scale-105
          hover:bg-white/20
          transition-all
          duration-300
        ">
          <h3 className="text-gray-300 flex items-center gap-2">
            <WiSunrise size={32} />
            Sunrise
          </h3>

          <p className="text-white text-3xl mt-4">
            {new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        {/* SUNSET */}
        <div className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-6
          hover:scale-105
          hover:bg-white/20
          transition-all
          duration-300
        ">
          <h3 className="text-gray-300 flex items-center gap-2">
            <WiSunset size={32} />
            Sunset
          </h3>

          <p className="text-white text-3xl mt-4">
            {new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

      </div>

    </div>

  )
}

export default Detail