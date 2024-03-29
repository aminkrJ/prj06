import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';

class NutriComboList extends Component {
  renderRecipes() {
    return this.props.recipes.map((recipe, index) => {
      return (
        <div class="col-md-3 card product border-0" key={index}>
          <Link to={'nutricombo/' + recipe.slug}>
            <img
              src={recipe.photo.original}
              class="card-img-top img-fluid"
              alt={recipe.title}
            />
          </Link>
          <div class="card-body">
            <div class="card-title">
              <Link to={'nutricombo/' + recipe.slug}>
                <h5 class="text-uppercase text-black">{recipe.title}</h5>
              </Link>
            </div>
            <div class="card-subtitle">
              <p class="text-sm text-muted">{recipe.short_description}</p>
            </div>
            <div
              class="text-xs"
              dangerouslySetInnerHTML={{ __html: recipe.nutrition_fact }}
            />
            <p class="text-sm m-0" />
          </div>
        </div>
      );
    });
  }

  renderRecipesInCategory(categoryId) {
    var recipesInCategory = _.filter(this.props.recipes, p => {
      return p.category.id === categoryId;
    });

    return recipesInCategory.map((recipe, index) => {
      return (
        <div class="col-md-3 card product border-0" key={index}>
          <Link to={'nutricombo/' + recipe.slug}>
            <img
              src={recipe.photo.original}
              class="card-img-top img-fluid"
              alt={recipe.title}
            />
          </Link>
          <div class="card-body">
            <div class="card-title">
              <Link to={'nutricombo/' + recipe.slug}>
                <h5 class="text-uppercase text-black">{recipe.title}</h5>
              </Link>
            </div>
            <div class="card-subtitle">
              <p class="text-sm text-muted">{recipe.short_description}</p>
            </div>
            <div
              class="text-xs"
              dangerouslySetInnerHTML={{ __html: recipe.nutrition_fact }}
            />
            <p class="text-sm m-0" />
          </div>
        </div>
      );
    });
  }

  renderMenu() {
    var categories = this.props.recipes.map(p => {
      return p.category;
    });

    categories = _.uniq(categories, i => {
      return i.id;
    });

    return categories.map((category, index) => {
      return (
        <div class="row" key={index}>
          {this.renderRecipesInCategory(category.id)}
        </div>
      );
    });
  }

  render() {
    return <div class="row">{this.renderRecipes()}</div>;
  }
}

NutriComboList.defaultProps = {
  recipes: [],
};

export default NutriComboList;
