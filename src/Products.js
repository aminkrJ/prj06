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
          <li key={index}>{recipe.description} {recipe.title}</li>
        )
      })
    )
  }

  renderProducts() {
    return (
      this.props.products.map((product, index) => {
        return (
            <div class="col-md-4">
              <div class="card bg-shadow text-center rounded">
                <h3 class="card-title py-3 text-shadow">
                  <span class="">{product.name}</span>
                </h3>
                <p class="price-banner bg-primary text-white border-primary card-body-overlap">
                  <span class="price-currency">$</span>
                  <span class="price-digits">{product.price}<span></span></span>
                  <span class="price-extra"></span>

                </p>
                <div class="card-body">
                  <p class="text-muted"></p>
                  <ul class="text-left list-unstyled list-border-dots">
                    {this.renderRecipes(product)}
                  </ul>
                  <Link to={"/order/" + product.slug} class="btn btn-primary btn-block btn-rounded mt-4">Order Now</Link>
                </div>
              </div>
            </div>
        )
      })
    )
  }

  render() {
    return (
      <div id="pricing" class="bg-faded py-3 py-lg-6">
        <div class="container">
          <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h2 class="text-center text-uppercase font-weight-bold my-0">
      Order online
          </h2>
          <h5 class="text-center font-weight-light mt-2 mb-0 text-muted">
      Drink it next day or Uber it now!
          </h5>
          <hr class="mb-5 w-50 mx-auto" />
          <div class="row pricing-stack m-7">
      {this.renderProducts()}
            <div class="col-md-4">
              <div class="card bg-white bg-shadow text-center card-outline-primary">
                <h3 class="card-title py-3 text-shadow">
                  <span class="em">Events pack</span>
                </h3>
                <p class="price-banner bg-primary text-white border-primary card-body-overlap">
                  <span class="price-currency">Contact us</span>
                </p>
                <div class="card-body">
                  <p class="text-muted">To enquiry about corporate and event catering please contact us.</p>
                  <Link to="/contact_us" class="btn btn-primary btn-block btn-rounded mt-4">Contact us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Products
