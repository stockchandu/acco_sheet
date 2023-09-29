import { createPortal } from "react-dom";
import { useState } from "react";
import "./modal.css";
export const Modal = () => {
  // TODO : manage the state globally
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(false);
  };
  return (
    <>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        Show modal
      </button>
      {modal &&
        createPortal(
          <div className="modal">
            How many row do you want to create ?
            <button onClick={handleModal}>Close</button>
          </div>,
          document.body
        )}
    </>
  );
};
