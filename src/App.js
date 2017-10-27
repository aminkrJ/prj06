import React, { Component } from 'react';
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';
import {render} from 'react-dom';

import CustomModal from './Modal';

import './App.css';

var pageTitle = "Elevated superfood smoothies, and tonics";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      campaigns: [],
      featuredCampaigns: [],
      activeCampaign: {},
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

  handleDownload(e) {
    e.preventDefault()
    var campaignId = e.target.getAttribute("data-campaign_id")

    this.subscribe(campaignId)
  }

  subscribe(campaignId) {
    NProgress.start()
    axios.post("/campaigns/" + campaignId + "/subscribers", {
      subscriber: {
        email: this.state.email
      }
    })
    .then((response) => {
      NProgress.done()

      iziToast.success({
        position: 'topRight',
        message: "You are subscribed successfully!"
      })

      this.setState({email: ""})
    })
    .catch((error) => {
      NProgress.done()

      iziToast.error({
        position: 'topRight',
        message: "Email " + error.response.data.email[0]
      })
    })
  }

  componentWillMount() {
    document.title = "Life Elixir " + pageTitle;
  }

  componentDidMount() {
    NProgress.start()

    axios.get("/campaigns/")
    .then((response) => {
      NProgress.done()

      this.setState({
        campaigns: response.data,
        activeCampaign: _.find(response.data, (c) => { return c.active === true }),
        featuredCampaigns: _.first(response.data, 3)
      })
    })
    .catch((error) => {
      NProgress.done()
    })
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
    return (
      this.state.campaigns.map((campaign, index) => {
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
        <div id="header">
          <div data-toggle="sticky">
            <div className="header py-1 py-lg-0">
              <div className="header-inner container">
                <div className="header-brand">
                  <a className="header-brand-text header-brand-text-sm" href="#" title="Home">
                    <h1>
                      <span>Life</span>
                      Elixir
                    </h1>
                  </a>
                  <div className="header-divider d-none d-lg-block"></div>
                  <div className="header-slogan text-sm d-none d-lg-block">{pageTitle}</div>
                </div>
                <div className="header-block order-12">
                  <a href="#top" className="btn btn-link btn-icon text-white op-6 header-btn float-right d-lg-none" data-toggle="jpanel-menu" data-target=".navbar-main" data-direction="right"> <i className="fa fa-bars"></i> </a>
                </div>
                <div className="navbar navbar-expand-md">
                  <div className="navbar-main collapse">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="highlighted">
          <div className="main-bg bg-white overlay overlay-gradient-flip overlay-op-8 text-center text-lg-left py-5 py-lg-10 flex-valign">
            <div>
              <div className="container pt-6">
                <h2 className="display-4 text-white mb-3">
                  <span className="font-weight-bold">{this.state.activeCampaign.name}</span>
                </h2>
                <h4 className="text-white">
                  {this.state.activeCampaign.short_description}
                </h4>
                <form className="row mb-2 w-auto w-lg-80 pos-relative align-items-center">
                  <div className="col-lg-9 mb-3">
                    <i className="fa fa-envelope-o text-white icon-2x pos-absolute pos-l mt-2 ml-3 d-none d-lg-block"></i>
                    <input onChange={this.handleEmailChange.bind(this)} className="form-control form-control-lg form-control-transparent form-control-dark text-center text-lg-left pl-lg-5" type="text" placeholder="Email" value={this.state.email} ></input>
                    <hr className="hr-inverse hr-lg mx-auto mt-1 mb-0" />
                  </div>
                  <div className="col-lg-3">
                    <a href="#" data-campaign_id={this.state.activeCampaign.id} onClick={this.handleDownload.bind(this)} className="btn btn-danger btn-rounded btn-lg px-5 py-lg-3 px-lg-5 d-lg-block">Download</a>
                  </div>
                </form>
                <h5 className="text-grey my-0 font-weight-normal">
                  Currently practicing by <span className="font-weight-bold">{this.state.activeCampaign.campaign_subscribers_count} people</span>.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="pt-5 pb-6 bg-white pos-relative pos-zindex-10">
          <div className="container pb-6">
            <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
            <h3 className="text-left text-uppercase mt-0 mb-3">
              Featured <span className="font-weight-bold">Programs</span>
            </h3>
            <div className="row text-left">
              {this.renderFeaturedCampaings()}
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-lg-2 mb-4 mb-lg-0">
              </div>
              <div className="col-lg-9 pull-lg-3 mb-3">
                <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
                <h3 className="text-left mb-3 font-weight-bold text-uppercase">
                  Coming up
                </h3>
                {this.renderInactiveCampaigns()}
              </div>
            </div>
          </div>
        </div>
        
        <footer id="footer" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="text-left mb-0 text-sm">Copyright 2017 &copy; Personalised Nutrition</p>
                <ul className="list-inline footer-links mb-0 text-sm">
                </ul>
              </div>
              <div className="col-md-6 flex-valign">
                <div className="float-md-right ml-md-auto">
                  <a href="https://www.instagram.com/lifelixir" className="btn btn-sm btn-icon btn-inverse btn-rounded mr-1"><i className="fa fa-instagram"></i></a>
                  <a href="https://fb.me/LifeElixirAU" className="btn btn-sm btn-icon btn-inverse btn-rounded mr-1"><i className="fa fa-facebook"></i></a>
                  <a href="#top" className="btn btn-sm btn-icon btn-inverse btn-rounded" title="Back to top"><i className="fa fa-chevron-up"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
