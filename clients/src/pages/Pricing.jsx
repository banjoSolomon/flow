import React, { useState } from 'react'
import '../styles/pricing.css'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('annual')

  const plans = [
    {
      name: "Free",
      price: billingCycle === 'annual' ? 0 : 0,
      period: "Forever",
      description: "Essential period tracking",
      features: [
        "Period and cycle tracking",
        "Ovulation calculator",
        "Symptom logging",
        "Health insights",
        "Community access"
      ],
      notIncluded: [
        "Pregnancy mode",
        "Advanced analytics",
        "Priority support",
        "Ad-free experience"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Flo Premium",
      price: billingCycle === 'annual' ? 49.99 : 9.99,
      period: billingCycle === 'annual' ? "per year" : "per month",
      description: "Complete health companion",
      features: [
        "Everything in Free",
        "Pregnancy mode with weekly updates",
        "Advanced cycle analysis",
        "Personalized health reports",
        "Priority customer support",
        "Ad-free experience",
        "Secret chats",
        "Unlimited symptom tracking",
        "Compare with friends anonymously"
      ],
      notIncluded: [],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Flo Plus",
      price: billingCycle === 'annual' ? 79.99 : 14.99,
      period: billingCycle === 'annual' ? "per year" : "per month",
      description: "Expert guidance included",
      features: [
        "Everything in Premium",
        "1-on-1 health coaching",
        "Personalized meal plans",
        "Fitness recommendations",
        "Mental health support",
        "Partner sharing features",
        "Export health data",
        "Early access to new features"
      ],
      notIncluded: [],
      popular: false,
      cta: "Start Free Trial"
    }
  ]

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <h1>Choose Your Plan</h1>
        <p>Start free, upgrade when you're ready</p>
        
        <div className="billing-toggle">
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
            <span className="save-badge">Save 58%</span>
          </button>
        </div>
      </section>

      <section className="pricing-cards">
        <div className="pricing-container">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              
              <button className={`plan-cta ${plan.popular ? 'primary' : 'secondary'}`}>
                {plan.cta}
              </button>
              
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="included">
                    <span className="icon">✓</span>
                    {feature}
                  </li>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <li key={idx} className="not-included">
                    <span className="icon">✕</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Can I cancel anytime?</h3>
            <p>Yes! You can cancel your subscription at any time. No questions asked.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a free trial?</h3>
            <p>Yes, Premium and Plus plans come with a 7-day free trial. No credit card required.</p>
          </div>
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and Apple Pay.</p>
          </div>
          <div className="faq-item">
            <h3>Can I switch plans?</h3>
            <p>Absolutely! You can upgrade or downgrade your plan at any time.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
