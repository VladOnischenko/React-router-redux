import {combineReducers} from "redux";
import {itemReducer} from "./Api/itemReducer";
import {cartReducer} from "./Cart/cartReducer";
import {favouriteReducer} from "./Favourites/favouriteReducer";
import spinnerReducer from "./LoaderSpinner/spinnerReducer";

export const rootReducer = combineReducers({
  itemReducer,
  cartReducer,
  favouriteReducer,
  spinnerReducer
})