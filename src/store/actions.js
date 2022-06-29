import {
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS,
  GET_STARS_FROM_STORAGE,
  SET_ITEMS_BASKET,
  SET_ITEMS_FAVORITES
} from "./types";

export const addToBasket = (item) => ({
  type: SET_ITEMS_BASKET,
  payload: { item: item }
})

export const addToStars = (item) =>({
  type: SET_ITEMS_FAVORITES,
  payload: { item: item }
})

export const getStarsFromStorage =  () => {
    const saved = localStorage.getItem('stars')
    const initialValue = JSON.parse(saved)
    console.log("initialValue", initialValue)
  return {
    type: GET_STARS_FROM_STORAGE,
    payload: initialValue || null
  }
}

export const getItems = () => async dispatch => {
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
      payload: { error:  e.message }
    })
  }
}