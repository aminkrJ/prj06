import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import AboutSideMenu from './AboutSideMenu'

class About extends Component {
  componentDidMount(){
    document.title = "Healthy snack recipes and plans to your doorstep | Snack Smart"
  }

  render() {
    return (
      <div className="">
        <PageTitle title="About" location={ {title: "About", path:"/about"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
      <div class="p-5 py-lg-6 overlay overlay-op-3 rounded mb-4 mb-lg-0 flex-ew flex-valign clickable-element bg-img blazy-bg b-loaded">
              <h2 class="mb-0 text-slab">
                Nutrition for top performers
              </h2>
              <p class="mb-0">Freshly made healthy superfoods delivered to your doorstep.</p>
              <hr class="hr-lg w-100  hr-primary" />
      </div>
          <div data-animate="fadeIn" data-animate-duration="0.8">
            <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 class="text-center font-weight-bold my-0 text-slab">
              So, how does it work?
            </h3>
            <h5 class="text-center font-weight-light mt-2 mb-0 text-muted">
            </h5>
            <hr class="mb-5 w-50 mx-auto" />
          </div>
          <div class="row">
            <div class="col-md-6" data-animate="fadeIn" data-animate-delay="0.4" data-animate-offset="100%">
              <p class="lead"></p>
              <p>
Life Elixir enables busy professionals eat like millionaires by having personal chef and nutritionist at their disposal.
              </p>
      <p>
It is proven that right foods and develop healthy eating habits can make an individual more focussed, energised and driven which makes food more than just a source of fuel.
      </p>
      <p>
Be one step ahead of the game with freshly made healthy super foods designed with nutritionists and healthy chefs for high performers delivered to your home or office.
      </p>
              <p class=""><Link class="btn text-sm btn-primary" to="/shop">Shop Now</Link></p>
            </div>
            <div class="col-md-6">
              <ul class="fa-ul list-unstyled mt-4 mt-md-0">
                <li class="mb-4">
                  <h4 class="mb-1 text-slab">
                    Choose your bundles
                  </h4>
                    Choose your favorites among various collections and bundles.
                </li>
                <li class="mb-3">
                  <h4 class="mb-1 text-slab">
                    We make them
                  </h4>
                  We make them for you with premium ingredients.
                </li>
                <li>
                  <h4 class="mb-1 text-slab">
                    We deliver them
                  </h4>
                 We deliver them fresh to your doorstep either on the same day or on the following days.
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
