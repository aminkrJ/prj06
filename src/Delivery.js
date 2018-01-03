import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import AboutSideMenu from './AboutSideMenu'

class Delivery extends Component {
  componentDidMount() {
    document.title = "Life Elixir, we deliver to your doorstep"
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
                <p class="lead">We deliver freshness to your doorstep.</p>
                <p>We are committed to freshness. We managed to keep the price of our delivery $8 in selected suburbs in Sydney. We are aiming to expand our network across all suburbs in Sydney. Sign up to our newsletter to get the latest news about our mobile places and delivery suburbs in your inbox.</p>

                <h4 class="text-slab">Customisable delivery date and time</h4>
                <p>Simply, <Link to="/menu">pick your favorites</Link> and check for availability of your delivery date and time in checkout page.</p>

                <h4 class="text-slab">Delivery hours</h4>
                <p>At the moment, you have two options for delivery time in each day,  12PM - 14 PM and  17PM - 19 PM. You can only choose 17 PM - 19 PM if you put your order in after 12 PM on the same day otherwise you can choose our delivery for the following days. </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Delivery
