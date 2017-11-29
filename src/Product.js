import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import NProgress from 'nprogress'

class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: {photo: {original: ""}, recipes: []}
    }
  }

  renderRecipes() {
    return (
     this.state.product.recipes.map((recipe, index) => {
       return(
         <li key={index}>{recipe.description} <Link to={"/smoothies/" + recipe.slug}>{recipe.title}</Link></li>
       )
     })
    )
  }

  componentDidMount() {
    NProgress.start()

    axios.get("/products/" + this.props.match.params.slug)
    .then((response) => {
      NProgress.done()

      this.setState({
        product: response.data
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
                <img src={this.state.product.photo.original} alt={this.state.product.name} class="lazyOwl img-fluid" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="card product-card mb-4">
                <div class="card-body p-4 pos-relative">
                  <p class="text-muted text-uppercase text-xs mb-0"><span class="text-primary">{this.state.product.tag}</span></p>
                  <h2 class="card-title mb-2">
                    {this.state.product.name}
                  </h2>
                  <hr class="my-3" />
                  <ul>
                    { this.renderRecipes() }
                  </ul>
                  <p dangerouslySetInnerHTML={{__html: this.state.product.description}} class="text-muted text-sm" />
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
