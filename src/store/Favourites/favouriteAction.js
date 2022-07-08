import {SET_ITEMS_FAVORITES} from "../types";

export const addToStars = (item) =>({
  type: SET_ITEMS_FAVORITES,
  payload: { item: item }
})