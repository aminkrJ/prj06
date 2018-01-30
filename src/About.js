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
        <PageTitle title="About" location={ {title: "About", path:"/about"} } />
        <div id="content">
          <div class="container">
            <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
            <h3 class="text-center font-weight-bold my-0 text-slab">
      {globals.title}
            </h3>
            <hr class="mb-5 w-50 mx-auto" />
            <div class="row">
              <div class="col-md-6">
                <p class="lead">
      We design tonics and elixirs to heal and improve your body which eventually leads to high brain and cognitive performance.
                </p>
                <p class="">
      There is a direct connection between what we eat and how we feel. However, our brain constantly makes a new normal for us. We may feel having occasional headaches, joint pain, bloating, brain fog, chronic fatigue, leaky guts, depression, insomnia, being moody, having eczema and acne are normal but it is not. When you put a frog into cold water and turn the heat up, they boil to death. Whereas, when you throw a frog in boiling water, they jump right out. 
</p>
<p>
We all know about our mind-body connection and how our thoughts, beliefs, and stress can impact our biology. But body mind affects is another side of the coin. What we eat,  our sleep, our stress level, our nutrient level,  our gut flora, infections to name a few will change the way our brain function.
</p>
      <Link class="btn btn-primary text-sm" to="/shop">Our Menu</Link>
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
    )
  }
}

export default About
