import { useState, useEffect } from 'react'

const TEAL = '#0F766E'
const GREEN = '#22C55E'
const ORANGE = '#F97316'
const DARK = '#1E293B'
const MUTED = '#94A3B8'
const BLUE = '#306998'
const RED_MUTED = '#DC2626'

/* ------------------------------------------------------------------ */
/*  View 1 — Before/After Workflow Flowchart                          */
/* ------------------------------------------------------------------ */
function WorkflowView() {
  return (
    <svg viewBox="0 0 500 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x={4} y={4} width={492} height={192} rx={6} fill="white" stroke="#CBD5E1" strokeWidth={1} />

      {/* === BEFORE SECTION (left: x 8-110) === */}
      <g>
        <rect x={8} y={8} width={102} height={186} rx={4} fill={RED_MUTED} opacity={0.06} />
        <rect x={8} y={8} width={102} height={16} rx={4} fill={RED_MUTED} opacity={0.12} />
        <rect x={8} y={20} width={102} height={4} fill={RED_MUTED} opacity={0.12} />
        <text x={59} y={19} textAnchor="middle" fontSize={5.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={RED_MUTED} letterSpacing="0.04em">
          BEFORE: Traditional BI
        </text>

        {/* Problem 1: BI Backlog */}
        <g>
          <rect x={14} y={32} width={90} height={38} rx={3} fill={RED_MUTED} opacity={0.06} stroke={RED_MUTED} strokeWidth={0.7} strokeDasharray="4 2" />
          <text x={59} y={44} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Stalled by BI Backlog
          </text>
          <text x={59} y={52} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            Slow Turnaround for
          </text>
          <text x={59} y={59} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            Internal Requests
          </text>
          <line x1={94} y1={36} x2={100} y2={42} stroke={RED_MUTED} strokeWidth={1} opacity={0.5} />
          <line x1={100} y1={36} x2={94} y2={42} stroke={RED_MUTED} strokeWidth={1} opacity={0.5} />
        </g>

        {/* Problem 2: Drag & Drop */}
        <g>
          <rect x={14} y={78} width={90} height={38} rx={3} fill={RED_MUTED} opacity={0.06} stroke={RED_MUTED} strokeWidth={0.7} strokeDasharray="4 2" />
          <text x={59} y={90} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Drag-and-Drop Dev
          </text>
          <text x={59} y={98} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            Limited Customization
          </text>
          <text x={59} y={105} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            & Complexity
          </text>
          <line x1={94} y1={82} x2={100} y2={88} stroke={RED_MUTED} strokeWidth={1} opacity={0.5} />
          <line x1={100} y1={82} x2={94} y2={88} stroke={RED_MUTED} strokeWidth={1} opacity={0.5} />
        </g>

        {/* Problem 3: Unstable Demos */}
        <g>
          <rect x={14} y={124} width={90} height={38} rx={3} fill={RED_MUTED} opacity={0.06} stroke={RED_MUTED} strokeWidth={0.7} strokeDasharray="4 2" />
          <text x={59} y={136} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Unstable Demos
          </text>
          <text x={59} y={144} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            Lagging Data / Manual
          </text>
          <text x={59} y={151} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            Data Refresh
          </text>
          <line x1={94} y1={128} x2={100} y2={134} stroke={RED_MUTED} strokeWidth={1} opacity={0.5} />
          <line x1={100} y1={128} x2={94} y2={134} stroke={RED_MUTED} strokeWidth={1} opacity={0.5} />
        </g>

        {/* Vertical label */}
        <text x={12} y={180} fontSize={4} fontFamily="Inter, sans-serif" fill={RED_MUTED} opacity={0.6}>
          Analytics SDLC Modernization
        </text>
      </g>

      {/* === Arrow from BEFORE to AFTER === */}
      <g>
        <path d="M114,100 L126,100" fill="none" stroke={TEAL} strokeWidth={1.5} />
        <polygon points="124,96.5 130,100 124,103.5" fill={TEAL} />
      </g>

      {/* === AFTER SECTION (center: x 130-400) === */}
      <g>
        <rect x={130} y={8} width={270} height={186} rx={4} fill={TEAL} opacity={0.03} />
        <rect x={130} y={8} width={270} height={16} rx={4} fill={TEAL} opacity={0.1} />
        <rect x={130} y={20} width={270} height={4} fill={TEAL} opacity={0.1} />
        <text x={265} y={19} textAnchor="middle" fontSize={5.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL} letterSpacing="0.04em">
          AFTER: Collaborative AI-Augmented Workflow
        </text>

        {/* Collaboration Squad */}
        <rect x={176} y={28} width={108} height={18} rx={3} fill={TEAL} opacity={0.1} />
        <rect x={176} y={28} width={108} height={18} rx={3} fill="none" stroke={TEAL} strokeWidth={0.8} />
        <text x={230} y={38} textAnchor="middle" fontSize={5} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL}>
          Specialized Squad
        </text>
        <text x={230} y={44} textAnchor="middle" fontSize={4} fontFamily="Inter, sans-serif" fill={MUTED}>
          Data SME + Lead Analyst
        </text>

        {/* Arrow down */}
        <path d="M230,46 L230,54" fill="none" stroke={TEAL} strokeWidth={0.8} />

        {/* AI-Augmented IDE */}
        <rect x={176} y={54} width={108} height={20} rx={3} fill={BLUE} opacity={0.1} />
        <rect x={176} y={54} width={108} height={20} rx={3} fill="none" stroke={BLUE} strokeWidth={0.8} />
        <text x={230} y={64} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={BLUE}>
          AI-Augmented IDE
        </text>
        <text x={230} y={71} textAnchor="middle" fontSize={4} fontFamily="Inter, sans-serif" fill={MUTED}>
          Cursor + Claude
        </text>

        {/* Arrow down */}
        <path d="M230,74 L230,82" fill="none" stroke={TEAL} strokeWidth={0.8} />

        {/* Dev Loop diamond */}
        <rect x={218} y={79} width={24} height={24} rx={2}
          fill={TEAL} opacity={0.1} stroke={TEAL} strokeWidth={1}
          transform="rotate(45, 230, 91)" />
        <text x={230} y={90} textAnchor="middle" fontSize={4} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
          Dev
        </text>
        <text x={230} y={95} textAnchor="middle" fontSize={4} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
          Loop
        </text>

        {/* Right branch from diamond: Scaffold UI */}
        <path d="M242,91 L290,91" fill="none" stroke={TEAL} strokeWidth={0.8} />

        {/* Right column: Steps 1 & 2 */}
        <g>
          <rect x={290} y={28} width={100} height={18} rx={3} fill={TEAL} opacity={0.08} />
          <rect x={290} y={28} width={100} height={18} rx={3} fill="none" stroke={TEAL} strokeWidth={0.8} />
          <text x={296} y={36} fontSize={4} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL}>1.</text>
          <text x={303} y={36} fontSize={4.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>Scaffold UI Components</text>
          <text x={340} y={43} textAnchor="middle" fontSize={3.5} fontFamily="Inter, sans-serif" fill={MUTED}>React/D3.js</text>

          <path d="M340,46 L340,52" fill="none" stroke={TEAL} strokeWidth={0.6} />

          <rect x={290} y={52} width={100} height={18} rx={3} fill={TEAL} opacity={0.08} />
          <rect x={290} y={52} width={100} height={18} rx={3} fill="none" stroke={TEAL} strokeWidth={0.8} />
          <text x={296} y={60} fontSize={4} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL}>2.</text>
          <text x={303} y={60} fontSize={4.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>Prototype Data Features</text>
          <text x={340} y={67} textAnchor="middle" fontSize={3.5} fontFamily="Inter, sans-serif" fill={MUTED}>AI-Generated Python backend</text>
        </g>

        {/* Right column: Live Demos box */}
        <rect x={290} y={76} width={100} height={30} rx={3} fill={GREEN} opacity={0.1} />
        <rect x={290} y={76} width={100} height={30} rx={3} fill="none" stroke={GREEN} strokeWidth={0.8} />
        <text x={340} y={86} textAnchor="middle" fontSize={5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Live, High-Fidelity
        </text>
        <text x={340} y={93} textAnchor="middle" fontSize={5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Demos
        </text>
        <text x={340} y={101} textAnchor="middle" fontSize={3.5} fontFamily="Inter, sans-serif" fill={MUTED}>Dev refresh</text>

        {/* Left branch from diamond: Scaffold Data */}
        <path d="M218,91 L170,91" fill="none" stroke={TEAL} strokeWidth={0.8} />

        {/* Left: Scaffold Data */}
        <rect x={134} y={82} width={86} height={18} rx={3} fill={BLUE} opacity={0.08} />
        <rect x={134} y={82} width={86} height={18} rx={3} fill="none" stroke={BLUE} strokeWidth={0.8} />
        <text x={140} y={90} fontSize={4} fontWeight={700} fontFamily="Inter, sans-serif" fill={BLUE}>1.</text>
        <text x={147} y={90} fontSize={4.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>Scaffold Data</text>
        <text x={177} y={97} textAnchor="middle" fontSize={3.5} fontFamily="Inter, sans-serif" fill={MUTED}>AI-Generated Python backend</text>

        {/* Arrow down from diamond */}
        <path d="M230,103 L230,114" fill="none" stroke={TEAL} strokeWidth={0.8} />

        {/* SME Validation section */}
        <rect x={150} y={114} width={160} height={60} rx={4} fill={ORANGE} opacity={0.06} />
        <rect x={150} y={114} width={160} height={60} rx={4} fill="none" stroke={ORANGE} strokeWidth={0.8} />

        <text x={230} y={124} textAnchor="middle" fontSize={5} fontWeight={700} fontFamily="Inter, sans-serif" fill={ORANGE}>
          SME-Guided Logic & Validation
        </text>
        <text x={230} y={131} textAnchor="middle" fontSize={4} fontFamily="Inter, sans-serif" fill={MUTED}>
          (Sudha's Data Guardrail)
        </text>

        <text x={164} y={142} fontSize={4.5} fontWeight={500} fontFamily="Inter, sans-serif" fill={DARK}>Define Numeric Breakpoints</text>
        <text x={164} y={150} fontSize={4.5} fontWeight={500} fontFamily="Inter, sans-serif" fill={DARK}>Perform deep SQL Checks</text>
        <text x={164} y={158} fontSize={4.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>ENSURE enterprise-DATA MATCH</text>

        {/* Arrow right from validation to Lakehouse */}
        <path d="M310,144 L330,144" fill="none" stroke={TEAL} strokeWidth={0.8} />

        {/* Databricks Integration */}
        <rect x={330} y={118} width={62} height={38} rx={3} fill={TEAL} opacity={0.08} />
        <rect x={330} y={118} width={62} height={38} rx={3} fill="none" stroke={TEAL} strokeWidth={0.8} />
        <text x={361} y={130} textAnchor="middle" fontSize={4.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
          Databricks
        </text>
        <text x={361} y={137} textAnchor="middle" fontSize={4.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
          Lakehouse
        </text>
        <text x={361} y={146} textAnchor="middle" fontSize={3.5} fontFamily="Inter, sans-serif" fill={MUTED}>
          Seamless Connection
        </text>
        {/* Databricks badge */}
        <rect x={344} y={150} width={34} height={4} rx={2} fill={ORANGE} opacity={0.3} />
      </g>

      {/* === IMPACT COLUMN (right: x 408-492) === */}
      <g>
        <rect x={408} y={8} width={84} height={186} rx={4} fill={GREEN} opacity={0.04} />
        <rect x={408} y={8} width={84} height={16} rx={4} fill={GREEN} opacity={0.1} />
        <rect x={408} y={20} width={84} height={4} fill={GREEN} opacity={0.1} />
        <text x={450} y={19} textAnchor="middle" fontSize={5.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN} letterSpacing="0.04em">
          IMPACT
        </text>

        {/* Impact 1: Bandwidth */}
        <rect x={414} y={32} width={72} height={44} rx={3} fill="white" stroke={GREEN} strokeWidth={0.6} />
        <text x={450} y={44} textAnchor="middle" fontSize={5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Reclaimed
        </text>
        <text x={450} y={52} textAnchor="middle" fontSize={5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Bandwidth
        </text>
        <text x={450} y={62} textAnchor="middle" fontSize={4} fontFamily="Inter, sans-serif" fill={MUTED}>
          Reduced Ad-hoc Load
        </text>
        <path d="M428,67 L440,67" fill="none" stroke={GREEN} strokeWidth={0.5} opacity={0.3} />

        {/* Impact 2: Weekly Updates */}
        <rect x={414} y={84} width={72} height={44} rx={3} fill="white" stroke={GREEN} strokeWidth={0.6} />
        <text x={450} y={96} textAnchor="middle" fontSize={5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Weekly High-
        </text>
        <text x={450} y={104} textAnchor="middle" fontSize={5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Impact Updates
        </text>
        <text x={450} y={114} textAnchor="middle" fontSize={4} fontFamily="Inter, sans-serif" fill={MUTED}>
          Iterative Feature Delivery
        </text>

        {/* Impact 3: Innovation */}
        <rect x={414} y={136} width={72} height={48} rx={3} fill="white" stroke={GREEN} strokeWidth={0.6} />
        <text x={450} y={148} textAnchor="middle" fontSize={5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Democratized
        </text>
        <text x={450} y={156} textAnchor="middle" fontSize={5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Innovation
        </text>
        <text x={450} y={166} textAnchor="middle" fontSize={4} fontFamily="Inter, sans-serif" fill={MUTED}>
          Accelerated Strategic
        </text>
        <text x={450} y={173} textAnchor="middle" fontSize={4} fontFamily="Inter, sans-serif" fill={MUTED}>
          Insights
        </text>
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  View 2 — Impact Dashboard                                        */
/* ------------------------------------------------------------------ */
function ImpactView() {
  return (
    <svg viewBox="0 0 500 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x={4} y={4} width={492} height={192} rx={6} fill="white" stroke="#CBD5E1" strokeWidth={1} />

      {/* Title bar */}
      <rect x={4} y={4} width={492} height={20} rx={6} fill="#F1F5F9" />
      <rect x={4} y={18} width={492} height={6} fill="#F1F5F9" />
      <circle cx={18} cy={14} r={3.5} fill="#FCA5A5" />
      <circle cx={29} cy={14} r={3.5} fill="#FDE68A" />
      <circle cx={40} cy={14} r={3.5} fill="#86EFAC" />
      <text x={250} y={17} textAnchor="middle" fontSize={7} fontWeight={700} fontFamily="Inter, sans-serif" fill={DARK}>
        Collaborative Innovation Lab — Operational Impact
      </text>

      {/* Card 1: Weekly Cadence */}
      <g>
        <rect x={16} y={32} width={150} height={80} rx={5} fill="#F0FDFA" stroke={TEAL} strokeWidth={0.8} />

        {/* Calendar icon */}
        <rect x={28} y={40} width={14} height={12} rx={2} fill="none" stroke={TEAL} strokeWidth={1} />
        <line x1={32} y1={38} x2={32} y2={42} stroke={TEAL} strokeWidth={1} />
        <line x1={38} y1={38} x2={38} y2={42} stroke={TEAL} strokeWidth={1} />
        <line x1={28} y1={45} x2={42} y2={45} stroke={TEAL} strokeWidth={0.5} />

        <text x={48} y={46} fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL}>
          Weekly Cadence
        </text>
        <text x={48} y={54} fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          Feature-Rich Updates
        </text>

        <text x={91} y={80} textAnchor="middle" fontSize={18} fontWeight={800} fontFamily="Inter, sans-serif" fill={TEAL}>
          7 Days
        </text>
        <text x={91} y={90} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={MUTED}>
          not Quarters
        </text>

        <rect x={26} y={100} width={130} height={5} rx={2.5} fill={TEAL} opacity={0.15} />
        <rect x={26} y={100} width={130} height={5} rx={2.5} fill={TEAL} opacity={0.5} />
      </g>

      {/* Card 2: Live Demos */}
      <g>
        <rect x={176} y={32} width={148} height={80} rx={5} fill="#FFFBEB" stroke={ORANGE} strokeWidth={0.8} />

        {/* Play icon */}
        <polygon points="192,42 192,52 200,47" fill={ORANGE} opacity={0.7} />

        <text x={206} y={46} fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={ORANGE}>
          Product-Ready Demos
        </text>
        <text x={206} y={54} fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          High-Fidelity Prototypes
        </text>

        <text x={250} y={80} textAnchor="middle" fontSize={14} fontWeight={800} fontFamily="Inter, sans-serif" fill={ORANGE}>
          Live D3.js
        </text>
        <text x={250} y={90} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={MUTED}>
          Interactive Visualizations
        </text>

        <text x={250} y={104} textAnchor="middle" fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          Leadership-ready at every sprint
        </text>
      </g>

      {/* Card 3: SME-Verified */}
      <g>
        <rect x={334} y={32} width={154} height={80} rx={5} fill="#F0FDF4" stroke={GREEN} strokeWidth={0.8} />

        {/* Shield icon */}
        <path d="M354,40 L354,50 C354,54 360,58 360,58 C360,58 366,54 366,50 L366,40 L360,38 Z"
          fill={GREEN} opacity={0.25} stroke={GREEN} strokeWidth={1.2} />
        <path d="M356,48 L359,51 L364,44" fill="none" stroke={GREEN} strokeWidth={1.5} strokeLinecap="round" />

        <text x={372} y={46} fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          SME-Verified
        </text>
        <text x={372} y={54} fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          Data Accuracy Guardrail
        </text>

        <text x={411} y={80} textAnchor="middle" fontSize={14} fontWeight={800} fontFamily="Inter, sans-serif" fill={GREEN}>
          100%
        </text>
        <text x={411} y={90} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={MUTED}>
          Enterprise Data Match
        </text>

        <text x={411} y={104} textAnchor="middle" fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          Speed without sacrificing accuracy
        </text>
      </g>

      {/* Bottom: Tech Stack Strip */}
      <g>
        <rect x={16} y={120} width={472} height={26} rx={4} fill={TEAL} opacity={0.08} />
        <rect x={16} y={120} width={472} height={26} rx={4} fill="none" stroke={TEAL} strokeWidth={0.8} opacity={0.5} />

        {[
          { label: 'Cursor + Claude', x: 76, color: BLUE },
          { label: 'FastAPI/Python', x: 196, color: TEAL },
          { label: 'React/D3.js', x: 316, color: ORANGE },
          { label: 'Databricks', x: 436, color: TEAL },
        ].map((stage, i) => (
          <g key={`stage-${i}`}>
            <rect x={stage.x - 46} y={124} width={92} height={18} rx={3}
              fill={stage.color} opacity={0.12} />
            <rect x={stage.x - 46} y={124} width={92} height={18} rx={3}
              fill="none" stroke={stage.color} strokeWidth={0.8} opacity={0.7} />
            <text x={stage.x} y={136} textAnchor="middle" fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={stage.color}>
              {stage.label}
            </text>
          </g>
        ))}

        {[138, 258, 378].map((ax, i) => (
          <g key={`arr-${i}`}>
            <path d={`M${ax},133 L${ax + 14},133`} fill="none" stroke={MUTED} strokeWidth={1} />
            <polygon points={`${ax + 12},130 ${ax + 16},133 ${ax + 12},136`} fill={MUTED} opacity={0.7} />
          </g>
        ))}
      </g>

      {/* Bottom stats */}
      <g>
        <text x={140} y={162} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
          From backlog to weekly delivery
        </text>
        <text x={380} y={162} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN}>
          AI speed + SME accuracy
        </text>
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */
export default function InnovationLabVisual({ compact = false }: { compact?: boolean }) {
  const [view, setView] = useState<'workflow' | 'impact'>('workflow')

  useEffect(() => {
    const interval = setInterval(() => {
      setView((v) => (v === 'workflow' ? 'impact' : 'workflow'))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative rounded-xl bg-bg overflow-hidden ${compact ? 'h-52' : 'h-[280px]'}`}>
      <div key={view} className="absolute inset-0 flex items-center justify-center p-2">
        {view === 'workflow' ? <WorkflowView /> : <ImpactView />}
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        <button
          onClick={(e) => { e.stopPropagation(); setView('workflow') }}
          className={`h-1.5 rounded-full transition-all ${view === 'workflow' ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
        />
        <button
          onClick={(e) => { e.stopPropagation(); setView('impact') }}
          className={`h-1.5 rounded-full transition-all ${view === 'impact' ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
        />
      </div>
    </div>
  )
}
