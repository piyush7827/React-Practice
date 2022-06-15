import React from "react";
import ReactDOM from "react-dom";

import App1 from "./App1";
import reportWebVitals from "./reportWebVitals";
// import ThemeProvider from "./ThemeProvider";
ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider>
      <App />
    </ThemeProvider> */}

    <App1 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
