import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import classnames from 'classnames'
import NProgress from 'nprogress'
import iziToast from 'izitoast';

class MenuItem extends Component {
constructor(props){
    super(props)
    this.state = {
      menuItem: {photo: {original: ""}, ingredients: [], product_category: {}},
      activeTabIndex: 1
    }
  }
  
  addToShoppingCart(menuItem, e) {
    this.props.addToCart(menuItem)
    iziToast.success({
      position: 'topRight',
      title: menuItem.name,
      message: "has been added to your cart."
    })
  }

  renderIngredients() {
    return (
     this.state.menuItem.ingredients.map((ingredient, index) => {
       return(
         <span class="" key={ingredient.id}>{ingredient.name}{index + 1 === this.state.menuItem.ingredients.length ? "" : ", " }</span>
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

    axios.get("/products/" + this.props.match.params.slug)
    .then((response) => {
      NProgress.done()

      this.setState({
        menuItem: response.data
      })

      document.title = "Life Elixir, " + response.data.name
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
                <img src={this.state.menuItem.photo.original} alt={this.state.menuItem.name} class="lazyOwl img-fluid" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="card product-card mb-4">
                <div class="card-body p-4 pos-relative">
                  <div class="pos-md-absolute pos-t pos-r mr-4 mt-3 text-md-right">
      
                  </div>
<p class="text-muted text-uppercase text-xs mb-0"><span class="text-primary">{this.state.menuItem.category}</span></p>
                  <h2 class="card-title mb-2">
                    {this.state.menuItem.name}
                  </h2>
                  <h4 class="font-weight-bold text-primary">
      <span class="h6 price-currency">$</span>{this.state.menuItem.price}
                  </h4>
                  <hr class="my-3" />
                  <p dangerouslySetInnerHTML={{__html: this.state.menuItem.short_description}} class="text-lead" />
                  <p dangerouslySetInnerHTML={{__html: this.state.menuItem.description}} class="" />
                  <hr class="my-3" />
                  <a href="#" onClick={this.addToShoppingCart.bind(this, this.state.menuItem)} class="btn btn-primary"><i class="fa fa-cart-plus mr-2"></i>Add to cart</a>
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
