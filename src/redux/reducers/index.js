import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";
import { cartReducer } from "./CartReduser";
import 'bootstrap/dist/css/bootstrap.min.css';


export const allReducers = combineReducers({
    cartReducer: cartReducer,
    productReducer: productReducer
})