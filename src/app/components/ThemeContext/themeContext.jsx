"use client"
import { createContext } from "react";
export const ThemeContext =createContext();

const getFormLocalStorage=()=>{
    const value=localStorage.getItem('theme')
    return value || "light";
}
export const ThemeContextProvieder=({children})=>{
    const [theme, setTheme]=useState("light")
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}