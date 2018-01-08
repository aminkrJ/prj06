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
              <div class="col-md-3">
                <AboutSideMenu active={1} />
              </div>
              <div class="col-md-9">
      <div class="p-5 py-lg-6 overlay overlay-op-3 rounded mb-4 mb-lg-0 flex-ew flex-valign clickable-element bg-img blazy-bg b-loaded">
          
              <h2 class="mb-0 text-slab">
                Snack Smart.
              </h2>
              <p class="mb-0">Healthy snacks delivered to your doorstep.</p>
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
Believe in the holistic power of food in healing and enhancing mind, body, and soul? but you cannot find fresh and nutritious meals anywhere or you are busy to make them at home, don't worry, we make them for you.
              </p>
      <p>
We examine healthy nutritious recipes from nutritionists and chefs around the world, we scrutinize all the modern scientific researchers and diets, we categorise and list them based on their benefits and we make and deliver them to your doorstep.
      </p>
              <p class=""><Link class="btn text-sm btn-primary" to="/snacks">Shop Now</Link></p>
      <p>
<span class="font-weight-bold text-slab">NutriCombo</span> is our first raw and plant-based breakfast collection packed with superfoods, functional herbs, probiotics and medicinal mushrooms. <Link class="text-sm" to="/nutricombo">Learn More</Link>
      </p>
            </div>
            <div class="col-md-6">
              <ul class="fa-ul list-unstyled mt-4 mt-md-0">
                <li class="mb-4">
                  <i class="fa-li fa fa-check text-primary"></i> 
                  <h4 class="mb-1 text-slab">
                    You choose your snacks
                  </h4>
                  You choose your healthy snacks and snack plans from nutritionists and chefs.
                </li>
                <li class="mb-3">
                  <i class="fa-li fa fa-check text-primary"></i> 
                  <h4 class="mb-1 text-slab">
                    We make them
                  </h4>
                  We make them for you in our kitchens with premium ingredients and no B.S.
                </li>
                <li>
                  <i class="fa-li fa fa-check text-primary"></i> 
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
