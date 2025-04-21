// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookSearch from './components/BookSearch';
import GenreList from './components/GenreList';
import BookDetails from './components/BookDetails';
import Favorites from './components/Favorites';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const addToFavorites = (book) => {
    if (!favorites.some(favBook => favBook.key === book.key)) {
      const updatedFavorites = [...favorites, book];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setSelectedBook(null);
    }
  };

  // 🔥 NEW: Handle removing a favorite
  const handleRemoveFavorite = (bookKey) => {
    const updatedFavorites = favorites.filter((book) => book.key !== bookKey);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    // Optional: reset selected book if it was removed
    if (selectedBook && selectedBook.key === bookKey) {
      setSelectedBook(null);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        {selectedBook ? (
          <BookDetails
            book={selectedBook}
            onBack={() => setSelectedBook(null)}
            onFavorite={addToFavorites}
          />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<BookSearch onSelectBook={handleSelectBook} />} />
            <Route path="/genres" element={<GenreList onSelectBook={handleSelectBook} />} />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  onSelectBook={handleSelectBook}
                  onRemoveFavorite={handleRemoveFavorite} // ✅ pass the new prop
                />
              }
            />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
