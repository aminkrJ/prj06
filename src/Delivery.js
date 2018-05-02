import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';
import AboutSideMenu from './AboutSideMenu';

class Delivery extends Component {
  componentDidMount() {
    document.title = 'Life Elixir, Healthy food near you';
  }

  render() {
    return (
      <div className="">
        <PageTitle
          title="Delivery"
          location={{ title: 'Delivery', path: '/delivery' }}
        />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <p class="lead">
                  We are nearby to deliver health and freshness to your
                  doorstep.
                </p>
                <p>
                  We managed to keep the price of our delivery $8 in selected
                  suburbs in Sydney. We are aiming to expand our network across
                  all suburbs in Sydney. Sign up to our newsletter to get the
                  latest news about our mobile places and delivery suburbs in
                  your inbox.
                </p>

                <h4 class="text-slab">Delivery hours</h4>
                <p>
                  At the moment, you have two options for delivery time in each
                  day, <span class="font-weight-bold">12PM - 14 PM</span> and{' '}
                  <span class="font-weight-bold">17PM - 19 PM</span>. You have
                  to place your order{' '}
                  <span class="font-weight-bold">2 hours</span> before each
                  delivery time if you would like to receive your order on the
                  delivery time on the same day otherwise you can select the
                  following days for your desired delivery time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Delivery;
