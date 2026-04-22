import React from 'react'
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
            <li><a href="#">Flo for Tracking Your Period</a></li>
            <li><a href="#">Flo for Getting Pregnant</a></li>
            <li><a href="#">Flo for Pregnancy</a></li>
            <li><a href="#">Pass It On Project</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Manage subscription</a></li>
            <li><a href="#">Flo promo codes</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="#">Press Center</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="#">Science & research</a></li>
            <li><a href="#">Medical affairs</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>CONTENT</h4>
          <ul>
            <li><a href="#">Health Library</a></li>
            <li><a href="#">Editorial process and standards</a></li>
            <li><a href="#">Advertising principles</a></li>
            <li><a href="#">Tools</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>LEGAL</h4>
          <ul>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Privacy portal</a></li>
            <li><a href="#">Flo privacy FAQs</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Cookie policy</a></li>
            <li><a href="#">Using Flo's IP</a></li>
            <li><a href="#">Accessibility statement</a></li>
            <li><a href="#">Security at Flo</a></li>
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
