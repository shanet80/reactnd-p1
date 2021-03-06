import React from "react";
import PropTypes from "prop-types";

function Book({ book, onShelfChange }) {
  let thumbnail =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : "";
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${thumbnail}")`
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={book.shelf || "none"}
            onChange={e => onShelfChange(book, e.target.value)}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {(book.authors || ["Unknown"]).join(", ")}
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string
    }),
    shelf: PropTypes.string
  }).isRequired,
  onShelfChange: PropTypes.func
};

Book.defaultProps = {
  onShelfChange: () => {}
};

export default Book;
