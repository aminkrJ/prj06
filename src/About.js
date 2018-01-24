import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import AboutSideMenu from './AboutSideMenu'
import globals from './globals'

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
      {globals.tagline}
            </h3>
            <h5 class="text-center font-weight-light mt-2 mb-0 text-muted">
      {globals.title}
            </h5>
            <hr class="mb-5 w-50 mx-auto" />
          </div>
          <div class="row">
            <div class="col-md-6">
              <p class="lead">
              </p>
              <p class=""><Link class="btn btn-primary text-sm" to="/shop">Our Menu</Link></p>
            </div>
            <div class="col-md-6">
              <ul class="fa-ul list-unstyled mt-4 mt-md-0">
                <li class="mb-4">
                  <h4 class="mb-1 text-slab">
                  </h4>
                </li>
              </ul>
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

export default About
