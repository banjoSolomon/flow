import React, { useState, useEffect, useRef } from 'react'
import '../styles/healthlibrary.css'

const HealthLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredArticles, setFilteredArticles] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('recent')
  const searchInputRef = useRef(null)

  const categories = [
    { id: 'all', name: 'All Articles', icon: '📚', count: 24 },
    { id: 'period', name: 'Period Health', icon: '🩸', count: 8 },
    { id: 'fertility', name: 'Fertility', icon: '🌸', count: 6 },
    { id: 'pregnancy', name: 'Pregnancy', icon: '🤰', count: 5 },
    { id: 'wellness', name: 'Wellness', icon: '💪', count: 5 }
  ]

  const articles = [
    {
      id: 1,
      category: 'period',
      title: 'Understanding Your Menstrual Cycle: A Complete Guide',
      excerpt: 'Learn about the four phases of your menstrual cycle and what happens in your body during each phase.',
      image: '🩸',
      readTime: '8 min read',
      date: 'May 15, 2025',
      views: '125K',
      likes: 1250,
      author: 'Dr. Sarah Johnson',
      tags: ['cycle', 'health', 'education']
    },
    {
      id: 2,
      category: 'fertility',
      title: 'How to Track Ovulation: Signs and Symptoms',
      excerpt: 'Discover the key signs of ovulation and learn how to identify your most fertile days.',
      image: '🌸',
      readTime: '6 min read',
      date: 'May 12, 2025',
      views: '98K',
      likes: 980,
      author: 'Dr. Emily Chen',
      tags: ['ovulation', 'fertility', 'tracking']
    },
    {
      id: 3,
      category: 'pregnancy',
      title: 'First Trimester: What to Expect Week by Week',
      excerpt: 'A comprehensive guide to the first 12 weeks of pregnancy, including symptoms and development.',
      image: '🤰',
      readTime: '10 min read',
      date: 'May 10, 2025',
      views: '156K',
      likes: 1560,
      author: 'Dr. Michael Brown',
      tags: ['pregnancy', 'trimester', 'guide']
    },
    {
      id: 4,
      category: 'wellness',
      title: 'Managing PMS: Natural Remedies That Work',
      excerpt: 'Evidence-based natural remedies to help manage PMS symptoms and improve your quality of life.',
      image: '💊',
      readTime: '7 min read',
      date: 'May 8, 2025',
      views: '87K',
      likes: 870,
      author: 'Dr. Lisa Martinez',
      tags: ['PMS', 'wellness', 'natural']
    },
    {
      id: 5,
      category: 'period',
      title: 'Heavy Periods: When to See a Doctor',
      excerpt: 'Learn about the causes of heavy menstrual bleeding and when you should seek medical advice.',
      image: '🩺',
      readTime: '5 min read',
      date: 'May 5, 2025',
      views: '72K',
      likes: 720,
      author: 'Dr. Sarah Johnson',
      tags: ['period', 'health', 'medical']
    },
    {
      id: 6,
      category: 'fertility',
      title: 'Boosting Fertility: Lifestyle Changes That Help',
      excerpt: 'Discover lifestyle modifications that can improve your fertility and increase your chances of conception.',
      image: '🥗',
      readTime: '9 min read',
      date: 'May 3, 2025',
      views: '110K',
      likes: 1100,
      author: 'Dr. Emily Chen',
      tags: ['fertility', 'lifestyle', 'health']
    }
  ]

  useEffect(() => {
    let results = articles

    if (activeCategory !== 'all') {
      results = results.filter(article => article.category === activeCategory)
    }

    if (searchQuery.trim()) {
      results = results.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    switch (sortBy) {
      case 'popular':
        results.sort((a, b) => b.views.replace('K', '') - a.views.replace('K', ''))
        break
      case 'alphabetical':
        results.sort((a, b) => a.title.localeCompare(b.title))
        break
      default:
        results.sort((a, b) => new Date(b.date) - new Date(a.date))
    }

    setFilteredArticles(results)
  }, [activeCategory, searchQuery, sortBy])

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    setIsSearching(true)
    
    setTimeout(() => {
      setIsSearching(false)
    }, 500)
  }

  const clearSearch = () => {
    setSearchQuery('')
    searchInputRef.current.focus()
  }

  return (
    <div className="health-library-page">
      <section className="library-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content-lib">
          <h1>Health Library</h1>
          <p>Expert-reviewed articles about women's health</p>
          
          <div className="search-bar-wrapper">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={handleSearch}
              />
              {searchQuery && (
                <button className="clear-search" onClick={clearSearch}>✕</button>
              )}
              {isSearching && <span className="search-loader"></span>}
            </div>
            {searchQuery && (
              <div className="search-results-count">
                Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="library-content">
        <div className="library-container">
          <aside className="library-sidebar">
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="categories-filter">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="cat-icon">{category.icon}</span>
                    <span className="cat-info">
                      <span className="cat-name">{category.name}</span>
                      <span className="cat-count">{category.count}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Sort By</h3>
              <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="alphabetical">A-Z</option>
              </select>
            </div>

            <div className="filter-section">
              <h3>View Mode</h3>
              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  ⊞
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  ☰
                </button>
              </div>
            </div>
          </aside>

          <div className="articles-main">
            {filteredArticles.length === 0 ? (
              <div className="no-results">
                <span className="no-results-icon">📭</span>
                <h3>No articles found</h3>
                <p>Try adjusting your search or filters</p>
                <button className="reset-btn" onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}>
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className={`articles-grid ${viewMode}`}>
                {filteredArticles.map((article, index) => (
                  <article
                    key={article.id}
                    className="article-card-lib"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="article-image-lib">
                      <span className="article-emoji">{article.image}</span>
                    </div>
                    
                    <div className="article-content-lib">
                      <div className="article-meta">
                        <span className="meta-item">⏱️ {article.readTime}</span>
                        <span className="meta-item">👁️ {article.views}</span>
                      </div>
                      
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                      
                      <div className="article-tags">
                        {article.tags.map((tag, idx) => (
                          <span key={idx} className="tag">#{tag}</span>
                        ))}
                      </div>
                      
                      <div className="article-footer-lib">
                        <span className="author-name">{article.author}</span>
                        <span className="likes">❤️ {article.likes}</span>
                      </div>
                      
                      <a href="#" className="read-more">Read Article →</a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
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
