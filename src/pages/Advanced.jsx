import Breadcrumb from '../components/Breadcrumb'
import { useLanguage } from '../context/LanguageContext'
import './Advanced.css'

const rankTiers = [
  { rank: 'Warrior', icon: '🪖', color: '#8B7355', tips: 'Focus on learning 1–2 heroes. Win lane, avoid feeding. Basics win here.' },
  { rank: 'Elite', icon: '⚔️', color: '#6cb4c4', tips: 'Introduce rotation basics. Learn when to push and when to back off.' },
  { rank: 'Master', icon: '🌟', color: '#7dba5d', tips: 'Consistent farming and objective awareness become essential.' },
  { rank: 'Grandmaster', icon: '💎', color: '#4a90d9', tips: 'Teamwork and vision control distinguish winners from losers here.' },
  { rank: 'Epic', icon: '🔮', color: '#9b59b6', tips: 'Deep hero mastery and strong macro understanding required.' },
  { rank: 'Legend', icon: '🏅', color: '#e8a020', tips: 'Communication, draft awareness, and advanced combos needed.' },
  { rank: 'Mythic', icon: '👑', color: '#e74c3c', tips: 'Consistent performance across many games. No off-days.' },
  { rank: 'Mythical Glory', icon: '✨', color: '#FFD700', tips: 'Top 100 tier. Full team coordination, meta mastery, mental fortitude.' },
]

const microTechniques = [
  {
    tech: 'Skill Canceling',
    icon: '⚡',
    desc: 'Interrupting a skill\'s animation with another action to speed up your combo. Example: Gusion S1 → immediate basic attack cancel.',
    practice: 'Practice in Custom mode with bots. Repeat the combo 100+ times until muscle memory forms.',
  },
  {
    tech: 'Flicker Combos',
    icon: '💨',
    desc: 'Using Flicker mid-skill to redirect or surprise the enemy. Classic example: Tigreal S2 → Flicker → S1 to pull enemies in a different direction.',
    practice: 'Practice Flicker combos slowly at first, then speed up. Use camera lock or manual camera.',
  },
  {
    tech: 'Bush Manipulation',
    icon: '🌿',
    desc: 'Using brush to reset aggro, dodge skills, or set up ambushes. Enter bush mid-dash to confuse enemies.',
    practice: 'Use brush in lane phase to bait enemies and then re-engage with advantage.',
  },
  {
    tech: 'Aim Prediction',
    icon: '🎯',
    desc: 'Leading skill shots to hit moving targets by aiming where they will be, not where they are.',
    practice: 'Practice on moving targets in Custom mode. Franco hook aim is the hardest — start with easier skill shots.',
  },
]

const macroTopics = [
  {
    title: 'Wave Management',
    icon: '🌊',
    content: [
      'Freezing the wave near your turret forces enemies to overextend.',
      'Shoving the wave before rotating prevents your lane from losing turrets.',
      'Slow push builds a big minion wave that gives objective pressure.',
      'Reset waves after each fight to prevent giving free farm to enemies.',
    ],
  },
  {
    title: 'Split Pushing',
    icon: '↔️',
    content: [
      'A fed fighter or assassin draws 2–3 enemies to stop them, freeing 4v2 elsewhere.',
      'Requires strong 1v1 dueling ability and excellent map awareness.',
      'Use TP (Arrival spell) to quickly join your team if they get into a fight.',
      'Best used when your team can\'t win a direct teamfight.',
    ],
  },
  {
    title: 'Map Pressure',
    icon: '🗺️',
    content: [
      'Creating threats across the map forces enemies to react to YOU.',
      'Constant pressure makes enemies defensive — they can\'t contest objectives.',
      'Have 2 threats simultaneously to stretch the enemy team thin.',
      'Use rotation timing to appear exactly when objectives are vulnerable.',
    ],
  },
]

