import { lexicon } from "@/shared/lexicon/lexicon";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyRight}>&copy; {lexicon.titles.copyRight}</p>
    </footer>
  );
}

export default Footer;
