import { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import { applyTheme } from "./handleTheme";

function useTheme() {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.body.dataset.theme = applyTheme(theme.theme);
  }, [theme.theme]);
  return theme;
}

export default useTheme;
