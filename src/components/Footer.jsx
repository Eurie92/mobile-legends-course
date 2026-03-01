import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = {
  'Learn': [
    { to: '/getting-started', label: 'Getting Started' },
    { to: '/game-mechanics', label: 'Game Mechanics' },
    { to: '/hero-guides', label: 'Hero Guides' },
  ],
  'Improve': [
    { to: '/intermediate', label: 'Intermediate' },
    { to: '/advanced', label: 'Advanced' },
    { to: '/pro-resources', label: 'Pro Resources' },
  ],
  'More': [
    { to: '/glossary', label: 'Glossary' },
    { to: '/about', label: 'About' },
    { to: '/', label: 'Home' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>⚔️</span>
              <span className="footer-logo-text">MLBB <span>Academy</span></span>
            </div>
            <p className="footer-tagline">Your complete guide from Beginner to Mythical Glory. Master the Land of Dawn.</p>
            <div className="footer-disclaimer">
              ⚠️ This is a fan-made educational resource. Not affiliated with Moonton or Mobile Legends: Bang Bang.
            </div>
          </div>

          <div className="footer-nav">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="footer-col">
                <h4 className="footer-col-title">{heading}</h4>
                <ul>
                  {links.map(({ to, label }) => (
                    <li key={to}><Link to={to} className="footer-link">{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} MLBB Academy. Fan-made educational site. Mobile Legends: Bang Bang is a trademark of Moonton.
          </p>
          <div className="footer-social">
            <span className="footer-social-label">Official MLBB:</span>
            <a href="https://www.mobilelegends.com" target="_blank" rel="noopener noreferrer" className="social-link">🌐 Website</a>
            <a href="https://www.youtube.com/@mobilelegends" target="_blank" rel="noopener noreferrer" className="social-link">▶ YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
