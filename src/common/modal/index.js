import React, { Children } from "react";
import Modal from "react-modal";
import "./style.css";

Modal.setAppElement("#root");

class ModalComponent extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <Modal isOpen className={`${className || ""} modal-generic-body`}>
        {children}
      </Modal>
    );
  }
}

export default ModalComponent;
