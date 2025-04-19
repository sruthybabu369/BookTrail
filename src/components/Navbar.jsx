// src/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h2>BookTrail</h2>
      <ul>
        <Link to="/">Home</Link>
        <li><Link to="/">Search</Link></li>
        <li><Link to="/genres">Genres</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
