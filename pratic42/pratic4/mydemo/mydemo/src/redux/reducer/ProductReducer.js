import ActionTypes from "../constant/actiontpye";
const initialstate = {
  products: [],
};
export const productreducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCE:    
      return {
        ...state,
        products: payload,
      };
      case ActionTypes.FETCH_PRODUCE:
        return { ...state, products: payload }
    default:
      return state;
  }
};

export const selectproductreducer = (state={}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCE:
      return {
        ...state,
        ...payload,
      };
      case ActionTypes.REMOVE_SELECTED_PRODUCE:
        console.log(type,"fired 3333")
        return { };
  
    default:
      return state;
  }
};


