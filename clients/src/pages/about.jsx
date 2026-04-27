import React, { useState, useEffect } from 'react'
import '../styles/about.css'

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [counters, setCounters] = useState({ users: 0, installs: 0, reached: 0 })

  useEffect(() => {
    // Animate counters
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const targets = { users: 77, installs: 380, reached: 1000 }
    let step = 0

    const timer = setInterval(() => {
      step++
      setCounters({
        users: Math.floor((targets.users * step) / steps),
        installs: Math.floor((targets.installs * step) / steps),
        reached: Math.floor((targets.reached * step) / steps)
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const timeline = [
    { year: '2015', title: 'Founded', description: 'Flo Health launched to revolutionize women\'s health tracking' },
    { year: '2017', title: 'AI Integration', description: 'Introduced AI-powered cycle predictions and health insights' },
    { year: '2019', title: 'Global Expansion', description: 'Reached 100M users worldwide across 100+ countries' },
    { year: '2021', title: 'Pass It On', description: 'Launched initiative to provide free health info to 1B women' },
    { year: '2023', title: 'Medical Excellence', description: 'Expanded medical team to 100+ healthcare professionals' },
    { year: '2024', title: 'Innovation Leader', description: 'Leading the digital health revolution with 380M+ installs' }
  ]

  const values = [
    { icon: '🔬', title: 'Science-Based', description: 'Every feature backed by medical research and expert review' },
    { icon: '🔒', title: 'Privacy First', description: 'Your health data is encrypted and never sold to third parties' },
    { icon: '🌍', title: 'Global Impact', description: 'Making health information accessible to women everywhere' },
    { icon: '💜', title: 'Empowerment', description: 'Helping women make informed decisions about their health' }
  ]

  const team = [
    { role: 'Medical Experts', count: '100+', description: 'Doctors, researchers, and healthcare professionals' },
    { role: 'Data Scientists', count: '50+', description: 'AI and machine learning specialists' },
    { role: 'Engineers', count: '200+', description: 'Building world-class health technology' },
    { role: 'Support Team', count: '150+', description: 'Helping users 24/7 in multiple languages' }
  ]

  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="fade-in">About Flo Health</h1>
          <p className="fade-in-delay">Empowering women with knowledge and support for their health journey</p>
          <div className="hero-badges fade-in-delay-2">
            <span className="badge">🏆 #1 Health App</span>
            <span className="badge">⭐ 4.8 Rating</span>
            <span className="badge">🌟 380M+ Downloads</span>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="about-section mission-section">
          <div className="section-header">
            <span className="section-label">Our Purpose</span>
            <h2>Our Mission</h2>
          </div>
          <p className="mission-text">
            Flo is dedicated to providing women with accurate, personalized health information 
            throughout their entire reproductive life. We combine cutting-edge technology with 
            medical expertise to help millions of women understand their bodies better.
          </p>
          <div className="mission-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">📱</span>
              <h4>Smart Technology</h4>
              <p>AI-powered insights tailored to you</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">👩‍⚕️</span>
              <h4>Medical Expertise</h4>
              <p>Reviewed by healthcare professionals</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🌐</span>
              <h4>Global Community</h4>
              <p>Supporting women worldwide</p>
            </div>
          </div>
        </div>

        <div className="about-section values-section">
          <div className="section-header">
            <span className="section-label">What We Stand For</span>
            <h2>Our Values</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section impact-section">
          <div className="section-header">
            <span className="section-label">Making a Difference</span>
            <h2>Our Impact</h2>
          </div>
          <div className="impact-stats">
            <div className="impact-item">
              <h3>{counters.users}M+</h3>
              <p>Monthly active users worldwide</p>
              <div className="impact-bar" style={{ width: `${(counters.users / 77) * 100}%` }}></div>
            </div>
            <div className="impact-item">
              <h3>{counters.installs}M+</h3>
              <p>Total app installs</p>
              <div className="impact-bar" style={{ width: `${(counters.installs / 380) * 100}%` }}></div>
            </div>
            <div className="impact-item">
              <h3>{counters.reached}M</h3>
              <p>Women reached through Pass It On</p>
              <div className="impact-bar" style={{ width: `${(counters.reached / 1000) * 100}%` }}></div>
            </div>
          </div>
        </div>

        <div className="about-section timeline-section">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2>Timeline</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${activeTimeline === index ? 'active' : ''}`}
                onClick={() => setActiveTimeline(index)}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section team-section">
          <div className="section-header">
            <span className="section-label">The People Behind Flo</span>
            <h2>Our Team</h2>
          </div>
          <p className="team-intro">
            Our diverse team of experts is united by a shared passion: empowering women with 
            the knowledge and tools they need to take control of their health.
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-count">{member.count}</div>
                <h3>{member.role}</h3>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section project-section">
          <div className="project-card">
            <div className="project-content">
              <span className="section-label">Social Impact</span>
              <h2>Pass It On Project</h2>
              <p>
                Through our Pass It On Project, we're extending free, medically-credible health 
                information to 1 billion women in underserved communities worldwide—because where 
                you live shouldn't determine what you know about your own body.
              </p>
              <div className="project-stats">
                <div className="project-stat">
                  <strong>100+</strong>
                  <span>Countries Reached</span>
                </div>
                <div className="project-stat">
                  <strong>25+</strong>
                  <span>Languages Supported</span>
                </div>
                <div className="project-stat">
                  <strong>1B</strong>
                  <span>Women Empowered</span>
                </div>
              </div>
            </div>
            <div className="project-visual">
              <div className="globe-animation">🌍</div>
            </div>
          </div>
        </div>

        <div className="about-section cta-section">
          <h2>Join Our Mission</h2>
          <p>Be part of the movement to make health information accessible to all women</p>
          <div className="cta-buttons">
            <button className="btn-primary">Download Flo</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
