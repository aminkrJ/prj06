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
      There is a direct connection between what we eat and how we feel. We may feel having occasional headaches, joint pains, bloating, brain fogs, chronic fatigues, leaky guts, depression, insomnia, being moody are normal but it is not.
</p>
<p>
We all know about our mind-body connection and how our thoughts, beliefs can impact our biology. Body-mind connection  is another side of the coin. What we eat, our sleep, our nutrient level, our gut flora, infections to name a few will change the way our brain function.
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
