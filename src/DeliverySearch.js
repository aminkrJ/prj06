import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import iziToast from 'izitoast';
import axios from 'axios';
import NProgress from 'nprogress';

class DeliverySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: '',
      venues: [],
    };
  }

  handlePostcodeChange(e) {
    this.setState({ postcode: e.target.value });
  }

  handlePostcodeSearch() {
    if (this.state.postcode !== '') {
      NProgress.start();
      axios
        .get('/venues/search?postcode=' + this.state.postcode)
        .then(response => {
          NProgress.done();
          if (response.data.length === 0) {
            iziToast.error({
              position: 'topRight',
              title: 'Sorry!',
              message: 'There is no stockist in your area at the moment.',
            });

            this.setState({
              venues: [],
            });
          } else {
            //list all the venues
            this.setState({
              venues: response.data,
            });
          }
        })
        .catch(error => {
          NProgress.done();
        });
    }
  }

  renderContactUs() {
    var notFound = (
      <span class="text-sm">
        Could not find us in your area? <Link to="/contact">Contact us</Link> we
        make it works.
      </span>
    );
    return this.state.venues.length === 0 ? notFound : null;
  }

  renderVenues() {
    return this.state.venues.map((venue, index) => {
      return (
        <div class="card px-3 py-4 mb-3">
          <div class="row align-items-center">
            <div class="col-md-2">
              <img src={venue.logo.medium} class="rounded-circle img-padded" />
            </div>
            <div class="col-md-7">
              <h4 class="text-capitalize mb-0">{venue.title}</h4>
              <p class="text-muted mb-2 text-sm">{venue.short_description}</p>
              <p class="text-muted mb-2 text-sm">
                <span class="d-block d-md-inline">
                  <i class="fa fa-map-marker" /> {venue.suburb}
                </span>
                <span class="d-block d-md-inline">
                  <i class="fa fa-phone ml-md-3" /> {venue.phone}
                </span>
              </p>
            </div>
            <div class="col-md-3 text-md-center">
              <a
                target="_blank"
                href={
                  'https://www.google.com/maps/search/?api=1&query=' +
                  encodeURIComponent(venue.address)
                }
                class="btn btn-danger text-uppercase font-weight-bold d-lg-block"
              >
                Get Direction
              </a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div class="">
        <p>Enter your postcode below to find stockists in your area.</p>
        <div class="row justify-content-center mt-3">
          <div class="col-lg-8">
            <i class="fa fa-search icon-2x pos-absolute pos-l mt-2 ml-3 d-none d-lg-block" />
            <input
              onChange={this.handlePostcodeChange.bind(this)}
              class="form-control form-control-lg form-control-transparent text-center text-lg-left pl-lg-5"
              type="text"
              placeholder="Postcode"
            />
            <hr class="hr-inverse hr-lg mx-auto mt-1 mb-2" />
          </div>
          <div class="col-lg-4">
            <input
              type="button"
              value="Find"
              class="btn btn-secondary btn-rounded btn-lg px-5 py-lg-3 px-lg-5"
              onClick={this.handlePostcodeSearch.bind(this)}
            />
          </div>
        </div>
        <div class="text-left mt-3">{this.renderVenues()}</div>
        {this.renderContactUs()}
      </div>
    );
  }
}

export default DeliverySearch;
