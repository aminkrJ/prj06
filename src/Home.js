import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';

import Carousel from './Carousel';
import Process from './Process';
import sunshineBowl from './img/sunshine-smoothie-bowl.png';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
  }

  handleOrderNow(product, e){
    e.preventDefault()

    this.props.addToCart(product)
    this.props.history.push('/cart')
  }

  renderBundleItems() {
    return (
      this.props.bundles.map((product, index) => {
        return (
          <div class="card text-center mb-5">
            <h3 class="card-title py-3 text-shadow">
              <Link to={"/menu/" + product.slug} class="">
                <span class="text-slab text-black text-capitalize">{product.name}</span>
              </Link>
            </h3>
            <div class="row">
              <div class="col-md-12">
                <Link to={"/menu/" + product.slug} class="">
                  <img src={product.photo.original} class="card-img img-fluid"></img>
                </Link>
              </div>
            </div>
            <p class="price-banner bg-primary text-white border-primary card-body-overlap">
              <span class="price-currency">from $</span>
              <span class="price-digits">{product.price}<span></span></span>
              <span class="price-extra"></span>
            </p>
            <div class="card-body">
              <p class="text-muted">{product.short_description}</p>
              <ul class="text-left list-unstyled list-border-dots">
              </ul>
              <a href="#" class="btn btn-primary btn-block btn-rounded mt-4" onClick={this.handleOrderNow.bind(this, product)}>Order Now</a>
              <Link to={"/menu/" + product.slug} class="btn btn-link">Learn more</Link>
            </div>
          </div>
        )
      })
    )
  }

  renderBundles() {
    return(
      <div id="pricing" class="bg-faded">
        <div class="container">
          <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h3 class="text-center text-slab font-weight-bold my-0">
      Our Bundles
          </h3>
          <h5 class="text-center font-weight-light mt-2 mb-0">
            Delivery fee applies.
          </h5>
          <hr class="mb-5 w-50 mx-auto" />
          <div class="row pricing-stack">
            <div class="card-group">
              {this.renderBundleItems()}
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderMenu() {
    if (this.props.menu.length) {
      var menu = this.props.menu.map((menuItem, index) => {
          return(
            <div key={index}>
              <Link to={"/menu/" + menuItem.slug} className="project overlay-hover">
                <img src={menuItem.photo.original} className="img-fluid" />
                <span class="overlay-hover-content">
                  <i class="fa fa-arrow-circle-right icon-3x text-white"></i>
                  <span class="h5 mt-4">{menuItem.name}</span>
                </span>
              </Link>
            </div>
          )
        })

      return (
        <Carousel id="featured-carousel" margin={2} responsive={ {"0": {"items": 1}, "576": {"items": 2}, "768": {"items": 3}, "991": {"items": 4}, "1200": {"items": 4}} }>
        {menu}
        </Carousel>
      )
    }
  }

  render() {
    return (
      <div className="">
        <div id="highlighted">
          <div className="bg-white main-bg overlay overlay-primary overlay-op-2 px-3 py-3 py-lg-5 flex-valign">
            <div class="item">
              <div class="container padding-top-3x">
                <div class="row justify-content-center align-items-center">
                  <div class="col-lg-6 col-md-6 padding-bottom-1x text-md-left text-center">
                    <div class="from-bottom">
                      <h1 className="font-weight-bold text-black mb-2 pt-1 text-slab">No pain, more gains</h1>
                      <hr className="hr-inverse hr-lg w-100 mx-auto my-4" />
                      <h2 class="h4 tp-caption mb-4 pb-1 font-weight-light text-black tagline">
      More gains by eliminating fatigue, headache, poor memory, lack of focus, chronic pains and leaky gut everyday with <span class="font-weight-bold text-slab">NutriCombo</span> collection packed with superfoods, functional hebrs, probiotics and medicinal mushrooms.
      </h2>
                    </div>
                    <Link class="btn btn-primary btn-rounded py-lg-3 px-lg-5" to="/menu">Order Now</Link>
                    <Link class="btn btn-link btn-rounded py-lg-3 px-lg-3" to="/about">Find out more</Link>
                  </div>
                  <div class="col-md-6 mt-3 mt-md-0"><img src={sunshineBowl} class="cups d-block mx-auto" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="p-0">
          <Process />
          <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h3 className="text-center text-slab font-weight-bold my-0">
            Our Menu
          </h3>
          <h5 className="text-center font-weight-light mt-2 mb-0">
      Nutritious and delicious.
          </h5>
          <hr className="mb-5 w-50 mx-auto" />
          <div id="projects" className="container p-3 py-lg-1">
      {this.renderMenu()}
          </div>
      {this.renderBundles()}
          <div id="features" className="container">
            <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 className="text-center text-slab font-weight-bold my-0">
              Why us?
            </h3>
            <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
            </h5>
            <hr className="mb-5 w-50 mx-auto" />
            <div className="row text-center">
              <div className="col-lg-4 py-2">
                <h4 className="text-slab mt-2">
                  Freshness
                </h4>
                <p>Fresh ingredients are at the heart of our philosophy</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-slab">
                  Premium Ingredients
                </h4>
                <p>Seasonal, pesticide-free, and certified organic ingredients</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-slab">
                  No Added Sugar
                </h4>
                <p>Enjoy the naturally occurring sweetness of ingredients</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="text-slab mt-2">
                  No Preservative
                </h4>
                <p>No process or additives to expand the shelf-life</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-slab">
                  Probiotics
                </h4>
                <p>Good bacterias for healthy gut</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-slab">
                  Low carbs
                </h4>
                <p>Low carbs and suger but high in healthy fats</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

Home.defaultProps = {
  bundles: [],
  recipes: []
}

export default Home
