import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';

class CheckOut extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: {}
    }
  }

  componentDidMount() {
    NProgress.start()

    axios.get("/carts/" + this.props.match.params.reference_number)
    .then((response) => {
      NProgress.done()

      this.setState({
        cart: response.data
      })

    })
    .catch((error) => {
      NProgress.done()
    })
  }
  render() {
    return (
      <div class="">
      </div>
    )
  }
}

export default CheckOut
