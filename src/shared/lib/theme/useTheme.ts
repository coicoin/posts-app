import { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import { themes } from "@/shared/constants/constants";

function useTheme() {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.body.dataset.theme =
      theme.theme === themes.dark ? themes.dark : themes.light;
  }, [theme.theme]);
  return theme;
}

export default useTheme;
