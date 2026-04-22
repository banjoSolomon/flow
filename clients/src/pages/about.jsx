import React from 'react'
import '../styles/about.css'

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Flo Health</h1>
        <p>Empowering women with knowledge and support for their health journey</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Flo is dedicated to providing women with accurate, personalized health information 
            throughout their entire reproductive life. We combine cutting-edge technology with 
            medical expertise to help millions of women understand their bodies better.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team includes over 100 medical experts, scientists, and healthcare professionals 
            who review all medical studies and information we share. We're committed to providing 
            evidence-based, medically-credible health information.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Impact</h2>
          <div className="impact-stats">
            <div className="impact-item">
              <h3>77M+</h3>
              <p>Monthly active users worldwide</p>
            </div>
            <div className="impact-item">
              <h3>380M+</h3>
              <p>Total app installs</p>
            </div>
            <div className="impact-item">
              <h3>1B</h3>
              <p>Women reached through Pass It On Project</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Pass It On Project</h2>
          <p>
            Through our Pass It On Project, we're extending free, medically-credible health 
            information to 1 billion women in underserved communities worldwide—because where 
            you live shouldn't determine what you know about your own body.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
