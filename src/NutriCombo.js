import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet"

import Carousel from './Carousel';
import globals from './globals'

class NutriCombo extends Component {
  renderProducts() {
    var items = this.props.nutricombo.map((nc, index) => {
        return(
          <div class="card border-0" key={index}>
            <Link to={"/menu/" + nc.slug}>
              <img src={nc.photo.original} className="card-img-top img-fluid" />
            </Link>
            <div class="card-body">
              <Link to={"/menu/" + nc.slug}>
                <h4 class="text-slab card-title">{nc.name}</h4>
              </Link>
              <p>
                {nc.short_description}
              </p>
              <p class="text-xs">
              {nc.ingredients.map((i) => {return i.name}).join(', ').replace(/^(.{100}[^\s]*).*/, "$1") + "\n ..."}
              </p>
            </div>
          </div>
        )
      })

    return (
      <Carousel id="featured-carousel" margin={2} responsive={ {"0": {"items": 1}, "576": {"items": 2}, "768": {"items": 3}, "991": {"items": 4}, "1200": {"items": 4}} }>
      {items}
      </Carousel>
    )
  }

  render() {
    return (
      <div class="">
        <Helmet>
          <title>{globals.nutricombo.title}</title>
          <meta name="description" content={globals.nutricombo.description}/>
        </Helmet>
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
<div class="container padding-bottom-2x mb-2">
        <div class="row align-items-center padding-bottom-2x">
          <div class="col-md-6 order-md-1 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h1 class="h2 text-slab">NutriCombo superfood healthy breakfast.</h1>
            <p>
      Looking for healthier and smarter breakfast ideas to start your day? {globals.nutricombo.description}
      </p>
          <p><Link to="./find_us">Now available in selected stores in Sydney.</Link></p>
          </div>
          <div class="col-md-6">
          	<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/KGzT8CMoBQc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	          </div>
          </div>
        </div>
        <hr />
      {this.renderProducts()}
        <hr />
        <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5"><img class="d-block w-270 m-auto" /></div>
          <div class="col-md-7 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2 class="h3 text-slab">Weight loss.</h2>
            <p>
NutriCombo healthy breakfasts are low in carbs and high in healthy fats. When you overload your body with fats and take away carbohydrates, it will begin to burn ketones, the breakdown of fats in the liver, as the primary energy source. Optimal ketone levels offer many health, weight loss, physical and mental performance benefits.
      </p>
          </div>
        </div>
        <hr />
        <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5 order-md-2"><img class="d-block w-270 m-auto" /></div>
          <div class="col-md-7 order-md-1 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2 class="h3 text-slab">Healthy gut.</h2>
            <p class="mb-4">
Probiotics when taken in sufficient amount, can help restore the natural balance of gut bacteria. As a result, health benefits may follow. NutriCombo healthy breakfasts benefits from a layer of beautiful yogurt with live culture to support and enhance the good bacteria in your gut and improve your digestion.
      </p>
          </div>
        </div>
        <hr />
       <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5"><img class="d-block w-270 m-auto"/></div>
          <div class="col-md-7 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2 class="h3 text-slab">
Better digestion.
</h2>
            <p>
NutriCombo healthy breakfasts are raw. While you might think otherwise, cooked foods are usually harder to digest than raw foods, plus cooking nutrient-dense foods tends to destabilize some of their valuable enzymes and destroy certain antioxidants and vitamins. Raw foods also help alkalize the body, reduce acidity, and have less of a chance of fermenting in the gut and causing inflammation/autoimmune reactions.
      </p>
          </div>
        </div>
        <hr />
        <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5 order-md-2"><img class="d-block w-270 m-auto" /></div>
          <div class="col-md-7 order-md-1 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2 class="h3 text-slab">Healing and anti-aging.</h2>
            <p class="mb-4">
      Air pollution, alcohol intake, toxins, high blood sugar, stress, and so on promote the excessive free radical formation and oxidative stress which can sometimes lead to cell death. Antioxidant in our NutriCombo healthy breakfasts will help our body fight against excessive free radicals.
      </p>
          </div>
        </div>
        <hr />
       <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5"><img class="d-block w-270 m-auto"/></div>
          <div class="col-md-7 order-md-1 text-md-left text-center">
            <div class="mt-30"></div>
            <h2 class="h3 text-slab">Smart decisions.</h2>
            <p>
      Our human brain needs fuel to make smart decisions every second of our lives, otherwise we tend to stick to our old habits or what we call Autopilot Syndrome. That's why we procrastinate and it is difficult for us to discipline ourselves to exercise, be on a diet, stand up in meetings, make the call and so on. NutriCombo healthy breakfasts make sure you get all the nutritions for your peak performance.
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

NutriCombo.defaultProps = {
  products: [],
  nutricombo: [],
}

export default NutriCombo
