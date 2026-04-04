import { useState, useEffect } from 'react'

const BLUE = '#2563EB'
const BLUE_LIGHT = '#60A5FA'
const TEAL = '#0D9488'
const GREEN = '#22C55E'
const RED = '#EF4444'
const GOLD = '#C5A84D'
const MUTED = '#94A3B8'

/* ------------------------------------------------------------------ */
/*  View 1 — Predictive Pipeline Flow                                 */
/* ------------------------------------------------------------------ */
function PipelineFlow() {
  return (
    <svg viewBox="0 0 500 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      {/* === LEFT: Call Logs Inflow === */}
      <text x={45} y={14} textAnchor="middle" fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={MUTED} letterSpacing="0.08em">
        CALL LOGS
      </text>
      {/* Stacked log lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`log-${i}`}>
          <rect x={14 + i * 2} y={22 + i * 11} width={56} height={12} rx={2}
            fill="none" stroke={BLUE} strokeWidth={0.8} opacity={0.4 + i * 0.1} />
          <line x1={18 + i * 2} y1={27 + i * 11} x2={42 + i * 2} y2={27 + i * 11}
            stroke={BLUE} strokeWidth={0.5} opacity={0.3} />
          <line x1={18 + i * 2} y1={30 + i * 11} x2={56 + i * 2} y2={30 + i * 11}
            stroke={BLUE} strokeWidth={0.5} opacity={0.2} />
        </g>
      ))}
      <text x={45} y={88} fontSize={7} fontFamily="Inter, sans-serif" fill={MUTED}>
        millions of records
      </text>

      {/* Web Content stack */}
      <text x={45} y={104} textAnchor="middle" fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={MUTED} letterSpacing="0.08em">
        WEB CONTENT
      </text>
      {[0, 1, 2].map((i) => (
        <g key={`web-${i}`}>
          <rect x={18 + i * 2} y={110 + i * 10} width={50} height={10} rx={2}
            fill="none" stroke={TEAL} strokeWidth={0.7} opacity={0.4 + i * 0.15} />
          <line x1={22 + i * 2} y1={115 + i * 10} x2={48 + i * 2} y2={115 + i * 10}
            stroke={TEAL} strokeWidth={0.4} opacity={0.3} />
        </g>
      ))}
      <text x={45} y={152} fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
        FAQs & Guides
      </text>

      {/* === CENTER: ML Engine === */}
      {/* Inflow arrows */}
      <path d="M82,60 L128,72" fill="none" stroke={BLUE} strokeWidth={1} />
      <polygon points="126,68 132,72 126,76" fill={BLUE} opacity={0.7} />
      <path d="M76,130 L128,86" fill="none" stroke={TEAL} strokeWidth={1} />
      <polygon points="125,83 132,85 127,90" fill={TEAL} opacity={0.7} />

      {/* ML Engine box */}
      <rect x={132} y={55} width={90} height={45} rx={6} fill={BLUE} opacity={0.1} />
      <rect x={132} y={55} width={90} height={45} rx={6} fill="none" stroke={BLUE} strokeWidth={1.2} />
      <text x={177} y={71} textAnchor="middle" fontSize={8} fontWeight={700} fontFamily="Inter, sans-serif" fill={BLUE}>
        ML Engine
      </text>
      <text x={177} y={82} textAnchor="middle" fontSize={6.5} fontFamily="Inter, sans-serif" fill={BLUE_LIGHT}>
        Topic Modeling
      </text>
      <text x={177} y={92} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
        R / SAS
      </text>

      {/* === TOP BRANCH: Digital Redirect === */}
      <path d="M222,68 C250,68 258,35 285,35" fill="none" stroke={GREEN} strokeWidth={1.2} />
      <polygon points="283,31 289,35 283,39" fill={GREEN} opacity={0.7} />

      <rect x={290} y={18} width={95} height={36} rx={5} fill={GREEN} opacity={0.08} />
      <rect x={290} y={18} width={95} height={36} rx={5} fill="none" stroke={GREEN} strokeWidth={1} />
      <text x={337} y={32} textAnchor="middle" fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN} letterSpacing="0.04em">
        DIGITAL REDIRECT
      </text>
      <text x={337} y={43} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN}>
        Self-Service
      </text>
      <text x={337} y={51} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
        content gap filled
      </text>

      {/* === BOTTOM BRANCH: Dispatch Prevented === */}
      <path d="M222,88 C250,88 258,125 285,125" fill="none" stroke={TEAL} strokeWidth={1.2} />
      <polygon points="283,121 289,125 283,129" fill={TEAL} opacity={0.7} />

      <rect x={290} y={107} width={95} height={36} rx={5} fill={TEAL} opacity={0.08} />
      <rect x={290} y={107} width={95} height={36} rx={5} fill="none" stroke={TEAL} strokeWidth={1} />
      <text x={337} y={121} textAnchor="middle" fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL} letterSpacing="0.04em">
        DISPATCH BLOCKED
      </text>
      <text x={337} y={132} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
        Truck Roll Averted
      </text>
      <text x={337} y={140} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
        warranty spend cut
      </text>

      {/* "Digital Gap" label */}
      <text x={255} y={55} fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED} fontStyle="italic">
        "digital gaps"
      </text>

      {/* === RIGHT: Savings Result === */}
      <path d="M385,35 C398,35 398,72 405,72" fill="none" stroke={GREEN} strokeWidth={1} />
      <path d="M385,125 C398,125 398,82 405,82" fill="none" stroke={TEAL} strokeWidth={1} />

      <rect x={405} y={50} width={88} height={60} rx={8} fill={GOLD} opacity={0.08} />
      <rect x={405} y={50} width={88} height={60} rx={8} fill="none" stroke={GOLD} strokeWidth={1.5} />

      <text x={449} y={66} textAnchor="middle" fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={GOLD} letterSpacing="0.08em">
        TOTAL SAVINGS
      </text>
      <text x={449} y={84} textAnchor="middle" fontSize={15} fontWeight={800} fontFamily="Inter, sans-serif" fill={GOLD}>
        $16.8M
      </text>
      <text x={449} y={96} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
        potential annual
      </text>
      <text x={449} y={104} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
        savings identified
      </text>

      {/* Bottom label */}
      <text x={177} y={115} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
        18h → &lt;60 min execution
      </text>

      {/* Footer context */}
      <text x={250} y={185} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED} opacity={0.6}>
        Fortune 100 Tech Client · Supervised ML · Fraud Detection & Dispatch Optimization
      </text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  View 2 — Impact Metrics Dashboard                                 */
