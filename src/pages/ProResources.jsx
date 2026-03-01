import Breadcrumb from '../components/Breadcrumb'
import { useLanguage } from '../context/LanguageContext'
import './ProResources.css'

const creators = [
  {
    name: 'Betosky',
    platform: 'YouTube',
    icon: '▶️',
    specialty: 'Educational gameplay, map awareness, strategy',
    url: 'https://www.youtube.com/c/Betosky',
    desc: 'One of the most educational MLBB creators. Betosky breaks down macro strategy and map awareness in a digestible way for all skill levels.',
    tags: ['Strategy', 'Macro', 'Educational'],
  },
  {
    name: 'Hororo Chan',
    platform: 'YouTube',
    icon: '▶️',
    specialty: 'Hero guides, new hero spotlights, tips & tricks',
    url: 'https://www.youtube.com/@hororochan',
    desc: 'Known for comprehensive hero guides and being one of the first to cover new hero mechanics. Excellent resource for learning hero kits and builds.',
    tags: ['Hero Guides', 'New Heroes', 'Tips'],
  },
  {
    name: 'Assassin Dave',
    platform: 'YouTube',
    icon: '▶️',
    specialty: 'Assassin/carry gameplay and tutorials',
    url: 'https://www.youtube.com/@AssassinDave',
    desc: 'High-skill assassin main who teaches aggressive carry gameplay. Great for players who want to learn the assassin role and mechanics.',
    tags: ['Assassin', 'Carry', 'Mechanics'],
  },
  {
    name: 'Shinmen Takezo',
    platform: 'YouTube',
    icon: '▶️',
    specialty: 'In-depth hero guides and tier lists',
    url: 'https://www.youtube.com/@ShinmenTakezo',
    desc: 'Detailed tier lists and hero analysis. Great for understanding the meta and which heroes to invest in for ranked play.',
    tags: ['Tier Lists', 'Meta', 'Analysis'],
  },
  {
    name: 'Gemik',
    platform: 'YouTube',
    icon: '▶️',
    specialty: 'Gameplay and hero tutorials',
    url: 'https://www.youtube.com/@GemikOfficial',
    desc: 'Educational gameplay content with emphasis on hero tutorial breakdowns and ranked gameplay mechanics.',
    tags: ['Tutorials', 'Gameplay'],
  },
  {
    name: 'Elgin',
    platform: 'YouTube',
    icon: '▶️',
    specialty: 'Patch updates, hero analysis, advanced tips',
    url: 'https://www.youtube.com/@ElginMLBB',
    desc: 'Excellent patch update coverage with clear hero buffs/nerfs analysis. Follow Elgin to stay ahead of meta shifts after each patch.',
    tags: ['Patch Notes', 'Meta', 'Analysis'],
  },
  {
    name: 'JEff Official',
    platform: 'YouTube/Facebook',
    icon: '▶️',
    specialty: 'Pro gameplay and tutorials',
    url: 'https://www.youtube.com/@JEff_Official',
    desc: 'Pro player-level content showcasing high-skill gameplay with educational commentary. Great for seeing how top players approach situations.',
    tags: ['Pro Play', 'High-Skill'],
  },
  {
    name: 'Mobazane',
    platform: 'YouTube',
    icon: '▶️',
    specialty: 'High-rank gameplay and educational content',
    url: 'https://www.youtube.com/@Mobazane',
    desc: 'High-rank gameplay content with educational breakdowns. Excellent for players pushing into Mythic and beyond.',
    tags: ['High-Rank', 'Mythic', 'Educational'],
  },
  {
    name: 'ChooxTv (Sugianto)',
    platform: 'Facebook/YouTube',
    icon: '📘',
    specialty: 'Entertainment and gameplay (Philippines)',
    url: 'https://www.facebook.com/ChooxTV',
    desc: 'The most popular MLBB entertainment creator from the Philippines. Famous for comedic commentary while showing exceptional gameplay.',
    tags: ['Entertainment', 'Philippines', 'Variety'],
  },
  {
    name: 'Akos',
    platform: 'YouTube',
    icon: '▶️',
    specialty: 'Tank and support guides',
    url: 'https://www.youtube.com/@AkosMLBB',
    desc: 'Specializes in the tank and support role. Great resource for players who want to master the front-line and utility roles.',
    tags: ['Tank', 'Support', 'Guides'],
  },
  {
    name: 'General',
    platform: 'YouTube/Facebook',
    icon: '▶️',
    specialty: 'Filipino pro player content',
    url: 'https://www.youtube.com/@GeneralMLBB',
    desc: 'Filipino pro player content featuring high-level ranked and tournament gameplay with tactical insights.',
    tags: ['Pro Player', 'Philippines', 'Ranked'],
  },
  {
    name: 'R7',
    platform: 'YouTube',
    icon: '▶️',
    specialty: 'Indonesian pro player content',
    url: 'https://www.youtube.com/@R7Official',
    desc: 'Content from R7, an Indonesian pro player with exceptional mechanical skill. Watch for high-level jungler gameplay and insights.',
    tags: ['Pro Player', 'Indonesia', 'Jungler'],
  },
  {
    name: 'JEWO',
    platform: 'YouTube',
    icon: '▶️',
    specialty: 'Educational hero guides and builds',
    url: 'https://www.youtube.com/@JEWOOfficial',
    desc: 'Educational content focusing on hero guides, optimal builds, and meta-relevant strategies for improving ranked performance.',
    tags: ['Hero Guides', 'Builds', 'Educational'],
  },
  {
    name: 'Bethings',
    platform: 'YouTube/Facebook',
    icon: '▶️',
    specialty: 'Filipino educational gameplay, hero tutorials, ranked tips, and meta analysis',
    url: 'https://www.youtube.com/@Bethings',
    desc: 'Bethings is one of the most popular Filipino MLBB educational creators, known for in-depth hero tutorials, step-by-step gameplay analysis, and practical ranked climbing tips in Tagalog. Bethings breaks down meta picks, optimal builds, and rotation strategies in a way that is easy for Filipino players to understand and apply. A must-watch for Tagalog-speaking players who want to improve their gameplay and climb the ranked ladder consistently.',
    tags: ['Filipino', 'Tutorials', 'Educational', 'Meta', 'Ranked'],
  },
  {
    name: 'Fuego',
    platform: 'YouTube/Facebook',
    icon: '▶️',
    specialty: 'High-level gameplay and strategy guides',
    url: 'https://www.youtube.com/@Fuego',
    desc: 'Fuego delivers high-level MLBB strategy content including advanced rotations, meta analysis, and ranked climbing tips. Known for in-depth breakdowns that help players understand the "why" behind every play.',
    tags: ['Strategy', 'Meta', 'High-Level'],
  },
]

