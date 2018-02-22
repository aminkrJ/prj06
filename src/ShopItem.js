import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './Api.js'
import classnames from 'classnames'
import NProgress from 'nprogress'
import AddToCartButton from './AddToCartButton.js';
import Loader from 'react-loader';
import {Helmet} from "react-helmet"
import {render} from 'react-dom';

import Modal from './Modal'
import Subscribe from './Subscribe'

class ShopItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: {photo: {original: ""}, tags: [], ingredients: [], category: {}},
      activeTabIndex: 1,
      loaded: false
    }
  }
  
  renderIngredients() {
    return (
     this.state.product.ingredients.map((ingredient, index) => {
       return(
         <span class="" key={ingredient.id}>{ingredient.name}{index + 1 === this.state.product.ingredients.length ? "" : ", " }</span>
       )
     })
    )
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
          <Link to={"/shop/tags/" + tag.id} class='text-sm mb-sm-1 mr-3 text-uppercase font-weight-light'>
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
          <span key={r.id}>
            <span>{r.description} </span>
            {r.title}
            {index + 1 === this.state.product.recipes.length ? null : <span>, &nbsp;</span>}
          </span>
        )
      })
    )
  }

  renderIngredients() {
    if(this.state.product.category === "Bundles"){
      return(
        <div class="text-xs text-muted">
         <hr class="my-3" />
         <span class="font-weight-bold"></span> {this.renderRecipes()}
        </div>
      )
    } else {
      return(
        <div class="text-sm">
          {this.state.product.ingredients.map((i) => {return i.name}).join(', ')}
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
                <p class="text-center text-uppercase text-primary mb-4 text-xs"> Get 20% off your first order. <a class='font-weight-bold' href="#" onClick={this.handleSubscribe.bind(this)}> Join the mailing list now!</a></p>
                <div class="product-gallery pos-relative">
        <img src={this.state.product.photo.original} class='img-fluid'/>
                </div>
                <div class='mt-3'>
                <p class='text-center'>{this.renderTags()}</p>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="product-card mb-4">
                  <div class="card-body p-0 px-4 pos-relative">
                    <div class="pos-md-absolute pos-t pos-r mr-4 mt-3 text-md-right">
                    </div>
                    <h2 class="text-capitalize text-slab card-title mb-2">
                      {this.state.product.name}
                    </h2>
                    <p dangerouslySetInnerHTML={{__html: this.state.product.short_description}} class="lead" />
                    <hr class="my-3" />
                    <div class='row'>
                      <div class='col-auto mr-auto'>
                        <h4 class='font-weight-light my-2 text-primary'>${this.state.product.price}</h4>
                      </div>
                      <div class='col-auto'>
                        <h4 class='font-weight-light my-2'>{this.state.product.weight}g</h4>
                      </div>
                      <div class='col-auto'>
                        <AddToCartButton class='btn btn-primary m-0' product={this.state.product} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
                      </div>
                    </div>
                    <hr class="my-3" />
                    <p dangerouslySetInnerHTML={{__html: this.state.product.description}} class="" />
                    <div class="card-accordion card-accordion-list-style card-accordion-icons-left" role="tablist" aria-multiselectable="true">
                      <div class="card">
                        <div class='text-sm text-uppercase font-weight-bold my-2 card-header py-0 px-0'>
                        Ingredients
                        </div>
                        <div class='collapse show'>
                          <div class='mb-2'>
                            {this.renderIngredients()}
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class='text-sm text-uppercase font-weight-bold my-2 card-header py-0 px-0'>
                        How to use
                        </div>
                        <div class='collapse show'>
                          <div class='mb-2'>
                            <p dangerouslySetInnerHTML={{__html: this.state.product.serving_idea}} class="text-sm" />
                          </div>
                        </div>
                      </div>
                    </div>

                <div class='my-3 text-xs font-weight-bold text-uppercase'>{this.renderProps()}</div>
<div class='text-xs my-2 text-muted'>* This product is not intended to diagnose, treat, cure, or prevent any disease.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
            </div>
          </Loader>
        </div>
      </div>
    )
  }
}

export default ShopItem
