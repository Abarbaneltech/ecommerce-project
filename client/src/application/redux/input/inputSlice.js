import { createStore } from "redux";

const initialState = {
  inputValue: "",
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  return state;
};
