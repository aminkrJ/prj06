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
                <p class="lead">We utilize an innovative production and premium delivery solutions to deliver raw and fresh smoothies to your doorstep made at the same day.</p>
                <p>We are committed to freshness. We managed to keep the price of the next day delivery $5 in selected suburbs in Sydney. We are aiming to expand our network across all suburbs in Sydney. Sign up to our newsletter to get the latest news about our mobile places and delivery suburbs in your inbox.</p>
                <h4>Next day delivery</h4>
                <p>Simply, <Link to="/bundles">pick your bundle</Link>. Customise it and choose your delivery date and you will receive your smoothie bowls in the selected date.</p>
                <p>Since our smoothies are homemade and customers can customise them we do not offer same day delivery at the moment.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Delivery
