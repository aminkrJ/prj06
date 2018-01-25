import React, { Component } from 'react';
import ReactDom from 'react-dom';

import {FormGroup, Label, Input, Button, Modal, Form, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class CustomModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal: false,
      backdrop: true
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} backdrop={this.state.backdrop}>
        <ModalHeader toggle={this.toggle.bind(this)}>
          {this.props.title}
        </ModalHeader>
        <ModalBody>
          {this.props.children}
        </ModalBody>
      </Modal>
    )
  }
}

export default CustomModal;
