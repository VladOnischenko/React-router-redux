import {SET_ITEMS_FAVORITES} from "../types";

const initialState = {
  stars: [],
}

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
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