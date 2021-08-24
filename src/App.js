import { useState } from "react";
import "./App.css";

import "./Components/component.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";
// import UploadForm from "./Components/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null); //checks the selected image to communicate to img grid
  return (
    <div className="App">
      <Header />
      <div className="body-wrap">
        {/* <UploadForm /> */}
        <ImageGrid setSelectedImg={setSelectedImg} />

        {/* Render modal conditionaly if image is selected only */}
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
