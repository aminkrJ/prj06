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
              Restaurants with integrated menu specialised in various dietary requirements, everywhere for everyone!
              </p>
              <p>
Let me tell you a secret. Food and diet plans forge our reality. Yes, it does. That being said, it is not a quick process. it demands time and patience. However, in our busy lifestyle, food is not our first priority or we cannot stick to a dietary plan since it is nearly impossible to make all the meals at home. Moreover, dining out is not an option since today restaurants are designed to serve the public with affordable places. Not you with your personalised dietary plans. As a result, we do not get the result and give up.
              </p>
      <p>
In lifelixir, we found this growing need and we built an integrated menu for various dietary requirements like enhancing memory and focus, boosting endurance, expanding consciousness, losing weight, detoxing body, having a healthy pregnancy, having healthy skin, and having a healthy gut and make it available in selected restaurants.
      </p>
              <p>
               We make the personalised meals readily available everywhere for all dietary requirments.
              </p>
              <p class=""><Link class="btn btn-primary text-sm" to="/shop">Our Menu</Link></p>
            </div>
            <div class="col-md-6">
              <ul class="fa-ul list-unstyled mt-4 mt-md-0">
                <li class="mb-4">
                  <h4 class="mb-1 text-slab">
Food as medicine
                  </h4>
                  <p>
We believe in food as medicine. Our menu is not only to taste extraordinary but also to work synergistically to heal and enhance your beauty, brain, body and spirit at the deepest level.
                  </p>
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
