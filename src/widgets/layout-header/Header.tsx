import ThemeSwitcher from "@/features/theme-switcher/ui/ThemeSwitcher";
import styles from "./Header.module.css";
import Modal from "@/shared/ui/modal/Modal";
import About from "@/widgets/about/About";
import Button from "@/shared/ui/button/Button";
import { useState } from "react";
import { lexicon } from "@/shared/lexicon/lexicon";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{lexicon.titles.appName}</h2>
      <Button className={styles.aboutButton} onClick={() => setShowModal(true)}>
        {lexicon.buttons.about}
      </Button>
      <Modal isOpen={showModal}>
        <About onClose={() => setShowModal(false)} />
      </Modal>
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
