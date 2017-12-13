import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames'
import PageTitle from './PageTitle'
import axios from 'axios';
import NProgress from 'nprogress';
import _ from 'underscore';

class Smoothies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      categories: [],
      activeCategory: 0
    }
  }

  fetchRecipesInCategory(category_id) {
    NProgress.start()

    axios.get("/recipes", {
      params: category_id === 0 ? {} : { recipe_category_id: category_id}
    })
    .then((response) => {
      NProgress.done()

      this.setState({
        recipes: response.data,
        activeCategory: category_id
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id){
    var category_id = parseInt(nextProps.match.params.id) || 0
    this.fetchRecipesInCategory(category_id)
    }
  }

  componentDidMount() {
    var category_id = parseInt(this.props.match.params.id) || 0
    this.fetchRecipesInCategory(category_id)

    NProgress.start()
    axios.get("/recipe_categories")
    .then((response) => {
      NProgress.done()

      this.setState({
        categories: response.data,
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
              <small className="text-muted text-uppercase">{recipe.category}</small>
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

  componentDidUpdate(prevProps, prevState) {
  }

  renderCategories() {
    return this.state.categories.map((category, index) => {
      return(
        <Link to={"/smoothies/categories/" + category.id} class={classnames("nav-link", {active: this.state.activeCategory === category.id})}>
          {category.name}
          <small>{category.short_description}</small>
          <i class="fa fa-angle-right"></i>
        </Link>
      )
    })
  }

  render() {
    return (
      <div className="">
        <PageTitle title="Smoothies" location={ {title: "Smoothies", path:"/smoothies"} } />
        <div id="content" className="py-3 py-lg-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-lg-2">
                <div className="row">
                  {this.renderRecipes()}
                </div>
              </div>
              <div className="col-lg-3 order-lg-1">

              <div class="nav-section-menu">
                <div class="nav nav-list">
                  <Link to="/smoothies" class={classnames("nav-link first", {active: this.state.activeCategory === 0})}>
                    All smoothies
                    <small>Carefully crafted</small>
                    <i class="fa fa-angle-right"></i>
                  </Link>
      {this.renderCategories()}
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

export default Smoothies
