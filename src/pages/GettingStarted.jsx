import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useLanguage } from '../context/LanguageContext'
import './GettingStarted.css'

function Quiz() {
  const { t } = useLanguage()
  const [answers, setAnswers] = useState({})
  const [revealed, setRevealed] = useState({})

  const quizData = [
    {
      q: t('gs.quiz.q1'),
      options: [t('gs.quiz.q1.a'), t('gs.quiz.q1.b'), t('gs.quiz.q1.c'), t('gs.quiz.q1.d')],
      answer: 1,
      explanation: t('gs.quiz.q1.explain'),
    },
    {
      q: t('gs.quiz.q2'),
      options: [t('gs.quiz.q2.a'), t('gs.quiz.q2.b'), t('gs.quiz.q2.c'), t('gs.quiz.q2.d')],
      answer: 1,
      explanation: t('gs.quiz.q2.explain'),
    },
    {
      q: t('gs.quiz.q3'),
      options: [t('gs.quiz.q3.a'), t('gs.quiz.q3.b'), t('gs.quiz.q3.c'), t('gs.quiz.q3.d')],
      answer: 2,
      explanation: t('gs.quiz.q3.explain'),
    },
  ]

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
      <h3 className="quiz-title">{t('gs.quiz.title')}</h3>
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
  const { t } = useLanguage()

  const gameModes = [
    { icon: '⚔️', name: t('gs.mode.classic.name'), desc: t('gs.mode.classic.desc') },
    { icon: '🏆', name: t('gs.mode.ranked.name'), desc: t('gs.mode.ranked.desc') },
    { icon: '🎲', name: t('gs.mode.brawl.name'), desc: t('gs.mode.brawl.desc') },
    { icon: '🛠️', name: t('gs.mode.custom.name'), desc: t('gs.mode.custom.desc') },
    { icon: '🎉', name: t('gs.mode.arcade.name'), desc: t('gs.mode.arcade.desc') },
    { icon: '🤖', name: t('gs.mode.ai.name'), desc: t('gs.mode.ai.desc') },
  ]

  const begTips = [
    { icon: '🎯', tip: t('gs.tip.1') },
    { icon: '🗺️', tip: t('gs.tip.2') },
    { icon: '🤝', tip: t('gs.tip.3') },
    { icon: '⚡', tip: t('gs.tip.4') },
    { icon: '🛡️', tip: t('gs.tip.5') },
    { icon: '💬', tip: t('gs.tip.6') },
    { icon: '📖', tip: t('gs.tip.7') },
    { icon: '🔄', tip: t('gs.tip.8') },
  ]

  const mistakes = [
    { mistake: t('gs.mistake.1.mistake'), fix: t('gs.mistake.1.fix') },
    { mistake: t('gs.mistake.2.mistake'), fix: t('gs.mistake.2.fix') },
    { mistake: t('gs.mistake.3.mistake'), fix: t('gs.mistake.3.fix') },
    { mistake: t('gs.mistake.4.mistake'), fix: t('gs.mistake.4.fix') },
    { mistake: t('gs.mistake.5.mistake'), fix: t('gs.mistake.5.fix') },
  ]

  return (
    <div className="getting-started">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">{t('gs.tag')}</span>
          <h1 className="section-title">{t('gs.title.1')}<span>{t('gs.title.2')}</span></h1>
          <p className="section-subtitle">{t('gs.subtitle')}</p>
        </div>
      </div>

      {/* What is MLBB */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('gs.what.title.1')}<span>{t('gs.what.title.2')}</span></h2>
          <div className="gs-intro-grid">
            <div className="gs-intro-text">
              <p>{t('gs.what.p1')}</p>
              <p style={{marginTop: '16px'}}>{t('gs.what.p2')}</p>
              <p style={{marginTop: '16px'}}>{t('gs.what.p3')}</p>
            </div>
            <div className="gs-intro-facts">
              <h3>{t('gs.facts.title')}</h3>
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
          <h2 className="section-title">{t('gs.download.title.1')}<span>{t('gs.download.title.2')}</span></h2>
          <div className="steps-grid">
            {[
              { step: 1, icon: '📲', title: t('gs.step.1.title'), desc: t('gs.step.1.desc') },
              { step: 2, icon: '🔐', title: t('gs.step.2.title'), desc: t('gs.step.2.desc') },
              { step: 3, icon: '🎓', title: t('gs.step.3.title'), desc: t('gs.step.3.desc') },
              { step: 4, icon: '⚙️', title: t('gs.step.4.title'), desc: t('gs.step.4.desc') },
              { step: 5, icon: '🦸', title: t('gs.step.5.title'), desc: t('gs.step.5.desc') },
              { step: 6, icon: '🎮', title: t('gs.step.6.title'), desc: t('gs.step.6.desc') },
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
          <h2 className="section-title">{t('gs.ui.title.1')}<span>{t('gs.ui.title.2')}</span></h2>
          <div className="ui-grid">
            {[
              { pos: 'Top Left', icon: '🗺️', label: t('gs.ui.minimap.label'), desc: t('gs.ui.minimap.desc') },
              { pos: 'Top Center', icon: '⏱️', label: t('gs.ui.timer.label'), desc: t('gs.ui.timer.desc') },
              { pos: 'Top Right', icon: '💰', label: t('gs.ui.gold.label'), desc: t('gs.ui.gold.desc') },
              { pos: 'Bottom Left', icon: '🎮', label: t('gs.ui.joystick.label'), desc: t('gs.ui.joystick.desc') },
              { pos: 'Bottom Right', icon: '⚡', label: t('gs.ui.skills.label'), desc: t('gs.ui.skills.desc') },
              { pos: 'Bottom Center', icon: '🧪', label: t('gs.ui.spell.label'), desc: t('gs.ui.spell.desc') },
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
          <h2 className="section-title">{t('gs.modes.title.1')}<span>{t('gs.modes.title.2')}</span></h2>
          <p className="section-subtitle">{t('gs.modes.subtitle')}</p>
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
          <h2 className="section-title">{t('gs.tips.title.1')}<span>{t('gs.tips.title.2')}</span></h2>
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
          <h2 className="section-title">{t('gs.mistakes.title.1')}<span>{t('gs.mistakes.title.2')}</span></h2>
          <div className="mistakes-table">
            <div className="mistakes-header">
              <span>{t('gs.mistakes.header.mistake')}</span>
              <span>{t('gs.mistakes.header.fix')}</span>
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
