import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset
} from "./features/counter/CounterSlice";
import "./App.css";

const App = () => {
  const counter = useSelector(selectCount);
  const dispatch = useDispatch();

  const addFiveHandler = () => {
    dispatch(incrementByAmount(5));
  };
  const addOneHandler = () => {
    dispatch(increment());
  };
  const resetHandler = () => {
    dispatch(reset())
  };
  const removeFiveHandler = () => {
    dispatch(decrementByAmount(5))
  };
  const removeOneHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div className="container">
        <div className="circle">
          <div>
            <h1 className="counter">{counter}</h1>
          </div>
        </div>
      </div>

      <div className="btns">
        <button onClick={addFiveHandler}>Add Five</button>
        <button onClick={addOneHandler}>Add One</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={removeOneHandler}>Remove One</button>
        <button onClick={removeFiveHandler}>Remove Five</button>
      </div>
    </div>
  );
};

export default App;
