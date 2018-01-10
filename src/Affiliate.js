import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames'
import PageTitle from './PageTitle'

class Affiliate extends Component {
  render() {
    return (
      <div className="">
        <PageTitle title="Affiliate program" location={ {title: "Affiliate program", path:"/join"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
            <div class="p-5 py-lg-6 overlay overlay-op-3 rounded mb-4 mb-lg-0 flex-ew flex-valign clickable-element bg-img blazy-bg b-loaded">
              <h2 class="mb-0 text-slab">
                Affiliate referrals made easy
              </h2>
              <p class="mb-0"></p>
              <hr class="hr-lg w-100  hr-primary" />
            </div>

  <div class="row my-5">
    <div class="col-md-6 order-md-2">
      <img src="assets/img/homes/gym-pt-1.jpg" alt="Personal Trainer 1" class="img-fluid border-white border-w-5 w-50 w-md-80 w-lg-60 rounded-circle" />
    </div>
    <div class="col-md-6 flex-valign text-md-right">
      <h3 class="text-slab mt-0 mb-1 text-inverse font-weight-bold">
        Chefs and fitness gurus
      </h3>
      <hr class="hr-primary w-70 ml-0 ml-md-auto mr-md-0 mb-3" />
      <p>Share your recipes online to market your books or your products? Why not make money from that recipe itself with our affiliate program?</p>
      <Link to="/contact" class="text-sm font-weight-bold"><i class="fa fa-chevron-right text-xs "></i> Contact us to learn more</Link>
    </div>
  </div>
  <div class="row my-5">
    <div class="col-md-6 text-md-right">
      <img src="assets/img/homes/gym-pt-2.jpg" alt="Personal Trainer 2" class="img-fluid border-white border-w-5 w-50 w-md-80 w-lg-60 rounded-circle" />
    </div>
    <div class="col-md-6 flex-valign">
      <h3 class="text-slab mt-0 mb-1 text-inverse font-weight-bold">
       Nutritionists
      </h3>
      <hr class="hr-primary w-70 ml-0 mb-3" />
      <p>Design a bundle in our website and share it with your tribe to earn money from each sale by our affiliate program.</p>
      <p></p>
      <Link to="/contact" class="text-sm font-weight-bold"><i class="fa fa-chevron-right text-xs "></i> Contact us to learn more</Link>
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
