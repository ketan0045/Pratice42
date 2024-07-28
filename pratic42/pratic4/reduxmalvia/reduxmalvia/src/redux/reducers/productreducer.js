// import { ActionType } from "../contants/action-type";
// const initialstate = {
//   products: [],
// };

// export const productreducer = (state = initialstate, { type, payload }) => {
//   // export const productreducer = (state = initialstate, { type, payload }) => { labu
//   switch (type) {
//     case ActionType.SET_PRODUCT:
//       console.log("type =>",type,"payload =>",payload)
//       return { ...state, products: payload };
//     default:
//       return state;
//   }
// };

// export const selectProductreducer = (state = {}, { type, payload }) => {
 
//   switch (type) {
//     case ActionType.SELECTED_PRODUCT:
//       console.log("type =>",type,"payload =>",payload)  
//       return { ...state,...payload };
//       case ActionType.REMOVE_SELECTED_PRODUCT:
//         console.log("type =>",type,"payload =>",payload)  
//         return {};
//     default:
//       return state;
//   } 
// };

// vache thunk


import { ActionTypes } from "../contants/action-type";
const intialState = {
  products: [],
  searchTerm: '',
};

export const productsReducer = (state = intialState, { type, payload }) => {
  console.log(type, payload,"0000")
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      console.log("payload", payload);
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODCTS:
      return { ...state, products: payload };
      case ActionTypes.SET_SEARCH_TERM:    
        return { ...state, searchTerm: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

//  without desctructer
// // 4....import { ActionTypes } from "../constants/action-types";
// import { ActionTypes } from "../contants/action-type";
// const intialState = {
//   products: [],
// };

// export const productsReducer = (state = intialState,action) => {
//   switch (action.type) {
//     case ActionTypes.SET_PRODUCTS:
//       return  { ...state,
//          products:action.payload
//         };
//     default:
//       return state;
//   }
// };

// export const selectedProductsReducer = (state = {}, action) => {
//   console.log(action.payload,"nnnn");

//   switch (action.type) {
//     here = action.payload
//     case ActionTypes.SELECTED_PRODUCT:
//       return {
//         ...state,
//       ...here
// kadach [...action.payload]
//       };
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//       return {};
//     default:
//       return state;
//   }
// };
