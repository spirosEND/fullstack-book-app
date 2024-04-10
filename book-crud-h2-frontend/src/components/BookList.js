import React, { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Define a function to fetch the list of books
    const fetchBooks = async () => {
      try {
        // Make a GET request to the backend API endpoint
        const response = await fetch('http://localhost:8080/api/books');

        // Check if the response is successful
        if (response.ok) {
          // If successful, parse the response body as JSON and update the books state
          const data = await response.json();
          setBooks(data);
        } else {
          // If not successful, throw an error
          throw new Error('Failed to fetch books');
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchBooks function when the component mounts
    fetchBooks();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  // Function to handle book deletion
  const handleDelete = async id => {
    try {
      // Make a DELETE request to the backend API endpoint for deleting the book with the specified ID
      const response = await fetch(`http://localhost:8080/api/books/${id}`, {
        method: 'DELETE'
      });

      // Check if the response is successful
      if (response.ok) {
        // If successful, filter out the deleted book from the books state
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
      } else {
        // If not successful, throw an error
        throw new Error('Failed to delete book');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {/* Map over the books array and render each book's title as a list item */}
        {books.map(book => (
          <li key={book.id}>
            {book.title}: {book.author}
            {/* Add a delete button for each book item */}
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
