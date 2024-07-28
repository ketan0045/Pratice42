import { ActionTypes } from "../constant/action-type";
const initialstate = {
  data70: [],
};

export const setproductreducer = (state = initialstate, { type, payload }) => {
  console.log(type, payload, "allllreducer");
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return {
        ...state,
        data70: payload,
      };
      case ActionTypes.FETCH_SET_PRODUCT:
        return {
          ...state,
          data70: payload,
        };
      default:
        return state;
      }
    };
   

export const selectproductreducer = (state={data41:{}}, { type, payload }) => {
  // console.log(type, payload, "second reducer");
  // console.log("reducer fire")
  switch (type) {
    case ActionTypes.SELECTE_PRODUCT:
      return {  
        ...state,  
        data41:{...payload}
      };
      case ActionTypes.REMOVE_SELECTE_PRODUCT:
        console.log("reducer niche under")
        return {      
          data41:{}
        };
    default:
      return state;
  }
};
