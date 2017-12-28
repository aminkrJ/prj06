import * as actions from '../constants/ActionTypes'

const initialState = []

export default function reducer(state = initialState, action){
  switch (action.type){
    case actions.ADD_TO_CART:
      if(state.map(p => {return p.id}).includes(action.product.id)){
        return incQuantity(state, action, 1)
      }else{
        return state.concat(Object.assign({}, action.product, {quantity: action.quantity}))
      }
    case actions.DROP_FROM_CART:
      return dropFromCart(state, action)
    case actions.REMOVE_FROM_CART:
      return decQuantity(state, action, 1)
    default:
      return state
  }
}

function incQuantity(state, action, step) {
  return (
    state.map((product, index) => {
      if(product.id === action.product.id){
        return Object.assign({}, product, {
          quantity: product.quantity + step
        })
      }else{
        return product
      }
    })
  )
}

function decQuantity(state, action, step) {
  return (
    state.map((product, index) => {
      if(product.id === action.product.id){
        if(product.quantity === 1){
          //return dropFromCart(state, action)
        }else{
          return Object.assign({}, product, {
            quantity: product.quantity + step
          })
        }
      }else{
        return product
      }
    })
  )
}

function dropFromCart(state, action) {
  var itemIndex;
  state.some((product, index) => {
    if(product.id === action.product.id) {
      itemIndex = index;
      return true;
    }else{
      return false;
    }
  })
  return state.slice(0, itemIndex).concat(state.slice(itemIndex + 1))
}
