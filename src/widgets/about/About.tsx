import { lexicon } from "@/shared/lexicon/lexicon";
import styles from "./About.module.css";
import Button from "@/shared/ui/button/Button";

type AboutProps = {
  onClose: () => void;
};

function About({ onClose }: AboutProps) {
  return (
    <div className={styles.about}>
      <Button className={styles.xButton} onClick={onClose}>
        {lexicon.buttons.x}
      </Button>
      <h3 className={styles.title}>{lexicon.titles.appName}</h3>
      <p className={styles.description}>{lexicon.titles.aboutDescription}</p>
      <Button className={styles.closeButton} onClick={onClose}>
        {lexicon.buttons.close}
      </Button>
    </div>
  );
}

export default About;
