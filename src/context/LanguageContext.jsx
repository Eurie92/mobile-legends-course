import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.getting-started': 'Getting Started',
    'nav.game-mechanics': 'Game Mechanics',
    'nav.hero-guides': 'Hero Guides',
    'nav.intermediate': 'Intermediate',
    'nav.advanced': 'Advanced',
    'nav.pro-resources': 'Pro Resources',
    'nav.patch-notes': 'Patch Notes',
    'nav.glossary': 'Glossary',
    'nav.about': 'About',

    // Home page
    'home.badge': 'The Complete MLBB Learning Platform',
    'home.title.1': 'Master the ',
    'home.title.2': 'Land of Dawn',
    'home.subtitle': 'From your very first match to reaching Mythical Glory — your complete, structured guide to Mobile Legends: Bang Bang.',
    'home.cta.start': 'Start Learning →',
    'home.cta.heroes': 'Browse Hero Guides',
    'home.stat.heroes': 'Hero Guides',
    'home.stat.sections': 'Course Sections',
    'home.stat.creators': 'Pro Creators',
    'home.stat.free': 'Forever',
    'home.where': 'Where Do You Want to ',
    'home.where.span': 'Begin?',
    'home.where.sub': 'Six structured modules covering everything from basics to professional-level strategies.',
    'home.why': 'Why Use ',
    'home.why.span': 'MLBB Academy?',
    'home.why.sub': 'Everything you need to improve, in one place — no fluff, just results.',
    'home.track': 'Track Your ',
    'home.track.span': 'Progress',
    'home.track.sub': 'Mark sections as complete — your progress is saved locally in your browser.',
    'home.tips': 'Quick ',
    'home.tips.span': 'Tips',
    'home.tips.sub': 'Fast, actionable tips to instantly improve your gameplay.',
    'home.tips.cta': 'View All Strategies →',
    'home.cta.title.1': 'Ready to Reach ',
    'home.cta.title.2': 'Mythical Glory?',
    'home.cta.sub': 'Start with the basics and work your way up. Your journey begins here.',
    'home.cta.begin': 'Begin Your Journey →',
    'home.cta.lingo': 'Learn the Lingo',

    // Footer
    'footer.tagline': 'Your complete guide from Beginner to Mythical Glory. Master the Land of Dawn.',
    'footer.disclaimer': '⚠️ This is a fan-made educational resource. Not affiliated with Moonton or Mobile Legends: Bang Bang.',
  },
  tl: {
    // Navbar
    'nav.home': 'Tahanan',
    'nav.getting-started': 'Pagsisimula',
    'nav.game-mechanics': 'Mekanika ng Laro',
    'nav.hero-guides': 'Gabay sa Bayani',
    'nav.intermediate': 'Intermediate',
    'nav.advanced': 'Advanced',
    'nav.pro-resources': 'Pro Resources',
    'nav.patch-notes': 'Mga Patch Notes',
    'nav.glossary': 'Glossary',
    'nav.about': 'Tungkol',

    // Home page
    'home.badge': 'Ang Kumpletong MLBB Learning Platform',
    'home.title.1': 'Maging Master sa ',
    'home.title.2': 'Land of Dawn',
    'home.subtitle': 'Mula sa iyong unang laro hanggang sa maabot ang Mythical Glory — ang kumpletong gabay mo sa Mobile Legends: Bang Bang.',
    'home.cta.start': 'Magsimula →',
    'home.cta.heroes': 'Tingnan ang Mga Bayani',
    'home.stat.heroes': 'Gabay sa Bayani',
    'home.stat.sections': 'Mga Seksyon',
    'home.stat.creators': 'Pro Creators',
    'home.stat.free': 'Magpakailanman',
    'home.where': 'Saan Mo Gustong ',
    'home.where.span': 'Magsimula?',
    'home.where.sub': 'Anim na structured na module mula sa basics hanggang sa professional-level na mga stratehiya.',
    'home.why': 'Bakit Gamitin ang ',
    'home.why.span': 'MLBB Academy?',
    'home.why.sub': 'Lahat ng kailangan mo para gumaling, sa isang lugar — walang kalokohan, puro resulta.',
    'home.track': 'Subaybayan ang Iyong ',
    'home.track.span': 'Progreso',
    'home.track.sub': 'Markahan ang mga seksyon bilang kumpleto — nai-save ang progreso mo sa iyong browser.',
    'home.tips': 'Mga Mabilisang ',
    'home.tips.span': 'Tips',
    'home.tips.sub': 'Mabilis at praktikal na mga tip para agad mapahusay ang iyong laro.',
    'home.tips.cta': 'Tingnan Lahat ng Stratehiya →',
    'home.cta.title.1': 'Handa Ka Na Bang Maabot ang ',
    'home.cta.title.2': 'Mythical Glory?',
    'home.cta.sub': 'Magsimula sa mga basics at paakyat. Nagsisimula dito ang iyong paglalakbay.',
    'home.cta.begin': 'Simulan ang Paglalakbay →',
    'home.cta.lingo': 'Aralin ang Wika',

    // Footer
    'footer.tagline': 'Ang kumpletong gabay mo mula Beginner hanggang Mythical Glory. Maging master sa Land of Dawn.',
    'footer.disclaimer': '⚠️ Ito ay fan-made na educational resource. Hindi konektado sa Moonton o Mobile Legends: Bang Bang.',
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('mlbb-lang') || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('mlbb-lang', language)
    } catch {
      // localStorage not available
    }
  }, [language])

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tl' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
