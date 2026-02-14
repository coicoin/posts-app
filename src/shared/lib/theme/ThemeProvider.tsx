import type { Theme } from "@/shared/types/types";
import ThemeContext from "./ThemeContext";
import { useState, type ReactNode } from "react";
import { themeKey, themes } from "@/shared/constants/constants";
import { applyTheme } from "./handleTheme";

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const currentTheme = localStorage.getItem(themeKey) ?? themes.light;

  const [theme, setTheme] = useState<Theme>(
    applyTheme(currentTheme)
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
