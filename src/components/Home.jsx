// src/components/Home.jsx
import React, { useState } from 'react';
import './Home.css';
import bgImage from '../assets/booktrail.jpg';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const encodedQuery = encodeURIComponent(searchTerm.trim());
      const openLibraryUrl = `https://openlibrary.org/search?q=${encodedQuery}`;
      window.open(openLibraryUrl, '_blank');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className="home-background"
      style={{
        backgroundImage: `linear-gradient(rgb(244, 235, 235), rgba(0, 0, 0, 0.453)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '50vh',
        width: '100%',
        borderRadius: '15px',
      }}
    >
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to BookTrail</h1>
          <p>Your gateway to exploring books across various genres and discovering your next favorite read!</p>
        </header>
        <section className="home-content">
          <div className="search-section">
            <h2>Start Exploring</h2>
            <input
              type="text"
              placeholder="Search for books..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="genre-section">
            <h2>Browse by Genre</h2>
            <p>Discover books by your favorite genres and dive into new worlds!</p>
            <a href="/genres" className="explore-genres">Explore Genres</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
