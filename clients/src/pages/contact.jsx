import React, { useState, useEffect, useRef } from 'react'
import '../styles/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const [focusedField, setFocusedField] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  
  const formRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (formRef.current) observer.observe(formRef.current)
    if (infoRef.current) observer.observe(infoRef.current)

    return () => observer.disconnect()
  }, [])

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.length < 2) return 'Name must be at least 2 characters'
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name can only contain letters'
        return ''
      
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format'
        return ''
      
      case 'subject':
        if (!value.trim()) return 'Subject is required'
        if (value.length < 5) return 'Subject must be at least 5 characters'
        return ''
      
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.length < 10) return 'Message must be at least 10 characters'
        if (value.length > 500) return 'Message must not exceed 500 characters'
        return ''
      
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (name === 'message') {
      setCharCount(value.length)
    }

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
    
    setFocusedField(null)
  }

  const handleFocus = (name) => {
    setFocusedField(name)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })

    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    })

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)
      
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setCharCount(0)
      setTouched({})
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Support',
      description: 'support@flohealth.com',
      detail: 'Response within 24 hours',
      color: '#667eea'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our support team',
      detail: 'Available 24/7',
      color: '#764ba2'
    },
    {
      icon: '📱',
      title: 'Help Center',
      description: 'Browse our knowledge base',
      detail: '1000+ articles',
      color: '#E91E63'
    },
    {
      icon: '🌍',
      title: 'Community Forum',
      description: 'Connect with other users',
      detail: '77M+ members',
      color: '#00BCD4'
    }
  ]

  const faqs = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'We typically respond within 24 hours during business days.'
    },
    {
      question: 'Can I schedule a call with support?',
      answer: 'Yes! Premium users can schedule calls through their account dashboard.'
    },
    {
      question: 'Do you offer support in multiple languages?',
      answer: 'Yes, we support over 20 languages. Select your preference in settings.'
    }
  ]

  return (
    <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">24h</span>
              <span className="stat-label">Response Time</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-info" ref={infoRef}>
          <h2>Contact Methods</h2>
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="method-card"
                style={{ '--delay': `${index * 0.1}s`, '--color': method.color }}
              >
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p className="method-description">{method.description}</p>
                <span className="method-detail">{method.detail}</span>
              </div>
            ))}
          </div>

          <div className="faq-section">
            <h3>Quick Answers</h3>
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="contact-form-wrapper" ref={formRef}>
          <h2>Send us a message</h2>
          <p className="form-subtitle">Fill out the form below and we'll get back to you shortly</p>
          
          {submitSuccess && (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className={`form-group ${errors.name && touched.name ? 'error' : ''} ${focusedField === 'name' ? 'focused' : ''}`}>
              <label htmlFor="name">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => handleFocus('name')}
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
              {errors.name && touched.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className={`form-group ${errors.email && touched.email ? 'error' : ''} ${focusedField === 'email' ? 'focused' : ''}`}>
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => handleFocus('email')}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
              {errors.email && touched.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className={`form-group ${errors.subject && touched.subject ? 'error' : ''} ${focusedField === 'subject' ? 'focused' : ''}`}>
              <label htmlFor="subject">
                Subject <span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => handleFocus('subject')}
                placeholder="What is this regarding?"
                disabled={isSubmitting}
              />
              {errors.subject && touched.subject && (
                <span className="error-message">{errors.subject}</span>
              )}
            </div>

            <div className={`form-group ${errors.message && touched.message ? 'error' : ''} ${focusedField === 'message' ? 'focused' : ''}`}>
              <label htmlFor="message">
                Message <span className="required">*</span>
                <span className="char-count">{charCount}/500</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => handleFocus('message')}
                placeholder="Tell us more about your inquiry..."
                disabled={isSubmitting}
                maxLength="500"
              ></textarea>
              {errors.message && touched.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <button 
              type="submit" 
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className="button-arrow">→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
