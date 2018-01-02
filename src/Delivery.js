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

                <h4 class="text-slab">Customisable delivery date and time</h4>
                <p>Simply, <Link to="/menu">pick your favorites</Link> and check for availability of your delivery date and time in checkout page.</p>

                <h4 class="text-slab">Delivery hours</h4>
                <p>At the moment, you have two options for delivery time in each day, from 12PM to 14PM and from 17PM to 19PM. You can only choose 17PM to 19PM if you put your order after 12PM on the same day otherwise you can choose our next day delivery. </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Delivery
