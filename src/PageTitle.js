import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class PageTitle extends Component {
  render() {
    return (
      <div id="page-header">
        <div className="container clearfix">
          <h3 className="mb-0 float-md-left">{this.props.title}</h3>
          <nav className="breadcrumb float-md-right">
            {' '}
            <Link className="breadcrumb-item" to="/">
              Home
            </Link>{' '}
            <span className="breadcrumb-item active">{this.props.title}</span>{' '}
          </nav>
        </div>
      </div>
    );
  }
}

export default PageTitle;
