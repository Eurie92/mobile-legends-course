import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import './GameMechanics.css'

const roles = [
  {
    icon: '🛡️',
    name: 'Tank',
    color: 'tank',
    desc: 'Front-line warriors who absorb damage for the team. Tanks initiate fights, peel for carries, and control crowds. They sacrifice personal damage for team survivability.',
    heroes: ['Tigreal', 'Franco', 'Khufra', 'Atlas', 'Hylos'],
    difficulty: 2,
    duties: ['Initiate team fights', 'Protect allies', 'Disrupt enemy backline', 'Soak damage'],
    spell: 'Flicker or Vengeance',
  },
  {
    icon: '⚔️',
    name: 'Fighter',
    color: 'fighter',
    desc: 'Melee bruisers that mix offense and defense. Fighters excel in 1v1 situations and lane pressure. They split push effectively and can survive extended fights.',
    heroes: ['Leomord', 'Ruby', 'Freya', 'Thamuz', 'Paquito'],
    difficulty: 2,
    duties: ['Lane pressure', 'Split push', 'Engage/disengage', 'Sustain in fights'],
    spell: 'Vengeance or Petrify',
  },
  {
    icon: '🗡️',
    name: 'Assassin',
    color: 'assassin',
    desc: 'High-burst damage dealers that eliminate priority targets in seconds. Assassins are high-risk, high-reward. Snowballing assassins can carry games single-handedly.',
    heroes: ['Natalia', 'Lancelot', 'Hayabusa', 'Gusion', 'Alucard'],
    difficulty: 4,
    duties: ['Eliminate squishies', 'Jungle farm', 'Counter-gank', 'Secure objectives'],
    spell: 'Execute or Retribution',
  },
  {
    icon: '🔮',
    name: 'Mage',
    color: 'mage',
    desc: 'Magic damage dealers with powerful AOE or single-target spells. Mages provide crowd control, poke, and burst damage from the backline of team fights.',
    heroes: ['Eudora', 'Nana', 'Kagura', 'Lunox', 'Vale'],
    difficulty: 3,
    duties: ['Poke enemies', 'AOE crowd control', 'Burst damage', 'Mid-lane control'],
    spell: 'Flicker or Execute',
  },
  {
    icon: '🏹',
    name: 'Marksman',
    color: 'marksman',
    desc: 'Ranged physical damage dealers who scale with attack items. Weakest early game, strongest late game. They deal consistent DPS and destroy objectives and turrets quickly.',
    heroes: ['Miya', 'Layla', 'Clint', 'Karrie', 'Brody'],
    difficulty: 2,
    duties: ['Sustained DPS', 'Destroy turrets', 'Farm efficiently', 'Stay safe in fights'],
    spell: 'Inspire or Flicker',
  },
  {
    icon: '💊',
    name: 'Support',
    color: 'support',
    desc: 'Healers, shielders, and enablers who enhance teammates. Supports provide vision, utility, and protection. They enable their carries to deal damage safely.',
    heroes: ['Estes', 'Angela', 'Rafaela', 'Mathilda', 'Floryn'],
    difficulty: 2,
    duties: ['Heal/shield allies', 'Set up kills', 'Provide vision', 'Enable team'],
    spell: 'Revitalize or Flicker',
  },
]

const spells = [
  { icon: '💨', name: 'Flicker', desc: 'Teleport a short distance in any direction.', when: 'Engage, escape, or reposition. Universally useful — most popular spell.' },
  { icon: '🔴', name: 'Retribution', desc: 'Massive damage to a creep or beast. Reduces damage taken from monsters.', when: 'Junglers MUST take this to clear jungle camps efficiently.' },
  { icon: '💀', name: 'Execute', desc: 'Deals true damage scaling with target\'s missing HP.', when: 'Assassins and burst mages. Great for securing kills on low-HP targets.' },
  { icon: '🔥', name: 'Flameshot', desc: 'Long-range projectile that slows on hit.', when: 'Marksmen or mages who need range and poke. Also good for anti-dive.' },
  { icon: '🏃', name: 'Sprint', desc: 'Greatly increases movement speed temporarily.', when: 'Chase-heavy heroes or those who need gap-closing beyond their kit.' },
  { icon: '🚀', name: 'Arrival', desc: 'Teleport to any allied structure after channeling.', when: 'Supports and roamers. Allows fast rotations across the map.' },
  { icon: '🛡️', name: 'Vengeance', desc: 'Reduces damage and reflects a percentage back.', when: 'Tanks and fighters who want to punish attackers. Great in extended fights.' },
  { icon: '💚', name: 'Revitalize', desc: 'Creates a healing zone that heals you and allies.', when: 'Supports and tanks. Especially powerful paired with Estes, Angela, or Rafaela.' },
  { icon: '⚡', name: 'Inspire', desc: 'Increases attack speed and bypasses shields briefly.', when: 'Marksmen who rely on attack speed. Strong with Miya, Karrie, Claude.' },
  { icon: '✨', name: 'Purify', desc: 'Removes all crowd control and grants CC immunity briefly.', when: 'Against heavy CC comps. Essential when enemy has multiple hard CCs.' },
]

