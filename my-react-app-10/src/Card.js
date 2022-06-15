import React from "react";
import "./Card.css";
import axios from "axios";

function Card({ item, id, title, author, genre, summary }) {
  console.log("item", id);
  const deleteBook = () => {
    const url = `http://localhost:3000/books/${id}`;
    axios.delete(url).then((res) => console.log(res));
    window.location.reload();
  };
  const updateBook = () => {
    const url = `http://localhost:3000/books/${id}`;
    axios.put(url, { title: "xyz" }).then((res) => console.log("res", res));
  };
  return (
    <div className="card">
      <h4 className="card_title">{title}</h4>
      <div className="card_description">
        <p>Author: {author}</p>
        <p>Genre: {genre}</p>
      </div>
      <p className="card_summary">{summary}</p>
      <div className="card_buttons">
        <button onClick={updateBook} className="button">
          Edit
        </button>
        <button onClick={deleteBook} className="button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
