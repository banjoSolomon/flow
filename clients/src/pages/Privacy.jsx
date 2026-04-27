import React from 'react'
import '../styles/privacy.css'

const Privacy = () => {
  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: May 2025</p>
      </section>

      <section className="privacy-content">
        <div className="privacy-container">
          <div className="privacy-section">
            <h2>🔒 Your Data is Private</h2>
            <p>At Flo, we take your privacy seriously. Your personal health data belongs to you, and we're committed to keeping it safe and secure.</p>
          </div>

          <div className="privacy-section">
            <h2>📊 What Data We Collect</h2>
            <ul>
              <li>Cycle tracking data (period dates, symptoms, moods)</li>
              <li>Account information (email, name, age)</li>
              <li>Device information (for app functionality)</li>
              <li>Usage data (to improve our services)</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>🛡️ How We Protect Your Data</h2>
            <ul>
              <li><strong>Bank-level encryption:</strong> All data is encrypted in transit and at rest</li>
              <li><strong>No selling:</strong> We never sell your personal data to third parties</li>
              <li><strong>Anonymous analytics:</strong> Usage data is anonymized and aggregated</li>
              <li><strong>Secure servers:</strong> Data stored on secure, compliant servers</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>👥 Data Sharing</h2>
            <p>We only share your data in these limited circumstances:</p>
            <ul>
              <li>With your explicit consent</li>
              <li>To provide services you've requested</li>
              <li>When required by law</li>
              <li>With service providers under strict confidentiality agreements</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>✅ Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and data</li>
              <li>Export your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>🍪 Cookies</h2>
            <p>We use cookies to improve your experience. You can control cookie preferences in your browser settings.</p>
          </div>

          <div className="privacy-section">
            <h2>👶 Children's Privacy</h2>
            <p>Flo is not intended for children under 13. We do not knowingly collect data from children.</p>
          </div>

          <div className="privacy-section">
            <h2>📧 Contact Us</h2>
            <p>If you have questions about our privacy practices:</p>
            <ul>
              <li>Email: privacy@flo.health</li>
              <li>Address: Flo Health Inc., 260 Madison Avenue, New York, NY 10016</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>🔄 Policy Updates</h2>
            <p>We may update this policy from time to time. We'll notify you of significant changes via email or in-app notification.</p>
          </div>
        </div>
      </section>

      <section className="privacy-cta">
        <h2>Questions about your data?</h2>
        <p>Our privacy team is here to help</p>
        <button className="contact-btn">Contact Privacy Team</button>
      </section>
    </div>
  )
}

export default Privacy
