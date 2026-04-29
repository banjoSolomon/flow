import React, { useState, useEffect, useRef } from 'react'
import '../styles/home.css'
import CycleCalculator from '../components/CycleCalculator'

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const observerRef = useRef(null)

  const testimonials = [
    {
      text: "[Flo is the] Best period app I've ever used. Over the years I've tried out many period tracking apps but this has got to be the best one I've ever used.",
      author: "Flo user",
      source: "App Store review",
      avatar: "👩"
    },
    {
      text: "As I was having problems conceiving I was prompted to use an ovulation monitor. By logging the info into Flo, I was able to get a better idea about my specific cycle. Now I'm pregnant!",
      author: "Kristen DuVal",
      source: "App Store review",
      avatar: "👩‍🦰"
    },
    {
      text: "As someone with PCOS and irregular periods, this app has been a lifesaver in assisting me with tracking my fertility!",
      author: "Flo user",
      source: "App store review",
      avatar: "👩‍🦱"
    },
    {
      text: "This is the best ovulation tracker app I've ever known. If you don't know when you ovulate, Flo will do that for you.",
      author: "Flo user",
      source: "App Store review",
      avatar: "👱‍♀️"
    }
  ]

  const articles = [
    {
      title: "LH surge: What is it, and why is it important if you're TTC?",
      date: "May 02, 2025",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🔬"
    },
    {
      title: "A guide to AMH and its role in reproductive health",
      date: "May 02, 2025",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🩺"
    },
    {
      title: "Spotting during ovulation: Is it normal? A doctor weighs in",
      date: "May 02, 2025",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "🔍"
    }
  ]

  const features = [
    {
      title: "Track your cycle and symptoms",
      description: "Figure out what's normal for you with our period and cycle tracker. Spot patterns in your symptoms and know when your period is likely to start so you're always prepared.",
      icon: "📅",
      color: "#FF6B9D"
    },
    {
      title: "Understand your fertility better",
      description: "Get daily conception tips from our experts and learn how to read your body's fertility signals with Flo's ovulation tracker — so you can maximize your chances of a positive pregnancy test every cycle.",
      icon: "🌸",
      color: "#FF8FAB"
    },
    {
      title: "Follow your pregnancy week by week",
      description: "See how your body and baby are changing with our pregnancy tracker. Know when your baby will hit important milestones. Plus, figure out what you need to do when with our weekly checklist.",
      icon: "🤰",
      color: "#FFA5C0"
    }
  ]

  const stats = [
    { number: "420M+", label: "People worldwide", icon: "🌍" },
    { number: "100+", label: "Medical experts", icon: "👨‍⚕️" },
    { number: "7M+", label: "5-star ratings", icon: "⭐" }
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="home-container">
      {/* Floating Background Elements */}
      <div className="bg-decoration">
        <div className="float-circle circle-1"></div>
        <div className="float-circle circle-2"></div>
        <div className="float-circle circle-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section" data-animate id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="rating-badge animate-slide-up">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="rating-text">Over 7 million 5-star ratings¹</span>
            </div>
            <h1 className="hero-title animate-slide-up delay-1">
              We're Flo, the world's <span className="gradient-text">#1</span><br />
              women's health app²
            </h1>
            <p className="hero-subtitle animate-slide-up delay-2">
              Over <strong>420 million people³</strong> around the world use the Flo app to track their periods, ovulation, pregnancy, and perimenopause.
            </p>
            <div className="app-buttons animate-slide-up delay-3">
              <a href="#" className="app-store-btn">
                <span className="store-icon">🍎</span>
                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href="#" className="play-store-btn">
                <span className="store-icon">▶️</span>
                <div>
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
            <div className="hero-note animate-slide-up delay-4">
              <svg className="arrow-svg" viewBox="0 0 200 100" width="120" height="60">
                <path d="M10,50 Q60,10 120,40" stroke="#E91E63" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                <polygon points="115,35 125,40 115,45" fill="#E91E63"/>
              </svg>
              <span className="handwritten">#1 OB-GYN-recommended period tracker. It's free to join</span>
            </div>
          </div>
          <div className="hero-image" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}>
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="app-preview">
                  <div className="preview-header">
                    <span className="time">9:41</span>
                    <span className="date">December 17</span>
                    <div className="status-icons">📶 📡 🔋</div>
                  </div>
                  <div className="cycle-info">
                    <div className="period-badge pulse-animation">
                      <span className="badge-label">Period in</span>
                      <strong className="badge-number">5 days</strong>
                      <div className="badge-progress">
                        <div className="progress-bar" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div className="cycle-chart">
                      <svg viewBox="0 0 100 100" width="80" height="80">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#FFE8ED" strokeWidth="8"/>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#FF6B9D" strokeWidth="8" 
                                strokeDasharray="251" strokeDashoffset="100" className="progress-circle"/>
                        <text x="50" y="55" textAnchor="middle" fontSize="20" fill="#FF6B9D" fontWeight="bold">60%</text>
                      </svg>
                    </div>
                  </div>
                  <div className="insights-card slide-in">
                    <strong>My daily insights • Today</strong>
                    <div className="insight-items">
                      <span className="insight-tag">💧 Low energy</span>
                      <span className="insight-tag">😌 Sensitive</span>
                      <span className="insight-tag">✨ Good day</span>
                    </div>
                  </div>
                  <div className="calendar-widget slide-in delay-1">
                    <div className="date-circle">
                      <span className="date-number">25</span>
                      <span className="date-month">DEC</span>
                    </div>
                    <div className="assistant-message">
                      <span className="assistant-icon">💬</span>
                      <span>I'm Flo Health Assistant</span>
                    </div>
                  </div>
                  <div className="quick-actions">
                    <button className="action-btn">📝 Log</button>
                    <button className="action-btn">📊 Insights</button>
                    <button className="action-btn">❤️ Health</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="phone-shadow"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar" data-animate id="stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.2}s` }}>
              <span className="stat-icon">{stat.icon}</span>
              <div className="stat-content">
                <h3 className="stat-number counter">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cycle Calculator Section */}
      <section className="calculator-section" data-animate id="calculator">
        <CycleCalculator />
      </section>

      {/* Features Section */}
      <section className="features-section" data-animate id="features">
        <h2 className="section-title">What can you do with the Flo app?</h2>
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item" data-animate style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="feature-icon-wrapper" style={{ background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}CC 100%)` }}>
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#" className="feature-link">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section" data-animate id="why-choose">
        <h2 className="section-title">Why choose Flo?</h2>
        <div className="trust-cards">
          <div className="trust-card" data-animate>
            <div className="trust-icon-wrapper">
              <span className="trust-icon">🎯</span>
            </div>
            <h3>Predictions you can plan around</h3>
            <p>Advanced AI algorithms learn your unique cycle patterns for accurate predictions</p>
            <a href="#" className="trust-link">Why our users love the Flo App →</a>
          </div>
          <div className="trust-card" data-animate>
            <div className="trust-icon-wrapper">
              <span className="trust-icon">🔒</span>
            </div>
            <h3>Personal data that stays private to you</h3>
            <p>Bank-level encryption and strict privacy controls keep your data secure</p>
            <a href="#" className="trust-link">Your privacy FAQs answered →</a>
          </div>
          <div className="trust-card" data-animate>
            <div className="trust-icon-wrapper">
              <span className="trust-icon">🩺</span>
            </div>
            <h3>Powered by doctors, trusted by millions</h3>
            <p>100+ medical experts review all content for accuracy and reliability</p>
            <a href="#" className="trust-link">Meet our medical team →</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" data-animate id="testimonials">
        <h2 className="section-title">What our users say about Flo</h2>
        <p className="testimonials-subtitle">
          Flo's team of 100+ doctors, scientists and medical experts review all medical studies and information we share; no wonder 77 million women choose Flo every month
        </p>
        <div className="testimonial-carousel">
          <button className="carousel-btn prev" onClick={prevTestimonial} aria-label="Previous testimonial">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>
          <div className="testimonial-card-large">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonials[currentTestimonial].avatar}</div>
              <div className="author-info">
                <strong>{testimonials[currentTestimonial].author}</strong>
                <p>{testimonials[currentTestimonial].source}</p>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextTestimonial} aria-label="Next testimonial">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>
        </div>
        
        <div className="ratings-section" data-animate>
          <div className="stars-animated">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
            ))}
          </div>
          <h3>Over 7 million 5-star ratings¹</h3>
          <div className="store-ratings">
            <div className="rating-item">
              <span className="store-icon-large">🍎</span>
              <div>
                <strong className="rating-score">4.8</strong>
                <span className="rating-max">/5</span>
              </div>
            </div>
            <div className="rating-divider"></div>
            <div className="rating-item">
              <span className="store-icon-large">▶️</span>
              <div>
                <strong className="rating-score">4.7</strong>
                <span className="rating-max">/5</span>
              </div>
            </div>
          </div>
          <div className="qr-section">
            <div className="qr-code-wrapper">
              <div className="qr-code">
                <div className="qr-pattern"></div>
              </div>
            </div>
            <p>Use your phone's camera to scan and download the Flo app.<br/>Available on <strong>iOS</strong> and <strong>Android</strong> devices.</p>
          </div>
        </div>
      </section>

      {/* Pass It On Section */}
      <section className="pass-it-on-section" data-animate id="pass-it-on">
        <div className="pass-content">
          <div className="pass-illustration">
            <div className="illustration-wrapper">
              <div className="illustration-circle circle-1"></div>
              <div className="illustration-circle circle-2"></div>
              <div className="illustration-circle circle-3"></div>
              <div className="illustration-people">
                <span className="person person-1">👩</span>
                <span className="person person-2">👩‍🦱</span>
                <span className="person person-3">👩‍🦰</span>
                <span className="heart">💕</span>
              </div>
            </div>
          </div>
          <div className="pass-text">
            <h2>Access for all, not just the privileged</h2>
            <p>Through our Pass It On Project, we're extending free, medically-credible health information to <strong>1 billion women</strong> in underserved communities worldwide—because where you live shouldn't determine what you know about your own body.</p>
            <a href="#" className="learn-more-btn">
              Learn more about the Pass It On Project
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section" data-animate id="articles">
        <h2 className="section-title">Questions about your body, answered by experts</h2>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card" data-animate style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="article-image" style={{ background: article.gradient }}>
                <span className="article-icon">{article.icon}</span>
                <div className="article-overlay"></div>
              </div>
              <div className="article-content">
                <h3>{article.title}</h3>
                <p className="article-date">
                  <span className="calendar-icon">📅</span>
                  {article.date}
                </p>
                <a href="#" className="article-read-more">Read article →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="articles-cta">
          <a href="#" className="read-more-btn">
            Read our medically-verified health articles
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section" data-animate id="final-cta">
        <div className="cta-content">
          <h2>Ready to take control of your health?</h2>
          <p>Join millions of women who trust Flo every day</p>
          <button className="cta-button-large">
            <span>Download Flo Today</span>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>
          <p className="cta-note">Free to download • No credit card required</p>
        </div>
      </section>
    </div>
  )
}

export default Home
