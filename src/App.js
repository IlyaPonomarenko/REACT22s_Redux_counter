import React from "react";

import { useSelector } from "react-redux";
import { selectCount } from "./features/counter/CounterSlice";
import "./App.css";

const App = () => {
  const counter = useSelector(selectCount)

  const addFiveHandler = () => {
    
  };
  const addOneHandler = () => {
    
  };
  const resetHandler = () => {
    
  };
  const removeFiveHandler = () => {
    
  };
  const removeOneHandler = () => {
  
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
