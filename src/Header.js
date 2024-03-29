import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartWidget from './CartWidget.js';
import Modal from './Modal';
import { render } from 'react-dom';
import Contact from './Contact';
import Find from './Find';

import logo from './img/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  find(e) {
    e.preventDefault();

    render(
      <Modal description="" title="Find Us">
        <Find />
      </Modal>,
      document.getElementById('modal')
    ).toggle();
  }

  getTen(e) {
    e.preventDefault();

    render(
      <Modal description="" title="This is where your friends come in..." />,
      document.getElementById('modal')
    ).toggle();
  }

  render() {
    return (
      <div className="">
        <Sticky relative={false}>
          {({
            style,
            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight,
          }) => {
            return (
              <header className="header" style={style}>
                <div className="container">
                  <Navbar expand="md" light>
                    <NavbarBrand className="header-brand" href="/">
                      <img src={logo} />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/nutricombo">NutriCombo</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/shop">Shop</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/research">Research</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/contact">Contact us</NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                    <CartWidget
                      dropFromCart={this.props.dropFromCart}
                      cart={this.props.cart}
                    />
                  </Navbar>
                </div>
              </header>
            );
          }}
        </Sticky>
      </div>
    );
  }
}

export default Header;
