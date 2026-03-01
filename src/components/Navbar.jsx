import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'
import './Navbar.css'

const navLinks = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/getting-started', labelKey: 'nav.getting-started' },
  { to: '/game-mechanics', labelKey: 'nav.game-mechanics' },
  { to: '/hero-guides', labelKey: 'nav.hero-guides' },
  { to: '/intermediate', labelKey: 'nav.intermediate' },
  { to: '/advanced', labelKey: 'nav.advanced' },
  { to: '/pro-resources', labelKey: 'nav.pro-resources' },
  { to: '/patch-notes', labelKey: 'nav.patch-notes' },
  { to: '/glossary', labelKey: 'nav.glossary' },
  { to: '/about', labelKey: 'nav.about' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-icon">⚔️</span>
          <span className="brand-text">MLBB <span className="brand-accent">Academy</span></span>
        </Link>

        <div className="navbar-actions">
          <LanguageToggle />
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ to, labelKey }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {t(labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
