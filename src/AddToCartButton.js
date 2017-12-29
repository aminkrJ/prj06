import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from  'classnames'
import _ from 'underscore'
import iziToast from 'izitoast';

class AddToCartButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isInCart: this.props.cart.map(p => {return p.id}).includes(this.props.product.id),
      product: this.props.product
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.product !== this.state.product) {
      this.setState({
        product: nextProps.product,
        isInCart: this.props.cart.map(p => {return p.id}).includes(nextProps.product.id)
      })
    }
  }

  handleClick(e) {
    e.preventDefault()

    if(this.state.isInCart){
      this.props.dropFromCart(this.props.product)
    }else{
      this.props.addToCart(this.props.product)
      iziToast.success({
        position: 'topRight',
        title: this.state.product.name,
        message: "has been added to your cart."
      })
    }
  }

  render() {
    return (
      <span onClick={this.handleClick.bind(this)}
         class={classnames(this.props.class, {"btn-danger": this.state.isInCart})}>
           <i class="fa fa-cart-plus mr-2"></i> 
             {this.state.isInCart ? "Remove from Cart" : "Add to Cart" }
      </span>
    )
  }
}

export default AddToCartButton
