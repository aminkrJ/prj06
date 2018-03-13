import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet"
import {render} from 'react-dom';

import Carousel from './Carousel';
import globals from './globals'
import NutriComboList from './NutriComboList'
import Process from './Process'
import Bundles from './Bundles'

import Modal from './Modal'
import Subscribe from './Subscribe'

class NutriCombo extends Component {
  handleSubscribe(e) {
    e.preventDefault()

    render(
      <Modal title="Newsletter">
<p class='text-sm'><span class="font-weight-bold text-uppercase">Sign up to receive more hacks.</span> Plus be the first to know about our exclusive offers and deals, special events, and product releases!</p>
        <Subscribe />
      </Modal>
      , document.getElementById('modal')).toggle()

  }

  render() {
    return (
      <div class="">
        <Helmet>
          <title>{globals.nutricombo.title}</title>
          <meta name="description" content={globals.nutricombo.description}/>
        </Helmet>
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
<div class="container padding-bottom-2x mb-2">
        <div class="row align-items-center padding-bottom-2x">
          <div class="col">
            <h1 class="h2 text-uppercase">{globals.nutricombo.tagline}</h1>
            <p>
      {globals.nutricombo.description}
      </p>
          </div>
          <div class='col'>
<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/sQwljK9S9A0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
          </div>
        </div>
        <hr />
        <NutriComboList recipes={this.props.nutricombo} />
        <Bundles addToCart={this.props.addToCart} history={this.props.history} products={this.props.bundles}/>
          <div id="features" className="container">
            <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 className="text-center text-uppercase font-weight-bold my-0">
              Anti NutriCombo
            </h3>
            <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
      Eliminate the followings while you are on NutriCombo to make it more effective
            </h5>
            <hr className="mb-2 w-50 mx-auto" />
            <div className="row ">
              <div className="col-lg-6 py-2">
                <h5 className="text-uppercase mt-2">
                  <span class='text-danger fa fa-close mb-2 mr-2'></span>
                  Sugar
                </h5>
                <p>Fruit juice, sports drinks, sauces, salsas and salad dressings.</p>
              </div>
              <div className="col-lg-6 py-2">
                <h5 className="mt-2 text-uppercase">
                  <span class='text-danger fa fa-close mb-2 mr-2'></span>
Grains and gluten
                </h5>
                <p>Wheat, corn, oats, barley, and other cereal grains.</p>
              </div>
              <div className="col-lg-6 py-2">
                <h5 className="text-uppercase mt-2">
                  <span class='text-danger fa fa-close mb-2 mr-2'></span>
Synthetic additives, colourings, and flavourings
                </h5>
                <p>This includes aspartame, MSG, dyes, and artificial flavourings.</p>
              </div>
              <div className="col-lg-6 py-2">
                <h5 className="mt-2 text-uppercase">
                  <span class='text-danger fa fa-close mb-2 mr-2'></span>
Processed, homogenized, and pasteurized dairy
                </h5>
                <p>Milk, cheese, and other dairy products entirely. </p>
              </div>
              <div className="col-lg-6 py-2">
              </div>
            </div>
          </div>
        <Process />
        <div class="row align-items-center padding-top-2x padding-bottom-2x">
        </div>
      </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

NutriCombo.defaultProps = {
  products: [],
  nutricombo: [],
}

export default NutriCombo
