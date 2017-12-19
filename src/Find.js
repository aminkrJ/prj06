import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import iziToast from 'izitoast';
import NProgress from 'nprogress';
import PageTitle from './PageTitle'

class Find extends Component {

  constructor(props) {
    super(props)
    this.state = {
      postcode: "",
      locations: []
    }
  }

  handlePostcodeChange(e) {
    this.setState({postcode: e.target.value})
  }

  handleSearch(e) {
    NProgress.start()

    axios.get("/dropoff_locations/search?postcode=" + this.state.postcode)
    .then((response) => {
      NProgress.done()
      if(response.data.length == 0){
        iziToast.error({
          position: 'topRight',
          message: `Unfortunately, we do not deliver to ${this.state.postcode} at the moment.`
        })
      }
      this.setState({
        locations: response.data
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  renderSearchHeader() {
    if (this.state.locations.length > 0){
      return (
        <hr class="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
      )
    }
  }

  renderLocations(){
    return this.state.locations.map((location, index) => {
      return (
                <div class="card px-3 py-4 mb-3 row-hover pos-relative">
                  <div class="row align-items-center ">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-8">
                      <h4 class="mb-0">
                        {location.title}
                      </h4>
                      <p class="text-muted mb-2 text-sm">
                        <span class="d-block d-md-inline"><i class="fa fa-map-marker"></i> {location.suburb}</span>
                      </p>
                    </div>
                    <div class="col-md-2 text-md-center">
                      <a href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(location.address)} class="btn btn-danger text-uppercase font-weight-bold d-lg-block">Map</a> 
                    </div>
                  </div>
                </div>
      )
    })
  }

  render() {
    return (
      <div className="">
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="display-4 mb-3">
                  Find your <span class="font-weight-bold">Local stockist</span>
                </h2>
      <p>You can pick up your smoothies from selected venues in Sydney.</p>
                <form class="row mb-2 w-auto w-lg-80 pos-relative align-items-center">
                  <div class="col-lg-9 mb-3">
                    <i class="fa fa-search icon-2x pos-absolute pos-l mt-2 ml-3 d-none d-lg-block"></i>
                    <input onChange={this.handlePostcodeChange.bind(this)} class="form-control form-control-lg form-control-transparent text-center text-lg-left pl-lg-5" type="text" placeholder="Postcode e.x 2072"></input>
                    <hr class="hr-inverse hr-lg mx-auto mt-1 mb-0" />
                  </div>
                <div class="col-lg-3">
                  <input type="button" value="Search" class="btn btn-inverse btn-rounded btn-lg px-5 py-lg-3 px-lg-5 d-lg-block" onClick={this.handleSearch.bind(this)}></input> 
                </div>
                <h5 class="text-sm my-2 mx-3 font-weight-normal">
                  <Link to="delivery">You can buy our smoothies from selected stores in NSW. </Link>
                </h5>
                </form>
              </div>
              <div class="col-md-3">
                <div class="nav-section-menu">
                </div>
              </div>
              <div class="col-md-9">
                {this.renderSearchHeader()}
      {this.renderLocations()}
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default Find
