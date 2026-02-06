import { type ReactNode, type SyntheticEvent } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return;

  return ReactDOM.createPortal(
    <div onClick={(event: SyntheticEvent) => event.stopPropagation()}>
      {children}
    </div>,
    document.body,
  );
}

export default Modal;
