import styles from "./ThemeSwitcher.module.css";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import useTheme from "@/shared/lib/theme/useTheme";
import Button from "@/shared/ui/button/Button";
import { themeKey, themes } from "@/shared/constants/constants";
import { lexicon } from "@/shared/lexicon/lexicon";
import { toggleTheme } from "@/shared/lib/theme/handleTheme";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      className={styles.themeButton}
      onClick={() => {
        const toggledTheme = toggleTheme(theme);
        setTheme(toggledTheme);
        localStorage.setItem(themeKey, toggledTheme);
      }}
      aria-label={lexicon.buttons.toggleTheme}
    >
      {
        theme === themes.dark 
          ? (<MoonIcon className={styles.ico} />) 
          : (<SunIcon className={styles.ico} />)
      }
    </Button>
  );
}

export default ThemeSwitcher;
