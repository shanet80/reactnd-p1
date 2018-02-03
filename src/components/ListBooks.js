import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

function ListBooks({ title, books, onShelfChange }) {
  const shelfList = [
    { id: "currentlyReading", display: "Currently Reading" },
    { id: "wantToRead", display: "Want to Read" },
    { id: "read", display: "Read" }
  ];
  const currentlyReadingShelf = books.filter(
    book => book.shelf === "currentlyReading"
  );
  const readShelf = books.filter(book => book.shelf === "read");
  const wantToReadShelf = books.filter(book => book.shelf === "wantToRead");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>{title}</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfList.map(shelf => {
            let booksOnShelf = books.filter(book => book.shelf === shelf.id);
            return (
              <BookShelf
                key={shelf.id}
                title={shelf.display}
                books={booksOnShelf}
                onShelfChange={onShelfChange}
              />
            );
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

ListBooks.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func
};

export default ListBooks;
