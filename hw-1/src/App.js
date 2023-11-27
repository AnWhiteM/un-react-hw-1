import React from "react";
import BookList from "./BookList";

const booksData = [
  { title: "Book 1", author: "Author 1" },
  { title: "Book 2", author: "Author 2" },
  { title: "Book 3", author: "Author 3" },
];

function App() {
  return (
    <div className="App">
      <h1>My Book List</h1>
      <BookList books={booksData} />
    </div>
  );
}

export default App;
