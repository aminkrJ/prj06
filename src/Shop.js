import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet"
import classnames from 'classnames'
import _ from 'underscore';
import {render} from 'react-dom';

import globals from './globals'
import Modal from './Modal'
import Subscribe from './Subscribe'

import Banner from './img/banner.jpg'

class Shop extends Component {
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
          <div style={{border: 0}} className="card product-card overlay-hover mb-4">
          {product.before_discount_price !== 0 ? <div class='card-ribbon card-ribbon-top card-ribbon-left bg-danger text-white text-uppercase'>On Sale</div> : null}
            <div className="pos-relative">
              <Link to={'/shop/' + product.slug}>
        <img src={product.photo.original} class='img-fluid'/>
              </Link>
            </div>
            <div className="card-body">
              <small class='text-muted text-uppercase'>{product.category.name}</small>
              <Link to={'/shop/' + product.slug}>
              <h5 className="text-black text-uppercase card-title">
                {product.name}
              </h5>
              </Link>
{product.before_discount_price !== 0 ? <span> <del class='text-danger'>${product.before_discount_price}</del> / </span> : null}
                ${product.price}
              <p style={{"line-height": "1em"}}><small>{product.short_description}</small></p>
              <p className="card-text">
      {this.renderIngredients(product)}
        </p>
            </div>
          </div>
        </div>
      )
    })
  }

  renderIngredients(product) {
    return(
      <div class="text-xs text-muted">
        {product.ingredients.map((i) => {return i.name}).join(', ')}
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
  }

  handleDiscount(e) {
    e.preventDefault()

    render(
      <Modal title="Newsletter">
<p class='text-sm'><span class="font-weight-bold text-uppercase">Receive 20% off your first order</span> Plus be the first to know about our exclusive offers and deals, special events, and product releases!</p>
        <Subscribe />
      </Modal>
      , document.getElementById('modal')).toggle()

  }

  renderTags() {
    return this.state.tags.map((tag, index) => {
      return(
        <Link to={"/shop/tags/" + tag.id} class={classnames("nav-link", {active: this.state.activeTag === tag.id})}>
          <span class="text-uppercase text-sm">{tag.name}</span>
          <small class="text-capitalize">{tag.short_description}</small>
          <i class="fa fa-angle-right"></i>
        </Link>
      )
    })
  }

  renderTagInfo() {
    var activeTag = this.state.activeTag
    if(activeTag === 0){
      return (
        <div></div> 
      )
    }else{
      var tag = _.find(this.state.tags, (t) => {return t.id === activeTag})
      if(tag){
      return (
        <div class='col-12 text-center'>
          <h4 class='text-uppercase'>{tag.name}</h4>
          <h5 class='text-center font-weight-light mt-2 mb-0 text-muted'>{tag.short_description}</h5>
          <p dangerouslySetInnerHTML={{__html: tag.description}} />
          <hr />
        </div>
      )
      }
    }
  }

  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 order-lg-2">
              <div className="row">
                {this.renderTagInfo()}
                {this.renderProducts()}
            <div class="row no-gutters text-center mb-4">
            </div>

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
    )
  }
}

Shop.defaultProps = {
  products: [],
}

export default Shop

