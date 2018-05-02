import React, { Component } from 'react';
import classNames from 'classnames';
import $ from 'jquery/src/jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    $(this.el).owlCarousel(this.props);
  }

  render() {
    return (
      <div
        ref={el => (this.el = el)}
        id={this.props.id}
        className={classNames('owl-carousel owl-theme', {
          'product-carousel': this.props.productCarousel,
          'large-controls': this.props.largeControls,
          'dots-inside': this.props.dotsInside,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Carousel;
