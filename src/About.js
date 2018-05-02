import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';
import AboutSideMenu from './AboutSideMenu';
import globals from './globals';

class About extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="">
        <div id="content">
          <div class="container">
            <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 class="text-center my-0 text-uppercase">
              {globals.about.title}
            </h3>
            <hr class="mb-5 w-50 mx-auto" />
            <div class="row">
              <div class="col">
                <p class="lead">{globals.description}</p>
                <p>{globals.about.p1}</p>
                <p>
                  Thoughts and emotions are an emergent property of our biology.
                  To think smarter thoughts and live a happier life, your whole
                  biology - physical, emotional, and chemical - must be changed.
                </p>
                <p class="lead">{globals.about.title2}</p>
                <p class="">{globals.about.p2}</p>
                <p class="lead">{globals.about.title3}</p>
                <p class="">{globals.about.p3}</p>
              </div>
              <div class="col">
                <h4 class="text-uppercase">Effectiveness</h4>
                <p>
                  Not getting the promised result from a healthy product? Not
                  all products created equally, not even close. We are dedicated
                  to find the highest quality ingredients and right dosages to
                  make effective formula for busy professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
