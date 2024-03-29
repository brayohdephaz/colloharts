import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  // Method that clears modal
  const handleClick = (e) => {
    //   ensure on image click modal doesn't close
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="modal image"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <h1>This is my image</h1>
    </motion.div>
  );
};

export default Modal;
