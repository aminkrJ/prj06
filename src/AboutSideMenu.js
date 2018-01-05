import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from  'classnames'

class AboutSideMenu extends Component {
  render() {
    return (
      <div class="nav-section-menu">
        <div class="nav nav-list">
          <span class="nav-header">In This Section</span> 
          <Link to="/about" class={classnames("first nav-link", {active: this.props.active === 1})}>
            NutriCombo
            <small>Snack Smart</small>
            <i class="fa fa-angle-right"></i>
          </Link>
          <Link to="/delivery" class={classnames("nav-link", {active: this.props.active === 2})}>
            Delivery
            <small>Same day delivery</small>
            <i class="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default AboutSideMenu
