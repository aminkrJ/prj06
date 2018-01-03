import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './Api.js';
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';

import PaymentMethods from './img/card-brands.svg'

class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      campaigns: [],
      subscribeCampaign: {},
      email: ""
    }
  }

  componentWillMount() {
    NProgress.start()

    api.get("/campaigns/")
    .then((response) => {
      NProgress.done()

      this.setState({
        campaigns: response.data,
        subscribeCampaign: _.find(response.data, (c) => { return c.name === "Subscribe" })
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  renderProducts(){
    return(
      this.props.products.map((product, index) => {
       return(
         <li key={index}><Link to={`/menu/${product.slug}`}>{product.name}</Link></li>
       )
      })
    )
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleSubscribe(campaign, e) {
    e.preventDefault()
    var campaignId = e.target.getAttribute("data-campaign_id")

    this.subscribe(campaignId)
  }

  subscribe(campaignId) {
    NProgress.start()
    axios.post("/campaigns/" + campaignId + "/subscribers", {
      subscriber: {
        email: this.state.email
      }
    })
    .then((response) => {
      NProgress.done()

      iziToast.success({
        position: 'topRight',
        message: "You have subscribed successfully.",
        title: "Congratulation!"
      })

      this.setState({email: ""})
    })
    .catch((error) => {
      NProgress.done()

      iziToast.error({
        position: 'topRight',
        message: "Email " + error.response.data.email[0]
      })
    })
  }




  render() {
    return (
      <div>
      <footer id="footer">
      <div class="container"> <div class="row"> <div class="col-lg-4"> <h3 class="text-white text-slab font-weight-bold"> Life<span class="text-primary">Elixir</span> </h3>
      <p class="text-sm">Wholesome meals packed with superfoods, functional herbs, probiotics, and medicinal mushrooms.</p>
      <address>
        <ul class="list-unstyled text-sm">
          <li> </li>
                <li>
                  <abbr title="Address"><i class="fa fa-home fa-fw text-white"></i></abbr>
                  15/12 Cecil St., Gordon, NSW, 2072
                </li>
                <li>
                  <abbr title="Phone"><i class="fa fa-phone fa-fw text-white"></i></abbr>
                  (02) 8005 7976
                </li>
                <li>
                  <abbr title="Email"><i class="fa fa-envelope fa-fw text-white"></i></abbr>
                  support@lifelixir.com.au
                </li>
              </ul>
            </address>
            <div class="mt-3 mb-4 mb-lg-0">
              <a href="https://www.instagram.com/LifelixirSnacks" class="mr-1 btn btn-icon btn-inverse btn-invert btn-rounded"> <i class="fa fa-instagram"></i> <span class="sr-only">Instagram</span> </a>
              <a href="https://www.facebook.com/LifelixirSnacks" class="mr-1 btn btn-icon btn-inverse btn-invert btn-rounded"> <i class="fa fa-facebook"></i> <span class="sr-only">Facebook</span> </a>
              <a href="https://www.youtube.com/channel/UCJ4Hs8y51ixuzRHniphYPNQ" class="mr-1 btn btn-icon btn-inverse btn-invert btn-rounded"> <i class="fa fa-youtube"></i> <span class="sr-only">YouTube</span> </a>
            </div>

              <div className="mt-4 mb-4 mb-lg-4">
                <img src={PaymentMethods} alt="Payment Methods" />
              </div>
          </div>
          
          <div class="col-lg-7 offset-lg-1">
            <div class="row">
              <div class="col-6 col-md-3">
                <h4 class="mt-0 text-uppercase text-white">
                  Bundles
                </h4>
                <ul class="list-unstyled footer-links">
                  {this.renderProducts()}
                </ul>
              </div>
              <div class="col-6 col-md-3">
                <h4 class="mt-0 text-uppercase text-white">
                  Company
                </h4>
                <ul class="list-unstyled footer-links">
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/delivery">Delivery Info</Link></li>
                  <li><Link to="/contact">Contact us</Link></li>
                  <li><Link to="/legal">Legal</Link></li>
                </ul>
              </div>
              <div class="col-12 col-md-6">
                <h4 class="text-uppercase text-white">
                  Newsletter
                </h4>
                <p>Be the first to know about our exclusive offers and deals, special events, and product releases!</p>
                <form>
                  <div class="input-group">
                    <label class="sr-only" for="email-field">Email</label>
                    <input type="text" class="form-control" id="email-field" placeholder="Email" onChange={this.handleEmailChange.bind(this)}/>
                    <span class="input-group-btn">
                      <button class="btn btn-primary" data-campaign_id={this.state.subscribeCampaign.id} onClick={this.handleSubscribe.bind(this, this.state.subscribeCampaign)} type="button">Go!</button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <hr class="my-4 hr-white op-1" />
        <div class="subfooter text-sm text-center">
          <p>Copyright 2018 &copy; LifeElixir by Personalised Nutrition</p>
          <ul class="list-inline footer-links">
          </ul>
        </div>
      </div>
      <a href="#top" class="btn btn-icon btn-inverse pos-fixed pos-b pos-r mr-3 mb-3 scroll-state-hidden" title="Back to top" data-scroll="scroll-state"><i class="fa fa-chevron-up"></i></a>
    </footer>

      </div>
    )
  }
}

Footer.defaultProps = {
  products: [],
  products: [],
}

export default Footer
