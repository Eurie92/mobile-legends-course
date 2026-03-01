import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useLanguage } from '../context/LanguageContext'
import './HeroGuides.css'

const heroes = [
  // Tanks
  { name: 'Tigreal', role: 'Tank', difficulty: 1, spell: 'Flicker', tips: ['Use S2→S1 combo to chain CC', 'Position well before using ultimate', 'Always build full tank items'], desc: 'The classic starter tank. Simple kit with powerful teamfight ultimate. Best for learning how to initiate.', counter: 'Kaja, Diggie' },
  { name: 'Franco', role: 'Tank', difficulty: 2, spell: 'Sprint or Vengeance', tips: ['Practice hook accuracy in custom mode', 'Use hook to catch out-of-position enemies', 'Silence with ult then let team follow up'], desc: 'Hook-based tank whose well-landed hooks can instantly kill targets. High skill ceiling on hooks.', counter: 'Diggie, Purify users' },
  { name: 'Khufra', role: 'Tank', difficulty: 3, spell: 'Vengeance', tips: ['S2 counters most dashes in the game', 'Engage with S1 for long-range initiation', 'Use in enemies\' face to prevent escapes'], desc: 'Anti-mobility tank. His S2 ball form blocks all dashes. One of the most meta tanks in competitive.', counter: 'Heroes without dashes' },
  { name: 'Atlas', role: 'Tank', difficulty: 3, spell: 'Flicker', tips: ['Flicker→ultimate combo for surprise engage', 'Chain freeze with teammates', 'Use passive for extra mobility'], desc: 'Teamfight god. His freeze and pull ultimate can turn entire fights. Requires good communication.', counter: 'Diggie, Purify' },
  { name: 'Hylos', role: 'Tank', difficulty: 2, spell: 'Vengeance', tips: ['His ult creates a road that damages enemies', 'Excellent for chasing and zoning', 'Works well with slow-heavy teams'], desc: 'Durable tank who sacrifices HP for mana. Great passive sustain and a zoning ultimate.', counter: 'High burst assassins' },

  // Fighters
  { name: 'Leomord', role: 'Fighter', difficulty: 2, spell: 'Vengeance or Purify', tips: ['Mount in teamfights for massive AOE damage', 'S1 proc passive for strong trades', 'Best in extended fights'], desc: 'Mounted warrior who excels in extended duels. Ulti gives him a powerful mounted form with charge ability.', counter: 'Heavy CC comps' },
  { name: 'Ruby', role: 'Fighter', difficulty: 2, spell: 'Vengeance', tips: ['Stack lifesteal items for sustain', 'S3 pulls multiple enemies for team follow-up', 'Slayer emblem or Tank emblem works'], desc: 'Lifesteal fighter great for 1v1 and teamfight CC. Her chain hook pulls multiple enemies.', counter: 'Burst assassins before she builds lifesteal' },
  { name: 'Freya', role: 'Fighter', difficulty: 1, spell: 'Vengeance or Inspire', tips: ['Chain skills to build sacred orbs fast', 'Sacred shield provides survivability', 'Good for beginners learning fighter role'], desc: 'Simple combo fighter with a powerful shield. Great starter hero with straightforward gameplay.', counter: 'Kiting ranged heroes' },
  { name: 'Thamuz', role: 'Fighter', difficulty: 3, spell: 'Vengeance', tips: ['Farm aggressively in exp lane', 'His scythes deal massive AoE damage', 'Anti-heal makes him strong vs Estes/Angela comps'], desc: 'Late-game monster with massive physical damage. Scythe mechanic rewards good positioning.', counter: 'Burst before he scales' },
  { name: 'Paquito', role: 'Fighter', difficulty: 4, spell: 'Execute', tips: ['Stack his passive for enhanced skills', 'Dash→S1→basic→S2→S3 combo', 'Very high skill ceiling — practice in Classic first'], desc: 'High-skill boxer with insane burst combos. Can 1v1 almost any hero at equal skill.', counter: 'Hard CC, Aurora' },

  // Assassins
  { name: 'Natalia', role: 'Assassin', difficulty: 3, spell: 'Retribution', tips: ['Stay in brush to activate stealth', 'Target squishy backline heroes', 'S3 cancels basic attack wind-up'], desc: 'Stealth assassin who excels at silencing and eliminating solo targets from the jungle.', counter: 'Sentry items, Argus, tanks' },
  { name: 'Lancelot', role: 'Assassin', difficulty: 4, spell: 'Execute or Retribution', tips: ['S2 grants brief invincibility frames', 'Triple S2 dash for mobility', 'Target marksmen first'], desc: 'Mobile assassin with invincibility frames mid-combo. High skill cap but very rewarding.', counter: 'Crowd control, tanks' },
  { name: 'Hayabusa', role: 'Assassin', difficulty: 4, spell: 'Retribution', tips: ['Place shadows intelligently for escapes', 'S3 can\'t be stopped once activated', 'Farm jungle efficiently for quick powerspike'], desc: 'Shadow clone assassin who becomes very slippery. Exceptional 1v1 and escape ability.', counter: 'Argus, Uranus, Esmeralda' },
  { name: 'Gusion', role: 'Assassin', difficulty: 5, spell: 'Retribution or Flicker', tips: ['S1 dagger → S2 teleport combo is core', 'Aim daggers precisely for maximum burst', 'Practice combo in custom rooms daily'], desc: 'The highest skill cap assassin. Perfect Gusion combos can one-shot any hero in the game.', counter: 'Tanks, heavy CC' },
  { name: 'Alucard', role: 'Assassin', difficulty: 2, spell: 'Execute', tips: ['Lifesteal makes him very hard to kill', 'S3 locks onto single target', 'Great duelist in 1v1 situations'], desc: 'Lifesteal-focused fighter/assassin. Easier to play than most assassins. Good intro to the role.', counter: 'Anti-heal items (Necklace of Durance)' },

  // Mages
  { name: 'Eudora', role: 'Mage', difficulty: 1, spell: 'Execute', tips: ['Full combo: S2→S1→ult→execute', 'Stun with S2 before ultimate for full damage', 'Glass cannon — avoid being caught'], desc: 'Simple burst mage. Full combo one-shots squishies. Best starter mage for beginners.', counter: 'Magic resistance items, tanks' },
  { name: 'Nana', role: 'Mage', difficulty: 1, spell: 'Flicker', tips: ['Polymorph enemy carries in fights', 'S2 provides strong poke', 'Works as both mid lane and support'], desc: 'Unique CC mage who can polymorph enemies. Forgiving and simple — great for beginners.', counter: 'Heavy magic resistance' },
  { name: 'Kagura', role: 'Mage', difficulty: 4, spell: 'Flicker', tips: ['Umbrella management is key to the kit', 'S1 leaves umbrella, S2 moves to it', 'Practice in vs AI or custom to learn combos'], desc: 'Complex umbrella mechanic mage with high mobility and burst. Competitive staple.', counter: 'CC, burst heroes who can catch her' },
  { name: 'Lunox', role: 'Mage', difficulty: 4, spell: 'Execute or Flicker', tips: ['Cycle between Chaos and Order states', 'Order ult makes you invincible', 'Build hybrid magic damage items'], desc: 'Dual-state mage with AOE damage and an invincibility ultimate. Very powerful in the right hands.', counter: 'Anti-heal vs heal state' },
  { name: 'Vale', role: 'Mage', difficulty: 3, spell: 'Flicker', tips: ['Enhance skills wisely at each level-up', 'Mass knockup combo can win teamfights', 'Play behind your frontline'], desc: 'Wind mage with upgradeable skills at key levels. Strong AoE CC teamfight mage.', counter: 'Burst assassins who can one-shot him' },

  // Marksmen
  { name: 'Miya', role: 'Marksman', difficulty: 1, spell: 'Inspire', tips: ['Ultimate grants brief stealth + slows', 'Stack attack speed items', 'Stay behind tanks — position is everything'], desc: 'The quintessential starter marksman. Very high DPS late game with pure attack speed build.', counter: 'Assassins, hard CC' },
  { name: 'Layla', role: 'Marksman', difficulty: 1, spell: 'Flicker or Inspire', tips: ['You have the longest range in the game', 'Stay FAR back in fights', 'Very weak early game — farm safely'], desc: 'Longest range marksman. Extremely weak early but scales to massive damage late. Easy to use.', counter: 'Mobile assassins, especially early' },
  { name: 'Clint', role: 'Marksman', difficulty: 2, spell: 'Inspire', tips: ['Use skill shots precisely for passive procs', 'S1 enhances next basic attack', 'Good poke laner with long range skills'], desc: 'Cowboy marksman with skill-enhanced basic attacks. Has more active gameplay than Miya or Layla.', counter: 'Engage tanks and fighters' },
  { name: 'Karrie', role: 'Marksman', difficulty: 3, spell: 'Inspire or Flicker', tips: ['True damage passive destroys tanks', 'Ult provides mobility in fights', 'Great counter-pick to tanky comps'], desc: 'Tank-shredding marksman whose true damage bypasses shields and armor.', counter: 'Hard CC before she builds, mobile heroes' },
  { name: 'Brody', role: 'Marksman', difficulty: 3, spell: 'Flicker', tips: ['Stacks amplify damage — play patiently', 'S1 for gap close and stun setup', 'Slower attack speed means timing matters'], desc: 'Unique marksman with a stack mechanic that amplifies damage. Strong with Fleeting Time items.', counter: 'High mobility heroes who can dodge skills' },

  // Supports
  { name: 'Estes', role: 'Support', difficulty: 2, spell: 'Revitalize', tips: ['Link to your carry and stay close', 'Ult heals multiple allies at once', 'Necklace of Durance on enemy — buy it yourself to counter'], desc: 'The king of healing. Links to an ally for constant HP regeneration. Countered by anti-heal.', counter: 'Necklace of Durance, Sea Halberd' },
  { name: 'Angela', role: 'Support', difficulty: 2, spell: 'Flicker or Revitalize', tips: ['Ult lets you enter a teammate\'s body globally', 'Follow your strongest carry', 'Build attack speed items for passive healing procs'], desc: 'Global support who can teleport inside allies. Provides shields and heals from anywhere on the map.', counter: 'Anti-heal items' },
  { name: 'Rafaela', role: 'Support', difficulty: 1, spell: 'Revitalize', tips: ['Keep heals on the lowest HP teammate', 'Ult stuns in a wide cone — aim carefully', 'Build cooldown items for more heals'], desc: 'Simple healer and speed booster. Great beginner support with straightforward abilities.', counter: 'Anti-heal, long-range poke' },
  { name: 'Mathilda', role: 'Support', difficulty: 4, spell: 'Flicker', tips: ['Ult carries an ally into battle', 'High mobility makes her hard to catch', 'Can play as roamer or midlaner'], desc: 'Mobile support who can dash and carry allies across the map. High-skill, high-reward roamer.', counter: 'CC that interrupts her ultimate' },
  { name: 'Floryn', role: 'Support', difficulty: 3, spell: 'Revitalize', tips: ['Global ult heals all allies simultaneously', 'Give your lantern to your carry', 'Build support items + some HP for survivability'], desc: 'Team-wide healer with a global ultimate. Her lantern passive empowers a chosen ally throughout the match.', counter: 'Anti-heal, assassins' },
]

