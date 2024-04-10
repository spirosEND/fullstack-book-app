import React, { useState } from 'react';

const AddBookForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: ''
    // Add more fields as needed
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Make a POST request to add the new book to the backend API
      const response = await fetch('http://localhost:8080/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      
      });
      if (response.ok) {
        // If the request is successful, parse the response body as JSON
        // and pass the new book data to the parent component via the onAdd callback
        const newBook = await response.json();
        onAdd(newBook);
        // Reset the form fields after successful addition
        setFormData({
          title: '',
          author: '',
          isbn: ''
          // Reset other fields as needed
        });
      } else {
        throw new Error('Failed to add book');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Add-book">
      <h2>Add Book</h2>
      <form 
      className="submit-form"
      onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
          className="input-field"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author: </label>
          <input
          className="input-field"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>ISBN:   </label>
          <input
          className="input-field"
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more input fields for additional book details */}
        <button type="submit"
        >Add Book</button>
      </form>
    </div>
  );

  

};

export default AddBookForm;
