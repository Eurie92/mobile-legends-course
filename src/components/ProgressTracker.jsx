import { useState, useEffect } from 'react'
import './ProgressTracker.css'

const SECTIONS = [
  { id: 'getting-started', label: 'Getting Started', icon: '🎮' },
  { id: 'game-mechanics', label: 'Game Mechanics', icon: '⚙️' },
  { id: 'hero-guides', label: 'Hero Guides', icon: '🦸' },
  { id: 'intermediate', label: 'Intermediate', icon: '📈' },
  { id: 'advanced', label: 'Advanced', icon: '🏆' },
  { id: 'pro-resources', label: 'Pro Resources', icon: '⭐' },
]

export default function ProgressTracker() {
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('mlbb-progress')
      return saved ? JSON.parse(saved) : []
    } catch { return [] }
  })

  useEffect(() => {
    try {
      localStorage.setItem('mlbb-progress', JSON.stringify(completed))
    } catch { /* ignore */ }
  }, [completed])

  const toggle = (id) => {
    setCompleted(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const reset = () => setCompleted([])
  const pct = Math.round((completed.length / SECTIONS.length) * 100)

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h3 className="progress-title">📊 Your Learning Progress</h3>
        <button className="progress-reset" onClick={reset}>Reset</button>
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="progress-pct">{pct}% Complete — {completed.length}/{SECTIONS.length} sections</p>

      <div className="progress-sections">
        {SECTIONS.map(({ id, label, icon }) => (
          <button
            key={id}
            className={`progress-item${completed.includes(id) ? ' done' : ''}`}
            onClick={() => toggle(id)}
            title={`Mark "${label}" as ${completed.includes(id) ? 'incomplete' : 'complete'}`}
          >
            <span className="progress-item-icon">{icon}</span>
            <span className="progress-item-label">{label}</span>
            <span className="progress-check">{completed.includes(id) ? '✓' : '○'}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
