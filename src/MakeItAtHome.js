import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class MakeItAtHome extends Component {
  render() {
    return (
      <div id="pricing" class="bg-faded py-3 py-lg-6">
        <div class="container">
          <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h2 class="text-center text-uppercase font-weight-bold my-0">
            Make it at home
          </h2>
          <h5 class="text-center font-weight-light mt-2 mb-0 text-muted">
            Choose a plan to suit your needs
          </h5>
          <hr class="mb-5 w-50 mx-auto" />
          <div class="row pricing-stack">
            <div class="col-md-4">
              <div class="card bg-shadow text-center rounded">
                <h3 class="card-title py-3 text-shadow">
                  <span class="">Starter</span>
                </h3>
                <p class="price-banner bg-primary text-white border-primary card-body-overlap">
                  <span class="price-currency">$</span>
                  <span class="price-digits">45<span></span></span>
                  <span class="price-extra"></span>

                </p>
                <div class="card-body">
                  <p class="text-muted"><small>You can make the following elixirs with ingredinets inside the package.</small></p>
                  <ul class="text-left list-unstyled list-border-dots">
                    <li>3x 350ml Mother Earth</li>
                    <li>3x 350ml Energy Drink</li>
                    <li>3x 350ml Limitless Brain</li>
                  </ul>
                  <a href="https://shop.lifelixir.com.au/products/starter" class="btn btn-primary btn-block btn-rounded mt-4">Order Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-white bg-shadow text-center card-outline-primary">
                <h3 class="card-title py-3 text-shadow">
                  <span class="">Vitality</span>
                </h3>
                <p class="price-banner bg-primary text-white border-primary card-body-overlap">
                  <span class="price-currency">$</span> 
                  <span class="price-digits">67<span>.5</span></span>
                  <span class="price-extra"></span>

                </p>
                <div class="card-body">
                  <p class="text-muted"><small>You can make the following elixirs with ingredinets inside the package.</small></p>
                  <ul class="text-left list-unstyled list-border-dots">
                    <li>5x 350ml Mother Earth</li>
                    <li>5x 350ml Energy Drink</li>
                    <li>5x 350ml Limitless Brain</li>
                  </ul>
                  <a href="https://shop.lifelixir.com.au/products/vitality" class="btn btn-primary btn-block btn-rounded mt-4">Order Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-white bg-shadow text-center card-outline-primary">
                <div class="card-ribbon card-ribbon-top card-ribbon-left bg-primary text-white">Popular</div>
                <h3 class="card-title py-3 text-shadow">
                  <span class="em">Infinity</span>
                </h3>
                <p class="price-banner bg-primary text-white border-primary card-body-overlap">
                  <span class="price-currency">$</span>
                  <span class="price-digits">84<span></span></span>
                  <span class="price-term"></span>

                </p>
                <div class="card-body">
                  <p class="text-muted"><small>You can make the following elixirs with ingredinets inside the package.</small></p>
                  <ul class="text-left list-unstyled list-border-dots">
                    <li>7x 350ml Mother Earth</li>
                    <li>7x 350ml Energy Drink</li>
                    <li>7x 350ml Limitless Brain</li>
                  </ul>
                  <a href="https://shop.lifelixir.com.au/products/infinity" class="btn btn-primary btn-block btn-rounded mt-4">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-grey bg-shadow py-3 mt-4 text-center">
            <h4 class="d-inline-block pr-1 my-0">
            </h4>
            <p>We deliver all the ingredinets and recipes needed to make fresh smoothies at home.</p>
          </div>
        </div>
      </div>

    )
  }
}

export default MakeItAtHome