const emblems = [
  { name: 'Tank Emblem', icon: '🛡️', desc: 'HP, defense, and resilience. For tanks and fighters who need to survive.' },
  { name: 'Jungle Emblem', icon: '🌿', desc: 'Adaptive attack, movement speed, and jungle bonuses. For assassins and junglers.' },
  { name: 'Mage Emblem', icon: '🔮', desc: 'Magic power, cooldown reduction, magic pen. For mages in mid-lane.' },
  { name: 'Marksman Emblem', icon: '🏹', desc: 'Physical attack, attack speed, and crit. For gold lane marksmen.' },
  { name: 'Support Emblem', icon: '💊', desc: 'Healing, shield, and utility stats. For roam supports and healers.' },
  { name: 'Fighter Emblem', icon: '⚔️', desc: 'Hybrid offensive and defensive stats. For fighters in the EXP lane.' },
]

function DifficultyStars({ count }) {
  return (
    <span className="difficulty-stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < count ? '' : 'empty'}>★</span>
      ))}
    </span>
  )
}

export default function GameMechanics() {
  const [activeRole, setActiveRole] = useState(0)

  return (
    <div className="game-mechanics">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">⚙️ Core</span>
          <h1 className="section-title">Game <span>Mechanics</span></h1>
          <p className="section-subtitle">Master the map, economy, roles, emblems, and spells to build a strong foundation for every match.</p>
        </div>
      </div>

      {/* The Map */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">The Map: <span>Land of Dawn</span></h2>
          <div className="map-grid">
            <div className="map-info">
              <p style={{color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20}}>
                The battle takes place on a symmetrical map called the Land of Dawn. It is divided into two halves — blue side (your team) and red side (enemies). Three lanes connect the bases, with a jungle in between.
              </p>
              <div className="lanes-list">
                {[
                  { lane: 'Top Lane', icon: '⬆️', role: 'EXP Lane', desc: 'EXP laner (Fighter/Tank) farms here alone for level advantage.' },
                  { lane: 'Mid Lane', icon: '↔️', role: 'Midlaner', desc: 'Mage or hypercarry. Most central position — great for quick rotations.' },
                  { lane: 'Bottom Lane', icon: '⬇️', role: 'Gold Lane', desc: 'Marksman (and sometimes support) farms for gold and items.' },
                  { lane: 'Jungle', icon: '🌿', role: 'Jungler', desc: 'Assassin or hypercarry kills jungle camps for gold and EXP, then ganks lanes.' },
                  { lane: 'Roam', icon: '🗺️', role: 'Roamer', desc: 'Support or Tank roams the map providing vision, ganks, and assists across all lanes.' },
                ].map(({ lane, icon, role, desc }) => (
                  <div key={lane} className="lane-row">
                    <span className="lane-icon">{icon}</span>
                    <div>
                      <strong className="lane-name">{lane}</strong>
                      <span className="lane-role"> — {role}</span>
                      <p className="lane-desc">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="map-objectives">
              <h3 className="obj-title">🎯 Key Objectives</h3>
              {[
                { icon: '🐢', name: 'Turtle', timing: 'Spawns at 2:00', desc: 'Kill for gold advantage. Respawns every 3 minutes. Priority in early–mid game.' },
                { icon: '👹', name: 'Lord', timing: 'Spawns at 8:00', desc: 'Kill to get a powerful allied unit that pushes lanes. Win condition in late game.' },
                { icon: '💎', name: 'Turrets', timing: 'Always active', desc: 'Destroy outer towers first to open the map, then inner towers, then the base.' },
                { icon: '🌙', name: 'Lithowanderer', timing: 'Appears at 4:00', desc: 'Camps that give buffs. Blue buff provides mana regen. Red buff slows enemies.' },
              ].map(({ icon, name, timing, desc }) => (
                <div key={name} className="obj-row">
                  <span className="obj-icon">{icon}</span>
                  <div>
                    <strong className="obj-name">{name}</strong>
                    <span className="obj-timing"> · {timing}</span>
                    <p className="obj-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gold & EXP */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Gold & <span>EXP System</span></h2>
          <div className="economy-grid">
            {[
              { icon: '💰', title: 'Minion Kills', desc: 'Each lane minion gives gold when last-hit. Missing last hits means losing gold. Practice last-hitting for better income.' },
              { icon: '🗡️', title: 'Hero Kills', desc: 'Killing an enemy hero gives a large gold reward. Assists also provide gold. Bounties increase on killing streaks.' },
              { icon: '🌿', title: 'Jungle Camps', desc: 'Jungle monsters give gold and EXP to the killer. Some camps (Turtle, Lord) give team-wide gold or buffs.' },
              { icon: '🏰', title: 'Turret Destroy', desc: 'Destroying an enemy turret gives a large team gold bonus. Prioritize turrets after winning fights.' },
              { icon: '⭐', title: 'EXP & Levels', desc: 'EXP gained from minions, heroes, and jungle raises your level. Higher level = stronger hero and unlocked skills.' },
              { icon: '📦', title: 'Passive Gold', desc: 'All heroes receive a small passive gold income over time, even without killing anything.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="economy-card card">
                <span className="economy-icon">{icon}</span>
                <h4 className="economy-title">{title}</h4>
                <p className="economy-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Hero <span>Roles</span></h2>
          <p className="section-subtitle">Understanding roles is fundamental. Each team needs a balanced composition to succeed.</p>
          <div className="roles-tabs">
            {roles.map((r, i) => (
              <button
                key={r.name}
                className={`role-tab${activeRole === i ? ' active' : ''} tab-${r.color}`}
                onClick={() => setActiveRole(i)}
              >
                {r.icon} {r.name}
              </button>
            ))}
          </div>
          {roles[activeRole] && (
            <div className="role-detail card">
              <div className="role-detail-header">
                <span className="role-detail-icon">{roles[activeRole].icon}</span>
                <div>
                  <h3 className="role-detail-name">{roles[activeRole].name}</h3>
                  <DifficultyStars count={roles[activeRole].difficulty} />
                  <span className="role-difficulty-label"> Difficulty</span>
                </div>
                <span className={`badge badge-${roles[activeRole].color}`}>{roles[activeRole].name}</span>
              </div>
              <p className="role-detail-desc">{roles[activeRole].desc}</p>
              <div className="role-detail-grid">
                <div className="role-duties">
                  <h4>🎯 Core Duties</h4>
                  <ul>
                    {roles[activeRole].duties.map(d => <li key={d}>• {d}</li>)}
                  </ul>
                </div>
                <div className="role-heroes">
                  <h4>🦸 Example Heroes</h4>
                  <div className="role-heroes-list">
                    {roles[activeRole].heroes.map(h => <span key={h} className="hero-chip">{h}</span>)}
                  </div>
                </div>
                <div className="role-spell">
                  <h4>⚡ Recommended Spell</h4>
                  <p>{roles[activeRole].spell}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Emblems */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Emblem <span>System</span></h2>
          <p className="section-subtitle">Emblems provide stat bonuses and talent perks. Always equip the emblem matching your hero's role.</p>
          <div className="grid-3">
            {emblems.map(({ name, icon, desc }) => (
              <div key={name} className="emblem-card card">
                <span className="emblem-icon">{icon}</span>
                <h4 className="emblem-name">{name}</h4>
                <p className="emblem-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battle Spells */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Battle <span>Spells</span></h2>
          <p className="section-subtitle">Battle Spells are powerful abilities chosen before each match. Picking the right spell for your hero is critical.</p>
          <div className="spells-grid">
            {spells.map(({ icon, name, desc, when }) => (
              <div key={name} className="spell-card card">
                <div className="spell-header">
                  <span className="spell-icon">{icon}</span>
                  <h4 className="spell-name">{name}</h4>
                </div>
                <p className="spell-desc">{desc}</p>
                <div className="spell-when">
                  <span className="spell-when-label">Best for:</span> {when}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Items Overview */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Items & <span>Builds</span></h2>
          <p className="section-subtitle">Items are bought with gold during the match and dramatically increase your hero's power.</p>
          <div className="items-grid">
            {[
              { cat: '⚔️ Physical', items: ['Endless Battle', 'Blade of Despair', 'War Axe', 'Malefic Roar', 'Windtalker'], tip: 'For fighters and physical marksmen. Focus on attack damage and pen.' },
              { cat: '🔮 Magical', items: ['Holy Crystal', 'Divine Glaive', 'Thunder Belt', 'Genius Wand', 'Necklace of Durance'], tip: 'For mages. Build magic power and magic penetration to melt targets.' },
              { cat: '🛡️ Defense', items: ['Immortality', 'Antique Cuirass', 'Radiant Armor', 'Twilight Armor', 'Brute Force Breastplate'], tip: 'Tanks and fighters. Mix physical and magic defense based on enemy comp.' },
              { cat: '💊 Support', items: ['Fleeting Time', 'Courage Mask', 'Reverie Banner', 'Oracle', 'Dominance Ice'], tip: 'Supports and roamers. Reduce enemy heals, boost team auras.' },
            ].map(({ cat, items, tip }) => (
              <div key={cat} className="items-card card">
                <h4 className="items-cat">{cat}</h4>
                <div className="items-list">
                  {items.map(item => <span key={item} className="item-chip">{item}</span>)}
                </div>
                <p className="items-tip">💡 {tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
