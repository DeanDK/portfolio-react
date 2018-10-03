import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      card: ""
    };
  }

  componentWillReceiveProps = next => {
    this.setState({ modal: next.modal, card: next.card });
  };

  chooseImage = cardName => {
    switch (cardName) {
      case "Translate app for Jumpseller Customers":
        return (
          <img
            alt="translate"
            src="./images/translate_n2.PNG"
            height="450px"
            width="780px"
          />
        );
      case "Mailchimp App for Jumpseller Software":
        return (
          <img
            alt="mailchimp"
            src="./images/mailchimp2.PNG"
            height="450px"
            width="780px"
          />
        );
      case "File Upload With ReactJS and multer":
        return (
          <img
            alt="file-upload"
            src="./images/file-upload.png"
            height="450px"
            width="780px"
          />
        );
      case "Product List for Jumpseller Software":
        return (
          <img
            alt="product-list"
            src="./images/product-list.png"
            height="450px"
            width="780px"
          />
        );
      case "Student Knowledge Exchange Platform - Web app for VIA University College":
        return (
          <img
            alt="skep"
            src="./images/skep.png"
            height="450px"
            width="780px"
          />
        );
      case "Blog With RoR based on the Jordan Hudgens course":
        return (
          <img
            alt="blog"
            src="./images/portfolio.png"
            height="450px"
            width="780px"
          />
        );
        break;
      default:
    }
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          size="lg"
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{this.props.card}</ModalHeader>
          <ModalBody> {this.chooseImage(this.state.card)}</ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() => this.setState({ modal: !this.state.modal })}
            >
              Exit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
