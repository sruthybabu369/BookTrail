// src/components/Favorites.jsx
import React from 'react'
import './Favorites.css'

function Favorites({ favorites, onSelectBook }) {
  const removeFavorite = (bookKey) => {
    const updatedFavorites = favorites.filter((book) => book.key !== bookKey);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    onSelectBook(null); // Reset selected book
  };

  return (
    <div className="favorites">
      <h4>Your Favorite Books</h4>
      <ul>
        {favorites.map((book) => (
          <li key={book.key}>
            <span onClick={() => onSelectBook(book)}>{book.title}</span>
            <button onClick={() => removeFavorite(book.key)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
