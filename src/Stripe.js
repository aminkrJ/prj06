import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';

let stripe, elements, card

class Stripe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: null,
      stripe: {},
      card: {}
    }
  }

  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.initStripe()
      }
      else this.props.onError()
    }
  }

  async generateToken() {
    const {token, error} = await stripe.createToken(card)
  }

  initStripe() {
    this.state.stripe = window.Stripe("`${process.env.STRIPE_PUBLISHABLE_KEY}`")
    elements = this.state.stripe.elements()
    const style = {}
    this.state.card = elements.create('card', {style})
    this.state.card.mount('#card-element')

    this.state.card.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors')
      if (error) {
        displayError.textContent = error.message
      } else {
        displayError.textContent = ''
      }
    })
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.initStripe()
    }
  }

  render() {
    return (
      <div className='stripe'>
        <div id='card-element'></div>
        <div id='card-errors'></div>
      </div>
    )
  }
}

Stripe.propTypes = {
}

export default scriptLoader(
  "https://js.stripe.com/v3/"
)(Stripe)
