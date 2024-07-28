export const increment = (inc) => {
  return {
    type: "INCREMENT",
    payload: inc,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

