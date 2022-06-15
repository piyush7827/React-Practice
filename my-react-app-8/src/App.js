import "./App.css";
import React from "react";
import { Context } from "./ThemeProvider";

function App() {
  const { toggle, toggleFunction } = Context();
  console.log(toggle);

  return (
    <div
      className="app"
      style={{
        backgroundColor: toggle ? "blue" : "tomato",
      }}
    >
      <h1>Context API</h1>
      <button onClick={toggleFunction}>Change theme</button>
    </div>
  );
}

export default App;
