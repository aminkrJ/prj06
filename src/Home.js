import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NProgress from 'nprogress';
import {render} from 'react-dom';
import _ from 'underscore';

import Carousel from './Carousel';
import Process from './Process';
import DeliverySearch from './DeliverySearch'
import AddToCartButton from './AddToCartButton'
import globals from './globals'
import NutriComboList from './NutriComboList'
import ProductsCarousel from './ProductsCarousel'
import Subscribe from './Subscribe'
import Modal from './Modal'

import Bowl from './img/sunshine-smoothie-bowl.png'
import Instruction from './img/instructions.png'
import EffectiveFormula from './img/effective-formula.png'

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

  renderRecipes(product) {
    return(
      _.sortBy(product.recipes, 'order').map((r, index) => {
        return (
          <ul key={r.id}>
            <span>{r.description} </span>
            {r.title}
          </ul>
        )
      })
    )
  }

  renderBundleItems() {
    return (
      this.props.bundles.map((product, index) => {
        return (
          <div class="card product-card mb-5">
          {product.before_discount_price !== 0 ? <div class='card-ribbon card-ribbon-top card-ribbon-left bg-info text-white text-uppercase'>On Sale</div> : null}
            <div class="pos-relative">
              <img src={product.photo.original} class='card-img-top img-fluid'/>
              <span class='badge badge-primary product-price-badge pos-absolute pos-t pos-r mt-2 mr-2 persist'>
          {product.before_discount_price !== 0 ? <span> <del class='op-5'>${product.before_discount_price}</del> / </span> : null}
                ${product.price}
              </span>
            </div>
            <div class="card-body">
              <Link to={'/shop/' + product.slug} class="card-title h4">
                <span class="text-capitalize">{product.name}</span>
              </Link>
              <div class='card-text text-sm'>
              <p class="font-weight-light">{product.short_description}</p>
              <p dangerouslySetInnerHTML={{__html: product.description}} />
              </div>
              <a href="#" class="btn btn-primary btn-block mt-4" onClick={this.handleOrderNow.bind(this, product)}>Order Now</a>
            </div>
          </div>
        )
      })
    )
  }

  renderBundles() {
    return(
      <div class="bg-faded">
        <div class="container">
          <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h3 class="text-center text-uppercase font-weight-bold my-0">
      Our Bundles
          </h3>
          <h5 class="text-center font-weight-light mt-2 mb-0">
      Make ultimate brain&#43; all-in-one smoothies at home
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

  handleDownloadPdf(e) {
    e.preventDefault()

    render(
      <Modal title="The 10 most effective bio-hacks">
        <p class='text-sm'>
          <p>Biohacking is maximising our biological potentials.
          In order to hack our biology we have to hack our mitochondria, our energy powerhouse, to produce more energy.
         </p>
          <p> In this PDF you will find the most effective methods for biohacking which improves your overal health and performance.
         </p>
        </p>
        <Subscribe campaign="Download10Hacks"/>
      </Modal>
      , document.getElementById('modal')).toggle()
  }

  render() {
    return (
      <div className="">
        <div id="highlighted">
          <div className="bg-white main-bg px-3 py-3 py-lg-5 flex-valign">
            <div class="item">
              <div class="container padding-top-3x">
                <div class="row justify-content-center align-items-center">
                  <div class="col-lg-6 col-md-6 padding-bottom-1x text-md-left text-center">
                    <div class="from-bottom">
                      <h1 className="font-weight-bold text-black mb-2 h2 pt-1 text-uppercase">
      {globals.tagline}
                      </h1>
                      <hr className="hr-inverse hr-lg w-100 mx-auto my-4" />
                      <h2 class="h4 tp-caption mb-4 pb-1 font-weight-light text-black tagline">
      {globals.description}
                      </h2>
                      <p>
                        <Link class='btn btn-primary text-uppercase' to='/nutricombo'>NutriCombo</Link>
                        <a href='#' onClick={this.handleDownloadPdf.bind(this)} class='text-uppercase btn btn-link text-primary'>The 10 most effective bio-hacks</a>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 mt-3 mt-md-0 text-center">
      <img src={EffectiveFormula} class='img-fluid' style={{width: '60%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="p-0">
          <div class="container">
          <div class="row mt-4">
          <div class="col-lg-4 col-xl-5 flex-valign pos-relative">
            <h3 class="text-uppercase my-0 pos-relative z-index-2 text-dark font-weight-bold">
      The body's powerhouse
            </h3>
            <hr class="hr-primary w-15 hr-xl ml-0 mb-3" />
            <p class='text-sm'>We all know about our mind-body connection and how our thoughts, beliefs can impact our biology. Body-mind connection is another side of the coin.</p> <p class='text-uppercase'><a href="#" onClick={this.handleDownloadPdf.bind(this)} class='font-weight-bold'>
                  Download the 10 most effective bio-hacks to enhance your life today.</a></p>
            <div class='box-breathing-wrapper pos-relative'>
              <div class='box-breathing'></div>
              <p class='text-sm'>
Breathing box is a technique to manage your stress in any stressful situations. <span class='font-weight-bold text-uppercase'>Inhale, hold, exhale, hold and repeat</span> until you are feeling back in control.
</p>
            </div>
          </div>
          <div class="col-lg-8 col-xl-7">
            <div class="row no-gutters text-center mb-4">
              <div class="col-md-6 d-lg-flex p-2">
                <a href= "/shop/tags/2" class="py-6 ef-bg-01 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-4 rounded pos-relative">
                  <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
      10X more done
                  </h3>
                  <p class="text-white text-sm mb-0">Unlock your brain potentials</p>
                </a>
              </div>
              <div class="col-md-6 d-lg-flex p-2">
                <a href="/shop/tags/12" class="py-6 ef-bg-02 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-4 rounded pos-relative">
                  <h3 class="text-white my-0 text-uppercase font-weight-bold text-letter-spacing-sm">
      Adaptogens
                  </h3>
                  <p class="text-white text-sm mb-0">Help reduce stress</p>
                </a>
              </div>
              <div class="col-md-6 d-lg-flex p-2">
                <a href="/shop/tags/7" class="py-6 ef-bg-03 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-4 rounded pos-relative">
                  <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
                    Chakra healing
                  </h3>
                  <p class="text-white text-sm mb-0">Connect to your higher self</p>
                </a>
              </div>
              <div class="col-md-6 d-lg-flex p-2">
                <a href="/shop/tags/9" class="py-6 ef-bg-04 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-4 rounded pos-relative">
                  <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
      Fat burn
                  </h3>
                  <p class="text-white text-sm mb-0">Pre and post workout nutritions</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        {this.renderBundles()}
        <div class='bg-light py-1 py-lg-3'>
          <hr class='hr-lg mt-0 mb-3 w-10 mx-auto hr-primary' />
          <div class='container'>
            <h3 class='text-center text-uppercase font-weight-bold my-0'>
                Serving instructions
            </h3>
            <h5></h5>
            <div class='row justify-content-center'>
              <div class='col-4'>
      <img src={Instruction} class='img-fluid' />
              </div>
            </div>
          </div>
        </div>
          <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 className="text-center text-uppercase font-weight-bold my-0">
    Popular products
            </h3>
            <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
            Certified organic, healthy and delicious
            </h5>
          <hr className="mb-2 w-50 mx-auto" />
          <div class="container">
            <div className="row p-3 py-lg-1">
              <ProductsCarousel shop={this.props.featured} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
            </div>
          </div>
          <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h3 className="text-center text-uppercase font-weight-bold my-0">
            NutriCombo
          </h3>
            <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
      {globals.nutricombo.tagline}
            </h5>
          <hr className="mb-2 w-50 mx-auto" />
          <div class="container">
          <div className="row p-3 py-lg-1">
      <NutriComboList products={this.props.nutricombo} />
          </div>
          </div>
          <div class="bg-primary bg-op-5 py-4 py-lg-6">
            <h3 className="text-center text-uppercase font-weight-bold my-0">
     Product Locator
            </h3>
            <div className="text-center container py-lg-1 px-lg-10">
              <DeliverySearch />
            </div>
          </div>
          <Process />
          <div id="features" className="container">
            <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 className="text-center text-uppercase font-weight-bold my-0">
              Why Us?
            </h3>
            <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
            </h5>
            <hr className="mb-5 w-50 mx-auto" />
            <div className="row text-center">
              <div className="col-lg-4 py-2">
                <h4 className="text-uppercase mt-2">
                  Freshness
                </h4>
                <p>Fresh ingredients are at the heart of our philosophy</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-uppercase">
                  Premium Ingredients
                </h4>
                <p>Seasonal, pesticide-free, and certified organic ingredients</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-uppercase">
                  No Added Sugar
                </h4>
                <p>Enjoy the naturally occurring sweetness of our ingredients</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="text-uppercase mt-2">
                  No Preservative
                </h4>
                <p>No process or additives to expand the shelf-life</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-uppercase">
                  Probiotics
                </h4>
                <p>Good bacteria for a healthy gut</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-uppercase">
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
  recipes: [],
  shop: []
}

export default Home
