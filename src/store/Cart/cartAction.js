import {
  CLEAR_ITEMS_CART,
  SET_ITEMS_CART
} from "../types";

export const addToBasket = (item) => ({
  type: SET_ITEMS_CART,
  payload: { item: item }
})

export const clearBasket = () => ({
  type: CLEAR_ITEMS_CART,
  payload: []
})