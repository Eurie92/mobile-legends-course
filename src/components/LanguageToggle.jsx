import { useLanguage } from '../context/LanguageContext'
import './LanguageToggle.css'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className="lang-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Tagalog' : 'English'}`}
      title={`Switch to ${language === 'en' ? 'Tagalog' : 'English'}`}
    >
      <span className={`lang-option${language === 'en' ? ' active' : ''}`}>EN</span>
      <span className="lang-sep">/</span>
      <span className={`lang-option${language === 'tl' ? ' active' : ''}`}>TL</span>
    </button>
  )
}
