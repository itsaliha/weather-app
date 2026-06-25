import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="
      flex
      items-center
      justify-between
      mb-8
    ">

      {/* LOGO */}
      <h1 className="
        text-white
        text-5xl
        font-bold
        font-sans-serif
      ">
        Weatherly
      </h1>

      {/* NAVIGATION LINKS */}
      <div className="flex gap-4">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `
            px-5
            py-2
            rounded-2xl
            transition-all
            duration-300
            ${
              isActive
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }
            `
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/forecast"
          className={({ isActive }) =>
            `
            px-5
            py-2
            rounded-2xl
            transition-all
            duration-300
            ${
              isActive
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }
            `
          }
        >
          Forecast
        </NavLink>

        <NavLink
          to="/detail"
          className={({ isActive }) =>
            `
            px-5
            py-2
            rounded-2xl
            transition-all
            duration-300
            ${
              isActive
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }
            `
          }
        >
          Details
        </NavLink>

      </div>

    </nav>
  )
}

export default Navbar