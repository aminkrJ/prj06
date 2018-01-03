import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './Api.js'
import classnames from 'classnames'
import NProgress from 'nprogress'
import AddToCartButton from './AddToCartButton.js';

class MenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: {photo: {original: ""}, ingredients: [], product_category: {}},
      activeTabIndex: 1
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
        product: response.data
      })

      document.title = "Life Elixir, " + response.data.name
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  renderRecipes() {
    return(
      this.state.product.recipes.map((r, index) => {
        return (
          <span key={r.id}>
            <span>{r.description} </span>
            <Link to={`/snacks/${r.slug}`} class="text-black">{r.title}</Link>
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
    return (
      <div id="content" class="pt-3 pt-lg-6 pb-lg-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="product-gallery pos-relative">
                <img src={this.state.product.photo.original} alt={this.state.product.name} class="lazyOwl img-fluid" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="card product-card mb-4">
                <div class="card-body p-4 pos-relative">
                  <div class="pos-md-absolute pos-t pos-r mr-4 mt-3 text-md-right">
                  </div>
<p class="text-muted text-uppercase text-xs mb-0"><span class="text-primary">{this.state.product.category}</span></p>
                  <h2 class="text-slab card-title mb-2">
                    {this.state.product.name}
                  </h2>
                  <h4 class="font-weight-bold text-primary">
      <span class="h6 price-currency">$</span>{this.state.product.price}
                  </h4>
                  <hr class="my-3" />
                  <p dangerouslySetInnerHTML={{__html: this.state.product.short_description}} class="lead" />
                  <p dangerouslySetInnerHTML={{__html: this.state.product.description}} class="" />
      {this.renderIngredients()}
                  <hr class="my-3" />
                  <AddToCartButton dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} class="btn btn-primary" product={this.state.product} />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
          </div>
        </div>
      </div>
    )
  }
}

export default MenuItem
