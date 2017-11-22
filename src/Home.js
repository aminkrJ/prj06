import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';

import Carousel from './Carousel';
import Process from './Process';
import MakeItAtHome from './MakeItAtHome';

import cups from  './img/cups.png'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  componentWillMount() {
    NProgress.start()

    axios.get("/products/")
    .then((response) => {
      NProgress.done()

      this.setState({
        products: response.data
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  renderProducts() {
    if (this.state.products.length) {
      var products = this.state.products.map((product, index) => {
          return(
            <div key={index}>
              <Link to={"/elixirs/" + product.slug} className="project overlay-hover">
                <img src={product.photo.original} className="img-fluid" />
                <span class="overlay-hover-content">
                  <i class="fa fa-arrow-circle-right icon-3x text-white"></i>
                  <span class="h5 mt-4">{product.name}</span>
                </span>
              </Link>
            </div>
          )
        })

      return (
        <Carousel id="featured-carousel" margin={2} responsive={ {"0": {"items": 1}, "576": {"items": 2}, "768": {"items": 3}, "991": {"items": 3}, "1200": {"items": 3}} }>
        {products}
        </Carousel>
      )
    }
  }

  render() {
    return (
      <div className="">
        <div id="highlighted">
          <div className="bg-white main-bg overlay overlay-primary overlay-op-2 px-3 py-5 py-lg-10 flex-valign">
            <div class="item">
              <div class="container padding-top-3x">
                <div class="row justify-content-center align-items-center">
                  <div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                    <div class="from-bottom">
                      <h1 className="font-weight-bold text-uppercase text-black mb-2 pt-1">Elevated Drinks</h1>
                      <hr className="hr-inverse hr-lg w-100 mx-auto my-4" />
                      <div class="tp-caption mb-4 pb-1 h4 font-weight-normal text-black">Elixirs, tonic and smoothies packed with superfoods, functional herbs, and mushrooms</div>
                    </div>
                    <Link class="btn btn-inverse btn-rounded py-lg-3 px-lg-5" to="/about">Learn more</Link>
                  </div>
                  <div class="col-md-6 padding-bottom-2x mb-3"><img class="cups d-block mx-auto" src={cups} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="p-0">
          <Process />
          <MakeItAtHome />
          <div id="features" className="container py-4 py-lg-6">
            <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h2 className="text-center text-uppercase font-weight-bold my-0">
              Why us?
            </h2>
            <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
            </h5>
            <hr className="mb-5 w-50 mx-auto" />
            <div className="row text-center">
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  Premium Ingredients
                </h4>
                <p>Seasonal, pesticide-free, and certified organic ingredients</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  No Added Sugar
                </h4>
                <p>Enjoy the naturally occurring sweetness of ingredients</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  No Preservative
                </h4>
                <p>Freshness is our commitment</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  Effective Programs
                </h4>
                <p>Various recipes to suit different diet plans</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  Nutritious n Delicious
                </h4>
                <p>Get enough nutritions as a whole meal</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  Natural Remedies
                </h4>
                <p>With healing agents it is more than a drink </p>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="container p-3 py-lg-1">
          <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h2 className="text-center text-uppercase font-weight-bold my-0">
            Latest Smoothies
          </h2>
          <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
          </h5>
          <hr className="mb-5 w-50 mx-auto" />
          { this.renderProducts() }
        </div>
      </div>
    )
  }
}

export default Home
