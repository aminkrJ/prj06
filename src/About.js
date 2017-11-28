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
                      Smoothies
                      <small>Carefully crafted</small>
                      <i class="fa fa-angle-right"></i>
                    </Link>
                    <Link to="/delivery" class="nav-link">
                      Delivery
                      <small>Now or next day delivery</small>
                      <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <p class="lead">The happiness of your life depends on the quality of your thoughts and the quality of your thoughts depend on the food you eat every moment of your life. </p>
                <p>Every piece of food changes your physiology in cellular level which will effects your thoughts and consequently the actions you take in a daily basis and the reality you make. </p><p>Fernando Gómez-Pinilla, a UCLA professor of neurosurgery and physiological science who has spent years studying the effects of food, exercise and sleep on the brain, analyzed more than 160 studies about food’s effect on the brain; the results of his analysis described <a href="https://www.nature.com/articles/nrn2421">influences of dietary factors on neuronal function and on brain health and mental function</a>.</p>
                <h4>Carefully Crafted</h4>
                <p>We have harnessed the power of organic fruits and vegetables, superfoods, functional herbs and <a href="https://www.lifelixir.com.au/blog/the-healing-power-of-medicinal-mushrooms">medicinal mushrooms</a> to bring pioneering drinks for you. Our smoothies offer more diverse flavours using natural ingredients only, providing consumers with new and amazing experiences. Life Elixir is all about quality, care, passion, great ingredients, effectiveness and most importantly pronounced flavours.
</p>
  <p><b>Homemade nuts milk.</b> Unfortunately, in milk industry, there are many questionable additives to the both plant-based and cow's milks which brought us to make a clean homemade plant-based milk for our smoothies. Our process is simple. We mix activated nuts - almond, walnuts, and macadamia - with right balance of fat and protein and electrolyte-enhanced water and blend it. Then, we follow a double extraction process to produce our milk.</p>
                <p>Electrolytes, natural cognitive compounds, antioxidants, live enzymes, vitamin and minerals are essentials which can be traced in every single <Link to="/smoothies">LifeElixir drinks</Link>. That’s why we believe integrating LifeElixir to your diet is imperative to an individual health and happiness.
</p>
                <h4 class="mt-4">
      Suitable for all diets
                </h4>
                <p>
      We use all plant-based ingredints in making our smoothies thus it is suitable for <a href="https://en.wikipedia.org/wiki/Veganism">Vegan diet</a>. Besides, no chemicals or preservatives in our smoothies. With less carbs and more in healthy fats and protein it is a perfect meal for people with <Link to="https://en.wikipedia.org/wiki/Paleolithic_diet">Paleo diet</Link> and <Link to="https://en.wikipedia.org/wiki/Ketogenic_diet">Ketogenic diet</Link>. Moreover, we rather our water to be purified, electrolyte-enhanced and alkaline.
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
