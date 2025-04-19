// src/components/GenreList.jsx
import React, { useState, useEffect } from 'react'
import './GenreList.css'

const genres = ['Science Fiction', 'Romance', 'Mystery', 'History', 'Fantasy', 'Horror']

function GenreList({ onSelectBook }) {
  const [genreBooks, setGenreBooks] = useState({})

  useEffect(() => {
    genres.forEach((genre) => {
      fetch(`https://openlibrary.org/subjects/${genre.toLowerCase()}.json`)
        .then((response) => response.json())
        .then((data) => {
          setGenreBooks((prev) => ({ ...prev, [genre]: data.works }))
        })
        .catch((error) => console.error('Error fetching genre data:', error))
    })
  }, [])

  return (
    <div className="genre-list">
      <h4>Discover Books by Genre</h4>
      {genres.map((genre) => (
        <div key={genre}>
          <h5>{genre}</h5>
          <div className="genre-books">
            {genreBooks[genre]?.slice(0, 5).map((book) => (
              <div key={book.key} onClick={() => onSelectBook(book)}>
                <p>{book.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default GenreList
