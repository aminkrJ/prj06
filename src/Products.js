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
            <div class="col-md-4">
              <div class="card bg-shadow text-center rounded">
                <h3 class="card-title py-3 text-shadow">
          <Link to={"/products/" + product.slug} class="">
                  <span class="text-black text-capitalize">{product.name}</span>
          </Link>
                </h3>
                <div class="row">
                  <div class="col-md-12">
                    <div class="card-body">
                      <p class="text-muted">{product.short_description}</p>
                    </div>
                  </div>
                </div>
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
                  <Link to={"/products/" + product.slug} class="btn btn-link">Learn more</Link>
                </div>
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
          <h5 class="text-center font-weight-light mt-2 mb-0 text-muted">
      Next day delivery
          </h5>
          <hr class="mb-5 w-50 mx-auto" />
          <div class="row pricing-stack">
            <div class="col-md-4">
              <div class="card bg-shadow text-center rounded">
                <h3 class="card-title py-3 text-shadow">
          <Link to="/students" class="">
                  <span class="text-black text-capitalize">Students</span>
          </Link>
                </h3>
                <div class="row">
                  <div class="col-md-12">
                    <div class="card-body">
                      <p class="text-muted">We deliver to your school with 30% discount across all orders exclusively for students</p>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <ul class="text-left list-unstyled list-border-dots">
                  </ul>
                  <Link to="/contact" class="btn btn-primary btn-block btn-rounded mt-4">Contact Us</Link>
                </div>
              </div>
            </div>

            {this.renderProducts()}
            <div class="col-md-4">
              <div class="card bg-shadow text-center rounded">
                <h3 class="card-title py-3 text-shadow">
          <Link to="/contact" class="">
                  <span class="text-black text-capitalize">Events</span>
          </Link>
                </h3>
                <div class="row">
                  <div class="col-md-12">
                    <div class="card-body">
                      <p class="text-muted">Healthy juice and smoothies for birthdays, engagements, wedding receptions, buck’s parties and hen’s parties, corporate parties</p>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <ul class="text-left list-unstyled list-border-dots">
                  </ul>
                  <Link to="/contact" class="btn btn-primary btn-block btn-rounded mt-4">Contact Us</Link>
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
