import {SET_ITEMS_CART} from "../types";

export const addToBasket = (item) => ({
  type: SET_ITEMS_CART,
  payload: { item: item }
})