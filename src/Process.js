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
      Carefully Crafted
          </h3>
          <h5 class="text-center font-weight-light mt-2 mb-0 text-muted">
          </h5>
          <hr class="mb-0 w-50 mx-auto" />
        <div class="py-3 py-lg-3">
          <ul class="nav nav-steps nav-steps-circles flex-column flex-lg-row justify-content-around w-80 mx-auto">
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 1})} data-toggle="tab" onClick={this.activate.bind(this, 1)}>
        <img src={blueberries} />
      </a>
            </li>
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 2})} data-toggle="tab" onClick={this.activate.bind(this, 2)}>
        <img src={almond} />
      </a>
            </li>
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 3})} data-toggle="tab" onClick={this.activate.bind(this, 3)}>
        <img src={brain} />
      </a>
            </li>
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 4})} data-toggle="tab" onClick={this.activate.bind(this, 4)}>
        <img src={water} />
      </a>
            </li>
          </ul>
          <div class="tab-content text-center pb-2 px-md-6">
            <div class={classNames("tab-pane fade", {show: this.state.selected === 4}, {active: this.state.selected === 4})} id="tab-steps1">
              <h4 class="text-slab">
                Filtered and electrolyte-enhanced water
              </h4>
              <p>Electrolyte enhanced water is water that has electrically charged minerals, or electrolytes, added to it. The most common electrolytes found in the body are sodium, potassium, chloride, phosphate, calcium, magnesium, and bicarbonate.</p>
            </div>
            <div class={classNames("tab-pane fade", {show: this.state.selected === 2}, {active: this.state.selected === 2})} id="tab-steps2">
              <h4 class="text-slab">
                Activate, insecticide free nuts and seeds
              </h4>
              <p>Activated nuts have been soaked in water and salt for a period of time, which starts off the germination or sprouting process, then dehydrated at a low temperature. Soaking increases the nutrient value of the nuts along with breaking down the problematic compounds that help enhance their digestibility.</p>
            </div>
            <div class={classNames("tab-pane fade", {show: this.state.selected === 1}, {active: this.state.selected === 1})} id="tab-steps4">
              <h4 class="text-slab">
                Superfoods
              </h4>
              <p>Superfoods do more than just help you meet your vitamin and mineral needs or aid in shedding a few extra pounds when it comes time for swimsuit season. In fact, these foods can help you achieve better health, prevent chronic disease, and improve the way you feel day in and day out — and they’re some of the top anti-aging foods around.</p>
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
