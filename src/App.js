import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NProgress from 'nprogress';
import axios from 'axios';
import _ from 'underscore';
import {render} from 'react-dom';
import { StickyContainer, Sticky } from 'react-sticky';

import { addToCart, removeFromCart, dropFromCart } from './actions/cartActions';

import Header from './Header';
import Legal from './Legal';
import OurSmoothies from './OurSmoothies';
import Contact from './Contact';
import Find from './Find';
import Home from './Home';
import Footer from './Footer';
import Thanks from './Thanks';
import Cart from './Cart';
import Product from './Product';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import Blog from './Blog'
import Post from './Post'
import Delivery from './Delivery'
import Company from './Company'
import CustomModal from './Modal'
import Menu from './Menu';
import MenuItem from './MenuItem';

import './App.css';

var pageTitle = "Healthy smoothies packed with superfoods, functional herbs, and medicinal mushrooms"

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

  handleSubscribe(campaign, e) {
    e.preventDefault()

    render(
      <CustomModal campaign={campaign} onSubscribe={this.subscribe.bind(this)} onEmailChange={this.handleEmailChange.bind(this)} />
      , document.getElementById('modal')).toggle()
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  componentWillMount() {
    document.title = "Life Elixir, " + pageTitle;
  }

  fetchProducts() {
    NProgress.start()

    axios.get("/products/")
    .then((response) => {
      NProgress.done()

      this.setState({
        products: response.data,
        bundles: _.filter(response.data, (r) => {return r.primary === true}),
        menu: _.filter(response.data, (r) => {return r.primary === false})
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  componentDidMount() {
    this.fetchProducts()
  }

  render() {
    return (
      <div className="App">
        <div className="header-upper">
          <div className="header-inner container">
            <div className="header-block-flex order-1 mr-auto">
              <nav className="nav nav-sm header-block-flex">
              </nav>
              <div className="dropdown dropdowns-no-carets">
              </div>
            </div>
            <div className="nav nav-icons header-block order-12">
              <a href="https://www.facebook.com/LifeElixirAU" className="nav-link"> <i className="fa fa-facebook-square icon-1x"></i> <span className="sr-only">Facebook</span> </a>
              <a href="https://www.instagram.com/lifelixir" className="nav-link"> <i className="fa fa-instagram icon-1x"></i> <span className="sr-only">Instagram</span> </a>
              <a href="https://www.youtube.com/channel/UCJ4Hs8y51ixuzRHniphYPNQ" className="nav-link"> <i className="fa fa-youtube-play icon-1x"></i> <span className="sr-only">Instagram</span> </a>
            </div>
          </div>
        </div>
        <StickyContainer>
        <Header dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
        <div className="">
          <Route exact path="/" component={(props) => <Home {...props} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} bundles={this.state.bundles} menu={this.state.menu} products={this.state.products}/>} />
          <Route exact path="/about_us" component={Company} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:slug" component={Post} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={(props) => <Cart {...props} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />} />
          <Route exact path="/checkout/:reference_number" component={(props) => <Checkout {...props} />} />
          <Route exact path="/confirmation/:reference_number" component={Confirmation} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/our_smoothies" component={OurSmoothies} />
          <Route exact path="/legal" component={Legal} />
          <Route path='/menu/categories/:id' component={(props) => <Menu {...props} products={this.state.bundles} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/menu' component={(props) => <Menu {...props} products={this.state.bundles} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/menu/:slug' component={(props) => <MenuItem {...props} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart}/>} />
        </div>
        <Footer products={this.state.bundles}/>
        </StickyContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dropFromCart,
  addToCart,
  removeFromCart
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