const mplLeagues = [
  { region: 'Philippines', short: 'PH', flag: '🇵🇭', url: 'https://www.youtube.com/@MPL_PH', note: 'Most viewed MPL league globally. Home of legendary teams like Echo, Blacklist International, and ECHO.' },
  { region: 'Indonesia', short: 'ID', flag: '🇮🇩', url: 'https://www.youtube.com/@MPL_Indonesia', note: 'Extremely competitive league. Produced multiple world champions including EVOS Legends and RRQ.' },
  { region: 'Malaysia', short: 'MY', flag: '🇲🇾', url: 'https://www.youtube.com/@MPLMY', note: 'Growing competitive scene with talented teams representing Southeast Asia.' },
  { region: 'Brazil', short: 'BR', flag: '🇧🇷', url: 'https://www.youtube.com/@MPLBR', note: 'Fastest growing region. Brazil is now a contender at international events.' },
  { region: 'Cambodia', short: 'KH', flag: '🇰🇭', url: 'https://www.youtube.com/@MPL_Cambodia', note: 'Rising region with passionate fan base and improving competitive level.' },
  { region: 'Thailand', short: 'TH', flag: '🇹🇭', url: 'https://www.youtube.com/@MPLThailand', note: 'Competitive Thai league with strong regional talent.' },
]

