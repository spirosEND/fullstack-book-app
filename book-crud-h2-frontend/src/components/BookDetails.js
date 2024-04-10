
import React, { useState } from 'react';

const BookDetails = ({ book }) => {
  return (
    <div>
      <h2>Book Details</h2>
      <div>
        <strong>Title:</strong> {book.title}
      </div>
      <div>
        <strong>Author:</strong> {book.author}
      </div>
      <div>
        <strong>ISBN:</strong> {book.isbn}
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetails;
