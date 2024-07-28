// import {combineReducers} from "redux"
// import { productreducer,selectProductreducer } from "./productreducer";

// const reducer = combineReducers({
//   allproducts: productreducer,
//   product:selectProductreducer
// })


// export default reducer


import { combineReducers } from "redux";
import {productsReducer,selectedProductsReducer} from "./productreducer"
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;