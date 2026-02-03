import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Posts App</h2>
    </header>
  );
}

export default Header;
