import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import AboutSideMenu from './AboutSideMenu'

class Delivery extends Component {
  componentDidMount() {
    document.title = "Life Elixir, Sydney delivery same day or next day"
  }

  render() {
    return (
      <div className="">
        <PageTitle title="Delivery info" location={ {title: "Delivery info", path:"/delivery"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <AboutSideMenu active={2} />
              </div>
              <div class="col-md-9">
                <p class="lead">We deliver fresh food to your doorstep.</p>
                <p>We are committed to freshness. We managed to keep the price of our delivery $8 in selected suburbs in Sydney. We are aiming to expand our network across all suburbs in Sydney. Sign up to our newsletter to get the latest news about our mobile places and delivery suburbs in your inbox.</p>

                <h4 class="text-slab">Customised delivery date</h4>
                <p>Simply, <Link to="/menu">pick your favorites</Link> and check for availability of your delivery date.</p>
                <p class="text-sm text-muted">Note: If you do not open the door or respond to telephonic correspondence within 10 minutes of our delivery drivers physically reaching your address, we reserve the right to leave the premises, and you will be charged for the order.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Delivery
