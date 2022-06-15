import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import React from "react";
import { decrement, increment } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h1>The Count is: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(10))}>-</button>
      {isLogged ? <h3>some valuable info you should not see </h3> : ""}
    </div>
  );
}

export default App;
