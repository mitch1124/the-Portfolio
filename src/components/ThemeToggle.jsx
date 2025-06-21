import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../library/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-1 right-5 z-50 p-2 rouded-full transition-colors duration-300",
    "focus:outline-hidden"
    )}>

      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-orange"/> 
        ) : (
        <MoonIcon className="h-6 w-6 text-primary"/>)}
    </button>
  );
};