import React, { useEffect } from "react";
import { motion } from "framer-motion";
import UseStorage from "../hooks/UseStorage";

const ProgressBar = ({ image, setImage }) => {
  // Create hook that fires usestorage hook
  const { url, progress } = UseStorage(image);
  console.log(progress, url);

  //   Run useeffect that runs when url is obtained to reset image back to null
  useEffect(() => {
    if (url) {
      setImage(null);
    }
  }, [url, setImage]);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
