import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🌸</span>
          <span className="logo-text">Flo</span>
        </Link>
        
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item dropdown">
            <span className="nav-link">Product ▾</span>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Health Library ▾</span>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Calculators ▾</span>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <span className="nav-link">For Clinicians</span>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link-secondary">Manage subscription</Link>
          </li>
          <li className="nav-item">
            <button className="nav-button">Try Flo today</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
