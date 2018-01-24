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

We believe food is the secret to shape our reality. However, in our busy lifestyle, it is difficult to have a meal program let alone sticking to it. Moreover, restaurants cannot be designed to fulfill various dietary requirments.
              </p>
      <p>
In lifelixir, we found this growing need and we built an integrated menu for various dietary requirements like enhancing memory and focus, boosting endurance, expanding consciousness, losing weight, detoxing body, having a healthy pregnancy, having healthy skin, and having a healthy gut and we made it available in your favorite restaurants in your vicinity.
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
