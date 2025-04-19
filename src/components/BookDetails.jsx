// src/components/BookDetails.jsx
import React from 'react'
import './BookDetails.css'

function BookDetails({ book, onBack, onFavorite }) {
  if (!book) return null;

  const title = book.title || 'N/A';
  const author = book.author_name ? book.author_name.join(', ') : 'N/A';
  const description = book.description || 'Description not available.';
  const coverId = book.cover_i;

  return (
    <div className="book-details">
      <button onClick={onBack}>Back to Search Results</button>
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Description:</strong> {description}</p>
      <button onClick={() => onFavorite(book)}>Add to Favorites</button>

      {coverId && (
        <img 
          src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`} 
          alt={`Cover of ${title}`} 
          className="book-cover" 
        />
      )}

      <a href={`https://openlibrary.org${book.key}`} target="_blank" rel="noopener noreferrer">
        Read More on Open Library
      </a>
    </div>
  );
}

export default BookDetails;
