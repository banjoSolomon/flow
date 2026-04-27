import React, { useState } from 'react'
import '../styles/healthlibrary.css'

const HealthLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Articles', icon: '📚' },
    { id: 'period', name: 'Period Health', icon: '🩸' },
    { id: 'fertility', name: 'Fertility', icon: '🌸' },
    { id: 'pregnancy', name: 'Pregnancy', icon: '🤰' },
    { id: 'wellness', name: 'Wellness', icon: '💪' }
  ]

  const articles = [
    {
      id: 1,
      category: 'period',
      title: 'Understanding Your Menstrual Cycle: A Complete Guide',
      excerpt: 'Learn about the four phases of your menstrual cycle and what happens in your body during each phase.',
      image: '🩸',
      readTime: '8 min read',
      date: 'May 15, 2025'
    },
    {
      id: 2,
      category: 'fertility',
      title: 'How to Track Ovulation: Signs and Symptoms',
      excerpt: 'Discover the key signs of ovulation and learn how to identify your most fertile days.',
      image: '🌸',
      readTime: '6 min read',
      date: 'May 12, 2025'
    },
    {
      id: 3,
      category: 'pregnancy',
      title: 'First Trimester: What to Expect Week by Week',
      excerpt: 'A comprehensive guide to the first 12 weeks of pregnancy, including symptoms and development.',
      image: '🤰',
      readTime: '10 min read',
      date: 'May 10, 2025'
    },
    {
      id: 4,
      category: 'wellness',
      title: 'Managing PMS: Natural Remedies That Work',
      excerpt: 'Evidence-based natural remedies to help manage PMS symptoms and improve your quality of life.',
      image: '💊',
      readTime: '7 min read',
      date: 'May 8, 2025'
    },
    {
      id: 5,
      category: 'period',
      title: 'Heavy Periods: When to See a Doctor',
      excerpt: 'Learn about the causes of heavy menstrual bleeding and when you should seek medical advice.',
      image: '🩺',
      readTime: '5 min read',
      date: 'May 5, 2025'
    },
    {
      id: 6,
      category: 'fertility',
      title: 'Boosting Fertility: Lifestyle Changes That Help',
      excerpt: 'Discover lifestyle modifications that can improve your fertility and increase your chances of conception.',
      image: '🥗',
      readTime: '9 min read',
      date: 'May 3, 2025'
    }
  ]

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory)

  return (
    <div className="health-library-page">
      <section className="library-hero">
        <h1>Health Library</h1>
        <p>Expert-reviewed articles about women's health</p>
        <div className="search-bar">
          <input type="text" placeholder="Search articles..." />
          <button>🔍</button>
        </div>
      </section>

      <section className="library-content">
        <div className="categories-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="cat-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="articles-grid">
          {filteredArticles.map(article => (
            <div key={article.id} className="article-card-lib">
              <div className="article-image-lib">{article.image}</div>
              <div className="article-content-lib">
                <div className="article-meta">
                  <span className="read-time">⏱️ {article.readTime}</span>
                  <span className="article-date">📅 {article.date}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a href="#" className="read-more">Read Article →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="library-cta">
        <h2>Want personalized health insights?</h2>
        <p>Download Flo to get daily tips tailored to your cycle</p>
        <button className="cta-btn">Download Flo</button>
      </section>
    </div>
  )
}

export default HealthLibrary
