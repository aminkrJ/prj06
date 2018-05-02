import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PageTitle from './PageTitle';
import api from './Api.js';
import NProgress from 'nprogress';
import _ from 'underscore';
import AddToCartButton from './AddToCartButton.js';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      tags: [],
      activeCategory: 0,
      activeTag: 0,
    };
  }

  componentDidMount() {
    var categories = this.props.products.map(p => {
      return p.category;
    });

    var tags = this.props.products.map(p => {
      return p.tags;
    });

    tags = _.flatten(tags);

    this.setState({
      categories: _.uniq(categories, i => {
        return i.id;
      }),
      tags: _.uniq(tags, i => {
        return i.id;
      }),
    });

    if (this.props.match.params.category_id) {
      this.setState({
        activeCategory: this.props.match.params.category_id * 1,
      });
    }

    if (this.props.match.params.tag_id) {
      this.setState({ activeTag: this.props.match.params.tag_id * 1 });
    }
  }

  renderProducts() {
    var products = this.props.products;

    if (this.state.activeCategory !== 0) {
      products = _.filter(products, p => {
        return p.category.id === this.state.activeCategory;
      });
    } else if (this.state.activeTag !== 0) {
      products = _.filter(products, i => {
        return i.tags
          .map(t => {
            return t.id;
          })
          .includes(this.state.activeTag);
      });
    }

    return products.map((product, index) => {
      return (
        <div key={index} className="col-lg-4">
          <div className="card product-card overlay-hover mb-4">
            <div className="pos-relative">
              <img src={product.photo.original} class="img-fluid" />
            </div>
            <div className="card-body">
              <h5 className="text-black text-uppercase card-title">
                {product.name}
              </h5>
              <p style={{ 'line-height': '1em' }}>
                <small>{product.short_description}</small>
              </p>
              <p className="card-text">{this.renderIngredients(product)}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  renderRecipes(product) {
    return this.state.product.recipes.map((r, index) => {
      return (
        <span key={r.id}>
          <span>{r.description} </span>
          {r.title}
          {index + 1 === product.recipes.length ? null : <span>, &nbsp;</span>}
        </span>
      );
    });
  }

  renderIngredients(product) {
    if (product.category === 'Bundles') {
      return (
        <div class="text-xs text-muted">
          <span class="font-weight-bold" /> {this.renderRecipes(product)}
        </div>
      );
    } else {
      return (
        <div class="text-xs text-muted">
          {product.ingredients
            .map(i => {
              return i.name;
            })
            .join(', ')}
        </div>
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {}

  renderTags() {
    return this.state.tags.map((tag, index) => {
      return (
        <Link
          to={'/menu/tags/' + tag.id}
          class={classnames('nav-link', {
            active: this.state.activeTag === tag.id,
          })}
        >
          <span class="text-uppercase text-sm">{tag.name}</span>
          <small class="text-capitalize">{tag.short_description}</small>
          <i class="fa fa-angle-right" />
        </Link>
      );
    });
  }

  renderCategories() {
    return this.state.categories.map((category, index) => {
      return (
        <li class="nav-item">
          <Link
            to={'/menu/categories/' + category.id}
            class={classnames(
              'nav-link text-center text-uppercase font-weight-bold px-3 px-lg-4 py-2',
              { active: category.id === this.state.activeCategory }
            )}
          >
            {category.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="">
        <div id="content">
          {' '}
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-lg-2">
                <div class="row">
                  <div class="mb-3 mb-lg-0">
                    <ul class="mb-3 nav nav-pills nav-pills-border-bottom-inside nav-justified flex-row justify-md-content-center">
                      {this.renderCategories()}
                    </ul>
                  </div>
                </div>
                <div className="row">{this.renderProducts()}</div>
              </div>
              <div className="mt-5 col-lg-3 order-lg-1">
                <div class="nav-section-menu">
                  <div class="nav nav-list">{this.renderTags()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Menu.defaultProps = {
  products: [],
};

export default Menu;
