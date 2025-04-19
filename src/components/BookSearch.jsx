// src/components/BookSearch.jsx
import React, { useState } from 'react'

function BookSearch({ onSelectBook }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [books, setBooks] = useState([])

  // Function to search books using Open Library API
  const searchBooks = async () => {
    if (!searchQuery.trim()) return

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(searchQuery)}`
      )
      const data = await response.json()
      setBooks(data.docs || [])
    } catch (error) {
      console.error('Error fetching book data:', error)
    }
  }

  return (
    <div className="book-search">
      <h4>Search for Books</h4>
      <input
        type="text"
        placeholder="Enter book title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={searchBooks}>Search</button>

      {/* Display search results */}
      <div className="book-results">
        {books.map((book) => (
          <div key={book.key} onClick={() => onSelectBook(book)}>
            <h5>{book.title}</h5>
            <p>Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookSearch
