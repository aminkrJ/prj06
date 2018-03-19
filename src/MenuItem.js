import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './Api.js'
import classnames from 'classnames'
import NProgress from 'nprogress'
import {Helmet} from "react-helmet"

class MenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipe: {photo: {original: ""}},
      loaded: false
    }
  }
  
  componentWillMount() {
    NProgress.start()

    api.get("/recipes/" + this.props.match.params.slug)
    .then((response) => {
      NProgress.done()

      this.setState({
        recipe: response.data,
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  renderProducts() {
  }

  render() {
    return (
      <div id="content" class="pt-3 pt-lg-6 pb-lg-0">
        <Helmet>
          <title>{this.state.recipe.name}</title>
          <meta name="description" content={this.state.recipe.short_description}/>
        </Helmet>
        <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="product-gallery pos-relative">
                  <img src={this.state.recipe.photo.original} class='img-fluid'/>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="card product-card mb-4">
                  <div class="card-body p-4 pos-relative">
                    <div class="pos-md-absolute pos-t pos-r mr-4 mt-3 text-md-right">
                    </div>
  <p class="text-muted text-uppercase text-xs mb-0"></p>
                    <h2 class="text-uppercase card-title mb-2">
                      {this.state.recipe.title}
                    </h2>
                    <hr class="my-3" />
                    <p dangerouslySetInnerHTML={{__html: this.state.recipe.short_description}} class="lead" />
                    <p dangerouslySetInnerHTML={{__html: this.state.recipe.description}} class="" />
                    <hr class="my-3" />
                    <div class='text-sm text-uppercase font-weight-bold my-2 py-0 px-0'>
      Method
                    </div>
                    <p dangerouslySetInnerHTML={{__html: this.state.recipe.how_to_cook}} class="text-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
            </div>
        </div>
      </div>
    )
  }
}

export default MenuItem
