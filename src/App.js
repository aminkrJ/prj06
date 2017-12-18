import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';
import {render} from 'react-dom';
import { StickyContainer, Sticky } from 'react-sticky';

import Header from './Header';
import Smoothies from './Smoothies';
import About from './About';
import Contact from './Contact';
import Find from './Find';
import Home from './Home';
import Footer from './Footer';
import Smoothie from './Smoothie';
import Thanks from './Thanks';
import Cart from './Cart';
import Bundle from './Bundle';
import Product from './Product';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import Blog from './Blog'
import Post from './Post'
import Delivery from './Delivery'
import CustomModal from './Modal';

import './App.css';

var pageTitle = "Healthy smoothies packed with superfoods, functional herbs, and medicinal mushrooms"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      menu: [],
      bundles: [],
      recipes: []
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

  fetchRecipes() {
    NProgress.start()

    axios.get("/recipes/")
    .then((response) => {
      NProgress.done()

      this.setState({
        recipes: response.data
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  fetchProducts() {
    NProgress.start()

    axios.get("/products/")
    .then((response) => {
      NProgress.done()

      this.setState({
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
    this.fetchRecipes()
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
        <Header />
        <div className="">
          <Route exact path="/" component={() => <Home bundles={this.state.bundles} menu={this.state.menu} recipes={this.state.recipes}/>} />
          <Route exact path="/about" component={About} />
          <Route exact path="/find_us" component={Find} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:slug" component={Post} />
          <Route exact path='/smoothies' component={Smoothies} />
          <Route exact path='/smoothies/:slug' component={Smoothie} />
          <Route path='/smoothies/categories/:id' component={Smoothies} />
          <Route exact path='/products/:slug' component={Product} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/order/:slug" component={Cart} />
          <Route exact path="/checkout/:reference_number" component={Checkout} />
          <Route exact path="/confirmation/:reference_number" component={Confirmation} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/bundles" component={() => <Bundle products={this.state.bundles}/>} />
        </div>
        <Footer products={this.state.menu} recipes={this.state.recipes}/>
        </StickyContainer>
      </div>
    );
  }
}

export default App;
