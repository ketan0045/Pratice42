import Createapiss from "../../Apiss/Createapiss";
import { ActionTypes } from "../constant/action-type";

export const fetch51 = () => async (dispatch) => {
  const apiresponse = await Createapiss.get("/products");
  // console.log(apiresponse.data, "apiresponse");
  dispatch({ type: ActionTypes.FETCH_SET_PRODUCT, payload: apiresponse.data });
};

export const fetch52 = (ids) => async (dispatch, getstate) => {
  const apiresponse = await Createapiss.get(`/products/${ids}`);
  console.log(apiresponse.data, "apiresponse52");
  dispatch({ type: ActionTypes.SELECTE_PRODUCT, payload: apiresponse.data });
};

export const setaction = (data9) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: data9,
  };
};

export const selectaction = (perticular) => {
  return {
    type: ActionTypes.SELECTE_PRODUCT,
    payload: perticular,
  };
};

export const removeselectaction = () => {
  // console.log(" action fire")
  return {
    type: ActionTypes.REMOVE_SELECTE_PRODUCT,
  };
};
