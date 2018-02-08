import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NProgress from 'nprogress';
import _ from 'underscore';

import Carousel from './Carousel';
import Process from './Process';
import DeliverySearch from './DeliverySearch'
import AddToCartButton from './AddToCartButton'
import globals from './globals'

import Bowl from './img/sunshine-smoothie-bowl.png'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      postcode: ''
    }
  }

  componentWillMount() {
  }

  handleOrderNow(product, e){
    e.preventDefault()

    this.props.addToCart(product)
    this.props.history.push('/cart')
  }

  renderRecipes(product) {
    return(
      _.sortBy(product.recipes, 'order').map((r, index) => {
        return (
          <ul key={r.id}>
            <span>{r.description} </span>
            {r.title}
          </ul>
        )
      })
    )
  }

  renderBundleItems() {
    return (
      this.props.bundles.map((product, index) => {
        return (
          <div class="card text-center mb-5">
            <h4 class="card-title py-3">
                <span class="text-slab text-black text-capitalize">{product.name}</span>
            </h4>
            <div class="row">
              <div class="col-md-12">
              </div>
            </div>
            <p class="price-banner bg-primary text-white border-primary card-body-overlap">
              <span class="price-currency">$</span>
              <span class="price-digits">{product.price}<span></span></span>
              <span class="price-extra"></span>
            </p>
            <div class="card-body">
              <p class="text-muted">{product.short_description}</p>
              <ul class="text-left list-unstyled list-border-dots">
          {this.renderRecipes(product)}
              </ul>
              <a href="#" class="btn btn-primary btn-block btn-rounded mt-4" onClick={this.handleOrderNow.bind(this, product)}>Order Now</a>
            </div>
          </div>
        )
      })
    )
  }

  renderProducts() {
    var menu = this.props.shop.map((shopItem, index) => {
        return(
          <div class="card border-0" key={index}>
            <Link to={"/shop/" + shopItem.slug}>
              <img src={shopItem.photo.original} className="card-img-top img-fluid" />
            </Link>
            <div class="card-body">
              <Link to={"/shop/" + shopItem.slug}>
                <h4 class="text-slab card-title">{shopItem.name}</h4>
              </Link>
              <p>
                {shopItem.short_description}
              </p>
              <p class="text-xs">
              {shopItem.ingredients.map((i) => {return i.name}).join(', ').replace(/^(.{100}[^\s]*).*/, "$1") + "\n ..."}
              </p>
              <AddToCartButton dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} class="btn btn-primary" product={shopItem} />
            </div>
          </div>
        )
      })

    return (
      <Carousel id="featured-carousel" margin={2} responsive={ {"0": {"items": 1}, "576": {"items": 2}, "768": {"items": 3}, "991": {"items": 4}, "1200": {"items": 4}} }>
      {menu}
      </Carousel>
    )
  }

  renderBundles() {
    return(
      <div class="bg-faded">
        <div class="container">
          <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h3 class="text-center text-slab font-weight-bold my-0">
      Our Bundles
          </h3>
          <h5 class="text-center font-weight-light mt-2 mb-0">
          </h5>
          <hr class="mb-5 w-50 mx-auto" />
          <div class="row pricing-stack">
            <div class="card-group">
              {this.renderBundleItems()}
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderTags(product) {
    return (
      product.tags.map((tag) => {
        return (
          <span class='mb-sm-1 p-2 mr-1 font-weight-light badge badge-primary'>
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
          ingredient.name
        )
      }).join(', ')
    )
  }

  renderUniqTags() {
    var tags = this.props.products.map((p) => {
      return p.tags
    })

    tags = _.uniq(_.flatten(tags), (t) => {return t.id})

    return(
      tags.map((tag) => {
        return (
          <div class="text-sm ml-lg-10 text-secondary">
          <h5 class="mb-1 text-slab"><Link class="text-black" to={"/shop/tags/" + tag.id}>{tag.name}</Link></h5>
          <p class="mb-2">{tag.short_description}</p>
          </div>
        )
      })
    )
  }

  renderProductsInCategory(categoryId) {
    var productsInCatgory = _.filter(this.props.menu, (p) => {return p.category.id === categoryId})

    return (
      productsInCatgory.map((product, index) => {
        return (
          <div class='col-sm-4'>
          <div key={index} class="card product border-0">
            <img src={product.photo.original} class='card-img-top img-fluid'/>
            <div class='card-body'>
            <div class='card-title'>
            <Link class="text-black" to={"/menu/" + product.slug}>
              <h5 class='text-uppercase'>{product.name}</h5>
            </Link>
            </div>
            <div class='card-subtitle'>
            <p class="text-sm text-muted">{product.short_description}</p>
            </div>
            <p class='text-xs'>
              {this.renderIngredients(product)}
            </p>
            <p class='text-sm m-0'>
              {this.renderTags(product)}
            </p>
            </div>
          </div>
          </div>
        )
      })
    )
  }

  renderMenu() {
    if(this.props.menu.length > 0){

    var categories = this.props.menu.map((p) => {
      return p.category
    })

    categories = _.uniq(categories, (i) =>{ return i.id })

    return (
      categories.map((category, index) => {
        return (
          <div key={index} class="col-12">
            <h4 class="text-center text-primary text-uppercase">{category.name}</h4>
            <hr className="mb-2 w-30 mx-auto" />
            <div class="row">
            {this.renderProductsInCategory(category.id)}
            </div>
          </div>
        )
      })
    )
    }
  }

  render() {
    return (
      <div className="">
        <div id="highlighted">
          <div className="bg-white main-bg px-3 py-3 py-lg-5 flex-valign">
            <div class="item">
              <div class="container padding-top-3x">
                <div class="row justify-content-center align-items-center">
                  <div class="col-lg-6 col-md-6 padding-bottom-1x text-md-left text-center">
                    <div class="from-bottom">
                      <h2 class="h4 tp-caption mb-4 pb-1 font-weight-light text-black tagline">
      {globals.description}
                      </h2>
                    </div>
                  </div>
                  <div class="col-md-6 mt-3 mt-md-0 text-center">
      <img src={Bowl} class='img-fluid' style={{width: '60%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="p-0">
          <div class="container">
          <div class="row">
          <div class="col-lg-4 col-xl-5 flex-valign pos-relative">
            <h2 class="text-uppercase my-0 pos-relative z-index-2 text-dark font-weight-bold">
              Effective formulas for health and fitness
            </h2>
            <hr class="hr-primary w-15 hr-xl ml-0 mb-5" />
            <p>We all know about our mind-body connection and how our thoughts, beliefs can impact our biology. Body-mind connection  is another side of the coin. What we eat, our sleep, our nutrient level, our gut flora, infections to name a few will change the way our brain function.</p>
            <p>Our effective formulas are to heal and enhance your beauty, brain, body and spirit at the deepest level.</p>
          </div>
          <div class="col-lg-8 col-xl-7">
            <div class="row no-gutters text-center mb-4">
              <div class="col-md-6 d-lg-flex p-2">
                <div class="py-6 ef-bg-01 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-4 rounded pos-relative">
                  <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
      10X more done
                  </h3>
                  <p class="text-white text-sm mb-0">Unlock your brain potentials</p>
                  <a href="/shop/tags/2" class='text-xs mt-3'>Shop Now</a>
                </div>
              </div>
              <div class="col-md-6 d-lg-flex p-2">
                <div class="py-6 ef-bg-02 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-4 rounded pos-relative" data-bg-img="assets/img/homes/gym-7.jpg" data-url="shop-product.html">
                  <h3 class="text-white my-0 text-uppercase font-weight-bold text-letter-spacing-sm">
      The second brain
                  </h3>
                  <p class="text-white text-sm mb-0">It is smarter than what you think</p>
                  <a href="/shop/tags/5" class='text-xs mt-3'>Shop Now</a>
                </div>
              </div>
              <div class="col-md-6 d-lg-flex p-2">
                <div class="py-6 ef-bg-03 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-4 rounded pos-relative" data-bg-img="assets/img/homes/gym-6.jpeg" data-css='{"background-position":"right bottom"}' data-url="shop-product.html">
                  <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
                    Chakra healing
                  </h3>
                  <p class="text-white text-sm mb-0">Connect to your higher self</p>
                  <a href="/shop/tags/7" class='text-xs mt-3'>Shop Now</a>
                </div>
              </div>
              <div class="col-md-6 d-lg-flex p-2">
                <div class="py-6 ef-bg-04 px-3 flex-valign flex-ew overlay overlay-blue-dark overlay-op-4 rounded pos-relative" data-bg-img="assets/img/homes/gym-1.jpg" data-css='{"background-position":"right bottom"}' data-url="shop-product.html">
                  <h3 class="text-white mb-0 text-uppercase font-weight-bold text-letter-spacing-sm">
      Fat burn
                  </h3>
                  <p class="text-white text-sm mb-0">Pre and post workout nutritions</p>
                  <a href="/shop/tags/9" class='text-xs mt-3'>Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

          <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 className="text-center text-slab font-weight-bold my-0">
    Popular products
            </h3>
          <hr className="mb-2 w-50 mx-auto" />
          <div class="container">
            <div className="row p-3 py-lg-1">
        {this.renderProducts()}
            </div>
          </div>
          <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
          <h3 className="text-center text-slab font-weight-bold my-0">
            Our Menu
          </h3>
            <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
      Now available in cafes and restaurants in your area. <Link to='/find'>Find us.</Link>
            </h5>
          <hr className="mb-2 w-50 mx-auto" />
          <div class="container">
          <div className="row p-3 py-lg-1">
      {this.renderMenu()}
          </div>
          </div>
          <div class="bg-primary bg-op-5 py-4 py-lg-6">
            <h3 className="text-center text-slab font-weight-bold my-0">
     Find Us
            </h3>
            <div className="text-center container py-lg-1 px-lg-10">
              <DeliverySearch />
            </div>
          </div>
          
          <Process />
          <div id="features" className="container">
            <hr className="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 className="text-center text-slab font-weight-bold my-0">
              Why Us?
            </h3>
            <h5 className="text-center font-weight-light mt-2 mb-0 text-muted">
            </h5>
            <hr className="mb-5 w-50 mx-auto" />
            <div className="row text-center">
              <div className="col-lg-4 py-2">
                <h4 className="text-slab mt-2">
                  Freshness
                </h4>
                <p>Fresh ingredients are at the heart of our philosophy</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-slab">
                  Premium Ingredients
                </h4>
                <p>Seasonal, pesticide-free, and certified organic ingredients</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-slab">
                  No Added Sugar
                </h4>
                <p>Enjoy the naturally occurring sweetness of our ingredients</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="text-slab mt-2">
                  No Preservative
                </h4>
                <p>No process or additives to expand the shelf-life</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-slab">
                  Probiotics
                </h4>
                <p>Good bacteria for a healthy gut</p>
              </div>
              <div className="col-lg-4 py-2">
                <h4 className="mt-2 text-slab">
                  Low carbs
                </h4>
                <p>Low carbs and suger, high in healthy fats</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

Home.defaultProps = {
  bundles: [],
  recipes: [],
  shop: []
}

export default Home
