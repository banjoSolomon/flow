import React, { useState, useEffect } from 'react'
import '../styles/pricing.css'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('annual')
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showComparison, setShowComparison] = useState(false)
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    setAnimateCards(true)
  }, [])

  const calculateSavings = (monthlyPrice, annualPrice) => {
    const monthlyCost = monthlyPrice * 12
    const savings = monthlyCost - annualPrice
    const percentage = Math.round((savings / monthlyCost) * 100)
    return { amount: savings.toFixed(2), percentage }
  }

  const plans = [
    {
      id: 'free',
      name: "Free",
      price: { monthly: 0, annual: 0 },
      period: "Forever",
      description: "Essential period tracking",
      badge: null,
      features: [
        { text: "Period and cycle tracking", included: true },
        { text: "Ovulation calculator", included: true },
        { text: "Symptom logging", included: true },
        { text: "Health insights", included: true },
        { text: "Community access", included: true },
        { text: "Pregnancy mode", included: false },
        { text: "Advanced analytics", included: false },
        { text: "Priority support", included: false },
        { text: "Ad-free experience", included: false }
      ],
      popular: false,
      cta: "Get Started",
      color: "#667eea"
    },
    {
      id: 'premium',
      name: "Flo Premium",
      price: { monthly: 9.99, annual: 49.99 },
      period: billingCycle === 'annual' ? "per year" : "per month",
      description: "Complete health companion",
      badge: "Most Popular",
      features: [
        { text: "Everything in Free", included: true, highlight: true },
        { text: "Pregnancy mode with weekly updates", included: true },
        { text: "Advanced cycle analysis", included: true },
        { text: "Personalized health reports", included: true },
        { text: "Priority customer support", included: true },
        { text: "Ad-free experience", included: true },
        { text: "Secret chats", included: true },
        { text: "Unlimited symptom tracking", included: true },
        { text: "Compare with friends anonymously", included: true }
      ],
      popular: true,
      cta: "Start 7-Day Free Trial",
      color: "#FF6B9D"
    },
    {
      id: 'plus',
      name: "Flo Plus",
      price: { monthly: 14.99, annual: 79.99 },
      period: billingCycle === 'annual' ? "per year" : "per month",
      description: "Expert guidance included",
      badge: "Best Value",
      features: [
        { text: "Everything in Premium", included: true, highlight: true },
        { text: "1-on-1 health coaching", included: true },
        { text: "Personalized meal plans", included: true },
        { text: "Fitness recommendations", included: true },
        { text: "Mental health support", included: true },
        { text: "Partner sharing features", included: true },
        { text: "Export health data", included: true },
        { text: "Early access to new features", included: true }
      ],
      popular: false,
      cta: "Start 7-Day Free Trial",
      color: "#764ba2"
    }
  ]

  const getCurrentPrice = (plan) => {
    return billingCycle === 'annual' ? plan.price.annual : plan.price.monthly
  }

  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer: "Yes! You can cancel your subscription at any time from your account settings. No questions asked, and you'll retain access until the end of your billing period."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, Premium and Plus plans come with a 7-day free trial. You can explore all features risk-free. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, and Google Pay for your convenience."
    },
    {
      question: "Can I switch plans?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact our support team for a full refund."
    },
    {
      question: "Is my data secure?",
      answer: "Your privacy is our priority. We use bank-level encryption and never sell your personal data. Learn more in our Privacy Policy."
    }
  ]

  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="hero-particles"></div>
        <h1 className="fade-in-up">Choose Your Plan</h1>
        <p className="fade-in-up delay-1">Start free, upgrade when you're ready</p>
        
        <div className="billing-toggle fade-in-up delay-2">
          <button 
            className={billingCycle === 'monthly' ? 'active' : ''}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button 
            className={billingCycle === 'annual' ? 'active' : ''}
            onClick={() => setBillingCycle('annual')}
          >
            Annual
            <span className="save-badge">Save up to 58%</span>
          </button>
        </div>

        {billingCycle === 'annual' && (
          <div className="savings-banner fade-in">
            💰 Save ${calculateSavings(9.99, 49.99).amount} per year with annual billing!
          </div>
        )}
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards">
        <div className="pricing-container">
          {plans.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${animateCards ? 'animate-in' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                '--plan-color': plan.color
              }}
              onMouseEnter={() => setSelectedPlan(plan.id)}
              onMouseLeave={() => setSelectedPlan(null)}
            >
              {plan.badge && <div className="popular-badge">{plan.badge}</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{getCurrentPrice(plan)}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                {billingCycle === 'annual' && plan.price.monthly > 0 && (
                  <div className="price-comparison">
                    <span className="original-price">${plan.price.monthly}/month</span>
                    <span className="savings-text">
                      Save {calculateSavings(plan.price.monthly, plan.price.annual).percentage}%
                    </span>
                  </div>
                )}
                <p className="plan-description">{plan.description}</p>
              </div>
              
              <button className={`plan-cta ${plan.popular ? 'primary' : 'secondary'}`}>
                {plan.cta}
                <span className="arrow">→</span>
              </button>
              
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className={`${feature.included ? 'included' : 'not-included'} ${feature.highlight ? 'highlight' : ''}`}
                  >
                    <span className="icon">{feature.included ? '✓' : '✕'}</span>
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {plan.popular && (
                <div className="popular-indicator">
                  <span className="pulse-dot"></span>
                  Most chosen by users
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Toggle */}
      <section className="comparison-section">
        <button 
          className="comparison-toggle"
          onClick={() => setShowComparison(!showComparison)}
        >
          {showComparison ? 'Hide' : 'Show'} Detailed Comparison
          <span className={`toggle-icon ${showComparison ? 'open' : ''}`}>▼</span>
        </button>

        {showComparison && (
          <div className="comparison-table fade-in">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free</th>
                  <th>Premium</th>
                  <th>Plus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Period tracking</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Pregnancy mode</td>
                  <td>✕</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Health coaching</td>
                  <td>✕</td>
                  <td>✕</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Ad-free experience</td>
                  <td>✕</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Trust Indicators */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <h4>Secure Payment</h4>
            <p>Bank-level encryption</p>
          </div>
          <div className="trust-item">
            <span className="trust-icon">💳</span>
            <h4>Money-Back Guarantee</h4>
            <p>30-day refund policy</p>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⭐</span>
            <h4>Trusted by Millions</h4>
            <p>420M+ users worldwide</p>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🏆</span>
            <h4>Award Winning</h4>
            <p>Best Health App 2025</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="pricing-final-cta">
        <h2>Still have questions?</h2>
        <p>Our team is here to help you choose the right plan</p>
        <div className="cta-buttons">
          <button className="btn-primary">Contact Sales</button>
          <button className="btn-secondary">Schedule a Demo</button>
        </div>
      </section>
    </div>
  )
}

export default Pricing
