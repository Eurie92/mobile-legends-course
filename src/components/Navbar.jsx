import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/getting-started', label: 'Getting Started' },
  { to: '/game-mechanics', label: 'Game Mechanics' },
  { to: '/hero-guides', label: 'Hero Guides' },
  { to: '/intermediate', label: 'Intermediate' },
  { to: '/advanced', label: 'Advanced' },
  { to: '/pro-resources', label: 'Pro Resources' },
  { to: '/glossary', label: 'Glossary' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
