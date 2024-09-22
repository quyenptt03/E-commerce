import React, { useState } from "react";
import Modal from "react-modal";
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import "./image.css"
const Image = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openModal = () => {
    setSelectedImages(images);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="imageCell" onClick={openModal} style={{ cursor: "pointer" }}>
        {images.map((image, index) => (
          <img key={index} className="productImage" src={image.path} alt={`Product Image ${index + 1}`} />
        ))}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}  >
      <div className="modalHeader">
        <h2>Image Gallery</h2>
        <button onClick={closeModal} className="closeButton">
          <CancelOutlined /> 
        </button>
      </div>
        <div className="modalImages">
          {selectedImages.map((image, index) => (
            <img key={index} className="modalImage" src={image.path} alt={`Modal Image ${index + 1}`} />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Image;
