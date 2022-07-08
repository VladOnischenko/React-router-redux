import {
  GET_ITEMS_FAILURE,
  GET_ITEMS_STARTED,
  GET_ITEMS_SUCCESS
} from "../types";

const initialState = {
  items: [],
  oneItem: [],
  error: null,
  loading: true,
}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_STARTED :
      return {
        ...state,
        loading: true,
      }

    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items
      }

    case GET_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}