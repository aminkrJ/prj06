import React, { Component } from 'react';
import axios from 'axios'
import NProgress from 'nprogress'

class Product extends Component {
constructor(props){
    super(props)
    this.state = {
      recipe: {photo: {original: ""}, ingredients: []}
    }
  }

  renderIngredients() {
    return (
     this.state.recipe.ingredients.map((ingredient, index) => {
       return(
         <span class="text-muted" key={ingredient.id}><small>{ingredient.name}{index + 1 === this.state.recipe.ingredients.length ? "" : ", " }</small></span>
       )
     })
    )
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
              { this.renderIngredients() }
            </div>
            <div class="col-lg-7">
              <div class="card product-card mb-4">
                <div class="card-body p-4 pos-relative">
                  <p class="text-muted text-uppercase text-xs mb-0"><span class="text-primary">{this.state.recipe.tag}</span></p>
                  <h2 class="card-title mb-2">
                    {this.state.recipe.title}
                  </h2>
                  <hr class="my-3" />
                  <p dangerouslySetInnerHTML={{__html: this.state.recipe.description}} class="text-muted text-sm" />
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

export default Product
