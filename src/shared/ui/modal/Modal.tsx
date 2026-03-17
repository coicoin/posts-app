import styles from "./Modal.module.css";
import {
  type PropsWithChildren,
  type ReactPortal,
  type MouseEvent,
} from "react";
import ReactDOM from "react-dom";
import { Button } from "@/shared/ui/button/Button";
import { lexicon } from "@/shared/lexicon/lexicon";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Modal({
  isOpen,
  children,
  onClose,
}: PropsWithChildren<ModalProps>): ReactPortal | null {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.modal}
      onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
    >
      <Button className={styles.close} onClick={onClose}>
        {lexicon.buttons.x}
      </Button>

      {children}
    </div>,
    document.body,
  );
}

function ModalHeader({ children }: PropsWithChildren) {
  return <div className={styles.modalHeader}>{children}</div>;
}

function ModalBody({ children }: PropsWithChildren) {
  return <div className={styles.modalBody}>{children}</div>;
}

function ModalFooter({ children }: PropsWithChildren) {
  return <div className={styles.modalFooter}>{children}</div>;
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
