import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import _ from "underscore"

class CardWidget extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderCartItem() {
      if(this.props.cart.length > 0){
        return(
        this.props.cart.map((p, index) => {
          return(
            <div key={index} class="cart-items-item clearfix">
              <Link to={`/shop/${p.slug}`} class="cart-img mr-2 float-left">
                <img class="img-fluid" src={p.photo.thumb} alt={p.name} />
              </Link>
              <div class="float-left">
                <h5 class="mb-0">
            {p.name}
                </h5>
                <p class="mb-0">${p.price} / x{p.quantity}</p>
                <a href="#" class="close cart-remove text-primary" onClick={this.props.dropFromCart.bind(this, p)}> <i class="fa fa-times"></i> </a>
              </div>
            </div>
          )
        })
        )
      }else{
        return <span class="text-sm text-danger">Cart is empty!</span>
      }
  }

  renderNavigation(){
    if(this.props.cart.length > 0){
      return(
         
         <div>
         <Link to="/cart" tabindex="-1" class="btn btn-primary btn-sm btn-rounded mx-2">View Cart</Link>
         <Link to="/checkout" tabindex="-1" class="btn btn-primary btn-sm btn-rounded mx-2">Checkout</Link>
         </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div class="header-divider d-none d-lg-block"></div>
        <a id="Popover1" onClick={this.toggle} class="btn btn-icon btn-dark btn-link float-right dropdown-toggle cart-link">
          <span class="cart-link-icon">
            <i class="fa fa-shopping-cart"></i>
            <span class="sr-only">Cart</span> 
            <span class="cart-link-count bg-primary text-white">{this.props.cart.length}</span>
          </span>
        </a>
        <Popover placement="bottom" isOpen={this.state.isOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Your shopping cart</PopoverHeader>
          <PopoverBody>
            <div className="cart-dropdown-menu">
              <div class="cart-items">
      {this.renderCartItem()}
              </div>
              <hr class="mt-3 mb-0" />
              <div class="dropdown-footer text-center">
                <h5 class="font-weight-bold">
                  Subtotal: <span class="text-primary">${_.reduce(this.props.cart, (memo, p) => {return memo + (p.price * p.quantity)}, 0)}</span>
                </h5>
                {this.renderNavigation()}
              </div>
            </div>
          </PopoverBody>
        </Popover>
      </div>
    )
  }
}

export default CardWidget
