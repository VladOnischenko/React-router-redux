import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import thunk from "redux-thunk";

const initialState = {
  items: [],
  oneItem: [],
  cart: [],
  stars: [],
  loading: false,
  error: null,
}

const devTools = window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__();

const store = createStore(
  rootReducer,
  (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : initialState,
  compose(applyMiddleware(thunk)),
  devTools)

export default store