export default function ProResources() {
  const { t } = useLanguage()
  return (
    <div className="pro-resources">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">{t('pro.tag')}</span>
          <h1 className="section-title">{t('pro.title.1')}<span>{t('pro.title.2')}</span></h1>
          <p className="section-subtitle">{t('pro.subtitle')}</p>
        </div>
      </div>

      {/* Content Creators */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('pro.creators.title.1')}<span>{t('pro.creators.title.2')}</span></h2>
          <p className="section-subtitle">{t('pro.creators.subtitle')}</p>
          <div className="creators-grid">
            {creators.map(({ name, platform, icon, specialty, url, desc, tags }) => (
              <div key={name} className="creator-card card">
                <div className="creator-header">
                  <div className="creator-avatar">
                    <span>{name.charAt(0)}</span>
                  </div>
                  <div className="creator-info">
                    <h3 className="creator-name">{name}</h3>
                    <span className="creator-platform">
                      {icon} {platform}
                    </span>
                  </div>
                </div>
                <p className="creator-specialty">🎯 {specialty}</p>
                <p className="creator-desc">{desc}</p>
                <div className="creator-tags">
                  {tags.map(tag => <span key={tag} className="creator-tag">{tag}</span>)}
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="creator-link"
                >
                  {t('pro.visit')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MPL Esports */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('pro.mpl.title.1')}<span>{t('pro.mpl.title.2')}</span></h2>
          <p className="section-subtitle">{t('pro.mpl.subtitle')}</p>
          <div className="mpl-grid">
            {mplLeagues.map(({ region, short, flag, url, note }) => (
              <a
                key={region}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mpl-card card"
              >
                <div className="mpl-flag">{flag}</div>
                <div className="mpl-info">
                  <h3 className="mpl-region">MPL {short}</h3>
                  <p className="mpl-full">{region}</p>
                </div>
                <p className="mpl-note">{note}</p>
                <span className="mpl-watch">{t('pro.mpl.watch')}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* M-Series Championship */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('pro.mseries.title.1')}<span>{t('pro.mseries.title.2')}</span></h2>
          <div className="mseries-content">
            <div className="mseries-info">
              <p className="pro-text">{t('pro.mseries.desc')}</p>
              <div className="mseries-stats">
                {[
                  { label: 'Format', value: 'Bo3/Bo5 Double Elimination' },
                  { label: 'Regions', value: 'PH, ID, MY, BR, TH, KH, SG, and more' },
                  { label: 'Prize Pool', value: 'Hundreds of thousands USD' },
                  { label: 'Viewership', value: 'Millions of concurrent viewers' },
                ].map(({ label, value }) => (
                  <div key={label} className="mseries-stat">
                    <span className="ms-label">{label}</span>
                    <span className="ms-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mseries-champions card">
              <h3>{t('pro.mseries.champions')}</h3>
              {[
                { edition: 'M1 (2019)', team: 'Bigetron Alpha', region: 'Indonesia 🇮🇩' },
                { edition: 'M2 (2021)', team: 'Bren Esports', region: 'Philippines 🇵🇭' },
                { edition: 'M3 (2021)', team: 'ONIC Esports', region: 'Indonesia 🇮🇩' },
                { edition: 'M4 (2023)', team: 'ECHO', region: 'Philippines 🇵🇭' },
                { edition: 'M5 (2023)', team: 'Falcons (AP.Bren)', region: 'Philippines 🇵🇭' },
                { edition: 'M6 (2024)', team: 'TBD', region: 'Upcoming' },
              ].map(({ edition, team, region }) => (
                <div key={edition} className="champion-row">
                  <span className="champion-edition">{edition}</span>
                  <span className="champion-team">{team}</span>
                  <span className="champion-region">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Watch Pro Play */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('pro.why.title.1')}<span>{t('pro.why.title.2')}</span></h2>
          <div className="grid-3">
            {[
              { icon: '📚', title: 'Learn Rotations', desc: 'Professional teams execute near-perfect rotations. Watch to internalize how and when to move across the map.' },
              { icon: '🎯', title: 'Meta Discovery', desc: 'Pros play the strongest heroes and compositions. Watching MPL reveals what\'s currently powerful before it\'s widely known.' },
              { icon: '🧠', title: 'Decision Making', desc: 'Pro commentary helps explain WHY decisions are made. This macro understanding is invaluable for rank improvement.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="why-card card">
                <span className="why-icon">{icon}</span>
                <h4 className="why-title">{title}</h4>
                <p className="why-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
