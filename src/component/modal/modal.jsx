import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const LoginModal = (props) => {

  const [isSignUpModal, setIsSignUpModal] = useState(false)

    return (
      <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="container p-5 row">
        {!isSignUpModal ? 
        <div className="col-6">
          <img src="assets/images/eduLogo.png" className="mb-3" />
          <div>
              <p className="m-0 pt-4">Welcome !</p>
              <p className="">Enter your details here to Login</p>
            </div>
        </div>
        :
        null}
        <div className="col-6 p-2">
          <div className="loginImageContainer">
            <img src="assets/images/login_image.png" style={{width: "100%"}} />
          </div>
        </div>
      </div>
    </Modal>
  );
// }

};

export default LoginModal;
