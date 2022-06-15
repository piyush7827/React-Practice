import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);

  function Reset() {
    setCount(0);
  }

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Toggle() {
    setDisplay(!display);
  }

  const style = {
    display: "flex",
    flexDirection: "center",
  };

  return (
    <div style={style}>
      {count}
      <div>
        <button onClick={Increment}>Increment </button>
        <button onClick={Reset}>Reset </button>
        <button onClick={Decrement}>Decrement</button>
        <div>
          {display && <h2>I am Displaying</h2>}
          <button onClick={Toggle}>Toggle </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
