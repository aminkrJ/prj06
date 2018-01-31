import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NProgress from 'nprogress';
import _ from 'underscore';
import { StickyContainer, Sticky } from 'react-sticky';
import {Helmet} from "react-helmet"

import { reset, addToCart, removeFromCart, dropFromCart } from './actions/cartActions';
import { fetchProducts } from './actions/productsActions';

import Header from './Header';
import Legal from './Legal';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import Thanks from './Thanks';
import Cart from './Cart';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import Blog from './Blog'
import Post from './Post'
import Delivery from './Delivery'
import About from './About'
import CustomModal from './Modal'
import Menu from './Menu';
import Shop from './Shop';
import NutriCombo from './NutriCombo';
import Join from './Join';
import Affiliate from './Affiliate';
import MenuItem from './MenuItem';
import ShopItem from './ShopItem';
import Find from './Find';
import api from "./Api.js"
import globals from "./globals.js"

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      products: [],
      bundles: [],
      menu: [],
    }
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: this.props.products.entities,
      bundles: _.filter(this.props.products.entities, (p) => {return p.category.name === "Bundles"}),
      menu: _.filter(this.props.products.entities, (p) => {return p.category.name !== "Bundles" && p.category.name !== "Shop"}),
      shop: _.filter(this.props.products.entities, (p) => {return p.category.name === "Shop"})
    })
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>{globals.title}</title>
          <meta name="description" content={globals.description}/>
          <meta name="keywords" content={globals.keywords}/>
        </Helmet>
        <div className="header-upper">
          <div className="header-inner container">
            <div className="header-block-flex order-1 mr-auto">
              <nav className="text-xs rounded p-1 mb-1 mb-lg-0 ">
              </nav>
            </div>
            <div className="nav nav-icons header-block order-12">
              <a href="https://www.facebook.com/lifelixirnutrition" className="nav-link"> <i className="fa fa-facebook-square icon-1x"></i> <span className="sr-only">Facebook</span> </a>
              <a href="https://www.instagram.com/lifelixirnutrition" className="nav-link"> <i className="fa fa-instagram icon-1x"></i> <span className="sr-only">Instagram</span> </a>
            </div>
          </div>
        </div>
        <StickyContainer>
        <Header dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
        <div className="">
          <Route exact path="/" component={(props) => <Home {...props} 
            dropFromCart={this.props.dropFromCart}
            cart={this.props.cart} addToCart={this.props.addToCart}
            removeFromCart={this.props.removeFromCart}
            bundles={this.state.bundles.slice(0, 3)}
            menu={this.state.menu}
            products={this.state.products}/>} />
          <Route exact path="/about" component={About} />
          <Route exact path="/find_us" component={Find} />
          <Route exact path="/nutricombo" component={NutriCombo} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/affiliate" component={Affiliate} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:slug" component={Post} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={(props) => <Cart {...props} reset={this.props.reset} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />} />
          <Route exact path="/checkout" component={(props) => <Checkout {...props} reset={this.props.reset} cart={this.props.cart} />} />
          <Route exact path="/confirmation/:reference_number" component={Confirmation} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/legal" component={Legal} />
          <Route exact path='/menu' component={(props) => <Menu {...props} products={this.state.menu} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/menu/categories/:category_id' component={(props) => <Menu {...props} products={this.state.menu} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/menu/tags/:tag_id' component={(props) => <Menu {...props} products={this.state.menu} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/menu/:slug' component={(props) => <MenuItem {...props} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart}/>} />
          <Route exact path='/shop' component={(props) => <Shop {...props} products={this.state.shop} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/shop/categories/:category_id' component={(props) => <Shop {...props} products={this.state.shop} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/shop/tags/:tag_id' component={(props) => <Shop {...props} products={this.state.shop} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/shop/:slug' component={(props) => <ShopItem {...props} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart}/>} />
        </div>
        <Footer products={this.state.products}/>
        </StickyContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dropFromCart,
  addToCart,
  removeFromCart,
  fetchProducts,
  reset
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
