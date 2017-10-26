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

  handleSubscribe(e) {
    this.props.onSubscribe(this.props.campaign.id)
  }
  handleEmailChange(e) {
    this.props.onEmailChange(e)
  }

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} backdrop={this.state.backdrop}>
        <ModalHeader>
          {this.props.campaign.name}
        </ModalHeader>
        <ModalBody>
          <p>Thanks for choosing this program. You will be notified when the program is ready to be published.</p>
          <Form inline>
            <FormGroup className="">
              <Label for="email" className="mr-1">Email</Label>
              <Input className="form-control-rounded mr-1" type="email" name="email" id="email" onChange={this.handleEmailChange.bind(this)} placeholder="Your email address" />
            </FormGroup>
            <Button className="form-control-rounded btn btn-teal" onClick={this.handleSubscribe.bind(this)}>Subscribe</Button>
          </Form>
        </ModalBody>
      </Modal>
    )
  }
}

export default CustomModal;
