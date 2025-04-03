import React, { useState } from "react";
// import PropTypes from 'prop-types';
// import './Modal.css';

import Popup from "../../Components/Modal/PopUp/PopUp";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Popup
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div>
          <p style={{ color: "black" }}>wvgsdvbclsdbbcdu</p>
        </div>
      </Popup>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        open Popup
      </button>
    </div>
  );
};

export default Modal;
