import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useContext } from "react"
import { WeatherContext } from "../Context/WeatherContext"

import ForcastCard from "../Components/ForcastCard"

import {
  getWeatherData,
  getForecastData,
} from "../Services/weatherApi"
import { FiSearch } from "react-icons/fi"

function Home() {

  const { weather, setWeather, city, setCity } =
  useContext(WeatherContext)

  const [input, setInput] = useState("Lahore")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [forecast, setForecast] = useState([])

  

  useEffect(() => {

   const fetchWeather = async () => {

  setLoading(true)

  const data = await getWeatherData(city)
  const forecastResponse = await getForecastData(city)
  if (forecastResponse) 
    {
  setForecast(forecastResponse.list.slice(0, 6))
    }

  if (data && data.main) {

  setWeather(data)
  setError("")

} else 
  {
        setError("City not found")
}

  setLoading(false)

}

    fetchWeather()

  }, [city])

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

  let weatherIcon = "🌤️"

if (weather.weather[0].main === "Clear") {
  weatherIcon = "☀️"
}
else if (weather.weather[0].main === "Clouds") {
  weatherIcon = "☁️"
}
else if (weather.weather[0].main === "Rain") {
  weatherIcon = "🌧️"
}
else if (weather.weather[0].main === "Thunderstorm") {
  weatherIcon = "⛈️"
}
else if (weather.weather[0].main === "Snow") {
  weatherIcon = "❄️"
}
else if (weather.weather[0].main === "Mist") {
  weatherIcon = "🌫️"
}

let backgroundClass = "from-blue-500 via-cyan-500 to-indigo-700"

if (weather.weather[0].main === "Clear") {
  backgroundClass = "from-orange-400 via-yellow-300 to-sky-400"
}
else if (weather.weather[0].main === "Clouds") {
  backgroundClass = "from-gray-700 via-gray-500 to-gray-300"
}
else if (weather.weather[0].main === "Rain") {
  backgroundClass = "from-slate-900 via-blue-900 to-slate-700"
}
else if (weather.weather[0].main === "Thunderstorm") {
  backgroundClass = "from-black via-purple-900 to-slate-900"
}
else if (weather.weather[0].main === "Snow") {
  backgroundClass = "from-sky-100 via-blue-200 to-sky-400"
}

console.log(forecast)
  return (

    <div
  className={`
    min-h-screen
    p-6
    md:p-10
    space-y-8
    bg-gradient-to-br
    ${backgroundClass}
    transition-all
    duration-1000
  `}
>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          items-center
          min-h-[75vh]
        "
      >

        {/* LEFT CONTENT */}
        <div>

          {/* LABEL */}
          <p className="
            text-purple-200
            uppercase
            tracking-[4px]
            mb-4
          ">
            Current Weather
          </p>

          {/* SEARCH BAR */}
          <div className="
            flex
            gap-3
            mb-8
            flex-col
            sm:flex-row
          ">

           <input type="text"
           placeholder="Search city..."
           value={input}
           onChange={(e) => setInput(e.target.value)}
           onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCity(input)
            }
          }}
  className="
  w-full
  bg-white/10
  backdrop-blur-xl
  border
  border-white/20
  rounded-2xl
  px-5
  py-4
  text-white
  placeholder:text-gray-300
  outline-none
  focus:border-white/50
  transition-all
"
/>
{error && (
  <p className="
    text-red-400
    mt-2
    text-sm
  ">
    ❌ {error}
  </p>
)}

            <button
             onClick={() => {
              if (input.trim() !== "") {
                setCity(input)
              }
            }}
              className="
  bg-white
  text-black
  px-6
  py-4
  rounded-2xl
  font-semibold
  hover:scale-105
  active:scale-95
  transition-all
  duration-300
  shadow-xl
"
            >
             <div className="flex items-center gap-2">
  <FiSearch />
  Search
</div>
            </button>

          </div>

          {/* TEMPERATURE */}
          <h1
  className="
    text-white
    text-8xl
    md:text-9xl
    font-thin
    tracking-tight
  "
>
  {Math.round(weather.main.temp)}°
</h1>

          {/* CONDITION */}
          <h2 className="
            text-white
            text-3xl
            md:text-5xl
            font-semibold
            mt-4
          ">
            {weather.weather[0].main}
          </h2>

          {/* LOCATION */}
          <p className="
            text-grey-300
            text-xl
            mt-6
          ">
            {weather.name}
          </p>

          {/* DESCRIPTION */}
          <p className="
            text-gray-400
            mt-6
            max-w-md
            leading-relaxed
          ">
            Today's weather feels calm and pleasant with
            soft winds and atmospheric conditions across the city.
          </p>

        </div>

        {/* RIGHT WEATHER CARD */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            rounded-[32px]
            bg-white/10
            border border-white/20
            backdrop-blur-xl
            p-8
            flex
            items-center
            justify-center
            min-h-[450px]
            hover:scale-[1.02]
            transition-all
            duration-500
          "
        >

          <div className="text-center">

            {/* WEATHER ICON */}
            <motion.div
            animate={{y: [0, -10, 0],}}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-[140px]">
              {weatherIcon}
              </motion.div>

            {/* FEELS LIKE */}
            <p className="
              text-white
              text-2xl
              mt-4
            ">
              Feels like {Math.round(weather.main.feels_like)}°
            </p>

            {/* EXTRA DETAILS */}
            <div className="
              mt-8
              space-y-3
              text-gray-300
            ">

              <p>
                Humidity: {weather.main.humidity}%
              </p>

              <p>
                Wind: {weather.wind.speed} km/h
              </p>

              <p>Pressure: {weather.main.pressure} hPa</p>
              <p>Visibility: {weather.visibility / 1000} km</p>

            </div>

          </div>

        </motion.div>

      </motion.div>

      {/* FORECAST SECTION */}
      <div>

        {/* TITLE */}
        <h3 className="
          text-white
          text-2xl
          font-semibold
          mb-6
        ">
          Hourly Forecast
        </h3>

        {/* FORECAST GRID */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-4
        ">

          {forecast.map((item, index) => (

           <ForcastCard
           key={index}
           time={new Date(item.dt_txt).toLocaleTimeString([], {
            hour: "numeric",
          })}
          icon={item.weather[0].main}
          temp={`${Math.round(item.main.temp)}°`}
          />

          ))}

        </div>

      </div>

    </div>

  )
}

export default Home