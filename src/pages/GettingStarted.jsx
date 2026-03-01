import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import './GettingStarted.css'

const gameModes = [
  { icon: '⚔️', name: 'Classic', desc: 'Standard 5v5 match. Best for practicing heroes and strategies without rank pressure. Great for beginners.' },
  { icon: '🏆', name: 'Ranked', desc: 'Competitive mode where you earn rank points. Play here once you understand your preferred role and a few heroes.' },
  { icon: '🎲', name: 'Brawl', desc: 'Chaotic single-lane random hero mode. Fast matches. Good for understanding hero abilities quickly.' },
  { icon: '🛠️', name: 'Custom', desc: 'Create private rooms to practice with friends or specific scenarios. Useful for testing combos.' },
  { icon: '🎉', name: 'Arcade', desc: 'Rotating fun mini-game modes. Perfect for a break from serious play. New modes regularly added.' },
  { icon: '🤖', name: 'vs. AI', desc: 'Fight against bots. Ideal when first learning a new hero or warming up before a ranked session.' },
]

const begTips = [
  { icon: '🎯', tip: 'Start with easy-difficulty heroes like Miya, Freya, or Rafaela.' },
  { icon: '🗺️', tip: 'Check the minimap every few seconds — map awareness is crucial.' },
  { icon: '🤝', tip: 'Stay with teammates early game; avoid going alone in enemy territory.' },
  { icon: '⚡', tip: 'Use your battle spell (like Flicker) wisely — it has a long cooldown.' },
  { icon: '🛡️', tip: 'Don\'t sell items to buy others — upgrade them as the game progresses.' },
  { icon: '💬', tip: 'Mute toxic players immediately. Mental focus wins games.' },
  { icon: '📖', tip: 'Read item descriptions to understand what you\'re buying.' },
  { icon: '🔄', tip: 'Play both Classic and vs. AI before entering ranked matches.' },
]

const mistakes = [
  { mistake: 'Overextending alone', fix: 'Always check the minimap before pushing deep into enemy territory.' },
  { mistake: 'Buying random items', fix: 'Follow recommended builds or guides for your hero\'s role.' },
  { mistake: 'Ignoring objectives', fix: 'Always contest Turtle (early game) and Lord (late game).' },
  { mistake: 'Never rotating', fix: 'Help teammates in other lanes when your lane is safe.' },
  { mistake: 'Staying in base too long', fix: 'Return to lane or rotate as soon as you\'ve spent your gold.' },
]

const quizData = [
  {
    q: 'Which game mode is best for beginners to learn without rank pressure?',
    options: ['Ranked', 'Classic', 'Brawl', 'vs. AI'],
    answer: 1,
    explanation: 'Classic mode is the standard 5v5 match without rank stakes — perfect for practice.',
  },
  {
    q: 'What is the most important map habit to develop as a beginner?',
    options: ['Always pushing turrets', 'Checking the minimap regularly', 'Buying expensive items first', 'Fighting under enemy turret'],
    answer: 1,
    explanation: 'Map awareness via the minimap is the single most impactful habit to build early.',
  },
  {
    q: 'Which of these is NOT a standard role in MLBB?',
    options: ['Marksman', 'Support', 'Healer', 'Assassin'],
    answer: 2,
    explanation: 'The 6 roles are: Tank, Fighter, Assassin, Mage, Marksman, and Support. There is no dedicated "Healer" role.',
  },
]

function Quiz() {
  const [answers, setAnswers] = useState({})
  const [revealed, setRevealed] = useState({})

  const selectAnswer = (qi, oi) => {
    if (revealed[qi]) return
    setAnswers(prev => ({ ...prev, [qi]: oi }))
  }

  const reveal = (qi) => {
    if (answers[qi] === undefined) return
    setRevealed(prev => ({ ...prev, [qi]: true }))
  }

  const score = Object.entries(revealed).filter(([qi]) => answers[qi] === quizData[qi].answer).length

  return (
    <div className="quiz-container">
      <h3 className="quiz-title">🧠 Knowledge Check</h3>
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
              return (
                <button key={oi} className={cls} onClick={() => selectAnswer(qi, oi)}>
                  <span className="option-letter">{String.fromCharCode(65 + oi)}</span>
                  {opt}
                </button>
              )
            })}
          </div>
          {!revealed[qi] && (
            <button className="quiz-reveal-btn" onClick={() => reveal(qi)}>Check Answer</button>
          )}
          {revealed[qi] && (
            <div className={`quiz-explanation ${answers[qi] === q.answer ? 'correct' : 'wrong'}`}>
              {answers[qi] === q.answer ? '✅ Correct! ' : '❌ Not quite. '}
              {q.explanation}
            </div>
          )}
        </div>
      ))}
      {Object.keys(revealed).length === quizData.length && (
        <div className="quiz-score">
          🏆 Final Score: {score}/{quizData.length} — {score === quizData.length ? 'Perfect!' : score >= 2 ? 'Great job!' : 'Keep studying!'}
        </div>
      )}
    </div>
  )
}

