import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';
import {render} from 'react-dom';

import Header from './Header';
import Elixirs from './Elixirs';
import About from './About';
import Contact from './Contact';
import Find from './Find';
import Home from './Home';
import Footer from './Footer';
import Product from './Product';
import Thanks from './Thanks';
import Cart from './Cart';
import CheckOut from './CheckOut';
import Confirmation from './Confirmation';
import CustomModal from './Modal';

import './App.css';

var pageTitle = "Elevated superfood smoothies, elixirs and tonics";

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

  renderFeaturedCampaings() {
    return (
      this.state.featuredCampaigns.map((c) => {
        return (
         <div key={c.id} className="col-lg-4 d-lg-flex mb-3">
           <div style={ {backgroundImage: "url(" + c.photo.original + ")", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover"} } className="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b">
             <h2 className="text-white text-uppercase font-weight-bold mb-0 display-4">
               <span>{c.campaign_subscribers_count}</span>
             </h2>
             <p className="text-white text-uppercase mb-0">{c.name}</p>
             <hr className="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary" />
           </div>
         </div>
        )
      })
    )
  }

  renderInactiveCampaigns() {
    var inactiveCamapigns = _.reject(this.state.campaigns, (i) => {
      return i.active === true
    })
    return (
      inactiveCamapigns.map((campaign, index) => {
        return (
          <div key={campaign.id} className="card px-3 py-4 mb-3 row-hover pos-relative">
            <div className="row align-items-center ">
              <div className="col-md-2">
                <h2 className="text-center">{index + 1}</h2>
              </div>
              <div className="col-md-8">
                <h4 className="text-left mb-0">
                  {campaign.name}
                </h4>
                <p className="text-left text-muted mb-2 text-sm">
                  {campaign.short_description}
                </p>
                <p className="text-muted mb-2 text-sm">
                </p>
              </div>
              <div className="col-md-2 text-md-center">
                <a href="#" data-campaign_id={campaign.id} onClick={this.handleSubscribe.bind(this, campaign)} className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Subscribe</a> 
              </div>
            </div>
          </div>
        )
      })
    )
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div className="">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/find_us" component={Find} />
          <Route exact path='/elixirs' component={Elixirs} />
          <Route exact path='/elixirs/:slug' component={Product} />
          <Route exact path="/contact_us" component={Contact} />
          <Route exact path="/order/:slug" component={Cart} />
          <Route exact path="/checkout/:reference_number" component={CheckOut} />
          <Route exact path="/confirmation/:reference_number" component={Confirmation} />
          <Route exact path="/thanks" component={Thanks} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
