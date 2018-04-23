import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from  'classnames'
import iziToast from 'izitoast';
import axios from 'axios'
import NProgress from 'nprogress'

class Subscribe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleSubscribe(e) {
    e.preventDefault()

    NProgress.start()

    var $this = this

    axios.post("/campaigns/" + this.props.campaign + "/subscribers", {
      subscriber: {
        email: this.state.email
      }
    })
    .then((response) => {
      NProgress.done()

      iziToast.success({
        position: 'topRight',
        message: "You have subscribed successfully.",
        title: "Congratulation!"
      })

      $this.setState({email: ""})
      // Comes from modal parent for all children
      if($this.props.handleClose){
        $this.props.handleClose()
      }
    })
    .catch((error) => {
      NProgress.done()

      iziToast.error({
        position: 'topRight',
        message: "Email " + error.response.data.email[0]
      })
    })
  }

  render() {
    return (
      <div class="">
        <form>
          <div class="input-group">
            <label class="sr-only" htmlFor="email-field">Email</label>
            <input type="text" class="form-control" id="email-field" placeholder="Your Email" onChange={this.handleEmailChange.bind(this)}/>
            <span class="input-group-btn">
              <button class="btn btn-primary" onClick={this.handleSubscribe.bind(this)} type="button">Go!</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

Subscribe.defaultProps = {
  campaign: "Subscribe",
}

export default Subscribe