export default function GettingStarted() {
  return (
    <div className="getting-started">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">🎮 Beginner</span>
          <h1 className="section-title">Getting <span>Started</span></h1>
          <p className="section-subtitle">Everything you need to know to download, set up, and play your first matches in Mobile Legends: Bang Bang.</p>
        </div>
      </div>

      {/* What is MLBB */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What is <span>Mobile Legends: Bang Bang?</span></h2>
          <div className="gs-intro-grid">
            <div className="gs-intro-text">
              <p>Mobile Legends: Bang Bang (MLBB) is a 5v5 multiplayer online battle arena (MOBA) game developed by Moonton. Released in 2016, it has grown into one of the most popular mobile games in Southeast Asia and worldwide, with millions of daily players.</p>
              <p style={{marginTop: '16px'}}>Two teams of 5 players each compete to destroy the enemy's base (the Nexus). The map has three main lanes — Top, Mid, and Bottom — connected by a jungle. Each player controls a unique hero with special abilities.</p>
              <p style={{marginTop: '16px'}}>Matches typically last 15–25 minutes, making MLBB perfect for mobile play sessions.</p>
            </div>
            <div className="gs-intro-facts">
              <h3>⚡ Quick Facts</h3>
              <ul>
                <li>📱 Free-to-play on iOS and Android</li>
                <li>🌍 100+ million downloads worldwide</li>
                <li>🏆 Major esports scene (MPL, M-Series)</li>
                <li>🦸 120+ unique heroes across 6 roles</li>
                <li>⏱️ 15–25 min average match length</li>
                <li>🔄 Regular seasonal patches and updates</li>
                <li>🗺️ The map: Land of Dawn</li>
                <li>📅 Originally released: 2016</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Download & Setup */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Download & <span>Setup</span></h2>
          <div className="steps-grid">
            {[
              { step: 1, icon: '📲', title: 'Download the App', desc: 'Search "Mobile Legends: Bang Bang" on the App Store (iOS) or Google Play Store (Android). The download is free.' },
              { step: 2, icon: '🔐', title: 'Create an Account', desc: 'Log in with Facebook, Google, Moonton, or VK. Using Facebook/Google links your account across devices safely.' },
              { step: 3, icon: '🎓', title: 'Complete the Tutorial', desc: 'MLBB has a built-in tutorial. Complete it fully — it teaches movement, skills, attacking, and objectives.' },
              { step: 4, icon: '⚙️', title: 'Adjust Settings', desc: 'Go to Settings → Controls. Enable "Smart Targeting" early on. Adjust skill button size and layout to your comfort.' },
              { step: 5, icon: '🦸', title: 'Try Free Heroes', desc: 'MLBB provides free rotating heroes each week. Experiment with them to discover your preferred role.' },
              { step: 6, icon: '🎮', title: 'Play vs. AI First', desc: 'Play a few Bot matches before jumping into Classic or Ranked. Get comfortable with your hero first.' },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="step-card card">
                <div className="step-num">{step}</div>
                <div className="step-icon">{icon}</div>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">In-Game <span>UI Overview</span></h2>
          <div className="ui-grid">
            {[
              { pos: 'Top Left', icon: '🗺️', label: 'Minimap', desc: 'Shows real-time positions of all visible heroes. Check it every 3–5 seconds.' },
              { pos: 'Top Center', icon: '⏱️', label: 'Timer & Score', desc: 'Game clock, kill score, and gold advantage display.' },
              { pos: 'Top Right', icon: '💰', label: 'Gold Counter', desc: 'Your current gold. Tells you how close you are to your next item.' },
              { pos: 'Bottom Left', icon: '🎮', label: 'Movement Joystick', desc: 'Drag to move your hero. Tap briefly to stop and auto-attack nearest enemy.' },
              { pos: 'Bottom Right', icon: '⚡', label: 'Skill Buttons', desc: 'Your hero\'s 3 skills plus basic attack. Skill 2 is usually your key ability.' },
              { pos: 'Bottom Center', icon: '🧪', label: 'Battle Spell', desc: 'Special ability (Flicker, Retribution, etc.) chosen before the match.' },
            ].map(({ pos, icon, label, desc }) => (
              <div key={pos} className="ui-card card">
                <div className="ui-pos">{pos}</div>
                <div className="ui-icon">{icon}</div>
                <h4 className="ui-label">{label}</h4>
                <p className="ui-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Game <span>Modes</span></h2>
          <p className="section-subtitle">MLBB offers multiple modes to suit every play style and mood.</p>
          <div className="grid-3">
            {gameModes.map(({ icon, name, desc }) => (
              <div key={name} className="mode-card card">
                <span className="mode-icon">{icon}</span>
                <h3 className="mode-name">{name}</h3>
                <p className="mode-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beginner Tips */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Beginner <span>Tips</span></h2>
          <div className="tips-list">
            {begTips.map(({ icon, tip }) => (
              <div key={tip} className="tip-row">
                <span className="tip-row-icon">{icon}</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Common <span>Mistakes & Fixes</span></h2>
          <div className="mistakes-table">
            <div className="mistakes-header">
              <span>❌ Common Mistake</span>
              <span>✅ The Fix</span>
            </div>
            {mistakes.map(({ mistake, fix }) => (
              <div key={mistake} className="mistakes-row">
                <span className="mistake-text">{mistake}</span>
                <span className="fix-text">{fix}</span>
              </div>
            ))}
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
