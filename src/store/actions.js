import {
  GET_ITEMS_FAILURE, GET_ITEMS_STARTED,
  GET_ITEMS_SUCCESS,
  SET_ITEMS_CART,
  SET_ITEMS_FAVORITES
} from "./types";

export const loaderOn = () => ({ type: GET_ITEMS_STARTED })

export const addToBasket = (item) => ({
  type: SET_ITEMS_CART,
  payload: { item: item }
})

export const addToStars = (item) =>({
  type: SET_ITEMS_FAVORITES,
  payload: { item: item }
})

export const getItems = () =>  dispatch => {
  dispatch(loaderOn())
  setTimeout(async () => {
    try{
      const response = await fetch('./musica.json')
      const data = await response.json()
      const arrayJson = data.map( item => JSON.stringify(item))
      dispatch({
        type: GET_ITEMS_SUCCESS,
        payload: { items: arrayJson }
      })
    } catch (e) {
      dispatch({
        type: GET_ITEMS_FAILURE,
        payload: { error: e.message }
      })
    }
  },1500)
}