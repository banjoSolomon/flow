import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🌸</span>
            <span className="logo-text">Flo</span>
          </div>
          <p className="footer-tagline">Know your body.<br/>Own your health.</p>
          <div className="app-download">
            <p className="download-text">DOWNLOAD THE FLO APP</p>
            <div className="download-buttons">
              <a href="#" className="download-btn">
                <span>🍎</span> App Store
              </a>
              <a href="#" className="download-btn">
                <span>▶️</span> Google Play
              </a>
            </div>
            <div className="trustpilot">
              <span>⭐</span> Great 4.0 out of 5 ★ Trustpilot
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>FLO APP</h4>
          <ul>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/download">Download App</Link></li>
            <li><Link to="/health-library">Health Library</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Center</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>SUPPORT</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>LEGAL</h4>
          <ul>
            <li><Link to="/privacy">Privacy policy</Link></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Cookie policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="language-selector">
            <span>🌐 English</span>
          </div>
          <p className="copyright">© 2026 Flo Health Inc., Flo Health UK Limited</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="TikTok">♪</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>
      </div>
      
      <div className="footer-references">
        <button className="references-toggle">References ⌄</button>
      </div>
    </footer>
  )
}

export default Footer
