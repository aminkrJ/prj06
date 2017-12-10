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
                <p class="lead">We utilize a premium delivery process for smoothies to be delivered cold and fresh.</p>
                <p>We are committed to freshness. We managed to keep the price of next day delivery as low as $5 across selected suburbs in Sydney. We are aiming to expand our network across all suburbs in Sydney.</p>
                <h4>Next day delivery</h4>
                <p>Simply, <Link to="/plans">choose your bundle</Link> and your desired delivery date and you will receive your smoothies and smoothie bowls in the selected date between around 8 am to 12 pm. You can always <Link to="/contact">contact us</Link> to discuss your customised packages and delivery times.</p>
                <h4 class="mt-4">
      Same day delivery
                </h4>
                <p>
      Alternatively, you can use <a href="https://www.ubereats.com/sydney/">UberEats</a>, <a href="https://deliveroo.com.au/restaurants/sydney/sydney">Delivero</a> and <a href="https://www.menulog.com.au/">Menulog</a> to place your orders online in selected suburbs.
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
