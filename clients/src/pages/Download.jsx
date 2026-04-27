import React from 'react'
import '../styles/download.css'

const Download = () => {
  return (
    <div className="download-page">
      <section className="download-hero">
        <div className="download-content">
          <div className="download-text">
            <h1>Download Flo Today</h1>
            <p>Join 420 million people worldwide tracking their health with Flo</p>
            
            <div className="download-buttons">
              <a href="#" className="store-button apple">
                <span className="store-icon">🍎</span>
                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href="#" className="store-button google">
                <span className="store-icon">▶️</span>
                <div>
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>

            <div className="qr-download">
              <div className="qr-box">
                <div className="qr-code-download">📱</div>
              </div>
              <p>Scan QR code to download</p>
            </div>

            <div className="download-stats">
              <div className="stat">
                <h3>⭐ 4.8</h3>
                <p>App Store Rating</p>
              </div>
              <div className="stat">
                <h3>⭐ 4.7</h3>
                <p>Google Play Rating</p>
              </div>
              <div className="stat">
                <h3>7M+</h3>
                <p>5-Star Reviews</p>
              </div>
            </div>
          </div>

          <div className="download-image">
            <div className="phone-preview">
              <div className="phone-frame">
                <div className="phone-screen-preview">
                  <div className="app-screenshot">
                    <h2>📊</h2>
                    <p>Track Your Cycle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-preview">
        <h2>What You'll Get</h2>
        <div className="features-grid-download">
          <div className="feature-box">
            <span className="feature-icon-dl">📅</span>
            <h3>Period Tracking</h3>
            <p>Accurate predictions and insights</p>
          </div>
          <div className="feature-box">
            <span className="feature-icon-dl">🌸</span>
            <h3>Ovulation Calculator</h3>
            <p>Know your fertile window</p>
          </div>
          <div className="feature-box">
            <span className="feature-icon-dl">🤰</span>
            <h3>Pregnancy Mode</h3>
            <p>Week-by-week guidance</p>
          </div>
          <div className="feature-box">
            <span className="feature-icon-dl">💬</span>
            <h3>Community Support</h3>
            <p>Connect with millions</p>
          </div>
        </div>
      </section>

      <section className="testimonials-download">
        <h2>Loved by Millions</h2>
        <div className="testimonials-grid-dl">
          <div className="testimonial-dl">
            <p>"Best period tracker I've ever used!"</p>
            <span>- Sarah M.</span>
          </div>
          <div className="testimonial-dl">
            <p>"Helped me get pregnant in 3 months!"</p>
            <span>- Jessica L.</span>
          </div>
          <div className="testimonial-dl">
            <p>"Essential for understanding my body"</p>
            <span>- Emma R.</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Download
