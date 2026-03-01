import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { useLanguage } from '../context/LanguageContext'
import './About.css'

const featuredCreators = [
  'Betosky', 'Hororo Chan', 'Assassin Dave', 'Shinmen Takezo', 'Elgin',
  'Mobazane', 'ChooxTv (Sugianto)', 'Akos', 'General', 'R7', 'JEWO', 'Gemik', 'JEff Official',
  'Bethings', 'Fuego'
]

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { icon: '📚', label: t('about.stat.sections'), value: '9' },
    { icon: '🦸', label: t('about.stat.heroes'), value: '30+' },
    { icon: '📖', label: t('about.stat.glossary'), value: '45+' },
    { icon: '⭐', label: t('about.stat.creators'), value: '15' },
    { icon: '🌍', label: t('about.stat.mpl'), value: '6+' },
    { icon: '💰', label: t('about.stat.cost'), value: t('about.stat.cost.value') },
  ]

  const howtoCards = [
    { icon: '🆕', title: t('about.howto.1.title'), desc: t('about.howto.1.desc'), link: '/getting-started', cta: t('about.howto.1.cta') },
    { icon: '📈', title: t('about.howto.2.title'), desc: t('about.howto.2.desc'), link: '/intermediate', cta: t('about.howto.2.cta') },
    { icon: '🏆', title: t('about.howto.3.title'), desc: t('about.howto.3.desc'), link: '/advanced', cta: t('about.howto.3.cta') },
    { icon: '❓', title: t('about.howto.4.title'), desc: t('about.howto.4.desc'), link: '/glossary', cta: t('about.howto.4.cta') },
  ]

  return (
    <div className="about">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">{t('about.tag')}</span>
          <h1 className="section-title">{t('about.title.1')}<span>{t('about.title.2')}</span></h1>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>
      </div>

      {/* About the Site */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <h2 className="section-title">{t('about.mission.title.1')}<span>{t('about.mission.title.2')}</span></h2>
              <p>{t('about.mission.p1')}</p>
              <p>{t('about.mission.p2')}</p>
              <p>{t('about.mission.p3')}</p>
            </div>
            <div className="about-stats-card card">
              <h3>{t('about.stats.title')}</h3>
              {stats.map(({ icon, label, value }) => (
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
              <h2 className="disclaimer-title">{t('about.disclaimer.title')}</h2>
              <p>{t('about.disclaimer.p1')}</p>
              <p>{t('about.disclaimer.p2')}</p>
              <p>{t('about.disclaimer.p3')}</p>
              <p>{t('about.disclaimer.p4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('about.credits.title.1')}<span>{t('about.credits.title.2')}</span></h2>
          <p className="section-subtitle">{t('about.credits.subtitle')}</p>

          <div className="credits-grid">
            {featuredCreators.map(creator => (
              <div key={creator} className="credit-item">
                <span className="credit-avatar">{creator.charAt(0)}</span>
                <span className="credit-name">{creator}</span>
              </div>
            ))}
          </div>

          <p className="credits-note">
            {t('about.credits.note').split('{link}')[0]}
            <Link to="/pro-resources">{t('about.credits.link')}</Link>
            {t('about.credits.note').split('{link}')[1]}
          </p>
        </div>
      </section>

      {/* How to Use */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('about.howto.title.1')}<span>{t('about.howto.title.2')}</span></h2>
          <div className="howto-grid">
            {howtoCards.map(({ icon, title, desc, link, cta }) => (
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
              <h2 className="contribute-title">{t('about.contribute.title')}</h2>
              <p>{t('about.contribute.desc')}</p>
              <ul className="contribute-list">
                <li>{t('about.contribute.1')}</li>
                <li>{t('about.contribute.2')}</li>
                <li>{t('about.contribute.3')}</li>
                <li>{t('about.contribute.4')}</li>
              </ul>
              <p className="contribute-note">{t('about.contribute.note')}</p>
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
