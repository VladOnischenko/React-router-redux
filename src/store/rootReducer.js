import {
  GET_ITEMS_FAILURE,
  GET_ITEMS_STARTED,
  GET_ITEMS_SUCCESS,
  SET_ITEMS_CART,
  SET_ITEMS_FAVORITES
} from "./types";

export const rootReducer = (state, action) => {
  switch (action.type) {
    case GET_ITEMS_STARTED :
      return {
        ...state,
        loading: true,
      }

    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items
      }

    case GET_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    case SET_ITEMS_CART: {
      const { cart } = state
      const { item } = action.payload
      const allItems = [...cart, item]
      const filteredItems = cart.filter(el => el !== item)

      if(state.cart.includes(item)) {
        return {...state, cart: filteredItems}
      } else {
        return {...state, cart: allItems}
      }
    }

    case SET_ITEMS_FAVORITES: {
      const { stars } = state
      const { item } = action.payload
      const allFavorite = [...stars, item]
      const filteredFavorite = stars.filter(el => el !== item)

      if (stars.includes(item)) {
        return {...state, stars: filteredFavorite}
      } else {
        return {...state, stars: allFavorite}
      }
    }

    default:
      return state
  }
}