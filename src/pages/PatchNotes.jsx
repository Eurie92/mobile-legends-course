import Breadcrumb from '../components/Breadcrumb'
import './PatchNotes.css'

const patchSources = [
  {
    name: 'Official MLBB Website',
    icon: '🌐',
    url: 'https://www.mobilelegends.com/en/news',
    desc: 'The official Mobile Legends: Bang Bang website posts all patch notes and update announcements directly from Moonton.',
    type: 'Official',
  },
  {
    name: 'In-Game Patch Notes',
    icon: '📱',
    url: null,
    desc: 'Open the game → tap the megaphone/news icon on the main screen → look for "Patch Notes" or "Update" announcements. Always available after each update.',
    type: 'In-Game',
  },
  {
    name: 'Hororo Chan (YouTube)',
    icon: '▶️',
    url: 'https://www.youtube.com/@hororochan',
    desc: 'One of the fastest creators to cover new patches. Hororo Chan breaks down every buff, nerf, and new hero change in an easy-to-understand format.',
    type: 'Creator',
  },
  {
    name: 'Elgin (YouTube)',
    icon: '▶️',
    url: 'https://www.youtube.com/@ElginMLBB',
    desc: 'Elgin provides excellent patch analysis with clear visual breakdowns of hero adjustments, item changes, and meta shifts after every update.',
    type: 'Creator',
  },
  {
    name: 'Bethings (YouTube/Facebook)',
    icon: '▶️',
    url: 'https://www.youtube.com/@Bethings',
    desc: 'Bethings covers patch updates in Tagalog/Filipino, making it a great resource for Filipino players who want to understand patch changes in their native language.',
    type: 'Creator',
  },
  {
    name: 'Fuego (YouTube/Facebook)',
    icon: '▶️',
    url: 'https://www.youtube.com/@Fuego',
    desc: 'Fuego breaks down patch meta shifts with in-depth strategic analysis, helping players understand which heroes become stronger or weaker after each update.',
    type: 'Creator',
  },
  {
    name: 'MLBB Official Social Media',
    icon: '📘',
    url: 'https://www.facebook.com/MobileLegendsGame',
    desc: 'Follow MLBB on Facebook, Instagram, and Twitter for quick patch summaries, sneak peeks of upcoming updates, and community announcements.',
    type: 'Official',
  },
]

const patchChecklist = [
  { icon: '📖', title: 'Read the Full Patch Notes', desc: 'Check which heroes received buffs or nerfs. Pay special attention to your main heroes and commonly banned heroes.' },
  { icon: '⚔️', title: 'Identify Buffed Heroes', desc: 'Heroes that received significant buffs may become meta picks. Try them in Classic mode to see if they fit your playstyle.' },
  { icon: '🛡️', title: 'Note Nerfed Heroes', desc: 'If your main hero was nerfed, test them in Classic to see if they are still viable. Have backup heroes ready.' },
  { icon: '🏪', title: 'Check Item Changes', desc: 'Item adjustments can shift entire role metas. A buffed item may make certain heroes much stronger.' },
  { icon: '🗺️', title: 'Map & Objective Changes', desc: 'Some patches change jungle timers, turret stats, or map layout. These changes affect macro strategy significantly.' },
  { icon: '🧪', title: 'Test in Classic First', desc: 'Never jump straight into Ranked after a patch. Play 2–3 Classic games to understand how changes feel in practice.' },
]

const patchTerms = [
  { term: 'Buff', icon: '⬆️', meaning: 'A hero, item, or mechanic has been made stronger in the patch.' },
  { term: 'Nerf', icon: '⬇️', meaning: 'A hero, item, or mechanic has been made weaker to balance the game.' },
  { term: 'Rework', icon: '🔄', meaning: 'A hero\'s skills or mechanics have been significantly redesigned.' },
  { term: 'Hotfix', icon: '🔧', meaning: 'A small emergency update released between major patches to fix critical bugs or balance issues.' },
  { term: 'Meta Shift', icon: '📊', meaning: 'When a patch causes significant changes to which heroes and strategies are considered the strongest.' },
  { term: 'Advanced Server', icon: '🧪', meaning: 'A test server where upcoming changes are available early before they reach the main server.' },
]

