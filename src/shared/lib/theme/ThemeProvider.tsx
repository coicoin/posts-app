import type { Theme } from "@/shared/types/types";
import ThemeContext from "./ThemeContext";
import { useState, type ReactNode } from "react";
import { themeKey, themes } from "@/shared/constants/constants";

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const value = localStorage.getItem(themeKey) ?? themes.light;

  const [theme, setTheme] = useState<Theme>(
    value === themes.dark ? themes.dark : themes.light,
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
