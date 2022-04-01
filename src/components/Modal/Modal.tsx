import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import { IModalProps } from "../../models/ModalModel";
import { modalAnimation } from "../../animations";
import "./modal.scss";
import { IconDownload } from "../../icons";

const Modal: React.FC<IModalProps> = (props) => {
  const { setModalOpen } = props;

  function downloadResume() {
    const link = document.createElement("a");
    link.href = "./data/resume-frontend-stepanov-vladimir.pdf";
    link.setAttribute("download", `resume-frontend-stepanov-vladimir.pdf`);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  }

  return (
    <Backdrop onClick={() => setModalOpen(false)}>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal__download" onClick={() => downloadResume()}>
          <IconDownload />
        </div>
        <iframe
          className="modal__resume"
          title="resume"
          src={`./data/resume-frontend-stepanov-vladimir.pdf#toolbar=0&navpanes=0&scrollbar=0&scrolling=0&view=fitH`}
          frameBorder="0"
          scrolling="no"
        />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;