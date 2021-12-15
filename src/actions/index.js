export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const increment_by_5 = (num) => {
  return {
    type: "INCREMENT_BY_5",
    payload: num,
  };
};
