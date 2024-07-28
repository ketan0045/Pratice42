const intialstate = 0;
export const transferdata = (state = intialstate, action) => {
  // export const transferdata = (action,state=intialstate) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const currentUser = (state = { user: {} }, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};
