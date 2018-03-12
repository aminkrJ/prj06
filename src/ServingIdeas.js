import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ServingIdeas extends Component {

  render() {
    return (
      <div class='row'>
        <div class='col-4'>
          <h5 class='lead'>Smoothie</h5>
        </div>
        <div class='col-4'>
          <h5 class='lead'>Latte</h5>
        </div>
        <div class='col-4'>
          <h5 class='lead'>Tea</h5>
        </div>
      </div>
    )
  }
}

export default ServingIdeas
