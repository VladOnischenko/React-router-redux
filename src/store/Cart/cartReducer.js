import {CLEAR_ITEMS_CART, SET_ITEMS_CART} from "../types";

const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS_CART: {
      const { cart } = state
      const { item } = action.payload
      const allItems = [...cart, item]
      const filteredItems = cart.filter(el => el !== item)

      if(state.cart.includes(item)) {
        return { ...state, cart: filteredItems }
      } else {
        return { ...state, cart: allItems }
      }
    }
    case CLEAR_ITEMS_CART: {
      return { ...state, cart: action.payload }
    }
    default:
      return state
  }
}