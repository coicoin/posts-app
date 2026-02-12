import ThemeSwitcher from "@/features/theme-switcher/ui/ThemeSwitcher";
import styles from "./Header.module.css";
import Modal from "@/shared/ui/modal/Modal";
import About from "@/widgets/about/About";
import Button from "@/shared/ui/button/Button";
import { useState } from "react";
import { messages } from "@/shared/messages/messages";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{messages.titles.appName}</h2>
      <Button className={styles.aboutButton} onClick={() => setShowModal(true)}>
        {messages.buttons.about}
      </Button>
      <Modal isOpen={showModal}>
        <About onClose={() => setShowModal(false)} />
      </Modal>
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
