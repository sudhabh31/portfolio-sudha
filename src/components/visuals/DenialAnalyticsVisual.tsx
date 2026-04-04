import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PURPLE = '#6B4C9A'
const PURPLE_LIGHT = '#8B6DB5'
const GOLD = '#C5A84D'
const GREEN = '#22C55E'
const RED = '#EF4444'
const MUTED = '#94A3B8'

/* ------------------------------------------------------------------ */
/*  View 1 — Counterfactual Flow Animation                           */
/* ------------------------------------------------------------------ */
function FlowAnimation() {
  return (
    <svg viewBox="0 0 500 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      {/* === LEFT: Claims Inflow === */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <text x={50} y={16} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={MUTED} letterSpacing="0.08em">
          CLAIMS
        </text>
        {/* Stacked claim docs */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.g
            key={`claim-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: [0, 0.8], x: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
          >
            <rect x={25 + i * 3} y={24 + i * 12} width={46} height={14} rx={2}
              fill="none" stroke={PURPLE} strokeWidth={0.8} opacity={0.5} />
            <line x1={30 + i * 3} y1={30 + i * 12} x2={58 + i * 3} y2={30 + i * 12}
              stroke={PURPLE} strokeWidth={0.5} opacity={0.3} />
            <line x1={30 + i * 3} y1={33 + i * 12} x2={52 + i * 3} y2={33 + i * 12}
              stroke={PURPLE} strokeWidth={0.5} opacity={0.3} />
          </motion.g>
        ))}
        <motion.text
          x={55} y={100} fontSize={22} fontWeight={700} fontFamily="Inter, sans-serif" fill={PURPLE} opacity={0.6}
          initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 0.5 }}
        >
          104K
        </motion.text>
        <text x={55} y={112} fontSize={7} fontFamily="Inter, sans-serif" fill={MUTED}>
          total cases
        </text>
      </motion.g>

      {/* === CENTER: AI Split === */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
        {/* AI Engine box */}
        <rect x={130} y={55} width={80} height={40} rx={6} fill={PURPLE} opacity={0.12} />
        <rect x={130} y={55} width={80} height={40} rx={6} fill="none" stroke={PURPLE} strokeWidth={1.2} />
        <text x={170} y={72} textAnchor="middle" fontSize={9} fontWeight={600} fontFamily="Inter, sans-serif" fill={PURPLE}>
          AI Engine
        </text>
        <text x={170} y={84} textAnchor="middle" fontSize={7} fontFamily="Inter, sans-serif" fill={PURPLE_LIGHT}>
          Automated Coding
        </text>

        {/* Inflow arrow */}
        <motion.path d="M85,75 L128,75" fill="none" stroke={PURPLE} strokeWidth={1.2}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }} />
        <polygon points="126,71 132,75 126,79" fill={PURPLE} opacity={0.7} />
      </motion.g>

      {/* === TOP BRANCH: Automated — Cleared === */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.5 }}>
        {/* Branch line up */}
        <motion.path d="M210,65 C240,65 250,30 280,30" fill="none" stroke={GREEN} strokeWidth={1.2}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }} />
        <polygon points="278,26 284,30 278,34" fill={GREEN} opacity={0.7} />

        {/* Cleared box */}
        <rect x={286} y={14} width={90} height={34} rx={5} fill={GREEN} opacity={0.08} />
        <rect x={286} y={14} width={90} height={34} rx={5} fill="none" stroke={GREEN} strokeWidth={1} />
        <text x={331} y={29} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN} letterSpacing="0.05em">
          CLEARED
        </text>
        <text x={331} y={41} textAnchor="middle" fontSize={9} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          35,341 cases
        </text>
      </motion.g>

      {/* === BOTTOM BRANCH: Manual Baseline — Would-Be Denials === */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}>
        {/* Branch line down */}
        <motion.path d="M210,85 C240,85 250,125 280,125" fill="none" stroke={RED} strokeWidth={1.2} strokeDasharray="4 3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }} />
        <polygon points="278,121 284,125 278,129" fill={RED} opacity={0.5} />

        {/* Manual baseline box */}
        <rect x={286} y={108} width={90} height={34} rx={5} fill={RED} opacity={0.06} />
        <rect x={286} y={108} width={90} height={34} rx={5} fill="none" stroke={RED} strokeWidth={1} strokeDasharray="4 3" />
        <text x={331} y={122} textAnchor="middle" fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={RED} opacity={0.7} letterSpacing="0.05em">
          MANUAL BASELINE
        </text>
        <text x={331} y={135} textAnchor="middle" fontSize={8} fontFamily="Inter, sans-serif" fill={RED} opacity={0.7}>
          Would-Be Denials
        </text>

        {/* "What If?" label */}
        <motion.text x={248} y={118} fontSize={7} fontFamily="Inter, sans-serif" fill={MUTED} fontStyle="italic"
          initial={{ opacity: 0 }} animate={{ opacity: [0, 0.7, 0.7] }} transition={{ delay: 1.5, duration: 1 }}>
          "What if?"
        </motion.text>
      </motion.g>

      {/* === RIGHT: Savings Result === */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 300, damping: 25 }}
        style={{ transformOrigin: '440px 75px' }}
      >
        {/* Savings container */}
        <rect x={400} y={50} width={90} height={55} rx={8} fill={GREEN} opacity={0.1} />
        <rect x={400} y={50} width={90} height={55} rx={8} fill="none" stroke={GREEN} strokeWidth={1.5} />

        <text x={445} y={67} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN} letterSpacing="0.08em">
          AVOIDED LOSS
        </text>

        <motion.text
          x={445} y={86} textAnchor="middle" fontSize={16} fontWeight={800} fontFamily="Inter, sans-serif" fill={GREEN}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.4 }}
        >
          $100K+
        </motion.text>
        <text x={445} y={99} textAnchor="middle" fontSize={7} fontFamily="Inter, sans-serif" fill={MUTED}>
          per quarter
        </text>

        {/* Converging arrows */}
        <motion.path d="M376,30 C390,30 395,72 400,72" fill="none" stroke={GREEN} strokeWidth={1}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.7, duration: 0.3 }} />
        <motion.path d="M376,125 C390,125 395,78 400,78" fill="none" stroke={GREEN} strokeWidth={1} strokeDasharray="3 2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.7, duration: 0.3 }} />
      </motion.g>

      {/* === Bottom labels === */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 2.2 }}>
        <text x={170} y={130} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
          17.0% denial rate
        </text>
        <text x={170} y={140} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={GREEN}>
          vs 18.6% manual
        </text>
      </motion.g>

      {/* Animated particles along the cleared path */}
      {[0, 1, 2].map((i) => (
        <motion.circle key={`p-${i}`} r={2.5} fill={GREEN} opacity={0.6}
          initial={{ offsetDistance: '0%' }}
          animate={{ offsetDistance: '100%' }}
          transition={{ delay: 1.5 + i * 0.5, duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.5 }}
          style={{ offsetPath: 'path("M210,65 C240,65 250,30 280,30")' }}
        />
      ))}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  View 2 — Dashboard Mockup (inspired by real screenshots)         */
/* ------------------------------------------------------------------ */
function DashboardMockup() {
  return (
    <svg viewBox="0 0 500 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Dashboard chrome */}
      <rect x={4} y={4} width={492} height={192} rx={6} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

      {/* Title bar */}
      <rect x={4} y={4} width={492} height={18} rx={6} fill="#F8FAFC" />
      <rect x={4} y={16} width={492} height={6} fill="#F8FAFC" />
      <circle cx={16} cy={13} r={3} fill="#FCA5A5" />
      <circle cx={26} cy={13} r={3} fill="#FDE68A" />
      <circle cx={36} cy={13} r={3} fill="#86EFAC" />
      <text x={250} y={16} textAnchor="middle" fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={PURPLE}>
        Automation Impact on Coding Denials
      </text>

      {/* Filter bar */}
      <rect x={12} y={26} width={55} height={10} rx={2} fill="#F1F5F9" stroke="#E2E8F0" strokeWidth={0.5} />
      <text x={39} y={33} textAnchor="middle" fontSize={5} fill={MUTED}>Service Line</text>
      <rect x={72} y={26} width={55} height={10} rx={2} fill="#F1F5F9" stroke="#E2E8F0" strokeWidth={0.5} />
      <text x={99} y={33} textAnchor="middle" fontSize={5} fill={MUTED}>Date Range</text>

      {/* Color legend */}
      <rect x={350} y={28} width={6} height={6} rx={1} fill={GOLD} opacity={0.7} />
      <text x={360} y={33} fontSize={5} fill={MUTED}>Automated</text>
      <rect x={400} y={28} width={6} height={6} rx={1} fill={PURPLE_LIGHT} opacity={0.7} />
      <text x={410} y={33} fontSize={5} fill={MUTED}>Manual</text>

      {/* === TOP ROW: 3 KPI Cards === */}
      {/* KPI 1 - Automation Impact */}
      <motion.g initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <rect x={12} y={42} width={150} height={50} rx={4} fill="white" stroke="#E2E8F0" strokeWidth={0.6} />
        <text x={20} y={52} fontSize={5.5} fontWeight={600} fill={PURPLE} opacity={0.8}>Automation Impact</text>
        <text x={20} y={68} fontSize={14} fontWeight={700} fill={PURPLE}>0.02%</text>
        <text x={65} y={68} fontSize={6} fill={MUTED}>benchmark</text>
        {/* Mini line chart */}
        <motion.polyline
          points="20,80 40,78 60,82 80,76 100,79 120,74 140,77"
          fill="none" stroke={GOLD} strokeWidth={1} opacity={0.7}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.polyline
          points="20,82 40,84 60,80 80,83 100,85 120,81 140,83"
          fill="none" stroke={PURPLE_LIGHT} strokeWidth={1} opacity={0.5}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </motion.g>

      {/* KPI 2 - Financial Impact */}
      <motion.g initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <rect x={172} y={42} width={150} height={50} rx={4} fill="white" stroke="#E2E8F0" strokeWidth={0.6} />
        <text x={180} y={52} fontSize={5.5} fontWeight={600} fill={PURPLE} opacity={0.8}>Financial Impact</text>
        <text x={180} y={66} fontSize={7} fontWeight={600} fill={GREEN}>Averted Denials</text>
        <text x={180} y={76} fontSize={7} fill={MUTED}>Rework Expense Avoided</text>
        {/* Dual line chart */}
        <motion.polyline
          points="180,86 200,83 220,88 240,82 260,86 280,80 300,84"
          fill="none" stroke={GOLD} strokeWidth={1} opacity={0.7}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
        <motion.polyline
          points="180,84 200,86 220,82 240,85 260,82 280,84 300,86"
          fill="none" stroke={PURPLE_LIGHT} strokeWidth={1} opacity={0.5}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
      </motion.g>

      {/* KPI 3 - Denial Composition */}
      <motion.g initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <rect x={332} y={42} width={156} height={50} rx={4} fill="white" stroke="#E2E8F0" strokeWidth={0.6} />
        <text x={340} y={52} fontSize={5.5} fontWeight={600} fill={PURPLE} opacity={0.8}>Coding Denial Composition</text>
        {/* Stacked horizontal bar */}
        <motion.rect x={340} y={58} width={100} height={8} rx={2} fill={GOLD} opacity={0.3}
          initial={{ width: 0 }} animate={{ width: 100 }} transition={{ delay: 0.8, duration: 0.5 }} />
        <motion.rect x={340} y={58} width={35} height={8} rx={2} fill={GOLD} opacity={0.7}
          initial={{ width: 0 }} animate={{ width: 35 }} transition={{ delay: 0.9, duration: 0.4 }} />
        <text x={340} y={76} fontSize={5} fill={MUTED}>Total Cases Denied</text>
        <text x={340} y={84} fontSize={5} fill={GOLD}>Automated Cases</text>
      </motion.g>

      {/* === BOTTOM ROW: Two chart panels === */}
      {/* Left: Financial Impact by Denial Reason - Horizontal bars */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <rect x={12} y={98} width={235} height={90} rx={4} fill="white" stroke="#E2E8F0" strokeWidth={0.6} />
        <text x={20} y={109} fontSize={5.5} fontWeight={600} fill={PURPLE} opacity={0.8}>Financial Impact By Denial Reason</text>

        {/* Bar pairs - Automated (gold) vs Manual (purple) */}
        {[
          { label: 'Modifier Mis..', auto: 50, manual: 120 },
          { label: 'Bundled Svc', auto: 28, manual: 55 },
          { label: 'Diagnosis Mis..', auto: 18, manual: 35 },
          { label: 'Procedure Conf..', auto: 8, manual: 42 },
          { label: 'Age Mismatch', auto: 6, manual: 28 },
        ].map((row, i) => (
          <g key={`bar-${i}`}>
            <text x={20} y={122 + i * 14} fontSize={4.5} fill={MUTED}>{row.label}</text>
            <motion.rect x={75} y={116 + i * 14} height={5} rx={1} fill={GOLD} opacity={0.7}
              initial={{ width: 0 }} animate={{ width: row.auto }} transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }} />
            <motion.rect x={75} y={122 + i * 14} height={5} rx={1} fill={PURPLE_LIGHT} opacity={0.5}
              initial={{ width: 0 }} animate={{ width: row.manual }} transition={{ delay: 0.85 + i * 0.08, duration: 0.4 }} />
          </g>
        ))}

        {/* X-axis labels */}
        <text x={75} y={190} fontSize={4} fill={MUTED}>0K</text>
        <text x={135} y={190} fontSize={4} fill={MUTED}>60K</text>
        <text x={195} y={190} fontSize={4} fill={MUTED}>130K</text>
      </motion.g>

      {/* Right: Financial Impact by Automation Category */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <rect x={257} y={98} width={231} height={90} rx={4} fill="white" stroke="#E2E8F0" strokeWidth={0.6} />
        <text x={265} y={109} fontSize={5.5} fontWeight={600} fill={PURPLE} opacity={0.8}>Financial Impact by Automation Category</text>

        {/* Category bars */}
        {[
          { label: 'IR', auto: 10, manual: 85 },
          { label: 'CT', auto: 60, manual: 45 },
          { label: 'XRAY', auto: 55, manual: 50 },
          { label: 'MR', auto: 15, manual: 55 },
        ].map((row, i) => (
          <g key={`cat-${i}`}>
            <text x={265} y={124 + i * 16} fontSize={5} fontWeight={600} fill={MUTED}>{row.label}</text>
            <text x={285} y={119 + i * 16} fontSize={4} fill={GOLD} opacity={0.7}>Automated</text>
            <motion.rect x={320} y={114 + i * 16} height={5} rx={1} fill={GOLD} opacity={0.7}
              initial={{ width: 0 }} animate={{ width: row.auto }} transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }} />
            <text x={285} y={126 + i * 16} fontSize={4} fill={PURPLE_LIGHT} opacity={0.7}>Manual</text>
            <motion.rect x={320} y={121 + i * 16} height={5} rx={1} fill={PURPLE_LIGHT} opacity={0.5}
              initial={{ width: 0 }} animate={{ width: row.manual }} transition={{ delay: 0.95 + i * 0.1, duration: 0.4 }} />
          </g>
        ))}
      </motion.g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Component — Auto-swaps between views                        */
/* ------------------------------------------------------------------ */
export default function DenialAnalyticsVisual({ compact = false }: { compact?: boolean }) {
  const [view, setView] = useState<'flow' | 'dashboard'>('flow')

  useEffect(() => {
    const interval = setInterval(() => {
      setView((v) => (v === 'flow' ? 'dashboard' : 'flow'))
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative rounded-xl bg-bg overflow-hidden ${compact ? 'h-52' : 'h-[280px]'}`}>
      <div key={view} className="absolute inset-0 flex items-center justify-center p-2">
        {view === 'flow' ? <FlowAnimation /> : <DashboardMockup />}
      </div>

      {/* View indicator dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        <button
          onClick={(e) => { e.stopPropagation(); setView('flow') }}
          className={`h-1.5 rounded-full transition-all ${view === 'flow' ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
        />
        <button
          onClick={(e) => { e.stopPropagation(); setView('dashboard') }}
          className={`h-1.5 rounded-full transition-all ${view === 'dashboard' ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
        />
      </div>
    </div>
  )
}
