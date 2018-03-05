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
              <div class="col-md-6">
                <p class="lead">
      {globals.description}
                </p>
                <p>Our mission is to help busy professionals feel, think, perform and live better using scientifically proven and pure nutrition. Health is important but going through all studies and researchers is overwhelming. In Life Elixir we collect the best quality ingredients, design tasty smoothie recipes for health and fitness (<Link to="/nutricombo">NutriCombo</Link>) and deliver it to you.</p>
                <p class="">
                                We source our ingredients from premium quality, certified organic, Australian and imported products. We utilize pure, clean and natural ingredients with no preservative, added sugar, added salt, or added fat.
</p>
<p>
               Our formulas not only taste extraordinary but also are effective and science-based designed for busy professionals who love being leaner, stronger and more focused.
</p>
              </div>
              <div class="col-md-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
