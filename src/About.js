import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import AboutSideMenu from './AboutSideMenu'

class About extends Component {
  componentDidMount(){
    document.title = "The journey"
  }

  render() {
    return (
      <div className="">
        <PageTitle title="About" location={ {title: "About", path:"/about"} } />
        <div id="content">
          <div class="container">
            <div class="row">
            <div>
          <div>
            <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 class="text-center font-weight-bold my-0 text-slab">
              Nutrition for top performers
            </h3>
            <h5 class="text-center font-weight-light mt-2 mb-0 text-muted">
            </h5>
            <hr class="mb-5 w-50 mx-auto" />
          </div>
          <div class="row">
            <div class="col-md-6">
              <p class="lead">
      Lifelixir is the resource for plant-sourced alchemy to nourish and elevate body, beauty and consciousness.
              </p>
              <p>
            Lifelixir is the resource for plant-sourced alchemy to nourish and elevate body, beauty and consciousness. We celebrate the unadulterated, exquisite flavors and healing force of raw vegetables, fruits, petals, herbs, roots, nuts and seaweeds as daily nourishment, beauty tools and high-powered natural remedies.
              </p>
              <p>
Our products are not only to taste extraordinary, but also to work synergistically to heal and enhance your beauty, brain, body and spirit at the deepest level.
              </p>
              <p class=""><Link class="btn btn-primary text-sm" to="/shop">Shop now</Link></p>
            </div>
            <div class="col-md-6">
              <ul class="fa-ul list-unstyled mt-4 mt-md-0">
                <li class="mb-4">
                  <h4 class="mb-1 text-slab">
                  </h4>

                </li>
                <li class="mb-3">
                  <h4 class="mb-1 text-slab">
                  </h4>
                </li>
                <li>
                  <h4 class="mb-1 text-slab">
                  </h4>
                </li>
              </ul>
            </div>
  <p>
  </p>

  <p>
  </p>
          </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default About
