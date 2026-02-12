import styles from "./ThemeSwitcher.module.css";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import useTheme from "@/shared/lib/theme/useTheme";
import Button from "@/shared/ui/button/Button";
import { themeKey, themes } from "@/shared/constants/constants";
import { messages } from "@/shared/messages/messages";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      className={styles.themeButton}
      onClick={() => {
        const toggledTheme = theme === themes.light ? themes.dark : themes.light;
        setTheme(toggledTheme);
        localStorage.setItem(themeKey, toggledTheme);
      }}
      aria-label={messages.buttons.toggleTheme}
    >
      {theme === themes.dark ? (
        <MoonIcon className={styles.ico} />
      ) : (
        <SunIcon className={styles.ico} />
      )}
    </Button>
  );
}

export default ThemeSwitcher;
