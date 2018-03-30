import React from "react";

const BookList = ({ books, selectBook }) => {
  const renderList = () => {
    return books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  };

  return <ul className="list-group col-sm-4">{renderList()}</ul>;
};

export default BookList;
