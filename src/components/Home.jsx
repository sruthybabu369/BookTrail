// src/components/Home.jsx
import React from 'react'
import './Home.css'  // Styling specific to the Home page

function Home() {
  return (
  
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to BookTrail</h1>
        <p>Your gateway to exploring books across various genres and discovering your next favorite read!</p>
      </header>
      <section className="home-content">
        <div className="search-section">
          <h2>Start Exploring</h2>
          <input type="text" placeholder="Search for books..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
        <div className="genre-section">
          <h2>Browse by Genre</h2>
          <p>Discover books by your favorite genres and dive into new worlds!</p>
          <a href="/genres" className="explore-genres">Explore Genres</a>
        </div>
      </section>
    </div>
  
  )
}

export default Home
