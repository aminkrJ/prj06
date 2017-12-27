import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

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

  render() {
    return (
      <div class="">
        <div class="header-divider d-none d-lg-block"></div>
        <a href="#" id="Popover1" onClick={this.toggle} class="btn btn-icon btn-dark btn-link float-right dropdown-toggle cart-link">
          <span class="cart-link-icon">
            <i class="fa fa-shopping-cart"></i>
            <span class="sr-only">Cart</span> 
            <span class="cart-link-count bg-primary text-white">3</span>
          </span>
        </a>
        <Popover placement="bottom" isOpen={this.state.isOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Your shopping cart</PopoverHeader>
          <PopoverBody>
            <div className="cart-dropdown-menu">
              <div class="cart-items">
                <div class="cart-items-item clearfix">
                  <a href="#" class="cart-img mr-2 float-left">
                    <img class="img-fluid" src="assets/img/shop/gloves-1-thumb.jpg" alt="Product 1" />
                  </a>
                  <div class="float-left">
                    <h5 class="mb-0">
                      Gloves
                    </h5>
                    <p class="mb-0">$18.99 / x2</p>
                    <a href="#" class="close cart-remove text-primary"> <i class="fa fa-times"></i> </a>
                  </div>
                </div>
              </div>
              <hr class="mt-3 mb-0" />
              <div class="dropdown-footer text-center">
                <h5 class="font-weight-bold">
                  Total: <span class="text-primary">$50.97</span>
                </h5>
                <Link to="/cart" class="btn btn-outline-primary btn-sm btn-rounded mx-2">View Cart</Link> <Link to="/cart" tabindex="-1" class="btn btn-primary btn-sm btn-rounded mx-2">Checkout</Link>
              </div>
            </div>
          </PopoverBody>
        </Popover>
      </div>
    )
  }
}

export default CardWidget
