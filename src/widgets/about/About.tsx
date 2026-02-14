import { lexicon } from "@/shared/lexicon/lexicon";
import styles from "./About.module.css";
import Button from "@/shared/ui/button/Button";
import Modal from "@/shared/ui/modal/Modal";

type AboutProps = {
  isOpen: boolean;
  onClose: () => void;
};

function About({ isOpen, onClose }: AboutProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        <h3 className={styles.title}>{lexicon.titles.appName}</h3>
      </Modal.Header>
      <Modal.Body>
        <p className={styles.description}>{lexicon.titles.aboutDescription}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className={styles.closeButton} onClick={onClose}>
          {lexicon.buttons.close}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default About;
