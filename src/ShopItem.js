import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './Api.js'
import classnames from 'classnames'
import NProgress from 'nprogress'
import AddToCartButton from './AddToCartButton.js';
import Loader from 'react-loader';
import {Helmet} from "react-helmet"
import {render} from 'react-dom';
import _ from 'underscore'

import Subscribe from './Subscribe'
import Modal from './Modal'
import ProductsCarousel from './ProductsCarousel'
import ServingIdeas from './ServingIdeas'

class ShopItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: {photo: {original: ""}, recipes: [], tags: [], ingredients: [], category: {}},
      activeTabIndex: 1,
      loaded: false
    }
  }
  
  handleTabChange(index) {
    this.setState({
      activeTabIndex: index
    })
  }

  componentDidMount() {
    NProgress.start()

    api.get("/products/" + this.props.match.params.slug)
    .then((response) => {
      NProgress.done()

      this.setState({
        product: response.data,
        loaded: true
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  renderTags() {
    return (
      this.state.product.tags.map((tag) => {
        return (
          <Link to={"/shop/tags/" + tag.id} class='text-xs mb-sm-1 mr-3 text-uppercase text-black font-weight-light'>
            {tag.name}
          </Link>
        )
      })
    )
  }

  renderProps() {
    return (
      <div class=''>
      {this.state.product.vegan ? <span>Vegan, </span> : null}
      {this.state.product.gluten_free ? <span>Gluten Free, </span> : null}
      {this.state.product.non_gmo ? <span>Non GMO, </span> : null}
      {this.state.product.organic ? <span>Certified Organic Ingredients</span> : null}
      </div>
    )
  }

  renderRecipes() {
    return(
      this.state.product.recipes.map((r, index) => {
        return (
          <div key={r.id} class="col-4 col-lg-3 d-flex p-0">
            <div class="card mb-3 border-0 flex-ew">
              <div class="card-effect card-effect-front-to-back">
            <Link to={'nutricombo/' + r.slug}>
                <img class="card-img-top img-fluid" src={r.photo.original} alt={r.title}/>
            </Link>
              </div>
              <div class="card-body pb-0">
            <Link to={'nutricombo/' + r.slug}>
                <h5 class="text-black card-title text-uppercase text-sm mb-1">
          {r.title}
                </h5>
            </Link>
                <p class="card-text text-uppercase text-inverse text-xs">{r.category.name}</p>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  renderIngredients() {
    var ingredients = this.state.product.ingredients.map((i, index) => {
      return (
        <span>
          <a class='text-black' href={"https://www.lifelixir.com.au/research#" + i.info_link} target='_blank'>{i.name}</a>
          {i.extract ? <span class=''>&#176;</span> : null}
          {this.state.product.ingredients.length - 1 !== index ? <span>, </span> : null}
        </span>
      )
    })

    if(this.state.product.category.name === "Bundles"){
      return(
        <div></div>
      )
    } else {
      return(
        <div class="card">
          <div class='text-sm text-uppercase font-weight-bold my-2 card-header py-0 px-0'>
            Ingredients
          </div>
          <div class='collapse show'>
            <div class='mb-2'>
              <div class="text-sm">
        {ingredients}
              </div>
              <p class='mt-2 mb-0 text-muted'>&#176; <span class='text-xs'>Extract</span></p>
            </div>
          </div>
        </div>
      )
    }
  }

  handleSubscribe(e) {
    e.preventDefault()

    render(
      <Modal title="Newsletter">
<p class='text-sm'><span class="font-weight-bold text-uppercase">Receive 20% off your first order</span> Plus be the first to know about our exclusive offers and deals, special events, and product releases!</p>
        <Subscribe />
      </Modal>
      , document.getElementById('modal')).toggle()

  }

  render() {
    var tags = this.state.product.tags.map((p) => {return p.name})

    return (
      <div id="content" class="pt-3 pt-lg-6 pb-lg-0">
        <Helmet>
          <title>{this.state.product.name}</title>
          <meta name="description" content={this.state.product.short_description}/>
          <meta name="keywords" content={tags.join(', ')}/>
        </Helmet>
        <div class="container">
          <Loader loaded={this.state.loaded}>
            <div class="row">
              <div class="col-lg-5">
                <div class="product-gallery pos-relative">
        <img src={this.state.product.photo.original} class='img-fluid'/>
                </div>
                <div class='mt-3'>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="product-card mb-4">
                  <div class="card-body p-0 px-4 pos-relative">
                    <div class="pos-md-absolute pos-t pos-r mr-4 mt-3 text-md-right">
                    </div>
                    <h2 class="text-capitalize text-uppercase card-title mb-2">
                      {this.state.product.name}
                    </h2>
                    <p dangerouslySetInnerHTML={{__html: this.state.product.short_description}} class="lead" />
                    <hr class="my-3" />
                    <div class='row'>
                      <div class='col-auto mr-auto'>
                        <h4 class='font-weight-light my-2 text-primary'>
                          {this.state.product.before_discount_price !== 0 ? <span><del class='text-danger'>${this.state.product.before_discount_price}</del> / </span> : null}
                          ${this.state.product.price}
      {this.state.product.category.name === 'Bundles' ? null : <span class='text-black text-xs'>~ {Math.round(this.state.product.weight / this.state.product.serving_size)} servings</span>}
                        </h4>
                      </div>
                      <div class='col-auto'>
                        <h4 class='font-weight-light my-2'>{this.state.product.category.name === 'Bundles' ? null : <span>{this.state.product.weight}{this.state.product.unit}</span>}</h4>
                      </div>
                      <div class='col-auto'>
                        <AddToCartButton class='btn btn-primary m-0' product={this.state.product} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
                      </div>
                    </div>
                    <hr class="my-3" />
                    <p dangerouslySetInnerHTML={{__html: this.state.product.description}} class="" />
                    <p class='mb-1'>
                    {this.renderTags()}
                    </p>
                    <div class="card-accordion card-accordion-list-style card-accordion-icons-left" role="tablist" aria-multiselectable="true">
                      {this.renderIngredients()}
                      <div class="card">
                        <div class='text-sm text-uppercase font-weight-bold my-2 card-header py-0 px-0'>
                        Serving ideas
                        </div>
                        <div class='collapse show'>
                    <p dangerouslySetInnerHTML={{__html: this.state.product.serving_idea}} class="text-sm" />
                        </div>
                      </div>
                      <div class="card">
                        <div class='text-sm text-uppercase font-weight-bold my-2 card-header py-0 px-0'>
                        NutriCombo
                        </div>
                        <div class='collapse show'>
                          <div class=''>
                          <div class='row'>
                          {this.renderRecipes()}
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>

                <div class='my-2 text-xs font-weight-bold text-uppercase'>{this.renderProps()}</div>
<div class='text-xs my-2 text-muted'>Note: These statements have not been evaluated by food and drug administration. This product is not intended to diagnose, treat, cure or prevent any disease.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
              <h3 className="text-center text-uppercase font-weight-bold my-0">
      You might also like
              </h3>
              <hr className="mb-2 w-50 mx-auto" />
              <ProductsCarousel shop={_.filter(this.props.featured, (i) => {
                return i.id !== this.state.product.id
              })} withAddBtn={false} />
            </div>
          </Loader>
        </div>
      </div>
    )
  }
}

export default ShopItem
