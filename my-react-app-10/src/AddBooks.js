import React, { useState } from "react";
import "./AddBooks.css";
import axios from "axios";

function AddBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");
  console.log(title);
  const addBook = (e) => {
    e.preventDefault();
    let formJSON = {
      title: title,
      author: author,
      genre: genre,
      summary: summary,
    };
    const url = "http://localhost:3000/books";
    axios.post(url, formJSON).then((res) => console.log(res));
  };
  return (
    <div className="addBooks">
      <h2>Add Book</h2>
      <form>
        <label className="addBooks_label">Title:</label>
        <input
          className="addBooks_input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <label className="addBooks_label">Author:</label>
        <input
          className="addBooks_input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
        />
        <label className="addBooks_label">Genre:</label>
        <input
          className="addBooks_input"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          type="text"
        />
        <label className="addBooks_label">Summary:</label>
        <input
          className="addBooks_input"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={addBook} className="addBooks_button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddBooks;
