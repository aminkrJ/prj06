import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import classnames from 'classnames'
import NProgress from 'nprogress'

class Smoothie extends Component {
constructor(props){
    super(props)
    this.state = {
      recipe: {photo: {original: ""}, ingredients: [], recipe_category: {}},
      activeTabIndex: 1
    }
  }

  renderIngredients() {
    return (
     this.state.recipe.ingredients.map((ingredient, index) => {
       return(
         <span class="" key={ingredient.id}>{ingredient.name}{index + 1 === this.state.recipe.ingredients.length ? "" : ", " }</span>
       )
     })
    )
  }

  handleTabChange(index) {
    this.setState({
      activeTabIndex: index
    })
  }

  componentDidMount() {
    NProgress.start()

    axios.get("/recipes/" + this.props.match.params.slug)
    .then((response) => {
      NProgress.done()

      this.setState({
        recipe: response.data
      })

      document.title = "Life Elixir, " + response.data.title
    })
    .catch((error) => {
      NProgress.done()
    })
  }


  render() {
    return (
      <div id="content" class="pt-3 pt-lg-6 pb-lg-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="product-gallery pos-relative">
                <img src={this.state.recipe.photo.original} alt={this.state.recipe.title} class="lazyOwl img-fluid" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="card product-card mb-4">
                <div class="card-body p-4 pos-relative">
                <div class="pos-md-absolute pos-t pos-r mr-4 mt-3 text-md-right">
                </div>
                  <p class="text-muted text-uppercase text-xs mb-0"><Link to={"/smoothies/categories/" + this.state.recipe.recipe_category.id} class="text-primary">{this.state.recipe.recipe_category.name}</Link></p>
                  <h2 class="card-title mb-2">
                    {this.state.recipe.title}
                  </h2>
                  <hr class="my-3" />
                  <p dangerouslySetInnerHTML={{__html: this.state.recipe.short_description}} class="text-muted" />
                  <p dangerouslySetInnerHTML={{__html: this.state.recipe.description}} class="text-muted" />
                  <hr class="my-3" />
                   <Link to="/bundles" class="btn btn-link"><i class="fa fa-cart-plus mr-2"></i> Order this smoothie in our bundles</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card mt-5 border-top-0">
              <div class="card-header bg-white pt-0 px-0">
                <ul class="nav nav-tabs nav-justified card-header-tabs flex-column flex-md-row">
                  <li class="nav-item"> <a class={classnames("nav-link py-md-4 text-uppercase font-weight-bold", {active: this.state.activeTabIndex === 1})} onClick={this.handleTabChange.bind(this, 1)}>Health Benefits</a> </li>
                  <li class="nav-item"> <a class={classnames("nav-link py-md-4 text-uppercase font-weight-bold", {active: this.state.activeTabIndex === 2})} onClick={this.handleTabChange.bind(this, 2)}>Nutrition Info</a> </li>
                  <li class="nav-item"> <a  class={classnames("nav-link py-md-4 text-uppercase font-weight-bold", {active: this.state.activeTabIndex === 3})} onClick={this.handleTabChange.bind(this, 3)}>Ingredients</a> </li>
                </ul>
              </div>
              <div class="card-body p-4">
                <div class="tab-content">
                  <div class={classnames("tab-pane show", {active: this.state.activeTabIndex === 1})} id="">
                    <p dangerouslySetInnerHTML={{__html: this.state.recipe.health_benefits}} class="card-text" />
                  </div>
                  <div class={classnames("tab-pane show", {active: this.state.activeTabIndex === 3})} id="">
                    { this.renderIngredients() }
                    <p dangerouslySetInnerHTML={{__html: this.state.recipe.how_to_cook}} class="card-text" />
                  </div>
                  <div class={classnames("tab-pane show", {active: this.state.activeTabIndex === 2})} id="">
                    <p dangerouslySetInnerHTML={{__html: this.state.recipe.nutrition_info}} class="card-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Smoothie
