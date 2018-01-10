import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames'
import PageTitle from './PageTitle'

import chef from './img/chef.png'

class Join extends Component {
  render() {
    return (
      <div className="">
        <PageTitle title="Join us" location={ {title: "Join us", path:"/join"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
  <div class="row my-5">
    <div class="col-md-6 order-md-2">
    </div>
    <div class="col-md-6 flex-valign text-md-right">
      <h3 class="text-slab mt-0 mb-1 text-inverse font-weight-bold">
        Aspiring cooks and chefs
      </h3>
      <hr class="hr-primary w-70 ml-0 ml-md-auto mr-md-0 mb-3" />
      <p>We enable you to cook without the need to open a costly shopfront. Furthermore, we manage sales, packaging, labeling, marketing, accounting, distribution and logistics so that you can focus on what you love.
      </p>
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
