import React from "react";
import { useState } from "react";
import "./App.css";
const App = () => {
  let [counter, updateCounter] = useState(0);

  const addFiveHandler = () => {
    updateCounter(counter + 5);
  };
  const addOneHandler = () => {
    updateCounter(counter + 1);
  };
  const resetHandler = () => {
    updateCounter((counter = 0));
  };
  const removeFiveHandler = () => {
    updateCounter(counter - 5);
  };
  const removeOneHandler = () => {
    updateCounter(counter - 1);
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
