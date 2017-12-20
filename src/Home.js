import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';

import Carousel from './Carousel';
import Process from './Process';
import Products from './Products';
import sunshineBowl from './img/sunshine-smoothie-bowl.png';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
  }

  renderRecipes() {
    if (this.props.recipes.length) {
      var recipes = this.props.recipes.map((recipe, index) => {
          return(
            <div key={index}>
              <Link to={"/smoothies/" + recipe.slug} className="project overlay-hover">
                <img src={recipe.photo.original} className="img-fluid" />
                <span class="overlay-hover-content">
                  <i class="fa fa-arrow-circle-right icon-3x text-white"></i>
                  <span class="h5 mt-4">{recipe.title}</span>
                </span>
              </Link>
            </div>
          )
        })

      return (
        <Carousel id="featured-carousel" margin={2} responsive={ {"0": {"items": 1}, "576": {"items": 2}, "768": {"items": 3}, "991": {"items": 4}, "1200": {"items": 4}} }>
        {recipes}
        </Carousel>
      )
    }
  }

  render() {
    return (
      <div className="">
        <div id="highlighted">
          <div className="bg-white main-bg overlay overlay-primary overlay-op-2 px-3 py-5 py-lg-8 flex-valign">
            <div class="item">
              <div class="container padding-top-3x">
                <div class="row justify-content-center align-items-center">
                  <div class="col-lg-6 col-md-6 padding-bottom-1x text-md-left text-center">
                    <div class="from-bottom">
                      <h1 className="font-weight-bold text-uppercase text-black mb-2 pt-1">Elevated Smoothie bowls</h1>
                      <hr className="hr-inverse hr-lg w-100 mx-auto my-4" />
                      <h3 class="tp-caption mb-4 pb-1 font-weight-light text-black tagline">Healthy homemade smoothie bowls packed with superfoods, functional herbs, probiotics, and medicinal mushrooms.</h3>
                    </div>
                    <Link class="btn btn-primary btn-rounded py-lg-3 px-lg-5" to="/bundles">Order Now</Link>
                    <Link class="btn btn-link btn-rounded py-lg-3 px-lg-3" to="/about">Learn More</Link>
                  </div>
                  <div class="col-md-6 padding-bottom-1x mb-3"><img src={sunshineBowl} class="cups d-block mx-auto" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="p-0">
          <Process />
          <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h2 className="text-center text-uppercase font-weight-bold my-0">
            Our Menu
          </h2>
          <h5 className="text-center font-weight-light mt-2 mb-0">
      Our menu items can be picked up at <Link to="find_us">selected local stores</Link> now.
          </h5>
          <hr className="mb-5 w-50 mx-auto" />
          <div id="projects" className="container p-3 py-lg-1">
            { this.renderRecipes() }
          </div>
          <Products products={this.props.bundles} />
          <div id="features" className="container">
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
                  Freshness
                </h4>
                <p>Fresh ingredients are at the heart of our philosophy</p>
              </div>
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
                <p>No process or additives to expand the shelf-life</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  Nutritious n Delicious
                </h4>
                <p>Carefully crafted to hero nutritions and flavor</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2">
                  Natural Remedies
                </h4>
                <p>With natural medicinal agents it is more than a meal</p>
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
