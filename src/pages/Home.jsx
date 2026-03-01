import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import ProgressTracker from '../components/ProgressTracker'
import './Home.css'

export default function Home() {
  const { t } = useLanguage()

  const quickNavCards = [
    {
      to: '/getting-started',
      icon: '🎮',
      title: t('home.card.gs.title'),
      desc: t('home.card.gs.desc'),
      badge: t('home.card.gs.badge'),
      color: 'green',
    },
    {
      to: '/game-mechanics',
      icon: '⚙️',
      title: t('home.card.gm.title'),
      desc: t('home.card.gm.desc'),
      badge: t('home.card.gm.badge'),
      color: 'blue',
    },
    {
      to: '/hero-guides',
      icon: '🦸',
      title: t('home.card.hg.title'),
      desc: t('home.card.hg.desc'),
      badge: t('home.card.hg.badge'),
      color: 'gold',
    },
    {
      to: '/intermediate',
      icon: '📈',
      title: t('home.card.int.title'),
      desc: t('home.card.int.desc'),
      badge: t('home.card.int.badge'),
      color: 'orange',
    },
    {
      to: '/advanced',
      icon: '🏆',
      title: t('home.card.adv.title'),
      desc: t('home.card.adv.desc'),
      badge: t('home.card.adv.badge'),
      color: 'red',
    },
    {
      to: '/pro-resources',
      icon: '⭐',
      title: t('home.card.pro.title'),
      desc: t('home.card.pro.desc'),
      badge: t('home.card.pro.badge'),
      color: 'purple',
    },
  ]

  const benefits = [
    {
      icon: '📚',
      title: t('home.benefit.structured.title'),
      desc: t('home.benefit.structured.desc'),
    },
    {
      icon: '🎯',
      title: t('home.benefit.hero.title'),
      desc: t('home.benefit.hero.desc'),
    },
    {
      icon: '🔄',
      title: t('home.benefit.updated.title'),
      desc: t('home.benefit.updated.desc'),
    },
  ]

  const tips = [
    { icon: '💡', tip: t('home.tip.awareness'), tag: 'Awareness' },
    { icon: '⚔️', tip: t('home.tip.objectives'), tag: 'Objectives' },
    { icon: '🛡️', tip: t('home.tip.rotation'), tag: 'Rotation' },
    { icon: '💰', tip: t('home.tip.farming'), tag: 'Farming' },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay" />
        <div className="hero-particles">
          {[...Array(8)].map((_, i) => <div key={i} className="particle" style={{ '--i': i }} />)}
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span>⚔️</span> {t('home.badge')}
          </div>
          <h1 className="hero-title">
            {t('home.title.1')}<span>{t('home.title.2')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('home.subtitle')}
          </p>
          <div className="hero-actions">
            <Link to="/getting-started" className="btn-primary">{t('home.cta.start')}</Link>
            <Link to="/hero-guides" className="btn-secondary">{t('home.cta.heroes')}</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><strong>30+</strong><span>{t('home.stat.heroes')}</span></div>
            <div className="hero-stat-sep" />
            <div className="hero-stat"><strong>9</strong><span>{t('home.stat.sections')}</span></div>
            <div className="hero-stat-sep" />
            <div className="hero-stat"><strong>15+</strong><span>{t('home.stat.creators')}</span></div>
            <div className="hero-stat-sep" />
            <div className="hero-stat"><strong>Free</strong><span>{t('home.stat.free')}</span></div>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.where')}<span>{t('home.where.span')}</span></h2>
            <p className="section-subtitle">{t('home.where.sub')}</p>
          </div>
          <div className="quick-nav-grid">
            {quickNavCards.map(({ to, icon, title, desc, badge, color }) => (
              <Link to={to} key={to} className={`quick-card quick-card--${color}`}>
                <div className="quick-card-icon">{icon}</div>
                <div className="quick-card-body">
                  <span className="quick-card-badge">{badge}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <span className="quick-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.why')}<span>{t('home.why.span')}</span></h2>
            <p className="section-subtitle">{t('home.why.sub')}</p>
          </div>
          <div className="grid-3">
            {benefits.map(({ icon, title, desc }) => (
              <div key={title} className="benefit-card card">
                <div className="benefit-icon">{icon}</div>
                <h3 className="benefit-title">{title}</h3>
                <p className="benefit-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.track')}<span>{t('home.track.span')}</span></h2>
            <p className="section-subtitle">{t('home.track.sub')}</p>
          </div>
          <ProgressTracker />
        </div>
      </section>

      {/* Latest Tips */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.tips')}<span>{t('home.tips.span')}</span></h2>
            <p className="section-subtitle">{t('home.tips.sub')}</p>
          </div>
          <div className="tips-grid">
            {tips.map(({ icon, tip, tag }) => (
              <div key={tag} className="tip-card card">
                <div className="tip-header">
                  <span className="tip-icon">{icon}</span>
                  <span className="badge badge-blue">{tag}</span>
                </div>
                <p className="tip-text">{tip}</p>
              </div>
            ))}
          </div>
          <div className="tips-cta">
            <Link to="/intermediate" className="btn-primary">{t('home.tips.cta')}</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">{t('home.cta.title.1')}<span>{t('home.cta.title.2')}</span></h2>
            <p className="cta-subtitle">{t('home.cta.sub')}</p>
            <div className="cta-actions">
              <Link to="/getting-started" className="btn-primary">{t('home.cta.begin')}</Link>
              <Link to="/glossary" className="btn-secondary">{t('home.cta.lingo')}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
