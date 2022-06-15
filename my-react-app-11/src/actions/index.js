export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrement = (num1) => {
  return {
    type: "DECREMENT",
    payload: num1,
  };
};

export const signin = () => {
  return {
    type: "SIGN_IN",
  };
};
