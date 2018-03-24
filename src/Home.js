import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NProgress from 'nprogress';
import {render} from 'react-dom';
import _ from 'underscore';
import moment from 'moment'

import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

import Carousel from './Carousel';
import Process from './Process';
import DeliverySearch from './DeliverySearch'
import AddToCartButton from './AddToCartButton'
import globals from './globals'
import NutriComboList from './NutriComboList'
import ProductsCarousel from './ProductsCarousel'
import Subscribe from './Subscribe'
import Modal from './Modal'
import ServingIdeas from './ServingIdeas'
import Bundles from './Bundles'
import Benefits from './Benefits'

import Bowl from './img/sunshine-smoothie-bowl.png'
import Bundle from './img/bundle.png'
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

  renderArticles() {
    return (
      this.props.articles.map((article, map) => {
        return (
          <div class="col-12 col-lg-4 mb-lg-1">
            <Link to={"/blog/" + article.slug} class="card border-0 flex-ew">
              <img class="card-img img-fluid" src={article.photo.original} alt={article.title} />
              <div class="card-img-overlay bg-dark bg-op-5 text-white flex-valign-b">
                <div>
                  <h5 class="card-title text-white mb-1">
          {article.title}
                  </h5>
                  <p class="card-text text-uppercase text-white text-xs"><span class="text-primary">{article.author}</span> <span class="px-1">/</span> {moment(article.updated_at).format("MMM Do YY")}</p>
                </div>
              </div>
            </Link>
          </div>
        )
      })
    )
  }

  handleDownloadPdf(e) {
    e.preventDefault()

    render(
      <Modal title="First Step">
        <p class='text-sm'>
          <p class='lead'>
          Receive the 10 easiest and most effective biohacks to enhance your life today in your inbox.
          </p>
          <p>Biohacking is maximising our biological potentials.
          In order to hack our biology we have to hack our mitochondria, our energy powerhouse, to produce more energy.
          </p>
          <p class='text-xs'>
          </p>
        </p>
        <Subscribe campaign="Download10Hacks"/>
      </Modal>
      , document.getElementById('modal')).toggle()
  }

  render() {
    return (
      <div className="">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={7000}
                className="carousel-fade"
              >
              <div style={{}}>
                <div className="bg-white main-bg px-3 py-3 py-lg-7 flex-valign">
                  <div class="container padding-top-3x">
                    <div class="row justify-content-center align-items-center">
                      <div class="col-lg-6 padding-bottom-1x text-md-left text-center">
                        <div class="from-bottom">
                          <h2 class="h4 font-weight-normal tp-caption mb-4 pb-1 text-black tagline">
          {globals.description2}
                          </h2>
                          <p>
                            <Link class='text-sm text-uppercase btn btn-primary mr-2' to='/shop'>Shop Now</Link>
                            <Link class='text-sm text-uppercase' to='/research'>Learn More</Link>
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-6 mt-3 mt-md-0 text-center">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white main-bg px-3 py-3 py-lg-7 flex-valign">
                  <div class="container padding-top-3x">
                    <div class="row justify-content-center align-items-center">
                      <div class="col-lg-6 padding-bottom-1x text-md-left text-center">
                        <div class="from-bottom">
                          <h2 class="h4 font-weight-normal tp-caption mb-4 pb-1 text-black tagline">
          {globals.description2}
                          </h2>
                          <p>
                            <Link class='text-sm text-uppercase btn btn-primary mr-2' to='/shop'>Shop Now</Link>
                            <Link class='text-sm text-uppercase' to='/research'>Learn More</Link>
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-6 mt-3 mt-md-0 text-center">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </React_Bootstrap_Carousel>
        <div id="content" className="p-0">
          <div class="container">
          <div class="row mt-4">
          {this.renderArticles()}
          </div>
          <div class="row mt-4">
          <div class="col-lg-4 col-xl-5 flex-valign pos-relative">
            <h3 class="text-uppercase my-0 pos-relative z-index-2 text-dark font-weight-bold">
      Think smarter
            </h3>
            <hr class="hr-primary w-15 hr-xl ml-0 mb-3" />
            <p class=''>
Thoughts are an emergent property of our biology. To think smarter thoughts, your whole biology - physical, emotional, and chemical - must be changed.
           </p>
            <p class=''>

            </p>
            <p class='lead'>
              Download daily rituals and practices for optimum brain function.
            <div class='mt-2'><Subscribe campaign="Download10Hacks"/></div>
            </p>
            <div class='mb-4 box-breathing-wrapper pos-relative'>
              <div class='box-breathing'></div>
            </div>
            <p class='text-xs text-center'>
Breathing box is a technique to manage your stress in any stressful situations. <span class='font-weight-bold text-uppercase'>Inhale, hold, exhale, hold and repeat</span> until you are feeling back in control.
</p>
          </div>
          <div class="col-lg-8 col-xl-7">
            <Benefits />
          </div>
        </div>
        </div>
          <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 className="text-center text-uppercase font-weight-bold my-0">
    Featured products
            </h3>
            <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
      {globals.values}
            </h5>
          <hr className="mb-2 w-50 mx-auto" />
          <div class="container">
            <div className="row p-3">
              <ProductsCarousel shop={this.props.featured} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} withAddBtn={false} />
            </div>
          </div>
          <Bundles products={this.props.bundles} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} history={this.props.history}/>
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
      <NutriComboList recipes={this.props.nutricombo} />
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
          <div id="" className="container">
          </div>
        </div>

      </div>
    )
  }
}

Home.defaultProps = {
  bundles: [],
  recipes: [],
  featured: []
}

export default Home
