import React from "react";
import ReactDOM from "react-dom";
import Background from "./Background";
import Filter from "./Filter";
import PasswordLengthChecker from "./PasswordLengthChecker";

import reportWebVitals from "./reportWebVitals";
import Select from "./Select";

ReactDOM.render(
  <React.StrictMode>
    <PasswordLengthChecker />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
