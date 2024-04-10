
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import BookDetails from "./components/BookDetails";
import EditBookForm from "./components/EditBookForm";
import React, { useState } from 'react';
import './App.css';



const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = book => {
    setSelectedBook(book);
  };

  const handleAddBook = formData => {
    // Send a POST request to add the new book to the database
    console.log('Adding book:', formData);
    // Update the book list after adding the new book
  };

  const handleUpdateBook = formData => {
    // Send a PUT request to update the existing book in the database
    console.log('Updating book:', formData);
    // Update the book list after updating the book
  };

  return (
    <header className="App-header">
    <div>
      <BookList onBookClick={handleBookClick} />
      {selectedBook ? (
        <div>
          <BookDetails book={selectedBook} />
          <EditBookForm book={selectedBook} onUpdate={handleUpdateBook} />
        </div>
      ) : (
        <AddBookForm onAdd={handleAddBook} />
      )}
    </div>
    </header>
  );
};

export default App;