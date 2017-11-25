import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';

class Elixirs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    NProgress.start()

    axios.get("/recipes")
    .then((response) => {
      NProgress.done()

      this.setState({
        recipes: response.data
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  renderRecipes() {
    return this.state.recipes.map((recipe, index) => {
      return(
        <div key={index} className="col-lg-4">
          <div className="card product-card overlay-hover mb-4">
            <div className="pos-relative">
              <Link to={"/smoothies/" + recipe.slug}>
                <img className="card-img-top img-fluid" src={recipe.photo.original} alt={recipe.name} />
              </Link>
            </div>

            <div className="card-body">
              <small className="text-muted text-uppercase">{recipe.tag}</small>
              <Link className="text-grey-dark" to={"/smoothies/" + recipe.slug}>
                <h4 className="card-title">
                  {recipe.title}
                </h4>
              </Link>
              <p class="text-muted"><small>{recipe.short_description}</small></p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="">
        <PageTitle title="Smoothies" location={ {title: "Smoothies & Elixirs", path:"/smoothies"} } />
        <div id="content" className="py-3 py-lg-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-lg-2">
                <div className="row">
                  {this.renderRecipes()}
                </div>
              </div>
              <div className="col-lg-3 order-lg-1"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Elixirs
