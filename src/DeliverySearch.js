import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from  'classnames'
import iziToast from 'izitoast';
import axios from 'axios'
import NProgress from 'nprogress'

class DeliverySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postcode: ''
    }
  }

  handlePostcodeChange(e) {
    this.setState({postcode: e.target.value})
  }

  handlePostcodeSearch() {
   if(this.state.postcode !== ''){
     NProgress.start()
     axios.get("/dropoff_locations/search?postcode=" + this.state.postcode)
      .then((response) => {
        NProgress.done()
        if(response.data.length === 0){
          iziToast.error({
            position: 'topRight',
            title: 'Sorry!',
            message: 'We do not deliver to your area.'
          })
        }else{
          iziToast.success({
            position: 'topRight',
            title: 'Yay!',
            message: "We do deliver to your area."
          })
        }
      })
      .catch((error) => {
        NProgress.done()
     })
   }
 }

  render() {
    return (
      <div class="">
        <div class="row justify-content-center mt-3">
          <div class="col-lg-8">
            <i class="fa fa-search icon-2x pos-absolute pos-l mt-2 ml-3 d-none d-lg-block"></i>
            <input onChange={this.handlePostcodeChange.bind(this)} class="form-control form-control-lg form-control-transparent text-center text-lg-left pl-lg-5" type="text" placeholder="Postcode"></input>
            <hr class="hr-inverse hr-lg mx-auto mt-1 mb-2" />
          </div>
        <div class="col-lg-4">
          <input type="button" value="Find" class="btn btn-secondary btn-rounded btn-lg px-5 py-lg-3 px-lg-5" onClick={this.handlePostcodeSearch.bind(this)}></input> 
        </div>
      </div>
      </div>
    )
  }
}

export default DeliverySearch
