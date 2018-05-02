import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class Thanks extends Component {
  render() {
    return (
      <div class="">
        <div id="content" class="py-5">
          <div class="container">
            <div class="text-center mb-6">
              <i class="fa fa-check-circle icon-6x text-success" />
              <h3>Thank you for contacting LifeElixir.</h3>
              <h4 class="font-weight-normal">
                Please be assured that we will get back to you as soon as
                possible.
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Thanks;
