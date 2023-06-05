import {createContext, useEffect, useState} from "react"
import { childProps, themeProps } from "./types";

export const ThemeContext = createContext({} as themeProps);

const ThemeProvider = ({children}:childProps) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") !== "dark" ? "light" : "dark")

  useEffect(()=>{
    const remove = theme === "dark" ? "light" : "dark"
    const root = window.document.documentElement
    root.classList.add(theme)
    root.classList.remove(remove)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;