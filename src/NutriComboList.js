import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';

class NutriComboList extends Component {
  renderTags(product) {
    return (
      product.tags.map((tag) => {
        return (
          <span class='mb-sm-1 p-2 mr-1 font-weight-light badge badge-primary'>
            {tag.name}
          </span>
        )
      })
    )
  }

  renderIngredients(product) {
    return (
      product.ingredients.map((ingredient) => {
        return (
          ingredient.name
        )
      }).join(', ')
    )
  }

  renderProductsInCategory(categoryId) {
    var productsInCatgory = _.filter(this.props.products, (p) => {return p.category.id === categoryId})

    return (
      productsInCatgory.map((product, index) => {
        return (
          <div class='col-md-3'>
          <div key={index} class="card product border-0">
            <img src={product.photo.original} class='card-img-top img-fluid'/>
            <div class='card-body'>
            <div class='card-title'>
            <h5 class='text-uppercase'>{product.name}</h5>
            </div>
            <div class='card-subtitle'>
            <p class="text-sm text-muted">{product.short_description}</p>
            </div>
            <div class='text-xs' dangerouslySetInnerHTML={{__html: product.nutrition_fact}}>
            </div>
            <p class='text-sm m-0'>
            </p>
            </div>
          </div>
          </div>
        )
      })
    )
  }

  renderMenu() {
    var categories = this.props.products.map((p) => {
      return p.category
    })

    categories = _.uniq(categories, (i) =>{ return i.id })

    return (
      categories.map((category, index) => {
        return (
          <div key={index} class="col-12">
            <div class="row">
            {this.renderProductsInCategory(category.id)}
            </div>
          </div>
        )
      })
    )
  }
  render() {
    return (
      <div class="">
      {this.renderMenu()}
      </div>
    )
  }
}

NutriComboList.defaultProps = {
  products: []
}

export default NutriComboList
