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
            <p>
      We live in polluted and stressful environments these days. Food is the only protection for our body and mind. Unfortunately, our old eating habits are not effective anymore which leads to lots of modern diseases such as cancer, diabetes, cardiovascular diseases, depression, anxiety and so on. NutriCombo collectin is your ally in fight against fatigue, craving, headaches, poor memory, lack of focus, chronic pains, depression, anxiety, and gut problems.
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
       <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5 order-md-2"><img class="d-block w-270 m-auto"/></div>
          <div class="col-md-7 order-md-1 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2 class="h3 text-slab">Brain enhancer.</h2>
            <p>
      Our human brain needs fuel to make smart decision during a day otherwise we tend to stick to our old habits or what we call it autopilot. That's why it is hard for us discipline ourselves to exercise, be on a diet, stand up in the meetings, make the call and so on.
      </p>
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

      <p>
      </p>
export default About
