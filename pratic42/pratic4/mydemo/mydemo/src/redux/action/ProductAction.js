import Fakeapis from "../../apis/Fakeapis";
import ActionTypes from "../constant/actiontpye";

// export const fechings = () =>async (dispatch) =>{
//     const response =await Fakeapis.get("/products");
//     console.log(response, "11111111");
//     dispatch({ type: ActionTypes.FETCH_PRODUCE, payload: response.data });
//   };

export const fechings = () => async (dispatch) => {
  const response = await Fakeapis.get("/products");
  console.log("first", response);
  dispatch({ type: ActionTypes.FETCH_PRODUCE, payload: response.data });
};

export const fechings2 = (idd) => async (dispatch) => {
  const response = await Fakeapis.get(`/products/${idd}`);
  console.log("first", response);
  dispatch({ type: ActionTypes.SELECTED_PRODUCE, payload: response.data });
};

export const productAction = (products) => {
  console.log(products, "products");
  return {
    type: ActionTypes.SET_PRODUCE,
    payload: products,
  };
};

export const selectproductAction = (product) => {
  console.log(product, "productproduct88888888");
  return {
    type: ActionTypes.SELECTED_PRODUCE,
    payload: product,
  };
};

export const removeproductAtion = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCE,
  };
};
