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
                  <p dangerouslySetInnerHTML={{__html: this.state.recipe.short_description}} class="text-lead" />
                  <p dangerouslySetInnerHTML={{__html: this.state.recipe.description}} class="" />
                  <hr class="my-3" />
                  <p dangerouslySetInnerHTML={{__html: this.state.recipe.how_to_cook}} class="text-sm text-muted" />
                  <hr class="my-3" />
                  <Link to="/bundles" class="btn btn-primary"><i class="fa fa-cart-plus mr-2"></i>Order Now</Link>
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

export default Smoothie
