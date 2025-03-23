
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme") || 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
    setTheme(savedTheme);
    
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-foreground" />
      ) : (
        <Sun className="w-5 h-5 text-foreground" />
      )}
    </button>
  );
};

export default ThemeToggle;
