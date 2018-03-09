import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet"
import {render} from 'react-dom';

import Carousel from './Carousel';
import globals from './globals'
import NutriComboList from './NutriComboList'
import Process from './Process'

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
            <h1 class="h2 text-slab">{globals.nutricombo.tagline}</h1>
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
