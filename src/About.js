import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import AboutSideMenu from './AboutSideMenu'
import globals from './globals'

class About extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div className="">
        <PageTitle title="About us" location={ {title: "About us", path:"/about"} } />
        <div id="content">
          <div class="container">
            <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 class="text-center font-weight-bold my-0 text-slab">
      {globals.about.title}
            </h3>
            <hr class="mb-5 w-50 mx-auto" />
            <div class="row">
              <div class="col">
                <p class="lead">
      {globals.description}
                </p>
                <p>{globals.about.p1}</p>
                <p class='lead'>{globals.about.title2}</p>
                <p class="">
      {globals.about.p2}
</p>
    <p class='lead'>{globals.about.title3}</p>
                <p class="">
      {globals.about.p3}
</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
