import React from 'react'
import '../styles/features.css'

const Features = () => {
  const features = [
    {
      icon: "📅",
      title: "Period Tracker",
      description: "Track your menstrual cycle with precision. Get accurate predictions and understand your body's patterns.",
      benefits: ["Cycle predictions", "Symptom tracking", "Period calendar", "Ovulation insights"]
    },
    {
      icon: "🌸",
      title: "Ovulation Calculator",
      description: "Maximize your chances of conception with our advanced ovulation tracking and fertility window predictions.",
      benefits: ["Fertility window", "Conception tips", "Ovulation alerts", "Daily insights"]
    },
    {
      icon: "🤰",
      title: "Pregnancy Tracker",
      description: "Follow your pregnancy journey week by week with expert guidance and personalized content.",
      benefits: ["Weekly updates", "Baby development", "Health tips", "Appointment reminders"]
    },
    {
      icon: "💊",
      title: "Symptom Logging",
      description: "Log and track over 70 symptoms to understand your body better and share insights with your doctor.",
      benefits: ["Mood tracking", "Pain logging", "Energy levels", "Custom symptoms"]
    },
    {
      icon: "📊",
      title: "Health Insights",
      description: "Get personalized health insights powered by AI and reviewed by medical experts.",
      benefits: ["Daily tips", "Pattern analysis", "Health reports", "Expert advice"]
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      description: "Never miss important dates with customizable reminders for periods, pills, and appointments.",
      benefits: ["Period alerts", "Pill reminders", "Appointment notifications", "Custom alerts"]
    }
  ]

  return (
    <div className="features-page">
      <section className="features-hero">
        <div className="hero-content">
          <h1>Powerful Features for Your Health Journey</h1>
          <p>Everything you need to understand and manage your reproductive health in one app</p>
        </div>
      </section>

      <section className="features-grid-section">
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-detailed">
              <div className="feature-icon-large">{feature.icon}</div>
              <h2>{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-benefits">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section-features">
        <h2>Ready to take control of your health?</h2>
        <p>Join millions of women worldwide</p>
        <button className="download-btn-large">Download Flo Now</button>
      </section>
    </div>
  )
}

export default Features
