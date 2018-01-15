import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NProgress from 'nprogress';
import _ from 'underscore';

import Carousel from './Carousel';
import Process from './Process';
import sunshineBowl from './img/sunshine-smoothie-bowl.png';
import DeliverySearch from './DeliverySearch'
import AddToCartButton from './AddToCartButton'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      postcode: ''
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
              <Link to={"/shop/" + product.slug} class="">
                <span class="text-slab text-black text-capitalize">{product.name}</span>
              </Link>
            </h3>
            <div class="row">
              <div class="col-md-12">
                <Link to={"/shop/" + product.slug} class="">
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
              <Link to={"/shop/" + product.slug} class="btn btn-link">Learn more</Link>
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
            <div class="card" key={index}>
              <Link to={"/shop/" + menuItem.slug}>
                <img src={menuItem.photo.original} className="card-img-top img-fluid" />
              </Link>
              <div class="card-body">
                <Link to={"/shop/" + menuItem.slug}>
                  <h4 class="text-slab card-title">{menuItem.name}</h4>
                </Link>
                <p>
                  {menuItem.short_description}
                </p>
                <p class="text-xs">
                {menuItem.ingredients.map((i) => {return i.name}).join(', ').replace(/^(.{100}[^\s]*).*/, "$1") + "\n ..."}
                </p>
                <AddToCartButton dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} class="btn btn-primary" product={menuItem} />
              </div>
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
                      <h1 className="font-weight-bold text-black mb-2 pt-1 text-slab">Nutrition for top performers</h1>
                      <hr className="hr-inverse hr-lg w-100 mx-auto my-4" />
                      <h2 class="h4 tp-caption mb-4 pb-1 font-weight-light text-black tagline">
Be one step ahead of the game with freshly made healthy superfoods designed with nutritionists and healthy chefs for high performers delivered to your home or office.
      </h2>
                    </div>
                    <Link class="btn btn-primary btn-rounded py-lg-3 px-lg-5" to="/shop">Shop Now</Link>
                  </div>
                  <div class="col-md-6 mt-3 mt-md-0"><img src={sunshineBowl} class="cups d-block mx-auto" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="p-0">
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
          <div class="bg-primary bg-op-5 py-4 py-lg-6">
            <h3 className="text-center text-slab font-weight-bold my-0">
              Home or office delivery
            </h3>
            <h5 className="text-center font-weight-light mt-2 mb-0">
        Now delivering to selected suburbs in Sydney. Enter your postcode below to see if we deliver to your area.
            </h5>
            <div id="delivery" className="text-center container py-lg-1 px-lg-10">
              <DeliverySearch />
            </div>
          </div>
          {this.renderBundles()}
          <Process />
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
                <p>Enjoy the naturally occurring sweetness of our ingredients</p>
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
                <p>Good bacteria for a healthy gut</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-slab">
                  Low carbs
                </h4>
                <p>Low carbs and suger, high in healthy fats</p>
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
