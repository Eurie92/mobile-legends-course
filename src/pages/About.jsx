import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import './About.css'

const featuredCreators = [
  'Betosky', 'Hororo Chan', 'Assassin Dave', 'Shinmen Takezo', 'Elgin',
  'Mobazane', 'ChooxTv (Sugianto)', 'Akos', 'General', 'R7', 'JEWO', 'Gemik', 'JEff Official'
]

export default function About() {
  return (
    <div className="about">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">ℹ️ About</span>
          <h1 className="section-title">About <span>MLBB Academy</span></h1>
          <p className="section-subtitle">A fan-made educational resource dedicated to helping players of all skill levels master Mobile Legends: Bang Bang.</p>
        </div>
      </div>

      {/* About the Site */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <h2 className="section-title">Our <span>Mission</span></h2>
              <p>MLBB Academy was created to be the most comprehensive, free, and accessible learning resource for Mobile Legends: Bang Bang players worldwide.</p>
              <p>Whether you just downloaded the game or you're pushing toward Mythical Glory, this site provides structured guides, hero-specific tips, and curated pro resources to help you improve at every stage of your journey.</p>
              <p>We believe great MLBB resources should be free, well-organized, and genuinely helpful — no pay-walls, no fluff, just practical knowledge you can apply in your next match.</p>
            </div>
            <div className="about-stats-card card">
              <h3>📊 Site Overview</h3>
              {[
                { icon: '📚', label: 'Course Sections', value: '9' },
                { icon: '🦸', label: 'Hero Guides', value: '30+' },
                { icon: '📖', label: 'Glossary Terms', value: '45+' },
                { icon: '⭐', label: 'Featured Creators', value: '13' },
                { icon: '🌍', label: 'MPL Regions Covered', value: '6+' },
                { icon: '💰', label: 'Cost to Use', value: 'Free Forever' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="about-stat-row">
                  <span className="about-stat-icon">{icon}</span>
                  <span className="about-stat-label">{label}</span>
                  <span className="about-stat-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section section-alt">
        <div className="container">
          <div className="disclaimer-box">
            <div className="disclaimer-icon">⚠️</div>
            <div className="disclaimer-content">
              <h2 className="disclaimer-title">Important Disclaimer</h2>
              <p>
                <strong>MLBB Academy is a fan-made, unofficial educational resource.</strong> This website is not affiliated with, endorsed by, or connected to Moonton or Mobile Legends: Bang Bang in any official capacity.
              </p>
              <p>
                All game-related content, including hero names, abilities, items, and game mechanics, are the intellectual property of Moonton. This website exists purely for educational and community purposes.
              </p>
              <p>
                Hero data, meta information, and strategies may become outdated as the game receives regular patches and updates. Always verify current meta information with up-to-date patch notes.
              </p>
              <p>
                Links to external content creators and websites are provided for informational purposes. We are not responsible for content on external sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Community <span>Credits</span></h2>
          <p className="section-subtitle">This site's strategy content was influenced by the incredible MLBB community and its dedicated content creators. A special thanks to:</p>

          <div className="credits-grid">
            {featuredCreators.map(creator => (
              <div key={creator} className="credit-item">
                <span className="credit-avatar">{creator.charAt(0)}</span>
                <span className="credit-name">{creator}</span>
              </div>
            ))}
          </div>

          <p className="credits-note">
            These creators have contributed immensely to the MLBB community through educational content, guides, and entertainment. Visit the <Link to="/pro-resources">Pro Resources</Link> page to find their channels.
          </p>
        </div>
      </section>

      {/* How to Use */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">How to Use <span>This Guide</span></h2>
          <div className="howto-grid">
            {[
              { icon: '🆕', title: 'Complete Beginners', desc: 'Start with Getting Started → Game Mechanics → Hero Guides. Master one hero before expanding your pool.', link: '/getting-started', cta: 'Begin Here' },
              { icon: '📈', title: 'Casual to Ranked', desc: 'Read Intermediate strategies. Focus on map awareness, farming, and rotation before pushing ranked.', link: '/intermediate', cta: 'Level Up' },
              { icon: '🏆', title: 'Pushing to Mythic', desc: 'Study Advanced macro/micro, counter-jungling, and the mental game section.', link: '/advanced', cta: 'Go Advanced' },
              { icon: '❓', title: 'Learn the Language', desc: 'Use the Glossary any time you encounter an unfamiliar term or abbreviation.', link: '/glossary', cta: 'Open Glossary' },
            ].map(({ icon, title, desc, link, cta }) => (
              <div key={title} className="howto-card card">
                <span className="howto-icon">{icon}</span>
                <h4 className="howto-title">{title}</h4>
                <p className="howto-desc">{desc}</p>
                <Link to={link} className="howto-link">{cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="section">
        <div className="container">
          <div className="contribute-box card">
            <div className="contribute-content">
              <h2 className="contribute-title">🤝 Want to Contribute?</h2>
              <p>MLBB Academy thrives on community knowledge. If you have suggestions, corrections, or additional content ideas:</p>
              <ul className="contribute-list">
                <li>📧 Spotted an error? We'd love to know so we can fix it.</li>
                <li>🦸 Want a specific hero guide added or expanded? Let us know.</li>
                <li>💡 Have a strategy tip that's not here? Share your knowledge.</li>
                <li>📹 Know a great creator we should feature? Recommend them.</li>
              </ul>
              <p className="contribute-note">This is a community resource — your feedback makes it better for everyone.</p>
            </div>
            <div className="contribute-cta">
              <Link to="/glossary" className="btn-secondary">Browse Glossary</Link>
              <Link to="/hero-guides" className="btn-primary">View Hero Guides</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
