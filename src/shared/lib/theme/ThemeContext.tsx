import { themes } from "@/shared/constants/constants";
import type { Theme } from "@/shared/types/types";
import React from "react";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  theme: themes.light,
  setTheme: () => {},
});

export { ThemeContext };
