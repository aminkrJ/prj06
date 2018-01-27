import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Helmet} from "react-helmet"

import { fetchProducts } from './actions/productsActions'
import globals from './globals'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: this.props.products.entities
    })
  }

  renderTags(product) {
    return (
      product.tags.map((tag) => {
        return (
          <span class='p-2 mr-1 font-weight-light badge badge-primary'>
            {tag.name}
          </span>
        )
      })
    )
  }
  renderIngredients(product) {
    return (
      product.ingredients.map((ingredient) => {
        return (
          <span class='font-weight-light mr-1'>
            {ingredient.name}
          </span>
        )
      })
    )
  }

  renderProducts(cluster) {
    return (
      this.state.products.map((product, index) => {
        return (
          <div class='col-sm-4'>
          <div key={index} class="card product">
            <div class='card-body'>
            <span class="text-xs text-primary text-uppercase">{product.category.name}</span>
            <div class='card-title'>
            <h4 class='text-uppercase'>{product.name} </h4>
            </div>
            <div class='card-subtitle'>
            <p class="text-muted">{product.short_description}</p>
            </div>
            <p class='text-sm'>
              {this.renderIngredients(product)}
            </p>
            <p class='text-sm'>
              {this.renderTags(product)}
            </p>
            </div>
          </div>
          </div>
        )
      })
    )
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div class="container">
        <Helmet>
          <title>{globals.title}</title>
          <meta name="description" content={globals.description}/>
          <meta name="keywords" content={globals.keywords}/>
        </Helmet>
      <p class='lead'>{globals.description}</p>
      <h3 class="text-uppercase">Menu</h3>
      <div class="row">
        <div class="row">
        {this.renderProducts()}
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts,
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
