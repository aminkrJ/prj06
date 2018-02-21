import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import classNames from 'classnames'

import water from './img/water.png'
import brain from './img/brain.png'
import blueberries from './img/blueberries.png'
import almond from './img/almond.png'

class Process extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: 1
    }
  }

  activate(key, e) {
    this.setState({selected: key})
  }

  render() {
    return (
      <div class="container">
          <hr class="mt-0 hr-lg w-10 mx-auto hr-primary" />
          <h3 class="text-center text-slab font-weight-bold my-0">
      Why NutriCombo?
          </h3>
          <h5 class="text-center font-weight-light mt-2 mb-0 text-muted">
          </h5>
          <hr class="mb-0 w-50 mx-auto" />
        <div class="py-3 py-lg-3">
          <ul class="nav nav-steps nav-steps-circles flex-column flex-lg-row justify-content-around w-80 mx-auto">
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 1})} data-toggle="tab" onClick={this.activate.bind(this, 1)}>
      <span class="display-4">1</span>
      </a>
            </li>
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 2})} data-toggle="tab" onClick={this.activate.bind(this, 2)}>
      <span class="display-4">2</span>
      </a>
            </li>
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 3})} data-toggle="tab" onClick={this.activate.bind(this, 3)}>
      <span class="display-4">3</span>
      </a>
            </li>
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 4})} data-toggle="tab" onClick={this.activate.bind(this, 4)}>
      <span class="display-4">4</span>
      </a>
            </li>
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 5})} data-toggle="tab" onClick={this.activate.bind(this, 5)}>
      <span class="display-4">5</span>
      </a>
            </li>
          </ul>
          <div class="tab-content text-center pb-2 px-md-6">
            <div class={classNames("tab-pane fade", {show: this.state.selected === 5}, {active: this.state.selected === 5})} id="tab-steps1">
              <h4 class="text-slab">
                Electrolyte-enhanced water
              </h4>
              <p>Electrolyte enhanced water is water that has electrically charged minerals, or electrolytes, added to it. The most common electrolytes found in the body are sodium, potassium, chloride, phosphate, calcium, magnesium, and bicarbonate.</p>
            </div>
            <div class={classNames("tab-pane fade", {show: this.state.selected === 1}, {active: this.state.selected === 1})} id="tab-steps2">
              <h4 class="text-slab">
                Ancient and Adaptogen herbs
              </h4>
              <p>Adaptogens, unique class of healing plants, are a natural ally in dealing with persistent, long-term and chronic stress and fatigue because they work with regulating important hormones. People who experience the fight-or-flight responses on a regular basis, many times a day, may experience a state of constant stress, which can burn out your adrenal glands, stress your digestive tract and cause you to age more rapidly. Adaptogens can help balance, restore and protect the body.</p>
            </div>
            <div class={classNames("tab-pane fade", {show: this.state.selected === 4}, {active: this.state.selected === 4})} id="tab-steps4">
              <h4 class="text-slab">
                Superfoods
              </h4>
              <p>Superfoods do more than just help you meet your vitamin and mineral needs or aid in shedding a few extra pounds when it comes time for swimsuit season. In fact, these foods can help you achieve better health, prevent chronic disease, and improve the way you feel day in and day out — and they’re some of the top anti-aging foods around.</p>
            </div>
            <div class={classNames("tab-pane fade", {show: this.state.selected === 2}, {active: this.state.selected === 2})} id="tab-steps4">
              <h4 class="text-slab">
                Medium-chain fatty acids
              </h4>
              <p>A form of saturated fatty acids which are believed to be largely missing from the diets of people eating "standard Western" diets that has numerous health benefits, ranging from improved cognitive function to better weight management.</p>
            </div>
            <div class={classNames("tab-pane fade", {show: this.state.selected === 3}, {active: this.state.selected === 3})} id="tab-steps3">
              <h4 class="text-slab">
               Medicinal mushrooms 
              </h4>
              <p>When it comes to sticking to a healthy diet, disease-fighting mushrooms check off all the boxes. They’re low in carbohydrates and calories, but a great source of B vitamins, trace minerals, fiber and even protein. They also an anti-inflammatory food, containing high levels of beta-glucans compounds that keep immune cells alert, plus a powerful antioxidant called ergothioneine that helps lower bodywide inflammation.</p>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Process
