import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NProgress from 'nprogress';
import _ from 'underscore';
import { StickyContainer, Sticky } from 'react-sticky';

import { reset, addToCart, removeFromCart, dropFromCart } from './actions/cartActions';
import { fetchProducts } from './actions/productsActions';

import Header from './Header';
import Legal from './Legal';
import Contact from './Contact';
import Find from './Find';
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
import NutriCombo from './NutriCombo';
import Join from './Join';
import Affiliate from './Affiliate';
import MenuItem from './MenuItem';
import api from "./Api.js"

import './App.css';

var pageTitle = "| Nutrition for top performers"

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
    document.title = "Life Elixir " + pageTitle;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: this.props.products.entities,
      bundles: _.filter(this.props.products.entities, (p) => {return p.category.name === "Bundles"}),
      menu: _.filter(this.props.products.entities, (p) => {return p.category.name !== "Bundles"}),
    })
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div className="App">
        <div className="header-upper">
          <div className="header-inner container">
            <div className="header-block-flex order-1 mr-auto">
              <nav className="text-xs rounded p-1 mb-1 mb-lg-0 ">
      <i class="fa fa-truck" style={{fontSize: '1.3em'}}></i> &nbsp; Free delivery on orders over $50. Use code <span class="font-weight-bold">FDO50DF0</span>
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
          <Route exact path='/shop' component={(props) => <Menu {...props} products={this.state.products} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/shop/categories/:category_id' component={(props) => <Menu {...props} products={this.state.products} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/shop/tags/:tag_id' component={(props) => <Menu {...props} products={this.state.products} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} /> } />
          <Route exact path='/shop/:slug' component={(props) => <MenuItem {...props} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart}/>} />
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
