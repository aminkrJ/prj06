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

  componentDidMount() {
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
        {this.renderLocations()}
      </div>
    )
  }
}

export default Find
