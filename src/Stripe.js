import React, { Component } from 'react';

let stripe, elements, card

class Stripe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card: {},
      engine: {}
    }
  }

  initStripe() {
    stripe = window.Stripe('pk_test_3xBMvv94iePdC12w62hXQ6sM')
    elements = stripe.elements({
      fonts: [
        {
          family: 'Open Sans',
          weight: 400,
          src: 'local("Open Sans"), local("OpenSans"), url(https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3ZBw1xU1rKptJj_0jans920.woff2) format("woff2")',
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
        }
      ]
    })
    const style = {
      base: {
        fontSize: '16px',
        fontFamily: '"Open Sans", Arial, serif',
        color: '#495057'
      }
    }
    card = elements.create('card', {style})
    card.mount('#card-element')

    this.setState({
      card: card,
      engine: stripe
    })

    card.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors')
      if (error) {
        displayError.textContent = error.message
      } else {
        displayError.textContent = ''
      }
    })
  }

  componentDidMount() {
    this.initStripe()
  }

  render() {
    return (
      <div className='stripe'>
        <div id='card-element'></div>
        <small id='card-errors' class='text-danger'></small>
      </div>
    )
  }
}

Stripe.propTypes = {
}

export default Stripe
