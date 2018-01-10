import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames'
import PageTitle from './PageTitle'

class Join extends Component {
  render() {
    return (
      <div className="">
        <PageTitle title="Join us" location={ {title: "Join us", path:"/join"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
            <div class="p-5 py-lg-6 overlay overlay-op-3 rounded mb-4 mb-lg-0 flex-ew flex-valign clickable-element bg-img blazy-bg b-loaded">
              <h2 class="mb-0 text-slab">
                Opportunities are limitless
              </h2>
              <p class="mb-0"></p>
              <hr class="hr-lg w-100 hr-primary" />
            </div>
  <div class="row my-5">
    <div class="col-md-6 order-md-2">
      <img src="assets/img/homes/gym-pt-1.jpg" alt="Personal Trainer 1" class="img-fluid border-white border-w-5 w-50 w-md-80 w-lg-60 rounded-circle" />
    </div>
    <div class="col-md-6 flex-valign text-md-right">
      <h3 class="text-slab mt-0 mb-1 text-inverse font-weight-bold">
        Chefs and cooks
      </h3>
      <hr class="hr-primary w-70 ml-0 ml-md-auto mr-md-0 mb-3" />
      <p>Not only do we enable you to cook without the need to open a costly shopfront but also we manage sales, packaging, labeling, marketing, accounting, distribution and logistics so that you can focus on what you love.</p>
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

export default Join
