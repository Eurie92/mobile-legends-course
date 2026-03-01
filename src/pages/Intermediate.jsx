import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useLanguage } from '../context/LanguageContext'
import './Intermediate.css'

const quizData = [
  {
    q: 'What is the purpose of the Turtle objective?',
    options: ['It spawns allied minions', 'It grants team-wide gold advantage', 'It destroys enemy turrets', 'It provides mana regeneration'],
    answer: 1,
    explanation: 'Killing Turtle grants a gold advantage to your entire team, helping you out-buy the enemy.',
  },
  {
    q: 'What does "rotating" mean in MLBB?',
    options: ['Spinning your hero in circles', 'Moving from your lane to assist another lane or take objectives', 'Changing your item build mid-game', 'Swapping your hero with a teammate'],
    answer: 1,
    explanation: 'Rotation means leaving your lane to help in another area — ganking a lane or contesting objectives.',
  },
  {
    q: 'Which role is responsible for placing wards/vision and assisting all lanes?',
    options: ['Marksman', 'Jungler', 'Roamer/Support', 'EXP Laner'],
    answer: 2,
    explanation: 'The Roamer (usually a Tank or Support) buys roam items, places wards, and assists all lanes.',
  },
]

function Quiz() {
  const { t } = useLanguage()
  const [answers, setAnswers] = useState({})
  const [revealed, setRevealed] = useState({})
  const score = Object.entries(revealed).filter(([qi]) => answers[qi] === quizData[qi].answer).length

  const select = (qi, oi) => { if (!revealed[qi]) setAnswers(p => ({ ...p, [qi]: oi })) }
  const reveal = (qi) => { if (answers[qi] !== undefined) setRevealed(p => ({ ...p, [qi]: true })) }

  return (
    <div className="quiz-container">
      <h3 className="quiz-title">{t('int.quiz.title')}</h3>
      {quizData.map((q, qi) => (
        <div key={qi} className="quiz-question">
          <p className="quiz-q-text"><strong>Q{qi + 1}:</strong> {q.q}</p>
          <div className="quiz-options">
            {q.options.map((opt, oi) => {
              let cls = 'quiz-option'
              if (revealed[qi]) {
                if (oi === q.answer) cls += ' correct'
                else if (oi === answers[qi]) cls += ' wrong'
              } else if (answers[qi] === oi) cls += ' selected'
              return <button key={oi} className={cls} onClick={() => select(qi, oi)}><span className="option-letter">{String.fromCharCode(65 + oi)}</span>{opt}</button>
            })}
          </div>
          {!revealed[qi] && <button className="quiz-reveal-btn" onClick={() => reveal(qi)}>Check Answer</button>}
          {revealed[qi] && (
            <div className={`quiz-explanation ${answers[qi] === q.answer ? 'correct' : 'wrong'}`}>
              {answers[qi] === q.answer ? '✅ Correct! ' : '❌ Not quite. '}{q.explanation}
            </div>
          )}
        </div>
      ))}
      {Object.keys(revealed).length === quizData.length && (
        <div className="quiz-score">🏆 Score: {score}/{quizData.length} — {score === quizData.length ? 'Perfect!' : score >= 2 ? 'Great!' : 'Keep practicing!'}</div>
      )}
    </div>
  )
}

