import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';
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
          <Sticky relative={false}>
      {
        ({
              style,
              // the following are also available but unused in this example 
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
        }) => {
          return (
            <header class="header" style={style}>
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
                        <NavLink href="/about_us">About</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/smoothies">Smoothies</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/blog">Blog</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/contact">Contact Us</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="btn btn-primary text-white" href="/bundles">Shop</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            </header>
          )
        }
      }
    </Sticky>

      </div>
    )
  }
}

export default Header
