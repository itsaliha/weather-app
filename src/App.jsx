import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Forcast from "./Pages/Forcast"
import Detail from "./Pages/Detail"
import Navbar from "./Components/Navbar"


function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#581c87] p-6">
      <div className=" max-w-7xl mx-auto min-h-[90vh] rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6 ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forecast" element={<Forcast/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
      </div>
    </div>
    
    </BrowserRouter>
  )
}

export default App