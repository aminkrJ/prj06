import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './Api.js'
import classnames from 'classnames'
import NProgress from 'nprogress'
import AddToCartButton from './AddToCartButton.js';
import Loader from 'react-loader';
import {Helmet} from "react-helmet"

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

      document.title = response.data.name
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  renderTags() {
    return (
      this.state.product.tags.map((tag) => {
        return (
          <Link to={"/shop/tags/" + tag.id} class='mb-sm-1 p-2 mr-1 font-weight-light badge badge-primary'>
            {tag.name}
          </Link>
        )
      })
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
        <div class="text-xs text-muted">
          <hr class="my-3" />
          <span class="font-weight-bold">Ingredients: </span>
          {this.state.product.ingredients.map((i) => {return i.name}).join(', ')}
        </div>
      )
    }
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
                <p class='mt-3'>
                {this.renderTags()}
                </p>
              </div>
              <div class="col-lg-7">
                <div class="card product-card mb-4">
                  <div class="card-body p-4 pos-relative">
                    <div class="pos-md-absolute pos-t pos-r mr-4 mt-3 text-md-right">
                    </div>
                    <h2 class="text-capitalize text-slab card-title mb-2">
                      {this.state.product.name}
                    </h2>
                    <hr class="my-3" />
                    <p dangerouslySetInnerHTML={{__html: this.state.product.short_description}} class="lead" />
                    <p dangerouslySetInnerHTML={{__html: this.state.product.description}} class="" />
        {this.renderIngredients()}
                    <hr class="my-3" />
                    <AddToCartButton class='btn btn-primary' product={this.state.product} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
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