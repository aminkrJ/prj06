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
      tags: [],
      activeCategory: 0,
      activeTag: 0
    }
  }

  componentDidMount() {
    var categories = this.props.products.map((p) => {
      return p.category
    })

    var tags = this.props.products.map((p) => {
      return p.tags
    })

    tags = _.flatten(tags)

    this.setState({
      categories: _.uniq(categories, (i) =>{ return i.id }),
      tags: _.uniq(tags, (i) =>{ return i.id })
    })

    if(this.props.match.params.category_id){
      this.setState({activeCategory: this.props.match.params.category_id * 1})
    }

    if(this.props.match.params.tag_id){
      this.setState({activeTag: this.props.match.params.tag_id * 1})
    }
  }

  renderProducts() {
    var products = this.props.products

    if(this.state.activeCategory !== 0){
      products = _.filter(products, (p) => {
        return(
          p.category.id === this.state.activeCategory
        )
      })
    }else if(this.state.activeTag !== 0){
      products = _.filter(products, (i) => {return i.tags.map((t) => {return t.id}).includes(this.state.activeTag)})
    }

    return products.map((product, index) => {
      return(
        <div key={index} className="col-lg-4">
          <div className="card product-card overlay-hover mb-4">
            <div className="pos-relative">
              <Link to={"/snacks/" + product.slug}>
                <img className="card-img-top img-fluid" src={product.photo.original} alt={product.name} />
              </Link>
              <span class="badge badge-primary product-price-badge pos-absolute pos-t pos-r mt-2 mr-2 persist">${product.price}</span> 
            </div>
            <div className="card-body">
              <small className="text-muted text-uppercase">{product.category.name}</small>
              <Link className="text-grey-dark" to={"/snacks/" + product.slug}>
                <h4 className="text-slab card-title">
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

  renderTags() {
    return this.state.tags.map((tag, index) => {
      return(
        <Link to={"/snacks/tags/" + tag.id} class={classnames("nav-link", {active: this.state.activeTag === tag.id})}>
          <span class="text-slab">{tag.name}</span>
          <small>{tag.short_description}</small>
          <i class="fa fa-angle-right"></i>
        </Link>
      )
    })
  }

  renderCategories() {
    return this.state.categories.map((category, index) => {
      return(
        <li class="nav-item">
          <Link to={"/snacks/categories/" + category.id} class={classnames("nav-link text-center text-uppercase font-weight-bold px-3 px-lg-4 py-2",
            {active: category.id === this.state.activeCategory}
          )}>{category.name}</Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="">
        <PageTitle title="Menu" location={ {title: "Menu", path:"/snacks"} } />
        <div id="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-lg-2">
                <div class="row">
                  <div class="col-lg-6 mb-3 mb-lg-0">
                    <ul class="mb-3 nav nav-pills nav-pills-border-bottom-inside nav-justified flex-row justify-md-content-center">
                      {this.renderCategories()}
                    </ul>
                  </div>
                </div>
                <div className="row">
                  {this.renderProducts()}
                </div>
              </div>
              <div className="mt-5 col-lg-3 order-lg-1">
              <div class="nav-section-menu">
                <div class="nav nav-list">
                 {this.renderTags()}
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
