import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Bundles extends Component {

  handleOrderNow(product, e){
    e.preventDefault()

    this.props.addToCart(product)
    this.props.history.push('/cart')
  }

  renderBundleItems() {
    return (
      this.props.products.map((product, index) => {
        return (
          <div class="card product-card mb-5">
          {product.before_discount_price !== 0 ? <div class='card-ribbon card-ribbon-top card-ribbon-left bg-danger text-white text-uppercase'>On Sale</div> : null}
            <div class="pos-relative">
              <Link to={'/shop/' + product.slug} class="card-title h4">
              <img src={product.photo.original} class='card-img-top img-fluid'/>
              </Link>
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
              </div>
              <a href="#" class="btn btn-primary btn-block mt-4" onClick={this.handleOrderNow.bind(this, product)}>Order Now</a>
            </div>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div class="bg-faded">
        <div class="container">
          <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h3 class="text-center text-uppercase font-weight-bold my-0">
      3 day NutriCombo Plan
          </h3>
          <h5 class="text-center font-weight-light mt-2 mb-0">
      Make 6 ultimate brain&#43; all-in-one elixirs at home or office and measure your performance before and after
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
}

Bundles.defaultProps = {
  products: [],
}

export default Bundles
