import "./stylesModalBase.css";

import { ReactNode } from "react";
import ReactModal from "react-modal";

interface ModalBaseProps {
  isOpen: boolean;
  children: ReactNode;
  closeModal: () => void
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalBase = ({ isOpen, closeModal, children }: ModalBaseProps) => {
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <button className="modal__close-button" onClick={closeModal}>X</button>
      {children}
    </ReactModal>
  );
};
