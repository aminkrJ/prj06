import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AddToCartButton from './AddToCartButton'
import Carousel from './Carousel';

class ProductsCarousel extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    var menu = this.props.shop.map((product, index) => {
        return(
          <div class="card border-0" key={index}>
            <Link to={"/shop/" + product.slug}>
              <img src={product.photo.original} className="card-img-top img-fluid" />
            </Link>
            <div class="card-body">
              <small class='text-muted text-uppercase'>{product.category.name}</small>
              <Link to={"/shop/" + product.slug}>
                <h4 class="text-uppercase card-title">{product.name}</h4>
              </Link>
              <p>
                {product.short_description}
              </p>
              <p class="text-xs">
              {product.ingredients.map((i) => {return i.name}).join(', ').replace(/^(.{100}[^\s]*).*/, "$1") + "\n ..."}
              </p>
              { this.props.withAddBtn ? 
              <AddToCartButton dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} class="btn btn-primary" product={product} />
                : null }
            </div>
          </div>
        )
      })

    return (
      <Carousel id="featured-carousel" margin={2} responsive={ {"0": {"items": 1}, "576": {"items": 2}, "768": {"items": 3}, "991": {"items": 4}, "1200": {"items": 4}} }>
      {menu}
      </Carousel>
    )
  }
}

ProductsCarousel.defaultProps = {
  shop: [],
  withAddBtn: true
}

export default ProductsCarousel
