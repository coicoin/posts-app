import { messages } from "@/shared/messages/messages";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyRight}>&copy; {messages.titles.copyRight}</p>
    </footer>
  );
}

export default Footer;
