import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeChange({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleChange() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleChange }}>
      {children}
    </ThemeContext.Provider>
  );
}