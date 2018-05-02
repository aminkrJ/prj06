import * as actions from '../constants/ActionTypes';

export function removeFromCart(product) {
  return {
    type: actions.REMOVE_FROM_CART,
    product,
  };
}

export function addToCart(product, quantity = 1) {
  return {
    type: actions.ADD_TO_CART,
    product,
    quantity,
  };
}

export function dropFromCart(product) {
  return {
    type: actions.DROP_FROM_CART,
    product,
  };
}

export function reset() {
  return {
    type: 'RESET',
  };
}
