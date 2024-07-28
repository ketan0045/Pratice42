// import { ActionType } from "../contants/action-type";
// // aavu na kevu hoy to short "SET_PRODUCT" try krish   type: ActionType.SET_PRODUCT, ahiiii

// export const setproducts = (products) => {
//   console.log(products, "setproducts func action maa");
//   return {
//     type: ActionType.SET_PRODUCT,
//     payload: products,
//   };
// };

// export const selectedproduct = (product) => {
//   console.log(product, "SELECTED_PRODUCT func action maa");
//   return {
//     type: ActionType.SELECTED_PRODUCT,
//     payload: product,
//   };
// };

// export const removeselectedproduct = () => {
//   console.log("remove func action maa");
//   return {
//     type: ActionType.REMOVE_SELECTED_PRODUCT,
//   };
// };

// thunk

import { ActionTypes } from "../contants/action-type";
import FakeStoreApi from "../../apis/FakeStoreApi";

// const thunk ...here = (dispatch, getState) => {
export const fetchProducts = () => async (dispatch) => {
  const response = await FakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODCTS, payload: response.data });
  // aya change kro
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await FakeStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};         

export const setProducts = (products) => {
  console.log(products, "neeeeeeeeeeeeeeeeeee");
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const setSearchTerm = (term) => ({
  type: ActionTypes.SET_SEARCH_TERM,
  payload: term,
});
