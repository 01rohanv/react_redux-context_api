import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment, increment_by_5 } from "./actions";
import DetailsProvider from "./data";

const Redux = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment_by_5(5))}>+5</button>
      <DetailsProvider />
    </div>
  );
};

export default Redux;
