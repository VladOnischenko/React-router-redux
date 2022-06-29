import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./store/rootReducer";
import thunk from "redux-thunk";


const initialState = {
  items: [],
  basket: [],
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

store.subscribe(() => localStorage['redux-store'] = JSON.stringify(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

