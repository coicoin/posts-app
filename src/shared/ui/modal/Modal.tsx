import styles from "./Modal.module.css";
import { type ReactNode, type ReactPortal, type SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import Button from "@/shared/ui/button/Button";
import { lexicon } from "@/shared/lexicon/lexicon";
import type { Children } from "@/shared/types/types";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

function Modal({ isOpen, children, onClose }: ModalProps): ReactPortal | null {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.modal}
      onClick={(event: SyntheticEvent) => event.stopPropagation()}
    >
      <Button className={styles.close} onClick={onClose}>
        {lexicon.buttons.x}
      </Button>

      {children}
    </div>,
    document.body,
  );
}

function ModalHeader({ children }: Children) {
  return <div className={styles.modalHeader}>{children}</div>;
}

function ModalBody({ children }: Children) {
  return <div className={styles.modalBody}>{children}</div>;
}

function ModalFooter({ children }: Children) {
  return <div className={styles.modalFooter}>{children}</div>;
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
