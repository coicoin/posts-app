import type { Theme } from "@/shared/types/types";
import { ThemeContext } from "./ThemeContext";
import { useState, type PropsWithChildren } from "react";
import { themeKey, themes } from "@/shared/constants/constants";
import { applyTheme } from "./handleTheme";

function ThemeProvider({ children }: PropsWithChildren) {
  const currentTheme = localStorage.getItem(themeKey) ?? themes.light;

  const [theme, setTheme] = useState<Theme>(applyTheme(currentTheme));

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
