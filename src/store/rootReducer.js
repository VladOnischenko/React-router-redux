import {
  GET_ITEMS_FAILURE,
  GET_ITEMS_STARTED,
  GET_ITEMS_SUCCESS,
  // GET_STARS_FROM_STORAGE,
  SET_ITEMS_BASKET,
  SET_ITEMS_FAVORITES
} from "./types";


export const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ITEMS_STARTED :
      return {
        ...state,
        loading: true,
      }

    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: true,
        items: action.payload.items
      }

    case GET_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    // case GET_STARS_FROM_STORAGE: {
    //     return {...state, stars: action.payload}
    // }

    case SET_ITEMS_BASKET: {
      const { basket } = state
      const { item } = action.payload
      const allItems = [...basket, item]
      const filteredItems = basket.filter(el => el !== item)
      if(state.basket.includes(item)) {
        return {...state, basket: filteredItems}
      } else {
        return {...state, basket: allItems}
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