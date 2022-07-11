import {
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS
} from "../types";

const initialState = {
  items: [],
  oneItem: [],
  error: null,
}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      }

    case GET_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}