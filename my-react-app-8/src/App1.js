import React, { useState, useEffect } from "react";
import "./App1.css";

function App1() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //request
      .then((response) => response.json()) // response
      .then((result) => setData(result))
      .catch((err) => err);
  }, []);

  //POST request using fetch metod

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "agent vinod",
        email: "agentvinod@gmail.com",
        id: "100",
      }),
    };
    fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="app">
      <h1>Fetch Data From Application Programming Interface</h1>
      {data.map((item) => (
        <div className="box">
          <p>User:{item.name}</p>
          <p>User Name:{item.username}</p>
          <p>Email:{item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App1;
