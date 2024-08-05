import React, { useState, useEffect } from 'react';
import './style/Dashboard.css';
import axios from 'axios';
import { APIURL } from '../util'; 

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch books from the API
  const fetchBooks = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log('Fetching books from API...');
      const response = await axios.get(`${APIURL}/api/books`);
      console.log('Response received:', response);

      if (Array.isArray(response.data)) {
        setBooks(response.data);
        console.log('Books data:', response.data);
      } else {
        console.error('Unexpected response structure:', response.data);
        setError('Unexpected response structure');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      setError(`Error fetching books: ${error.response ? error.response.data : error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="main-content">
      <h2>Welcome to the Library Management System</h2>

      {loading && <p className="loading">Loading books...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && books.length > 0 ? (
        <main className="book-list">
          
          <h3>Available Books</h3>
          <ul>
            {books.map((book) => (
              <li key={book._id || book.isbn}>
                <img src={book.thumbnailUrl} alt={book.title} className="book-thumbnail" />
                <div className="book-details">
                  <h4>{book.title}</h4>
                  <p><strong>Author(s):</strong> {book.authors.join(', ')}</p>
                  {/* <p><strong>ISBN:</strong> {book.isbn}</p> */}
                  {/* <p><strong>Page Count:</strong> {book.pageCount}</p> */}
                  {/* <p><strong>Published Date:</strong> {new Date(book.publishedDate).toLocaleDateString()}</p>
                  <p><strong>Status:</strong> {book.status}</p> */}
                  {/* <p><strong>Description:</strong> {book.shortDescription}</p> */}
                </div>
              </li>
            ))} 
          </ul>
        </main>
      ) : (
        !loading && !error && <p>No books available.</p>
      )}
    </div>
  );
};

export default Dashboard;
