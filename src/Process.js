import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import classNames from 'classnames'

import lemon from './img/lemon.png'
import raspberry from './img/raspberry.png'
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
          <hr class="hr-lg mt-5 mb-3 w-10 mx-auto hr-primary" />
          <h2 class="text-center text-uppercase font-weight-bold my-0">
            Experience like never before
          </h2>
          <h5 class="text-center font-weight-light mt-2 mb-0 text-muted">
          </h5>
          <hr class="mb-0 w-50 mx-auto" />
        <div class="py-3 py-lg-6">
          <ul class="nav nav-steps nav-steps-circles flex-column flex-lg-row justify-content-around w-80 mx-auto">
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 1})} data-toggle="tab" onClick={this.activate.bind(this, 1)}>
        <img src={lemon} />
      </a>
            </li>
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 2})} data-toggle="tab" onClick={this.activate.bind(this, 2)}>
        <img src={almond} />
      </a>
            </li>
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 3})} data-toggle="tab" onClick={this.activate.bind(this, 3)}>
        <img src={blueberries} />
      </a>
            </li>
            <li class="nav-item">
              <a class={classNames("nav-link", {active: this.state.selected === 4})} data-toggle="tab" onClick={this.activate.bind(this, 4)}>
        <img src={raspberry} />
      </a>
            </li>
          </ul>
          <div class="tab-content text-center pb-2 px-md-6">
            <div class={classNames("tab-pane fade", {show: this.state.selected === 1}, {active: this.state.selected === 1})} id="tab-steps1">
              <h3>
                Filtered and electrolyte-enhanced water
              </h3>
              <p>Electrolyte-enhanced waters have things like potassium and sodium added to them, which help your body absorb the water more quickly. These electrolytes are helpful in preventing dehydration, so they're especially useful during and after intense workouts.</p>
            </div>
            <div class={classNames("tab-pane fade", {show: this.state.selected === 2}, {active: this.state.selected === 2})} id="tab-steps2">
              <h3>
                Activate, insecticide free nuts and seeds
              </h3>
              <p>We use activated and insecticide free nuts and seeds in our smoothies. This process increases the nutrient value of the nuts and seeds along with breaking down the problematic compounds that help enhance their digestibility.</p>
            </div>
            <div class={classNames("tab-pane fade", {show: this.state.selected === 3}, {active: this.state.selected === 3})} id="tab-steps3">
              <h3>
                Fruits and vegetables
              </h3>
              <p>We harness the power of seasonal organic fruits and vegtables to enhance the taste, natural sweetness, and nutritions in our smoothies.</p>
            </div>
            <div class={classNames("tab-pane fade", {show: this.state.selected === 4}, {active: this.state.selected === 4})} id="tab-steps4">
              <h3>
                Superfood and mushrooms
              </h3>
              <p>Certified organic nutrition-dense superfoods and mushrooms high in antioxidant, vitamin and minerals from all around the world in our smoothies to bring them to another level. </p>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Process
