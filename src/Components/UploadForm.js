import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./component.css";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  // Create a state that stores image
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  // file format check
  const allowedTypes = ["image/jpeg", "image/png"];

  const handleChange = (e) => {
    // variable that stores my images
    let selected = e.target.files[0];
    // file is selected and of right format
    if (selected && allowedTypes.includes(selected.type)) {
      setImage(selected);
      setError(""); // reset error
    } else {
      setImage(null);
      setError("Please select image (png or jpeg)");
      console.log("select file of type image");
    }
  };

  return (
    <div>
      <form>
        <input type="file" onChange={handleChange} />
        <div className="output">
          {/* Check error and output error */}
          {error && <div className="error">{error}</div>}
          {/* Check for imaage and output image name */}
          {image && <div className="error">{image.name}</div>}
          {/* show progress bar when image is selected */}
          {image && <ProgressBar image={image} setImage={setImage} />}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
