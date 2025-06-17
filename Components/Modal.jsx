import React, { useState } from "react";
import "./Modal.css"
const Modal = ({handleClose,handleOffer}) => {

  return (
    <div className="Modal">
        <button onClick={handleClose} className="close-btn">X</button>
     
     <div className="content">Click the Button Below</div>
     <button className="Acpt-btn" onClick={handleOffer}>Accept Offer</button>
    </div>
  );
};

export default Modal;
