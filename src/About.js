import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import AboutSideMenu from './AboutSideMenu'

class About extends Component {

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
<div class="container padding-bottom-2x mb-2">
        <div class="row align-items-center padding-bottom-2x">
          <div class="col-md-5"><img class="d-block w-270 m-auto"/></div>
          <div class="col-md-7 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2 class="h3 text-slab">NutriCombo.</h2>
            <p>Tired of excessive fatigue, headaches, poor memory, lack of focus, chronical pains, and gut problems we have harnessed the power of organic fruits and vegetables, superfoods, functional herbs and medicinal mushrooms to make our pioneering raw healthy homemade meals with pronounced flavor. </p>
            <p>
            </p>
          </div>
        </div>
        <hr />
        <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5 order-md-2"><img class="d-block w-270 m-auto" /></div>
          <div class="col-md-7 order-md-1 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2 class="h3 text-slab">Weight loss.</h2>
            <p>Our meals have been designed to have low carbs and high in healthy fats. When you overload your body with fats and take away carbohydrates, it will begin to burn ketones, breakdown of fats in the liver, as the primary energy source. Optimal ketone levels offer many health, weight loss, physical and mental performance benefits.</p>
          </div>
        </div>
        <hr />
        <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5"><img class="d-block w-270 m-auto" /></div>
          <div class="col-md-7 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2 class="h3 text-slab">Probiotics & live culture.</h2>
            <p class="mb-4"> Probiotics are live microorganisms. When taken in sufficient amounts, they can help restore the natural balance of gut bacteria. As a result, health benefits may follow. NutriCombo benefits from a layer of beautiful yogurt with live culture to help with your gut health.</p>
          </div>
        </div>
        <hr />
       <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5 order-md-2"><img class="d-block w-270 m-auto"/></div>
          <div class="col-md-7 order-md-1 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2 class="h3 text-slab">Raw foods.</h2>
            <p>While you might think otherwise, cooked foods are usually harder to digest than raw foods, plus cooking nutrient-dense foods tends to destabilize some of their valuable enzymes and destroy certain antioxidants and vitamins. Raw foods also help alkalize the body, reduce acidity, and have less of a chance of fermenting in the gut and causing inflammation/autoimmune reactions. While it is good for all of us, but some people who can especially benefit from eating raw foods are those with cancer, heart disease and high blood pressure.</p>
          </div>
        </div>
        <hr />
        <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5"><img class="d-block w-270 m-auto" /></div>
          <div class="col-md-7 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2 class="h3 text-slab">Healing and anti-aging agents.</h2>
            <p class="mb-4">Air pollution, alcohol intake, toxins, high blood sugar, stress, and so on promote the excessive free radical formation and oxidative stress which can sometimes lead to cell death.  Antioxidant in our NutriCombo collection will help our body to fight against excessive free radicals.</p>
          </div>
        </div>
        <hr />
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
