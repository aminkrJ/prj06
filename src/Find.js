import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import iziToast from 'izitoast';
import NProgress from 'nprogress';
import PageTitle from './PageTitle';
import DeliverySearch from './DeliverySearch';

class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: '',
      locations: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div class="container">
        <div class="row my-5">
          <div class="col-lg-7">
            <hr class="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
            <h3 class="mb-3 font-weight-bold text-uppercase">Find Us</h3>
            <DeliverySearch />
          </div>
          <div class="col-lg-5">
            <hr class="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
            <h3 class="mb-3 font-weight-bold text-uppercase">Events</h3>
            <ul class="list-timeline list-timeline-primary">
              <li
                class="list-timeline-item show p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column"
                data-toggle="collapse"
                data-target="#day-1-item-2"
              >
                <p class="my-0 text-dark flex-fw text-sm text-uppercase">
                  <span
                    class="text-primary font-weight-bold op-8"
                    data-animate="flash"
                    data-animate-infinite="1"
                    data-animate-duration="3.5"
                  />{' '}
                  - JL Parties
                </p>
                <p
                  class="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8 show"
                  id="day-1-item-2"
                >
                  {' '}
                  Newtown Neighbourhood Centre /{' '}
                  <span class="text-primary">10th Feb</span>{' '}
                </p>
              </li>

              <li
                class="list-timeline-item show p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column"
                data-toggle="collapse"
                data-target="#day-1-item-2"
              >
                <p class="my-0 text-dark flex-fw text-sm text-uppercase">
                  <span
                    class="text-primary font-weight-bold op-8"
                    data-animate="flash"
                    data-animate-infinite="1"
                    data-animate-duration="3.5"
                  />{' '}
                  - Sydney Vegan Market
                </p>
                <p
                  class="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8 show"
                  id="day-1-item-2"
                >
                  {' '}
                  Sydney Vegan Market /{' '}
                  <span class="text-primary">19th Dec</span>{' '}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Find;
