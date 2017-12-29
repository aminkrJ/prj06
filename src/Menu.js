import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames'
import PageTitle from './PageTitle'
import api from './Api.js'
import NProgress from 'nprogress';
import _ from 'underscore';
import AddToCartButton from './AddToCartButton.js'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      categories: [],
      activeCategory: 0
    }
  }

  fetchRecipesInCategory(category_id) {
    NProgress.start()

    api.get("/products", {
      params: category_id === 0 ? {} : { product_category_id: category_id}
    })
    .then((response) => {
      NProgress.done()

      this.setState({
        products: response.data,
        activeCategory: category_id
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id){
    var category_id = parseInt(nextProps.match.params.id) || 0
    this.fetchRecipesInCategory(category_id)
    }
  }

  componentDidMount() {
    var category_id = parseInt(this.props.match.params.id) || 0
    this.fetchRecipesInCategory(category_id)

    NProgress.start()
    api.get("/product_categories")
    .then((response) => {
      NProgress.done()

      this.setState({
        categories: response.data,
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  renderProducts() {
    return this.state.products.map((product, index) => {
      return(
        <div key={index} className="col-lg-4">
          <div className="card product-card overlay-hover mb-4">
            <div className="pos-relative">
              <Link to={"/menu/" + product.slug}>
                <img className="card-img-top img-fluid" src={product.photo.original} alt={product.name} />
              </Link>
              <span class="badge badge-primary product-price-badge pos-absolute pos-t pos-r mt-2 mr-2 persist">${product.price}</span> 
            </div>
            <div className="card-body">
              <small className="text-muted text-uppercase">{product.category}</small>
              <Link className="text-grey-dark" to={"/menu/" + product.slug}>
                <h4 className="card-title">
                  {product.name}
                </h4>
              </Link>
              <p class="text-muted"><small>{product.short_description}</small></p>
              <p className="card-text"></p>
            </div>
            <div class="card-footer">
              <div class="mt-auto">
                <AddToCartButton dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} class="btn btn-primary btn-sm" product={product} />
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  componentDidUpdate(prevProps, prevState) {
  }

  renderCategories() {
    return this.state.categories.map((category, index) => {
      return(
        <Link to={"/menu/categories/" + category.id} class={classnames("nav-link", {active: this.state.activeCategory === category.id})}>
          {category.name}
          <small>{category.short_description}</small>
          <i class="fa fa-angle-right"></i>
        </Link>
      )
    })
  }

  render() {
    return (
      <div className="">
        <PageTitle title="Menu" location={ {title: "Menu", path:"/menu"} } />
        <div id="content" className="py-3 py-lg-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-lg-2">
                <div className="row">
                  {this.renderProducts()}
                </div>
              </div>
              <div className="col-lg-3 order-lg-1">

              <div class="nav-section-menu">
                <div class="nav nav-list">
                  <Link to="/menu" class={classnames("nav-link first", {active: this.state.activeCategory === 0})}>
                    All items
                    <small>Carefully crafted</small>
                    <i class="fa fa-angle-right"></i>
                  </Link>
      {this.renderCategories()}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
