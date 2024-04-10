import React, { useState, useEffect } from 'react';

const EditBookForm = ({ book, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    isbn: book.isbn
    // Add more fields as needed
  });

  useEffect(() => {
    setFormData({
      title: book.title,
      author: book.author,
      isbn: book.isbn
      // Update other fields as needed
    });
  }, [book]); // Update form data when the book prop changes

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Call the onUpdate callback function and pass the updated form data
    onUpdate(formData);
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>ISBN:</label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more input fields for additional book details */}
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBookForm;
