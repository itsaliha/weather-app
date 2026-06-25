import {motion} from "framer-motion"

import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiDayCloudy,
  WiNightClear,
} from "react-icons/wi"


function ForecastCard({ time, icon, temp }) {

     const weatherIcons = {
  Clear: <WiDaySunny />,
  Clouds: <WiCloudy />,
  Rain: <WiRain />,
  Drizzle: <WiRain />,
  Thunderstorm: <WiRain />,
  Snow: <WiCloudy />,
  Mist: <WiCloudy />,
  Fog: <WiCloudy />,
  Haze: <WiCloudy />,
}
  return (

    <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
      className="
        bg-white/10
        border border-white/10
        rounded-3xl
        p-4
        text-center
        backdrop-blur-lg
        hover:translate-y-[-5px]
        hover:bg-white/20
        transition-all
        duration-300
      "
    >

      {/* TIME */}
      <p className="text-gray-300 mb-3">
        {time}
      </p>

      {/* ICON */}
      <div className="text-4xl mb-2">
  {weatherIcons[icon] || <WiDayCloudy />}
  </div>
  <p className="text-gray-300 text-sm">
  {icon}
  </p>

      {/* TEMP */}
      <p className="text-white text-xl">
        {temp}
      </p>

    </motion.div>

    

  )
}

export default ForecastCard