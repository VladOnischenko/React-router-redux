import {
  GET_ITEMS_FAILURE,
  GET_ITEMS_STARTED,
  GET_ITEMS_SUCCESS,
  SET_ITEMS_CARD,
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

    case SET_ITEMS_CARD: {
      const { card } = state
      const { item } = action.payload
      const allItems = [...card, item]
      const filteredItems = card.filter(el => el !== item)
      if(state.card.includes(item)) {
        return {...state, card: filteredItems}
      } else {
        return {...state, card: allItems}
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