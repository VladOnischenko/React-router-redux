import {GET_ITEMS_FAILURE, GET_ITEMS_SUCCESS} from "../types";

export const getItems = () =>  dispatch => {
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
  },2000)
}