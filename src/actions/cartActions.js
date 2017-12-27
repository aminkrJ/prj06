import * as actions from '../constants/ActionTypes'

export function removeFromCart(product) {
  return {
    type: actions.REMOVE_FROM_CART,
    product
  }
}

export function addToCart(product) {
  return {
    type: actions.ADD_TO_CART,
    product
  }
}

export function dropFromCart(product) {
  return {
    type: actions.DROP_FROM_CART,
    product
  }
}
