import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';
import {render} from 'react-dom';

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
import Plans from './Plans';
import Product from './Product';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import Blog from './Blog'
import Post from './Post'
import CustomModal from './Modal';

import './App.css';

var pageTitle = "Elevated healthy superfood smoothies, elixirs and tonics"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: ""
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

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/find_us" component={Find} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:slug" component={Post} />
          <Route exact path='/smoothies' component={Smoothies} />
          <Route exact path='/smoothies/:slug' component={Smoothie} />
          <Route exact path='/products/:slug' component={Product} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/order/:slug" component={Cart} />
          <Route exact path="/checkout/:reference_number" component={Checkout} />
          <Route exact path="/confirmation/:reference_number" component={Confirmation} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/plans" component={Plans} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
