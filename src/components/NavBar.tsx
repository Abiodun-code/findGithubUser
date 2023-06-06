import React, { useContext } from "react"
import white from "../assets/white.png"
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"
import { ThemeContext } from "../hooks/useTheme"
import { Link } from "react-router-dom"

const NavBar = ()=>{
  const {theme, setTheme} = useContext(ThemeContext)

  return(
    <div className="w-full h-auto">
      <div className="lg:w-[90%] md:w-[90%] w-full lg:px-0 md:px-0 px-4 mx-auto border-b border-b-slate-500">
        <div className="flex justify-between">
          <Link to={"/"}><img src={white} alt="" className="w-14 h-14" /></Link>
          <h1 className="flex items-center justify-center text-black dark:text-white lg:text-4xl md:text-3xl text-xl font-bold">Github User</h1>
          <button className="bg-blue-500 text-white rounded-full mt-2 w-9 h-9 flex items-center justify-center">
            {theme === "light" ? <BsFillSunFill onClick={() => setTheme("dark")} /> : <BsMoonFill onClick={() => setTheme("light")} />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;