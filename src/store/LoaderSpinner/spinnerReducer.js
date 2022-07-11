import {SPINNER_OFF, SPINNER_ON} from "../types";

const initialValues = {
  loading: true,
}
const spinnerReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SPINNER_ON:
      return {...state, loading: action.payload}
    case SPINNER_OFF:
      return {...state, loading: action.payload}
    default:
      return state
  }
}

export default spinnerReducer