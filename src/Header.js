import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import logo from "./img/logo.png"

class Header extends Component {
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
      <div className="">
        <div className="header-upper">
          <div className="header-inner container">
            <div className="header-block-flex order-1 mr-auto">
              <nav className="nav nav-sm header-block-flex">
              </nav>
              <div className="dropdown dropdowns-no-carets">
              </div>
            </div>
            <div className="nav nav-icons header-block order-12">
              <a href="https://www.facebook.com/LifeElixirAU" className="nav-link"> <i className="fa fa-facebook-square icon-1x"></i> <span className="sr-only">Facebook</span> </a>
              <a href="https://www.instagram.com/lifelixir" className="nav-link"> <i className="fa fa-instagram icon-1x"></i> <span className="sr-only">Instagram</span> </a>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <Navbar expand="md" light>
              <NavbarBrand className="header-brand"><Link className="" to="/"><img src={logo} /></Link></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about">About Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/elixirs">Smoothies</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/find_us">Find Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact_us">Contact Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="btn btn-primary text-white" href="/plans">Shop</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>

      </div>
    )
  }
}

export default Header
