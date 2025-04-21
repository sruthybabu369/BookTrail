import React from 'react';
import './Favorites.css';

function Favorites({ favorites, onSelectBook, onRemoveFavorite }) {
  return (
    <div className="favorites">
      <h4>Your Favorite Books</h4>
      <ul>
        {favorites.map((book) => (
          <li key={book.key}>
            <span onClick={() => onSelectBook(book)}>{book.title}</span>
            <button onClick={() => onRemoveFavorite(book.key)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