/* ------------------------------------------------------------------ */
function ImpactDashboard() {
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
      <text x={250} y={16} textAnchor="middle" fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={BLUE}>
        Predictive Dispatch Optimization — Impact Summary
      </text>

      {/* === TOP ROW: 3 Metric Cards === */}
      {/* Card 1 - Call Cost Reduction */}
      <rect x={12} y={28} width={154} height={55} rx={4} fill="#EFF6FF" stroke="#BFDBFE" strokeWidth={0.6} />
      <text x={20} y={40} fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={BLUE} opacity={0.8}>
        Call Cost Reduction
      </text>
      <text x={20} y={58} fontSize={18} fontWeight={800} fontFamily="Inter, sans-serif" fill={BLUE}>
        $6.3M
      </text>
      <text x={20} y={70} fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
        diverted to digital self-service
      </text>
      {/* Mini bar chart */}
      <rect x={115} y={42} width={8} height={28} rx={1.5} fill={BLUE} opacity={0.15} />
      <rect x={115} y={52} width={8} height={18} rx={1.5} fill={BLUE} opacity={0.5} />
      <rect x={126} y={42} width={8} height={28} rx={1.5} fill={BLUE} opacity={0.15} />
      <rect x={126} y={48} width={8} height={22} rx={1.5} fill={BLUE} opacity={0.5} />
      <rect x={137} y={42} width={8} height={28} rx={1.5} fill={BLUE} opacity={0.15} />
      <rect x={137} y={55} width={8} height={15} rx={1.5} fill={GREEN} opacity={0.6} />
      <rect x={148} y={42} width={8} height={28} rx={1.5} fill={BLUE} opacity={0.15} />
      <rect x={148} y={58} width={8} height={12} rx={1.5} fill={GREEN} opacity={0.7} />

      {/* Card 2 - Dispatch Savings */}
      <rect x={174} y={28} width={154} height={55} rx={4} fill="#F0FDFA" stroke="#99F6E4" strokeWidth={0.6} />
      <text x={182} y={40} fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL} opacity={0.8}>
        Dispatch Expense Savings
      </text>
      <text x={182} y={58} fontSize={18} fontWeight={800} fontFamily="Inter, sans-serif" fill={TEAL}>
        $10.5M
      </text>
      <text x={182} y={70} fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
        truck rolls prevented
      </text>
      {/* Downward arrow indicator */}
      <text x={300} y={58} fontSize={14} fontFamily="Inter, sans-serif" fill={GREEN}>↓</text>
      <text x={312} y={56} fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN}>-42%</text>
      <text x={312} y={65} fontSize={5} fontFamily="Inter, sans-serif" fill={MUTED}>dispatch</text>

      {/* Card 3 - Speed */}
      <rect x={336} y={28} width={154} height={55} rx={4} fill="#FFFBEB" stroke="#FDE68A" strokeWidth={0.6} />
      <text x={344} y={40} fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={GOLD} opacity={0.9}>
        Execution Speed
      </text>
      <text x={344} y={58} fontSize={18} fontWeight={800} fontFamily="Inter, sans-serif" fill={GOLD}>
        94%
      </text>
      <text x={383} y={58} fontSize={8} fontWeight={600} fontFamily="Inter, sans-serif" fill={GOLD}>
        faster
      </text>
      <text x={344} y={70} fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
        18 hours → under 60 minutes
      </text>
      {/* Speed gauge */}
      <path d="M460,68 A18,18 0 0,1 425,68" fill="none" stroke="#E2E8F0" strokeWidth={3} strokeLinecap="round" />
      <path d="M458,68 A17,17 0 0,1 430,55" fill="none" stroke={GOLD} strokeWidth={3} strokeLinecap="round" />

      {/* === BOTTOM: Breakdown bars === */}
      <text x={20} y={98} fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={BLUE} opacity={0.7}>
        SAVINGS BREAKDOWN
      </text>

      {/* Call Diversion bar */}
      <text x={20} y={114} fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>Call Diversion</text>
      <rect x={100} y={108} width={280} height={10} rx={2} fill="#E2E8F0" opacity={0.4} />
      <rect x={100} y={108} width={168} height={10} rx={2} fill={BLUE} opacity={0.5} />
      <text x={274} y={116} fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={BLUE}>$6.3M</text>

      {/* Dispatch Prevention bar */}
      <text x={20} y={130} fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>Dispatch Prevention</text>
      <rect x={100} y={124} width={280} height={10} rx={2} fill="#E2E8F0" opacity={0.4} />
      <rect x={100} y={124} width={280} height={10} rx={2} fill={TEAL} opacity={0.5} />
      <text x={386} y={132} fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>$10.5M</text>

      {/* Warranty Liability bar */}
      <text x={20} y={146} fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>Warranty Liability</text>
      <rect x={100} y={140} width={280} height={10} rx={2} fill="#E2E8F0" opacity={0.4} />
      <rect x={100} y={140} width={220} height={10} rx={2} fill={RED} opacity={0.3} />
      <rect x={100} y={140} width={110} height={10} rx={2} fill={GREEN} opacity={0.5} />
      <text x={216} y={148} fontSize={5} fontFamily="Inter, sans-serif" fill={MUTED}>reduced</text>

      {/* Tech stack strip */}
      <rect x={12} y={160} width={476} height={16} rx={3} fill="#F8FAFC" stroke="#E2E8F0" strokeWidth={0.5} />
      {['R', 'SAS', 'Tableau', 'Excel/VBA', 'SQL', 'Python', 'Supervised ML', 'Topic Modeling'].map((tech, i) => (
        <text key={tech} x={30 + i * 58} y={171} textAnchor="middle" fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif"
          fill={i < 4 ? BLUE : TEAL} opacity={0.7}>
          {tech}
        </text>
      ))}

      {/* Total callout */}
      <rect x={400} y={108} width={85} height={40} rx={5} fill={GOLD} opacity={0.08} />
      <rect x={400} y={108} width={85} height={40} rx={5} fill="none" stroke={GOLD} strokeWidth={1} />
      <text x={442} y={122} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={GOLD} letterSpacing="0.05em">
        TOTAL
      </text>
      <text x={442} y={138} textAnchor="middle" fontSize={14} fontWeight={800} fontFamily="Inter, sans-serif" fill={GOLD}>
        $16.8M
      </text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Component — Auto-swaps between views                        */
/* ------------------------------------------------------------------ */
export default function DispatchOptimizationVisual({ compact = false }: { compact?: boolean }) {
  const [view, setView] = useState<'pipeline' | 'impact'>('pipeline')

  useEffect(() => {
    const interval = setInterval(() => {
      setView((v) => (v === 'pipeline' ? 'impact' : 'pipeline'))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative rounded-xl bg-bg overflow-hidden ${compact ? 'h-52' : 'h-[280px]'}`}>
      <div key={view} className="absolute inset-0 flex items-center justify-center p-2">
        {view === 'pipeline' ? <PipelineFlow /> : <ImpactDashboard />}
      </div>

      {/* View indicator dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        <button
          onClick={(e) => { e.stopPropagation(); setView('pipeline') }}
          className={`h-1.5 rounded-full transition-all ${view === 'pipeline' ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
        />
        <button
          onClick={(e) => { e.stopPropagation(); setView('impact') }}
          className={`h-1.5 rounded-full transition-all ${view === 'impact' ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
        />
      </div>
    </div>
  )
}
