import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PageTitle from './PageTitle';

class Legal extends Component {
  render() {
    return (
      <div className="">
        <PageTitle
          title="Terms and conditions"
          location={{ title: 'Legal', path: '/legal' }}
        />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <p>
                  Welcome to lifelixir.com.au website (each our "Website"). This
                  page (together with the documents referred to on it) tells you
                  the terms and conditions regarding your use of our website.
                  Please read these terms and conditions carefully before using
                  our services, including but not limited to ordering any
                  bundles from our Website. By accessing the Service, you agree
                  to be bound by these terms and conditions and our terms of use
                  policy.
                </p>
                <p>
                  If you have any questions relating to these terms and
                  conditions please contact support@lifelixir.com.au before you
                  place an order. If you do not accept these terms and
                  conditions in full please do not use the Service.
                </p>
                <h4>Information about us</h4>
                <p />
                <h4>Purpose</h4>
                <p />
                <h4>Orders</h4>
                <p />
                <h4>Delivery</h4>
                <p />
                <h4>Price & payments</h4>
                <p />
                <h4>Cancellation</h4>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Legal;