export default function PatchNotes() {
  return (
    <div className="patch-notes">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">📋 Patch Updates</span>
          <h1 className="section-title">Patch <span>Notes</span></h1>
          <p className="section-subtitle">Stay updated with the latest MLBB patches. Learn where to find patch notes, how to analyze changes, and adapt your gameplay to every update.</p>
        </div>
      </div>

      {/* Where to Find Patch Notes */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Where to Find <span>Patch Notes</span></h2>
          <p className="section-subtitle">Multiple sources to stay informed about every MLBB update.</p>
          <div className="patch-sources-grid">
            {patchSources.map(({ name, icon, url, desc, type }) => (
              <div key={name} className="patch-source-card card">
                <div className="patch-source-header">
                  <span className="patch-source-icon">{icon}</span>
                  <div>
                    <h3 className="patch-source-name">{name}</h3>
                    <span className={`patch-source-type patch-type-${type.toLowerCase()}`}>{type}</span>
                  </div>
                </div>
                <p className="patch-source-desc">{desc}</p>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="patch-source-link">
                    Visit Source →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Analyze a Patch */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">How to Analyze <span>a New Patch</span></h2>
          <p className="section-subtitle">Follow this checklist every time a new patch drops to stay ahead of the meta.</p>
          <div className="patch-checklist-grid">
            {patchChecklist.map(({ icon, title, desc }, i) => (
              <div key={i} className="patch-checklist-item card">
                <div className="patch-checklist-header">
                  <span className="patch-checklist-num">{i + 1}</span>
                  <span className="patch-checklist-icon">{icon}</span>
                </div>
                <h4 className="patch-checklist-title">{title}</h4>
                <p className="patch-checklist-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patch Terminology */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Patch <span>Terminology</span></h2>
          <p className="section-subtitle">Common terms you will see in patch notes and what they mean.</p>
          <div className="patch-terms-grid">
            {patchTerms.map(({ term, icon, meaning }) => (
              <div key={term} className="patch-term-card card">
                <div className="patch-term-header">
                  <span className="patch-term-icon">{icon}</span>
                  <h4 className="patch-term-name">{term}</h4>
                </div>
                <p className="patch-term-meaning">{meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patch Cycle Info */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">MLBB Patch <span>Cycle</span></h2>
          <div className="patch-cycle-content">
            <div className="patch-cycle-info">
              <p className="patch-text">MLBB typically releases patches every 2–4 weeks. Major patches include hero adjustments, new heroes, item changes, and sometimes map modifications. Understanding the patch cycle helps you prepare and adapt faster than your opponents.</p>
              <div className="patch-cycle-stats">
                {[
                  { label: 'Patch Frequency', value: 'Every 2–4 weeks' },
                  { label: 'Advanced Server', value: 'Changes available 1–2 weeks early' },
                  { label: 'Major Updates', value: 'New heroes, reworks, seasonal events' },
                  { label: 'Hotfixes', value: 'Released as needed for urgent issues' },
                ].map(({ label, value }) => (
                  <div key={label} className="patch-cycle-stat">
                    <span className="pc-label">{label}</span>
                    <span className="pc-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="patch-tips-box card">
              <h3>💡 Pro Tips for Patch Day</h3>
              <ul className="patch-tips-list">
                <li>Don't panic if your main hero is nerfed — test them before switching.</li>
                <li>Watch creator breakdowns within 24 hours of a patch for quick analysis.</li>
                <li>Check the Advanced Server patch notes to prepare before changes go live.</li>
                <li>Keep a pool of 3–5 heroes so you always have options after nerfs.</li>
                <li>Pay attention to item changes — they often have a bigger impact than hero adjustments.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
