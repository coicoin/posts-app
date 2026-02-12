import { themes } from "@/shared/constants/constants";
import type { Theme } from "@/shared/types/types";

function toggleTheme(theme: Theme) {
  if (theme === themes.light) {
    return themes.dark;
  }

  return themes.light;
}

function applyTheme(theme: string) {
  if (theme === themes.dark) {
    return themes.dark;
  }

  return themes.light;
}

export { toggleTheme, applyTheme };
