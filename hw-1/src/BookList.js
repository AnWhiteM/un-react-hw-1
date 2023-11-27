import React, { PureComponent } from "react";
import Book from "./book";

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        <Book key={index} title={book.title} author={book.author} />
      ))}
    </div>
  );
};

export default BookList;
