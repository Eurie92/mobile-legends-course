import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useLanguage } from '../context/LanguageContext'
import './Glossary.css'

const terms = [
  { term: 'AOE', full: 'Area of Effect', def: 'Skills or effects that hit multiple targets within a radius. Example: Vale\'s tornado hits all enemies in range.' },
  { term: 'Arrival', full: 'Battle Spell', def: 'Teleports you to any allied structure after a channeling period. Used by supports and roamers for fast rotations.' },
  { term: 'Backdoor', full: '', def: 'Secretly destroying the enemy base or turrets while the enemy team is occupied elsewhere — usually without vision.' },
  { term: 'Blue Buff', full: 'Mana Buff', def: 'A jungle buff that grants mana/energy regeneration. Especially important for mages and support heroes.' },
  { term: 'Buff', full: 'Positive Change/Jungle Buff', def: 'Either: (1) a positive status effect from a jungle camp, or (2) a hero receiving improvements in a patch update.' },
  { term: 'Burst', full: 'Burst Damage', def: 'Dealing a large amount of damage in a very short time. Assassins and burst mages are built around this style.' },
  { term: 'CC', full: 'Crowd Control', def: 'Abilities that limit enemy movement or actions — stuns, slows, silences, roots, etc. Critical in teamfights.' },
  { term: 'Clear', full: 'Lane/Jungle Clear', def: 'Efficiently killing all minions in a wave or all monsters in a jungle camp to maximize gold and EXP income.' },
  { term: 'Combo', full: '', def: 'A specific sequence of skills and basic attacks used together for maximum damage or effect. Example: Eudora\'s S2→S1→ult.' },
  { term: 'Counter', full: 'Counter Pick', def: 'A hero whose kit specifically disadvantages another hero\'s strengths. Example: Diggie counters Franco by removing CC.' },
  { term: 'CS', full: 'Creep Score', def: 'The number of minions and jungle monsters you have killed. A high CS means strong gold income.' },
  { term: 'Dive', full: 'Tower Dive', def: 'Pursuing an enemy hero under their own tower, accepting the turret damage to secure a kill.' },
  { term: 'DPS', full: 'Damage Per Second', def: 'Sustained damage output over time. Marksmen are the primary DPS heroes, dealing consistent damage in extended fights.' },
  { term: 'Engage', full: '', def: 'Initiating a team fight or going in to fight the enemy. Usually done by tanks or fighters who can survive the entry.' },
  { term: 'EXP Lane', full: 'Experience Lane', def: 'The top lane where a solo hero (usually fighter or tank) levels up faster from solo minion experience.' },
  { term: 'Fed', full: '', def: 'A hero that has killed many enemies and has significantly more gold/items than expected. "Layla is fed" = she has huge items.' },
  { term: 'Flicker', full: 'Battle Spell', def: 'The most popular battle spell. Blinks a short distance in any direction. Used for escaping, engaging, or repositioning.' },
  { term: 'Gank', full: '', def: 'When a hero (usually jungler or roamer) rotates to another lane to ambush and kill the enemy laners.' },
  { term: 'Gold Lane', full: '', def: 'The bottom lane where the marksman farms to maximize gold income for powerful late-game items.' },
  { term: 'Hard CC', full: 'Hard Crowd Control', def: 'CC that completely stops movement or actions — stuns, freezes, knockups. More impactful than soft CC.' },
  { term: 'KDA', full: 'Kills / Deaths / Assists', def: 'A stat ratio measuring performance. Higher K+A and lower D is better. Not the only measure of good play.' },
  { term: 'Lifesteal', full: '', def: 'An item effect that restores HP based on physical damage dealt. Core for sustain fighters like Alucard and Ruby.' },
  { term: 'Lord', full: '', def: 'The powerful objective that spawns at 8:00. Killing Lord grants a large allied unit that pushes lanes with your team.' },
  { term: 'Macro', full: 'Macro Strategy', def: 'Large-scale game decisions — rotations, objectives, map pressure, and team coordination across the whole map.' },
  { term: 'Meta', full: 'Most Effective Tactic Available', def: 'The current most powerful heroes, builds, and strategies. Changes with each patch. "Meta heroes" are the top picks.' },
  { term: 'Micro', full: 'Micro Mechanics', def: 'Individual mechanical skill — how precisely you use your hero\'s skills, combos, positioning in fights.' },
  { term: 'MVP', full: 'Most Valuable Player', def: 'The end-of-game award given to the best performing player based on damage, gold, objectives, and contribution.' },
  { term: 'Nerf', full: '', def: 'When a hero or item is made weaker in a patch update to balance the game. Opposite of buff.' },
  { term: 'Peel', full: '', def: 'Protecting a teammate by using CC or body-blocking to push threats away from them. Tanks often peel for carries.' },
  { term: 'Pick', full: 'Pick Off', def: 'Eliminating a single isolated enemy hero to gain a numbers advantage before a team fight.' },
  { term: 'Poke', full: 'Poke Damage', def: 'Low-risk, long-range damage that chips away at enemy HP over time to force them back or into a bad fight.' },
  { term: 'Purify', full: 'Battle Spell', def: 'Removes all crowd control effects and grants brief immunity. Best against heavy CC team compositions.' },
  { term: 'Retribution', full: 'Battle Spell', def: 'Deals heavy damage to a creep or monster. Required for jungling to efficiently kill jungle camps and objectives.' },
  { term: 'Roamer', full: '', def: 'A hero (usually support or tank) who roams the map providing vision, ganks, and assistance across all lanes.' },
  { term: 'Rotate', full: 'Rotation', def: 'Moving from your assigned lane to assist in another lane, take an objective, or respond to a threat elsewhere.' },
  { term: 'Shield', full: '', def: 'A protective barrier that absorbs damage before HP is reduced. Provided by heroes like Esmeralda, Angela, or items.' },
  { term: 'Snowball', full: '', def: 'Using an early advantage to continuously grow stronger and increasingly dominate the game. A fed hero snowballs.' },
  { term: 'Soft CC', full: 'Soft Crowd Control', def: 'CC that slows or reduces effectiveness but doesn\'t fully stop movement — slows, silence effects, movement reduction.' },
  { term: 'Split Push', full: '', def: 'One hero pressuring a separate lane to force enemies to respond, creating numerical advantage elsewhere on the map.' },
  { term: 'Sustain', full: '', def: 'A hero\'s ability to heal or regenerate HP during or after fights. Heroes like Alucard and Estes have high sustain.' },
  { term: 'Tilt', full: '', def: 'A mental state where frustration negatively affects your gameplay. Going on tilt means playing worse due to emotions.' },
  { term: 'Turtle', full: '', def: 'The first major objective, spawning at 2:00. Killing Turtle gives team-wide gold advantage. Respawns every 3 minutes.' },
  { term: 'Vision', full: 'Map Vision', def: 'Visibility of areas on the map. Wards and hero abilities provide vision of otherwise hidden areas (bush, jungle).' },
  { term: 'Wave', full: 'Minion Wave', def: 'A group of lane minions that spawn periodically and walk toward the enemy base. Source of gold and EXP.' },
  { term: 'Zone', full: 'Zoning', def: 'Positioning to deny an enemy access to an area — resources, objectives, or safety — using threat of damage or CC.' },
]

