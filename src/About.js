import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'

class About extends Component {

  render() {
    return (
      <div className="">
        <PageTitle title="About Us" location={ {title: "About Us", path:"/about"} } />
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="nav-section-menu">
                  <div class="nav nav-list">
                    <span class="nav-header">In This Section</span> 
                    <Link to="/about" class="nav-link first active">
                      Our smoothies
                      <small>Carefully crafted</small>
                      <i class="fa fa-angle-right"></i>
                    </Link>
                    <Link to="/delivery" class="nav-link">
                      Delivery
                      <small>Menu or bundles</small>
                      <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <p class="lead">The happiness of your life depends on the quality of your thoughts and the quality of your thoughts depend on the food you eat every moment of your life. </p>
                <p>Scientific studies have shown the effect of food on developing brain neurons and enhancing cognitive functions (<a href="https://www.nature.com/articles/nrn2421">1</a>). Every piece of food changes your physiology in cellular level which will effects your thoughts and consequently the actions you take in a daily basis and subsequently our realities.</p>
                <h4>Carefully Crafted</h4>
                <p>We have harnessed the power of organic fruits and vegetables, superfoods, functional herbs and <a href="https://www.lifelixir.com.au/blog/the-healing-power-of-medicinal-mushrooms">medicinal mushrooms</a> to bring pioneering drinks for you. Our smoothies offer more diverse flavors using natural ingredients only, providing consumers with new and amazing experiences. LifeElixir is all about quality, care, passion, great ingredients, effectiveness and most importantly pronounced flavors.
</p>
  <p><b>Homemade almond milk.</b> We make our pure almond milk from organic or insecticide free almonds along with electrolyte-enhanced water.</p>
                <h4 class="mt-4">
      Suitable for all diets
                </h4>
                <p>
      We use all plant-based ingredients in making our smoothies thus it is suitable for <a href="https://en.wikipedia.org/wiki/Veganism">vegans</a>. Besides, no chemicals or preservatives in our smoothies. With fewer carbs and more in healthy fats and protein, it is a perfect meal for people with <Link to="https://en.wikipedia.org/wiki/Paleolithic_diet">Paleo diet</Link> and <Link to="https://en.wikipedia.org/wiki/Ketogenic_diet">Ketogenic diet</Link>. 
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
