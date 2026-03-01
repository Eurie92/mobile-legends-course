import { Link, useLocation } from 'react-router-dom'
import './Breadcrumb.css'

const routeNames = {
  '/': 'Home',
  '/getting-started': 'Getting Started',
  '/game-mechanics': 'Game Mechanics',
  '/hero-guides': 'Hero Guides',
  '/intermediate': 'Intermediate',
  '/advanced': 'Advanced',
  '/pro-resources': 'Pro Resources',
  '/glossary': 'Glossary',
  '/about': 'About',
}

export default function Breadcrumb() {
  const { pathname } = useLocation()
  if (pathname === '/') return null

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <Link to="/" className="breadcrumb-link">🏠 Home</Link>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-current">{routeNames[pathname] || pathname}</span>
      </div>
    </nav>
  )
}