export default function Advanced() {
  const { t } = useLanguage()
  return (
    <div className="advanced">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">{t('adv.tag')}</span>
          <h1 className="section-title">{t('adv.title.1')}<span>{t('adv.title.2')}</span></h1>
          <p className="section-subtitle">{t('adv.subtitle')}</p>
        </div>
      </div>

      {/* Advanced Macro */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('adv.macro.title.1')}<span>{t('adv.macro.title.2')}</span></h2>
          <p className="section-subtitle">{t('adv.macro.subtitle')}</p>
          <div className="macro-grid">
            {macroTopics.map(({ title, icon, content }) => (
              <div key={title} className="macro-card card">
                <div className="macro-header">
                  <span className="macro-icon">{icon}</span>
                  <h3 className="macro-title">{title}</h3>
                </div>
                <ul className="macro-list">
                  {content.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Micro */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('adv.micro.title.1')}<span>{t('adv.micro.title.2')}</span></h2>
          <p className="section-subtitle">{t('adv.micro.subtitle')}</p>
          <div className="micro-grid">
            {microTechniques.map(({ tech, icon, desc, practice }) => (
              <div key={tech} className="micro-card card">
                <div className="micro-header">
                  <span className="micro-icon">{icon}</span>
                  <h3 className="micro-title">{tech}</h3>
                </div>
                <p className="micro-desc">{desc}</p>
                <div className="micro-practice">
                  <span className="practice-label">{t('adv.micro.practice')}</span> {practice}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Jungling */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('adv.cj.title.1')}<span>{t('adv.cj.title.2')}</span></h2>
          <div className="cj-grid">
            <div>
              <p className="adv-text">{t('adv.cj.desc')}</p>
              <div className="cj-tips">
                {[
                  { icon: '📍', tip: 'Invade enemy jungle only when their jungler is visible on the map.' },
                  { icon: '⏱️', tip: 'Common invade windows: enemy is in your jungle or ganking a lane.' },
                  { icon: '👥', tip: 'Ask your roamer to accompany you when counter-jungling for safety.' },
                  { icon: '🔴', tip: 'Steal buff camps (blue/red) to massively set back the enemy jungler.' },
                  { icon: '💨', tip: 'Always have an escape route planned before entering enemy jungle.' },
                ].map(({ icon, tip }, i) => (
                  <div key={i} className="cj-tip-row">
                    <span className="cj-icon">{icon}</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cj-timing card">
              <h3>{t('adv.cj.timers')}</h3>
              {[
                { camp: 'Turtle', timer: '2:00 / Respawn 3 min' },
                { camp: 'Lord', timer: '8:00 / Respawn 3 min' },
                { camp: 'Blue Buff', timer: '1:30 / Respawn 50 sec' },
                { camp: 'Red Buff', timer: '1:30 / Respawn 50 sec' },
                { camp: 'Lithowanderer', timer: '1:30 / Respawn 90 sec' },
              ].map(({ camp, timer }) => (
                <div key={camp} className="timer-row">
                  <span className="timer-camp">{camp}</span>
                  <span className="timer-val">{timer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rank Climbing Guide */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('adv.rank.title.1')}<span>{t('adv.rank.title.2')}</span></h2>
          <p className="section-subtitle">{t('adv.rank.subtitle')}</p>
          <div className="rank-timeline">
            {rankTiers.map(({ rank, icon, color, tips }) => (
              <div key={rank} className="rank-item">
                <div className="rank-badge" style={{ borderColor: color, color }}>
                  <span className="rank-icon">{icon}</span>
                  <span className="rank-name">{rank}</span>
                </div>
                <p className="rank-tips">{tips}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Game */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('adv.mental.title.1')}<span>{t('adv.mental.title.2')}</span></h2>
          <div className="mental-grid">
            {[
              { icon: '🧘', title: 'Recognize Tilt Early', desc: 'Tilt is when frustration causes you to play worse. Signs: rushing in alone, spamming, blaming teammates. Recognize it before it spirals.' },
              { icon: '🔕', title: 'Mute Toxic Players', desc: 'The mute button is your best friend. Toxic communication never helps. Mute immediately and refocus on the game.' },
              { icon: '📊', title: 'Focus on Your Own Play', desc: 'You can only control yourself. Analyze your own mistakes, not your teammates\'. Ask "what could I do better?" after each loss.' },
              { icon: '⏸️', title: 'Take Breaks', desc: 'If you\'ve lost 2–3 games in a row, take a 15–30 minute break. Forced ranked sessions during tilt always make rank worse.' },
              { icon: '🎯', title: 'Set Session Goals', desc: 'Instead of "I must win X games," set goals like "I will check minimap every 5 seconds." Process goals are more controllable.' },
              { icon: '📝', title: 'VOD Review', desc: 'Watch replays of your games. You\'ll spot mistakes you never noticed while playing. Identify 1–2 things to improve each session.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="mental-card card">
                <span className="mental-icon">{icon}</span>
                <h4 className="mental-title">{title}</h4>
                <p className="mental-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patch Analysis */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('adv.patch.title.1')}<span>{t('adv.patch.title.2')}</span></h2>
          <div className="patch-content">
            <p className="adv-text">{t('adv.patch.desc')}</p>
            <div className="patch-steps">
              {[
                { step: '1', title: 'Read Patch Notes', desc: 'Check the official MLBB patch notes immediately after each update. Focus on changes to your main heroes and commonly played heroes.' },
                { step: '2', title: 'Watch Creator Breakdowns', desc: 'Creators like Hororo Chan and Elgin break down patch impacts quickly. Their videos save hours of research time.' },
                { step: '3', title: 'Test in Classic First', desc: 'Try newly buffed or changed heroes in Classic before taking them to ranked. Understand changes firsthand.' },
                { step: '4', title: 'Identify Power Picks', desc: 'Each patch has "sleeper OP" heroes. Identifying them before they\'re widely known gives huge ranked advantage.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="patch-step card">
                  <span className="patch-step-num">{step}</span>
                  <div>
                    <h4 className="patch-step-title">{title}</h4>
                    <p className="patch-step-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