export default function Intermediate() {
  const { t } = useLanguage()
  return (
    <div className="intermediate">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">{t('int.tag')}</span>
          <h1 className="section-title">{t('int.title.1')}<span>{t('int.title.2')}</span></h1>
          <p className="section-subtitle">{t('int.subtitle')}</p>
        </div>
      </div>

      {/* Last Hitting & Farming */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('int.farming.title.1')}<span>{t('int.farming.title.2')}</span></h2>
          <div className="int-grid">
            <div>
              <p className="int-text">{t('int.farming.desc')}</p>
              <div className="int-tips-list">
                {[
                  '🎯 Aim to get 7–8 out of every 10 minion last hits in lane.',
                  '⏱️ Watch minion HP bars and time your attacks at the right moment.',
                  '🌿 Clear jungle camps when your lane is pushed out or you have downtime.',
                  '💰 A gold-efficient player has better items and wins more fights.',
                  '🗺️ Always farm something — never stand still doing nothing.',
                ].map((tip, i) => <div key={i} className="int-tip-row">{tip}</div>)}
              </div>
            </div>
            <div className="int-stat-card card">
              <h3>{t('int.farming.stats')}</h3>
              {[
                { label: 'Early (0–5 min)', value: '30+ CS' },
                { label: 'Mid (5–10 min)', value: '60+ CS' },
                { label: 'Late (10–15 min)', value: '100+ CS' },
                { label: 'Gold/Min Target', value: '600+' },
                { label: 'Kill Participation', value: '50%+' },
              ].map(({ label, value }) => (
                <div key={label} className="stat-row">
                  <span className="stat-label">{label}</span>
                  <span className="stat-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Awareness */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('int.map.title.1')}<span>{t('int.map.title.2')}</span></h2>
          <div className="awareness-grid">
            {[
              { icon: '👁️', title: 'Check Minimap Every 3–5 Seconds', desc: 'Develop the habit of glancing at the minimap regularly. Know where enemies are before you push.' },
              { icon: '🌿', title: 'Ward the Jungle Entrances', desc: 'Place wards at Turtle, Lord, and jungle entrances to spot roaming enemies before they reach you.' },
              { icon: '🔔', title: 'Track Enemy Jungler', desc: 'If the enemy jungler vanishes from the map, expect a gank. Retreat toward your turret immediately.' },
              { icon: '📍', title: 'Ping Missing Enemies', desc: 'When an enemy disappears, use the danger ping (long press minimap). Warn your teammates proactively.' },
              { icon: '🗺️', title: 'Understand Enemy Patterns', desc: 'Learn enemy rotation patterns. If mid goes missing, the adjacent lanes should expect a gank.' },
              { icon: '💡', title: 'Vision = Information', desc: 'Vision is the most underrated resource. More vision means better decisions for the whole team.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="awareness-card card">
                <span className="awareness-icon">{icon}</span>
                <h4 className="awareness-title">{title}</h4>
                <p className="awareness-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rotation Strategies */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('int.rotation.title.1')}<span>{t('int.rotation.title.2')}</span></h2>
          <div className="rotation-grid">
            {[
              { role: 'Mid Laner', icon: '🔮', rotations: ['After pushing mid wave → rotate to nearest gank opportunity', 'Ideal gank timing: when enemy lane is overextended', 'Return to mid after rotation to resume farming', 'Use high-damage combos to quickly eliminate targets'] },
              { role: 'Jungler', icon: '🗡️', rotations: ['Clear jungle efficiently, gank overextended lanes', 'Prioritize Turtle every time it spawns', 'Counter-jungle enemy camps when safe to do so', 'Track enemy jungler\'s position via minimap'] },
              { role: 'Roamer', icon: '🗺️', rotations: ['Begin roaming from minute 1 — don\'t stay in one lane', 'Create early advantages by ganking solo lanes', 'Secure vision before Turtle/Lord contests', 'Protect your carries in the late game'] },
            ].map(({ role, icon, rotations }) => (
              <div key={role} className="rotation-card card">
                <div className="rotation-header">
                  <span className="rotation-icon">{icon}</span>
                  <h3 className="rotation-role">{role}</h3>
                </div>
                <ul className="rotation-list">
                  {rotations.map((r, i) => <li key={i}>• {r}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('int.obj.title.1')}<span>{t('int.obj.title.2')}</span></h2>
          <div className="obj-priority-grid">
            {[
              { phase: '🌅 Early (0–4 min)', obj: 'First Turtle', rule: 'Contest Turtle at 2:00. Most important early objective — gives team gold advantage. Build early lead from it.' },
              { phase: '🌤️ Mid Game (4–10 min)', obj: 'Turrets + Turtle', rule: 'After winning fights, take turrets. Then reset at Turtle spawns. Don\'t chase kills — take towers instead.' },
              { phase: '🌆 Late Game (10+ min)', obj: 'Lord', rule: 'Lord spawns at 8:00. Lord pushes lanes with your team. Winning a teamfight near Lord = instant advantage. Push to win.' },
              { phase: '📋 Rule of Thumb', obj: 'After kills → Take objectives', rule: 'Never waste a won teamfight. After killing 2+ enemies, always take the nearest objective — turret, Turtle, or Lord.' },
            ].map(({ phase, obj, rule }) => (
              <div key={phase} className="obj-priority-card card">
                <div className="obj-phase">{phase}</div>
                <h4 className="obj-name-text">🎯 {obj}</h4>
                <p className="obj-rule">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Composition */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('int.comp.title.1')}<span>{t('int.comp.title.2')}</span></h2>
          <p className="section-subtitle">{t('int.comp.subtitle')}</p>
          <div className="comp-types">
            {[
              { type: 'Poke Comp', desc: 'Long-range heroes that whittle down enemies before engaging.', heroes: 'Pharsa, Clint, Vale, Brody, Franco', strength: 'Forces bad engages from enemies.' },
              { type: 'Wombo Combo', desc: 'Multiple AOE ultimates chained together.', heroes: 'Atlas + Lunox + Pharsa + Nana', strength: 'One combo can win the entire fight.' },
              { type: 'Pick Comp', desc: 'Single-target lockdown to isolate and eliminate one enemy.', heroes: 'Franco + Gusion + Eudora', strength: 'Creates numbers advantage through picks.' },
              { type: 'Turtle/Tank Comp', desc: 'Extremely durable team that out-sustains enemies in long fights.', heroes: 'Hylos + Ruby + Thamuz + Estes', strength: 'Nearly impossible to burst down in late game.' },
            ].map(({ type, desc, heroes, strength }) => (
              <div key={type} className="comp-card card">
                <h4 className="comp-type">{type}</h4>
                <p className="comp-desc">{desc}</p>
                <p className="comp-heroes">🦸 Example: {heroes}</p>
                <p className="comp-strength">💪 Strength: {strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engage vs Disengage */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('int.engage.title.1')}<span>{t('int.engage.title.2')}</span></h2>
          <div className="grid-2">
            <div className="engage-card card">
              <h3>{t('int.engage.when')}</h3>
              <ul>
                {[
                  'You have numbers advantage (4v3, 5v4)',
                  'Enemy is overextended far from their turret',
                  'Enemy carry/mage is dead or low HP',
                  'Turtle or Lord is available to take after winning',
                  'Your team has full ultimates and theirs are on cooldown',
                ].map((item, i) => <li key={i} className="engage-item">✅ {item}</li>)}
              </ul>
            </div>
            <div className="disengage-card card">
              <h3>{t('int.disengage.when')}</h3>
              <ul>
                {[
                  'You are outnumbered after losing a fight',
                  'Enemy has more ultimates available',
                  'You are under-farmed or behind in gold',
                  'You are defending your own base/turret',
                  'Retreat and rotate to a safer objective instead',
                ].map((item, i) => <li key={i} className="disengage-item">🔴 {item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <Quiz />
        </div>
      </section>
    </div>
  )
}
