import React, { useState } from "react";
// import PropTypes from 'prop-types';
// import './Modal.css';

import SideDrawer from "../../Components/Modal/Drawer/SideDrawer";

const Drawer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <SideDrawer
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div>
          <p style={{ color: "black" }}>wvgsdvbclsdbbcdu</p>
        </div>
      </SideDrawer>
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

export default Drawer;
