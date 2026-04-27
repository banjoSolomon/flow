import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setScrollProgress(scrollPercent)
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="logo-icon">🌸</span>
            <span className="logo-text">Flo</span>
            {isScrolled && <span className="logo-badge">Health</span>}
          </Link>
          
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link 
                to="/features" 
                className={`nav-link ${isActive('/features') ? 'active' : ''}`}
              >
                Features
                {isActive('/features') && <span className="active-indicator"></span>}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/pricing" 
                className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}
              >
                Pricing
                {isActive('/pricing') && <span className="active-indicator"></span>}
              </Link>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className={`nav-link dropdown-toggle ${activeDropdown === 'resources' ? 'open' : ''}`}
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <span className="dropdown-arrow">▾</span>
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="dropdown-menu">
                  <Link to="/health-library" className="dropdown-item">
                    <span className="dropdown-icon">📚</span>
                    <div>
                      <strong>Health Library</strong>
                      <p>Expert articles & guides</p>
                    </div>
                  </Link>
                  <Link to="/about" className="dropdown-item">
                    <span className="dropdown-icon">ℹ️</span>
                    <div>
                      <strong>About Us</strong>
                      <p>Our mission & team</p>
                    </div>
                  </Link>
                  <Link to="/contact" className="dropdown-item">
                    <span className="dropdown-icon">💬</span>
                    <div>
                      <strong>Contact</strong>
                      <p>Get in touch</p>
                    </div>
                  </Link>
                </div>
              )}
            </li>
            
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
                {isActive('/about') && <span className="active-indicator"></span>}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link-secondary ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/download" className="nav-button-wrapper">
                <button className="nav-button">
                  <span className="button-text">Download App</span>
                  <span className="button-icon">📱</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="nav-overlay" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Navbar
