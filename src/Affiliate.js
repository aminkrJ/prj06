import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames'
import PageTitle from './PageTitle'

import nutritionist from './img/nutritionist.png'
import trainer from './img/trainer.png'

class Affiliate extends Component {
  render() {
    return (
      <div className="">
        <PageTitle title="Affiliate program" location={ {title: "Affiliate program", path:"/join"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
  <div class="row my-5">
    <div class="col-md-6 order-md-2">
    </div>
    <div class="col-md-6 flex-valign text-md-right">
      <h3 class="text-slab mt-0 mb-1 text-inverse font-weight-bold">
        Health coaches
      </h3>
      <hr class="hr-primary w-70 ml-0 ml-md-auto mr-md-0 mb-3" />
      <p>We enable you to make money from your online recipes and diet plans with our affiliate program.</p>
      <Link to="/contact" class="text-sm font-weight-bold"><i class="fa fa-chevron-right text-xs "></i> Contact us</Link>
    </div>
  </div>
  <div class="row my-5">
    <div class="col-md-6 text-md-right">
    </div>
    <div class="col-md-6 flex-valign">
      <h3 class="text-slab mt-0 mb-1 text-inverse font-weight-bold">
        Chefs and cooks
      </h3>
      <hr class="hr-primary w-70 ml-0 mb-3" />
      <p>We enable you to make money from your online recipes with our affiliate program.</p>
      <p></p>
      <Link to="/contact" class="text-sm font-weight-bold"><i class="fa fa-chevron-right text-xs "></i> Contact us</Link>
    </div>
  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Affiliate
