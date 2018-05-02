import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class Confirmation extends Component {
  render() {
    return (
      <div class="">
        <div id="content" class="py-5">
          <div class="container">
            <div class="text-center mb-6">
              <i class="fa fa-check-circle icon-6x text-success" />
              <h3>Your order has been successfully placed!</h3>
              <h4 class="font-weight-normal">
                Your order reference number is:{' '}
                <span class="text-primary">
                  {this.props.match.params.reference_number}
                </span>
              </h4>
              <p>A confirmation email has been sent to your email address.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;
