import { messages } from "@/shared/messages/messages";
import styles from "./About.module.css";
import Button from "@/shared/ui/button/Button";

type AboutProps = {
  onClose: () => void;
};

function About({ onClose }: AboutProps) {
  return (
    <div className={styles.about}>
      <h3 className={styles.title}>{messages.titles.appName}</h3>
      <p className={styles.description}>{messages.titles.aboutDescription}</p>
      <Button className={styles.closeButton} onClick={onClose}>
        {messages.buttons.close}
      </Button>
    </div>
  );
}

export default About;
