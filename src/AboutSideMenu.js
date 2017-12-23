import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from  'classnames'

class AboutSideMenu extends Component {
  render() {
    return (
      <div class="nav-section-menu">
        <div class="nav nav-list">
          <span class="nav-header">In This Section</span> 
          <Link to="/our_smoothies" class={classnames("first nav-link", {active: this.props.active === 1})}>
            Our smoothies
            <small>Carefully crafted</small>
            <i class="fa fa-angle-right"></i>
          </Link>
          <Link to="/delivery" class={classnames("nav-link", {active: this.props.active === 2})}>
            Delivery info
            <small>Next day delivery</small>
            <i class="fa fa-angle-right"></i>
          </Link>
          <Link to="/about_us" class={classnames("nav-link", {active: this.props.active === 3})}>
            About us
            <small>Our mission</small>
            <i class="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default AboutSideMenu
