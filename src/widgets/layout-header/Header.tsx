import ThemeSwitcher from "@/features/theme-switcher/ui/ThemeSwitcher";
import styles from "./Header.module.css";
import About from "@/widgets/about/About";
import Button from "@/shared/ui/button/Button";
import { lexicon } from "@/shared/lexicon/lexicon";
import { useState } from "react";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{lexicon.titles.appName}</h2>
      <Button className={styles.aboutButton} onClick={() => setShowModal(true)}>
        {lexicon.buttons.about}
      </Button>
      <About isOpen={showModal} onClose={() => setShowModal(false)} />
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
