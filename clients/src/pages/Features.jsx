import React, { useState, useEffect, useRef } from 'react'
import '../styles/features.css'

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [hoveredCard, setHoveredCard] = useState(null)
  const observerRef = useRef(null)

  const features = [
    {
      icon: "📅",
      title: "Period Tracker",
      description: "Track your menstrual cycle with precision. Get accurate predictions and understand your body's patterns.",
      benefits: ["Cycle predictions", "Symptom tracking", "Period calendar", "Ovulation insights"],
      color: "#FF6B9D",
      stats: { accuracy: "98%", users: "420M+" }
    },
    {
      icon: "🌸",
      title: "Ovulation Calculator",
      description: "Maximize your chances of conception with our advanced ovulation tracking and fertility window predictions.",
      benefits: ["Fertility window", "Conception tips", "Ovulation alerts", "Daily insights"],
      color: "#FF8FAB",
      stats: { success: "85%", predictions: "Daily" }
    },
    {
      icon: "🤰",
      title: "Pregnancy Tracker",
      description: "Follow your pregnancy journey week by week with expert guidance and personalized content.",
      benefits: ["Weekly updates", "Baby development", "Health tips", "Appointment reminders"],
      color: "#FFA5C0",
      stats: { weeks: "40", content: "1000+" }
    },
    {
      icon: "💊",
      title: "Symptom Logging",
      description: "Log and track over 70 symptoms to understand your body better and share insights with your doctor.",
      benefits: ["Mood tracking", "Pain logging", "Energy levels", "Custom symptoms"],
      color: "#667eea",
      stats: { symptoms: "70+", tracking: "Real-time" }
    },
    {
      icon: "📊",
      title: "Health Insights",
      description: "Get personalized health insights powered by AI and reviewed by medical experts.",
      benefits: ["Daily tips", "Pattern analysis", "Health reports", "Expert advice"],
      color: "#764ba2",
      stats: { experts: "100+", insights: "Daily" }
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      description: "Never miss important dates with customizable reminders for periods, pills, and appointments.",
      benefits: ["Period alerts", "Pill reminders", "Appointment notifications", "Custom alerts"],
      color: "#f093fb",
      stats: { reminders: "Custom", delivery: "99.9%" }
    }
  ]

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el)
    })

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [])

  // Auto-rotate active feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero" data-animate id="hero">
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        <div className="hero-content">
          <h1 className="animate-text">Powerful Features for Your Health Journey</h1>
          <p className="animate-text delay-1">Everything you need to understand and manage your reproductive health in one app</p>
          <div className="hero-stats animate-text delay-2">
            <div className="stat-item">
              <span className="stat-number">420M+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Showcase */}
      <section className="feature-showcase" data-animate id="showcase">
        <h2 className="section-title">Explore Our Features</h2>
        <div className="showcase-container">
          <div className="feature-tabs">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`feature-tab ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
                style={{ '--tab-color': feature.color }}
              >
                <span className="tab-icon">{feature.icon}</span>
                <span className="tab-title">{feature.title}</span>
                {activeFeature === index && <span className="tab-indicator"></span>}
              </button>
            ))}
          </div>
          
          <div className="feature-display">
            <div className="feature-content" key={activeFeature}>
              <div className="content-header">
                <span className="content-icon" style={{ background: features[activeFeature].color }}>
                  {features[activeFeature].icon}
                </span>
                <h3>{features[activeFeature].title}</h3>
              </div>
              <p className="content-description">{features[activeFeature].description}</p>
              
              <div className="content-stats">
                {Object.entries(features[activeFeature].stats).map(([key, value], idx) => (
                  <div key={idx} className="stat-badge">
                    <span className="stat-value">{value}</span>
                    <span className="stat-key">{key}</span>
                  </div>
                ))}
              </div>
              
              <ul className="content-benefits">
                {features[activeFeature].benefits.map((benefit, idx) => (
                  <li key={idx} className="benefit-item">
                    <span className="benefit-check">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <button className="feature-cta" style={{ background: features[activeFeature].color }}>
                Try This Feature
                <span className="cta-arrow">→</span>
              </button>
            </div>
            
            <div className="feature-visual">
              <div className="phone-mockup-feature">
                <div className="phone-screen-feature">
                  <div className="feature-demo" style={{ background: `linear-gradient(135deg, ${features[activeFeature].color}20 0%, ${features[activeFeature].color}40 100%)` }}>
                    <span className="demo-icon">{features[activeFeature].icon}</span>
                    <div className="demo-text">
                      <h4>{features[activeFeature].title}</h4>
                      <p>Interactive Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="features-grid-section" data-animate id="grid">
        <h2 className="section-title">All Features at a Glance</h2>
        <div className="features-container">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card-detailed ${hoveredCard === index ? 'hovered' : ''}`}
              data-animate
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--card-color': feature.color
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow" style={{ background: feature.color }}></div>
              <div className="feature-icon-large" style={{ background: `${feature.color}20` }}>
                {feature.icon}
              </div>
              <h2>{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-benefits">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <span className="check-icon" style={{ background: feature.color }}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="card-footer">
                <button className="learn-more-btn" style={{ color: feature.color }}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section" data-animate id="comparison">
        <h2 className="section-title">How We Compare</h2>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Flo</th>
                <th>Competitor A</th>
                <th>Competitor B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Period Tracking</td>
                <td className="check">✓</td>
                <td className="check">✓</td>
                <td className="check">✓</td>
              </tr>
              <tr>
                <td>AI-Powered Predictions</td>
                <td className="check">✓</td>
                <td className="cross">✕</td>
                <td className="check">✓</td>
              </tr>
              <tr>
                <td>Medical Expert Review</td>
                <td className="check">✓</td>
                <td className="cross">✕</td>
                <td className="cross">✕</td>
              </tr>
              <tr>
                <td>Pregnancy Mode</td>
                <td className="check">✓</td>
                <td className="check">✓</td>
                <td className="cross">✕</td>
              </tr>
              <tr>
                <td>Community Support</td>
                <td className="check">✓</td>
                <td className="cross">✕</td>
                <td className="check">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-features" data-animate id="cta">
        <div className="cta-content-features">
          <h2>Ready to take control of your health?</h2>
          <p>Join millions of women who trust Flo every day</p>
          <div className="cta-buttons-features">
            <button className="download-btn-large primary">
              Download Flo Today
              <span className="btn-icon">📱</span>
            </button>
            <button className="download-btn-large secondary">
              View Pricing
              <span className="btn-icon">💎</span>
            </button>
          </div>
          <p className="cta-note">Free to download • No credit card required</p>
        </div>
      </section>
    </div>
  )
}

export default Features
