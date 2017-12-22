import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Tooltip, Button, ButtonGroup } from 'reactstrap';
import _ from 'underscore';

class CustomButtonGroup extends Component {
  constructor(props){
    super(props)
    this.state = {
      percentages: []
    }
  }

  handleClick(index, e){
    e.preventDefault()

    if(_.contains(this.state.percentages, index)){
        var newPercentages = _.difference(this.state.percentages, [index])
    }else{
        var newPercentages = _.union(this.state.percentages, [index])
    }

    this.setState({percentages: newPercentages})

    this.props.onUnitPriceChange(newPercentages)
  }

  render() {
    return (
      <div class="list-group">
          <a href="#" onClick={this.handleClick.bind(this, 20)} class={classnames("list-group-item", {active: _.contains(this.state.percentages, 20)})}>
            <h6>Certified organic</h6>
            <p class="text-sm text-black">
            By choosing this option we use certified organic/pesticide free fruits and nuts in your smoothies.
            </p>
          </a>
          <a href="#" onClick={this.handleClick.bind(this, 5)} class={classnames("list-group-item", {active: _.contains(this.state.percentages, 5)})}>
            <h6>Vegan friendly</h6>
            <p class="text-sm text-black">
      By choosing this option we use plant-based yogurt with live culture in your smoothies.
            </p>
          </a>
          <a href="#" onClick={this.handleClick.bind(this, 10)} class={classnames("list-group-item", {active: _.contains(this.state.percentages, 10)})}>
            <h6>Activated nuts</h6>
            <p class="text-sm text-black">
      By choosing this options all the seeds and nuts in your smoothies are activated and easy to digest.
            </p>
          </a>
      </div>
    )
  }
}

CustomButtonGroup.propTypes = {
  buttons: PropTypes.array,
  onUnitPriceChange: PropTypes.function
}

CustomButtonGroup.defaultProps = {
  buttons: []
}

export default CustomButtonGroup
