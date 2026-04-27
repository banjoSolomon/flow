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
          <li className="nav-item">
            <Link to="/features" className="nav-link">Features</Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link to="/health-library" className="nav-link">Health Library</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link-secondary">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/download">
              <button className="nav-button">Download App</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
