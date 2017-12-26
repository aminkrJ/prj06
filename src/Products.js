import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';

class Products extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  renderRecipes(product) {
    return(
      product.recipes.map((recipe, index) => {
        return(
          <li key={index}>{recipe.description} <Link to={"/smoothies/" + recipe.slug}>{recipe.title}</Link></li>
        )
      })
    )
  }

  renderProducts() {
    return (
      this.props.products.map((product, index) => {
        return (
              <div class="card text-center mb-5">
                <h3 class="card-title py-3 text-shadow">
          <Link to={"/products/" + product.slug} class="">
                  <span class="text-black text-capitalize">{product.name}</span>
          </Link>
                </h3>
                <div class="row">
                  <div class="col-md-12">
          <img src={product.photo.original} class="card-img img-fluid"></img>
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
                    {this.renderRecipes(product)}
                  </ul>
                  <Link to={"/order/" + product.slug} class="btn btn-primary btn-block btn-rounded mt-4">Order Now</Link>
                  <Link to={"/products/" + product.slug} class="btn btn-link">Learn more</Link>
                </div>
              </div>
        )
      })
    )
  }

  render() {
    return (
      <div id="pricing" class="bg-faded">
        <div class="container">
          <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h2 class="text-center text-uppercase font-weight-bold my-0">
      Our Bundles
          </h2>
          <h5 class="text-center font-weight-light mt-2 mb-0">
            Delivery fee applies.
          </h5>
          <hr class="mb-5 w-50 mx-auto" />
          <div class="row pricing-stack">
            <div class="card-group">
              {this.renderProducts()}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Products
