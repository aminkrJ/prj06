import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ServingIdeas extends Component {
  render() {
    return (
      <div class="row text-sm justify-content-md-center">
        <div class="col">
          <h6 class="text-uppercase">Smoothie</h6>
          <p>Blend it with milk and fruits</p>
        </div>
        <div class="col">
          <h6 class="text-uppercase">Latte</h6>
          <p>Mix it with frothed milk</p>
        </div>
        <div class="col">
          <h6 class="text-uppercase">Brew</h6>
          <p>Brew it</p>
        </div>
      </div>
    );
  }
}

export default ServingIdeas;
