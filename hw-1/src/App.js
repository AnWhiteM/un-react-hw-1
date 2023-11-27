import React, { PureComponent } from "react";
import BookList from "./BookList";

const booksData = [
  { title: "Lord of the Rings", author: "J.R.R.Tolkien" },
  { title: "All Quiet on the Western Front", author: "E. M. Remarque" },
  { title: "Harry Potter", author: "J. K. Rowling" },
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
