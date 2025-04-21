import React, { useState, useEffect } from 'react';
import './GenreList.css';

// Map display names to valid Open Library subject keys
const genreMap = {
  'Science Fiction': 'science_fiction',
  'Romance': 'romance',
  'Mystery': 'mystery',
  'History': 'history',
  'Fantasy': 'fantasy',
  'Horror': 'horror'
};

function GenreList({ onSelectBook }) {
  const [genreBooks, setGenreBooks] = useState({});

  useEffect(() => {
    Object.entries(genreMap).forEach(([displayName, subjectKey]) => {
      fetch(`https://openlibrary.org/subjects/${subjectKey}.json`)
        .then((response) => response.json())
        .then((data) => {
          setGenreBooks((prev) => ({ ...prev, [displayName]: data.works }));
        })
        .catch((error) => console.error(`Error fetching ${displayName}:`, error));
    });
  }, []);

  return (
    <div className="genre-list">
      <h4>Discover Books by Genre</h4>
      {Object.keys(genreMap).map((genre) => (
        <div key={genre}>
          <h5>{genre}</h5>
          <div className="genre-books">
            {genreBooks[genre]?.slice(0, 5).map((book) => (
              <div key={book.key} onClick={() => onSelectBook(book)} className="book-card">
                <p>{book.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
