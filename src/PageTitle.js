import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class PageTitle extends Component {
  render() {
    return (
      <div id="page-header">
        <div class="container clearfix">
          <h3 class="mb-0 float-md-left">
            { this.props.title }
          </h3>
          <nav class="breadcrumb float-md-right"> <Link class="breadcrumb-item" to="/">Home</Link> <span class="breadcrumb-item active">{this.props.title}</span> </nav>
        </div>
      </div>
    )
  }
}

export default PageTitle
