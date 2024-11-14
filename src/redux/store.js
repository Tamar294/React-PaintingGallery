// import { createStore } from "redux";
// import { allReducers } from "./reducers";

// const store = createStore(
//     allReducers,
// );

// export default store;

import { createStore, combineReducers } from 'redux';
import { CartReducer } from './reducers/CartReduser';
import { ProductReducer } from './reducers/ProductReducer';


const rootReducer = combineReducers({
  ProductReducer,
  CartReducer,
});

const store = createStore(rootReducer);

export default store;