const roles = ['All', 'Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support']

const tierList = {
  S: ['Khufra', 'Atlas', 'Gusion', 'Kagura', 'Lunox', 'Karrie', 'Angela', 'Mathilda'],
  A: ['Franco', 'Thamuz', 'Paquito', 'Lancelot', 'Hayabusa', 'Vale', 'Brody', 'Floryn'],
  B: ['Tigreal', 'Leomord', 'Ruby', 'Natalia', 'Kagura', 'Clint', 'Estes'],
  C: ['Hylos', 'Freya', 'Alucard', 'Eudora', 'Nana', 'Miya', 'Layla', 'Rafaela'],
}

function DifficultyStars({ count }) {
  return (
    <span className="difficulty-stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < count ? '' : 'empty'}>★</span>
      ))}
    </span>
  )
}

export default function HeroGuides() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = filter === 'All' ? heroes : heroes.filter(h => h.role === filter)

  return (
    <div className="hero-guides">
      <Breadcrumb />
      <div className="page-header">
        <div className="container">
          <span className="page-tag">{t('hg.tag')}</span>
          <h1 className="section-title">{t('hg.title.1')}<span>{t('hg.title.2')}</span></h1>
          <p className="section-subtitle">{t('hg.subtitle')}</p>
        </div>
      </div>

      {/* Filter */}
      <section className="section">
        <div className="container">
          <div className="role-filters">
            {roles.map(r => (
              <button
                key={r}
                className={`role-filter-btn${filter === r ? ' active' : ''}${r !== 'All' ? ` filter-${r.toLowerCase()}` : ''}`}
                onClick={() => setFilter(r)}
              >
                {r}
              </button>
            ))}
          </div>
          <p className="filter-count">{filtered.length}{filtered.length !== 1 ? t('hg.heroes') : t('hg.hero')}{t('hg.shown')}</p>

          <div className="heroes-grid">
            {filtered.map((hero) => (
              <div
                key={hero.name}
                className={`hero-card card${expanded === hero.name ? ' expanded' : ''}`}
              >
                <div className="hero-card-header">
                  <div className="hero-info">
                    <h3 className="hero-name">{hero.name}</h3>
                    <span className={`badge badge-${hero.role.toLowerCase()}`}>{hero.role}</span>
                  </div>
                  <div className="hero-difficulty">
                    <DifficultyStars count={hero.difficulty} />
                  </div>
                </div>

                <p className="hero-desc">{hero.desc}</p>

                <div className="hero-spell">
                  <span className="hero-spell-label">⚡ Spell:</span>
                  <span>{hero.spell}</span>
                </div>

                <button
                  className="hero-expand-btn"
                  onClick={() => setExpanded(expanded === hero.name ? null : hero.name)}
                >
                  {expanded === hero.name ? t('hg.less') : t('hg.more')}
                </button>

                {expanded === hero.name && (
                  <div className="hero-expanded">
                    <h4>{t('hg.tips')}</h4>
                    <ul>
                      {hero.tips.map(tip => <li key={tip}>• {tip}</li>)}
                    </ul>
                    <div className="hero-counter">
                      <span className="counter-label">{t('hg.weak')}</span> {hero.counter}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier List */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('hg.tier.title.1')}<span>{t('hg.tier.title.2')}</span></h2>
          <p className="section-subtitle">{t('hg.tier.subtitle')}</p>
          <div className="tier-list">
            {Object.entries(tierList).map(([tier, tierHeroes]) => (
              <div key={tier} className={`tier-row tier-${tier.toLowerCase()}`}>
                <div className="tier-label">{tier}</div>
                <div className="tier-heroes">
                  {tierHeroes.map(h => <span key={h} className="tier-hero-chip">{h}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergy & Counter Tips */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('hg.synergy.title.1')}<span>{t('hg.synergy.title.2')}</span></h2>
          <div className="grid-2">
            <div className="synergy-card card">
              <h3>{t('hg.synergy.strong')}</h3>
              <ul>
                {[
                  'Angela + any carry: Angela ult enables any carry hero to rampage.',
                  'Atlas + AOE damage (Lunox/Pharsa): Atlas chains CC for massive AOE combos.',
                  'Franco + burst: One hook sets up instant kills for burst mages.',
                  'Estes + Fighters: Fighters become unkillable with constant healing.',
                  'Mathilda + Assassins: Mathilda carries assassins directly into the backline.',
                ].map((s, i) => <li key={i} className="synergy-item">• {s}</li>)}
              </ul>
            </div>
            <div className="counter-card card">
              <h3>{t('hg.synergy.counter')}</h3>
              <ul>
                {[
                  'Necklace of Durance counters all healers (Estes, Angela, Rafaela).',
                  'Antique Cuirass reduces physical damage from fighters and assassins.',
                  'Radiant Armor counters damage-over-time mages.',
                  'Diggie counters all crowd control with his ultimate.',
                  'Purify spell counters single-target CC heroes like Franco.',
                ].map((s, i) => <li key={i} className="counter-item">• {s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
