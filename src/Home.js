import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';

import Carousel from './Carousel';

import ThumbImg from './img/thumb.png';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      campaigns: [],
      activeCampaign: {}
    }
  }

  componentWillMount() {
    NProgress.start()

    axios.get("/campaigns/")
    .then((response) => {
      NProgress.done()

      this.setState({
        campaigns: response.data,
        activeCampaign: _.find(response.data, (c) => { return c.active === true })
      })
    })
    .catch((error) => {
      NProgress.done()
    })

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
                <img src={ThumbImg} className="img-fluid" />
                <span class="overlay-hover-content">
                  <i class="fa fa-arrow-circle-right icon-3x text-white"></i>
                  <span class="h5 mt-4">{product.name}</span>
                </span>
              </Link>
            </div>
          )
        })

      return (
        <Carousel id="featured-carousel" margin={2} responsive={ {"0": {"items": 1}, "576": {"items": 2}, "768": {"items": 3}, "991": {"items": 4}, "1200": {"items": 4}} }>
        {products}
        </Carousel>
      )
    }
  }

  render() {
    return (
      <div className="">
        <div id="highlighted">
          <div className="bg-white main-bg overlay overlay-primary overlay-op-3 text-center px-3 py-5 py-lg-10 flex-valign">
            <h2 className="display-4 text-black">
              Elevated <span className="font-weight-bold">Smoothies</span>
            </h2>
            <h3 className="text-black font-weight-normal">
              Packed with superfoods, functional herbs and mushrooms
            </h3>
            <hr className="hr-inverse hr-lg w-20 mx-auto my-4" />
            <div>
              <Link to="/about" className="btn btn-inverse btn-rounded btn-lg py-lg-3 px-lg-5">Find Out More</Link>
            </div>
          </div>
        </div>
        <div id="content" className="p-0">
          <div id="features" className="container py-4 py-lg-6">
            <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h2 className="text-center text-uppercase font-weight-bold my-0">
              Drink with us
            </h2>
            <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
            </h5>
            <hr className="mb-5 w-50 mx-auto" />
            <div className="row text-center">
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  Premium ingredients
                </h4>
                <p>Seasonal, pesticide-free, and certified organic ingredients</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  No added sugar
                </h4>
                <p>Enjoy the natural sweetness of fruits in our tonics</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  No preservative
                </h4>
                <p>Freshness is our commitment</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  Effective programs
                </h4>
                <p>Various recipes to suit different diet plans</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  Nutritious n Delicious
                </h4>
                <p></p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  Natural remedies
                </h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="container p-3 py-lg-6">
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