export default function Glossary() {
  const { t } = useLanguage()
  const [search, setSearch] = useState('')

  const filtered = terms.filter(({ term, full, def }) => {
    const q = search.toLowerCase()
    return term.toLowerCase().includes(q) || full.toLowerCase().includes(q) || def.toLowerCase().includes(q)
  })

  return (
    <div className="glossary">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">{t('glossary.tag')}</span>
          <h1 className="section-title">{t('glossary.title.1')} <span>{t('glossary.title.2')}</span></h1>
          <p className="section-subtitle">{t('glossary.subtitle')}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Search */}
          <div className="glossary-search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="glossary-search"
              placeholder={t('glossary.search.placeholder')}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="search-clear" onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          <p className="glossary-count">
            {filtered.length} term{filtered.length !== 1 ? 's' : ''} {search ? `${t('glossary.matching')} "${search}"` : t('glossary.total')}
          </p>

          {filtered.length === 0 ? (
            <div className="glossary-empty">
              <p>😕 {t('glossary.empty')} "{search}"</p>
            </div>
          ) : (
            <div className="glossary-list">
              {filtered.map(({ term, full, def }) => (
                <div key={term} className="glossary-item">
                  <div className="glossary-term-header">
                    <h3 className="glossary-term">{term}</h3>
                    {full && <span className="glossary-full">{full}</span>}
                  </div>
                  <p className="glossary-def">{def}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
