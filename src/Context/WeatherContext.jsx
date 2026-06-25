import { createContext, useState } from "react"

export const WeatherContext = createContext()

export function WeatherProvider({ children }) {

  const [weather, setWeather] = useState(null)

  const [city, setCity] = useState("Lahore")

  return (

    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        city,
        setCity,
      }}
    >
      {children}
    </WeatherContext.Provider>

  )
}