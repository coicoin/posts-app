import { Link } from "react-router";
import styles from "./Main.module.css";
import { lexicon } from "@/shared/lexicon/lexicon";

function Main() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{lexicon.titles.welcome}</h1>
        <p className={styles.text}>{lexicon.titles.mainDescription}</p>
        <Link to="/posts" className={styles.redirectButton}>
          {lexicon.buttons.goToPosts}
        </Link>
      </div>
    </div>
  );
}

export { Main };
