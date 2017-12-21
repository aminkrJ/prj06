import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Tooltip, Button, ButtonGroup } from 'reactstrap';
import _ from 'underscore';

class CustomButtonGroup extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: []
    }
  }

  handleClick(index, e){
    e.preventDefault()

    if(_.contains(this.state.options, index)){
        var newOptions = _.difference(this.state.options, [index])
    }else{
        var newOptions = _.union(this.state.options, [index])
    }

    this.setState({options: newOptions})

    this.props.onUnitPriceChange(_.reduce(newOptions, function(memo, num){ return memo + num; }, 0))
  }

  render() {
    return (
      <div class="list-group">
          <a href="#" onClick={this.handleClick.bind(this, 20)} class={classnames("list-group-item", {active: _.contains(this.state.options, 20)})}>
            <h6>Certified organic</h6>
            <p class="text-sm text-black">
            By choosing this option we use certified organic/pesticide free fruits and nuts in your smoothies.
            </p>
          </a>
          <a href="#" onClick={this.handleClick.bind(this, 5)} class={classnames("list-group-item", {active: _.contains(this.state.options, 5)})}>
            <h6>Vegan friendly</h6>
            <p class="text-sm text-black">
      By choosing this option we use coconut yogurt with live culture in your smoothies.
            </p>
          </a>
          <a href="#" onClick={this.handleClick.bind(this, 10)} class={classnames("list-group-item", {active: _.contains(this.state.options, 10)})}>
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
