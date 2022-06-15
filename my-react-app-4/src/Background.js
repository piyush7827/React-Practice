import React, { useState } from "react";

const Background = () => {
  const [color, setColor] = useState(localStorage.getItem("color") || "green");
  const style = {
    height: "100vh",
    width: "100vw",
    backgroundColor: color,
  };

  const handleColorChange = (color) => {
    setColor(color);
    localStorage.setItem("color", color);
  };

  return (
    <div style={style}>
      <button onClick={() => handleColorChange("blue")}>blue</button>
      <button onClick={() => handleColorChange("yellow")}>yellow</button>
      <button onClick={() => handleColorChange("red")}>red</button>
      <button onClick={() => handleColorChange("black")}>black</button>
    </div>
  );
};

export default Background;
