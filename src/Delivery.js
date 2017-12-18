import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'

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
                <div class="nav-section-menu">
                  <div class="nav nav-list">
                    <span class="nav-header">In This Section</span> 
                    <Link to="/about" class="nav-link first">
                      Our smoothies
                      <small>Carefully crafted</small>
                      <i class="fa fa-angle-right"></i>
                    </Link>
                    <Link to="/delivery" class="nav-link active">
                      Delivery info
                      <small>Menu or bundles</small>
                      <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <p class="lead">We utilize an innovative production and premium delivery solutions to deliver raw and fresh smoothies to your doorstep.</p>
                <p>We are committed to freshness. We managed to keep the price of the next day delivery $8 in selected suburbs in Sydney. We are aiming to expand our network across all suburbs in Sydney.</p>
                <h4>Next day delivery</h4>
                <p>Simply, <Link to="/bundles">choose your bundle</Link> and your desired delivery date and you will receive your smoothies and smoothie bowls in the selected date between around 8 am to 12 pm. You can always <Link to="/contact">contact us</Link> to discuss your customised packages and delivery times.</p>
                <h4 class="mt-4">
      Same day pickup
                </h4>
                <p>
      Alternatively, you can choose from <Link to="/find_us">selected stores in NSW</Link> to pick up your favorite smoothies right away.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Delivery
