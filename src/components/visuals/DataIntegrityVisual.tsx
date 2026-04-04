import { useState, useEffect } from 'react'

const TEAL = '#0F766E'
const GREEN = '#22C55E'
const ORANGE = '#F97316'
const RED = '#EF4444'
const MUTED = '#94A3B8'
const DARK = '#1E293B'
const PYTHON_BLUE = '#306998'

/* ------------------------------------------------------------------ */
/*  View 1 — Gateway Flow Animation                                  */
/* ------------------------------------------------------------------ */
function GatewayView() {
  return (
    <svg viewBox="0 0 500 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x={4} y={4} width={492} height={192} rx={6} fill="white" stroke="#CBD5E1" strokeWidth={1} />

      {/* === LEFT: FILE RECEIPT === */}
      <g>
        <text x={35} y={14} textAnchor="middle" fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={MUTED} letterSpacing="0.08em">
          FILE RECEIPT
        </text>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <g key={`file-${i}`}>
            <rect x={10 + (i % 2) * 28} y={22 + Math.floor(i / 2) * 18} width={24} height={14} rx={2}
              fill="none" stroke={TEAL} strokeWidth={0.8} opacity={0.6} />
            <line x1={14 + (i % 2) * 28} y1={28 + Math.floor(i / 2) * 18} x2={28 + (i % 2) * 28} y2={28 + Math.floor(i / 2) * 18}
              stroke={TEAL} strokeWidth={0.5} opacity={0.4} />
            <line x1={14 + (i % 2) * 28} y1={31 + Math.floor(i / 2) * 18} x2={25 + (i % 2) * 28} y2={31 + Math.floor(i / 2) * 18}
              stroke={TEAL} strokeWidth={0.5} opacity={0.4} />
          </g>
        ))}
        <text x={35} y={105} textAnchor="middle" fontSize={7} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL} opacity={0.8}>
          8 SFTP
        </text>
        <text x={35} y={114} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
          client buckets
        </text>
      </g>

      {/* === Arrow to PIPELINE === */}
      <g>
        <path d="M65,60 L78,60" fill="none" stroke={TEAL} strokeWidth={1.2} />
        <polygon points="76,56.5 82,60 76,63.5" fill={TEAL} opacity={0.7} />
      </g>

      {/* === ORCHESTRATION === */}
      <g>
        <text x={113} y={14} textAnchor="middle" fontSize={5.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={MUTED} letterSpacing="0.06em">
          ORCHESTRATION
        </text>

        <rect x={82} y={24} width={62} height={22} rx={4} fill={PYTHON_BLUE} opacity={0.12} />
        <rect x={82} y={24} width={62} height={22} rx={4} fill="none" stroke={PYTHON_BLUE} strokeWidth={1} />
        <text x={113} y={34} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={PYTHON_BLUE}>
          Jenkins Cron
        </text>
        <text x={113} y={42} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={PYTHON_BLUE} opacity={0.7}>
          Trigger
        </text>

        <path d="M113,46 L113,56" fill="none" stroke={PYTHON_BLUE} strokeWidth={1} />
        <polygon points="109.5,54 113,60 116.5,54" fill={PYTHON_BLUE} opacity={0.7} />

        <rect x={82} y={60} width={62} height={22} rx={4} fill={PYTHON_BLUE} opacity={0.12} />
        <rect x={82} y={60} width={62} height={22} rx={4} fill="none" stroke={PYTHON_BLUE} strokeWidth={1} />
        <text x={113} y={70} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={PYTHON_BLUE}>
          File Ingestion
        </text>
        <text x={113} y={78} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={PYTHON_BLUE} opacity={0.7}>
          & Identification
        </text>
      </g>

      {/* === Arrow to VALIDATION === */}
      <g>
        <path d="M144,71 L162,71" fill="none" stroke={TEAL} strokeWidth={1.2} />
        <polygon points="160,67.5 166,71 160,74.5" fill={TEAL} opacity={0.7} />
      </g>

      {/* === QUALITY CONTROL === */}
      <g>
        <text x={220} y={14} textAnchor="middle" fontSize={5.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={MUTED} letterSpacing="0.06em">
          QUALITY CONTROL
        </text>

        <rect x={168} y={24} width={58} height={22} rx={4} fill={TEAL} opacity={0.1} />
        <rect x={168} y={24} width={58} height={22} rx={4} fill="none" stroke={TEAL} strokeWidth={1} />
        <text x={197} y={34} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
          Field Audit
        </text>
        <text x={197} y={42} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={TEAL} opacity={0.7}>
          Every Column
        </text>

        <path d="M197,46 L197,56" fill="none" stroke={TEAL} strokeWidth={1} />

        <rect x={168} y={56} width={58} height={20} rx={4} fill={TEAL} opacity={0.1} />
        <rect x={168} y={56} width={58} height={20} rx={4} fill="none" stroke={TEAL} strokeWidth={1} />
        <text x={197} y={67} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
          Check Rules
        </text>
        <text x={197} y={73} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={TEAL} opacity={0.7}>
          Restrictions
        </text>

        <path d="M197,76 L197,88" fill="none" stroke={TEAL} strokeWidth={1} />

        {/* Decision Diamond */}
        <g>
          <rect x={185} y={91} width={24} height={24} rx={2}
            fill={ORANGE} opacity={0.15} stroke={ORANGE} strokeWidth={1.2}
            transform="rotate(45, 197, 103)" />
          <text x={197} y={105} textAnchor="middle" fontSize={5.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={ORANGE}>
            Deviates?
          </text>
        </g>
      </g>

      {/* === HAPPY PATH (NO) === */}
      <g>
        <path d="M209,93 C230,93 240,42 260,42" fill="none" stroke={GREEN} strokeWidth={1.2} />
        <polygon points="258,38.5 264,42 258,45.5" fill={GREEN} opacity={0.7} />
        <text x={230} y={56} fontSize={5.5} fontWeight={700} fill={GREEN} opacity={0.7}>NO</text>

        <text x={340} y={14} textAnchor="middle" fontSize={5.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN} letterSpacing="0.06em" opacity={0.8}>
          ALL FIELDS PASS
        </text>

        <rect x={266} y={24} width={50} height={20} rx={3} fill={GREEN} opacity={0.1} />
        <rect x={266} y={24} width={50} height={20} rx={3} fill="none" stroke={GREEN} strokeWidth={0.9} />
        <text x={291} y={34} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN}>Receipt ACK</text>
        <text x={291} y={41} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={GREEN} opacity={0.7}>File</text>

        <path d="M316,34 L326,34" fill="none" stroke={GREEN} strokeWidth={1} />

        <rect x={328} y={24} width={56} height={20} rx={3} fill={GREEN} opacity={0.1} />
        <rect x={328} y={24} width={56} height={20} rx={3} fill="none" stroke={GREEN} strokeWidth={0.9} />
        <text x={356} y={33} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN}>Error-Free</text>
        <text x={356} y={41} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={GREEN} opacity={0.7}>Response</text>

        <path d="M384,34 L394,34" fill="none" stroke={GREEN} strokeWidth={1} />

        <rect x={396} y={22} width={56} height={24} rx={4} fill={GREEN} opacity={0.15} />
        <rect x={396} y={22} width={56} height={24} rx={4} fill="none" stroke={GREEN} strokeWidth={1.2} />
        <text x={424} y={33} textAnchor="middle" fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>DEPLOY</text>
        <text x={424} y={42} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={GREEN} opacity={0.7}>Production</text>

        <path d="M456,28 L460,34 L468,24" fill="none" stroke={GREEN} strokeWidth={2} strokeLinecap="round" />
      </g>

      {/* === ERROR PATH (YES) === */}
      <g>
        <path d="M209,113 C230,113 240,140 260,140" fill="none" stroke={RED} strokeWidth={1.2} strokeDasharray="4 2" />
        <polygon points="258,136.5 264,140 258,143.5" fill={RED} opacity={0.6} />
        <text x={228} y={134} fontSize={5.5} fontWeight={700} fill={RED} opacity={0.7}>YES</text>

        <text x={340} y={122} textAnchor="middle" fontSize={5.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={RED} letterSpacing="0.06em" opacity={0.7}>
          FAILURE PATH
        </text>

        <rect x={266} y={130} width={50} height={22} rx={3} fill={RED} opacity={0.08} />
        <rect x={266} y={130} width={50} height={22} rx={3} fill="none" stroke={RED} strokeWidth={0.9} strokeDasharray="4 2" />
        <text x={291} y={140} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={RED} opacity={0.8}>Error</text>
        <text x={291} y={148} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={RED} opacity={0.7}>Manifest</text>

        <path d="M316,141 L326,141" fill="none" stroke={RED} strokeWidth={1} strokeDasharray="4 2" />

        <rect x={328} y={130} width={40} height={22} rx={3} fill={ORANGE} opacity={0.1} />
        <rect x={328} y={130} width={40} height={22} rx={3} fill="none" stroke={ORANGE} strokeWidth={0.9} strokeDasharray="4 2" />
        <text x={348} y={140} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={ORANGE}>CAV</text>
        <text x={348} y={148} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={ORANGE} opacity={0.7}>Validation</text>

        <path d="M368,141 L378,141" fill="none" stroke={ORANGE} strokeWidth={1} strokeDasharray="4 2" />

        <rect x={380} y={128} width={50} height={26} rx={3} fill={RED} opacity={0.08} />
        <rect x={380} y={128} width={50} height={26} rx={3} fill="none" stroke={RED} strokeWidth={0.9} strokeDasharray="4 2" />
        <text x={405} y={138} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={RED} opacity={0.8}>Error Code</text>
        <text x={405} y={146} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={ORANGE} opacity={0.7}>EC101, EC202</text>

        <path d="M405,154 L405,164" fill="none" stroke={RED} strokeWidth={1} strokeDasharray="4 2" />

        <rect x={380} y={166} width={50} height={18} rx={3} fill={RED} opacity={0.12} />
        <rect x={380} y={166} width={50} height={18} rx={3} fill="none" stroke={RED} strokeWidth={1} strokeDasharray="4 2" />
        <text x={405} y={176} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={RED} opacity={0.8}>Client SFTP</text>
      </g>

      {/* === ALERTS === */}
      <g>
        <path d="M430,141 L442,141" fill="none" stroke={ORANGE} strokeWidth={1} strokeDasharray="4 2" />

        <rect x={444} y={122} width={50} height={48} rx={5} fill={ORANGE} opacity={0.1} />
        <rect x={444} y={122} width={50} height={48} rx={5} fill="none" stroke={ORANGE} strokeWidth={1} />

        <text x={469} y={133} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={ORANGE}>Review Flag</text>
        <text x={469} y={146} textAnchor="middle" fontSize={5.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={RED}>HALT</text>
        <text x={469} y={157} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={ORANGE} opacity={0.8}>Alert Ops</text>
        <text x={469} y={165} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>Team</text>
      </g>

      {/* === Bottom label === */}
      <g opacity={0.6}>
        <text x={113} y={105} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={PYTHON_BLUE}>Python & Jenkins</text>
        <text x={113} y={113} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>Full Automation</text>
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
      {/* Dashboard chrome */}
      <rect x={4} y={4} width={492} height={192} rx={6} fill="white" stroke="#CBD5E1" strokeWidth={1} />

      {/* Title bar */}
      <rect x={4} y={4} width={492} height={20} rx={6} fill="#F1F5F9" />
      <rect x={4} y={18} width={492} height={6} fill="#F1F5F9" />
      <circle cx={18} cy={14} r={3.5} fill="#FCA5A5" />
      <circle cx={29} cy={14} r={3.5} fill="#FDE68A" />
      <circle cx={40} cy={14} r={3.5} fill="#86EFAC" />
      <text x={250} y={17} textAnchor="middle" fontSize={7} fontWeight={700} fontFamily="Inter, sans-serif" fill={DARK}>
        Data Integrity Gateway — Operational Impact
      </text>

      {/* === THREE METRIC CARDS === */}

      {/* Card 1: Reclaimed Bandwidth */}
      <g>
        <rect x={16} y={32} width={150} height={80} rx={5} fill="#F0FDFA" stroke={TEAL} strokeWidth={0.8} />

        {/* Clock icon */}
        <circle cx={40} cy={48} r={8} fill="none" stroke={TEAL} strokeWidth={1.2} />
        <path d="M40,42 L40,48 L44,50" fill="none" stroke={TEAL} strokeWidth={1.5} strokeLinecap="round" />

        <text x={52} y={46} fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL}>
          Reclaimed Bandwidth
        </text>
        <text x={52} y={54} fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          ~50% Daily Capacity
        </text>

        {/* Large metric */}
        <text x={75} y={80} fontSize={22} fontWeight={800} fontFamily="Inter, sans-serif" fill={TEAL}>
          4hrs
        </text>

        {/* Strikethrough */}
        <line x1={62} y1={75} x2={118} y2={75} stroke={RED} strokeWidth={2} opacity={0.6} />
        <text x={135} y={80} textAnchor="middle" fontSize={14} fontWeight={800} fontFamily="Inter, sans-serif" fill={GREEN}>
          0
        </text>

        <text x={91} y={96} textAnchor="middle" fontSize={5.5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          Automated morning grind
        </text>

        {/* Progress bar */}
        <rect x={26} y={102} width={130} height={5} rx={2.5} fill={TEAL} opacity={0.15} />
        <rect x={26} y={102} width={130} height={5} rx={2.5} fill={TEAL} opacity={0.6} />
      </g>

      {/* Card 2: Zero-Latency Reporting */}
      <g>
        <rect x={176} y={32} width={148} height={80} rx={5} fill="#FFFBEB" stroke={ORANGE} strokeWidth={0.8} />

        {/* Lightning icon */}
        <path d="M196,40 L192,48 L197,48 L193,56" fill="none" stroke={ORANGE} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />

        <text x={204} y={46} fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={ORANGE}>
          Zero-Latency Reporting
        </text>
        <text x={204} y={54} fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          Automated Error Manifests
        </text>

        {/* Large metric */}
        <text x={250} y={80} textAnchor="middle" fontSize={18} fontWeight={800} fontFamily="Inter, sans-serif" fill={ORANGE}>
          Minutes
        </text>
        <text x={250} y={90} textAnchor="middle" fontSize={8} fontWeight={600} fontFamily="Inter, sans-serif" fill={MUTED}>
          not Days
        </text>

        <text x={250} y={104} textAnchor="middle" fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          Coded error responses auto-pushed
        </text>
      </g>

      {/* Card 3: Industrial-Grade Scalability */}
      <g>
        <rect x={334} y={32} width={154} height={80} rx={5} fill="#F0FDF4" stroke={GREEN} strokeWidth={0.8} />

        {/* Shield icon */}
        <path d="M354,40 L354,50 C354,54 360,58 360,58 C360,58 366,54 366,50 L366,40 L360,38 Z"
          fill={GREEN} opacity={0.25} stroke={GREEN} strokeWidth={1.2} />
        <path d="M356,48 L359,51 L364,44" fill="none" stroke={GREEN} strokeWidth={1.5} strokeLinecap="round" />

        <text x={372} y={46} fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Industrial-Grade Scale
        </text>
        <text x={372} y={54} fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          Schema Drift Protection
        </text>

        {/* Scaling bars */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={`scale-${i}`}
            x={354 + i * 22} y={92 - i * 6} width={14} height={10 + i * 6} rx={2}
            fill={GREEN} opacity={0.25 + i * 0.12}
          />
        ))}

        <text x={411} y={107} textAnchor="middle" fontSize={5} fontWeight={500} fontFamily="Inter, sans-serif" fill={MUTED}>
          Protected from schema drift
        </text>
      </g>

      {/* === BOTTOM: Pipeline Summary === */}
      <g>
        <rect x={16} y={120} width={472} height={26} rx={4} fill={TEAL} opacity={0.08} />
        <rect x={16} y={120} width={472} height={26} rx={4} fill="none" stroke={TEAL} strokeWidth={0.8} opacity={0.5} />

        {/* Pipeline stages */}
        {[
          { label: '8 Files/Day', x: 66, color: TEAL },
          { label: 'Validated', x: 176, color: PYTHON_BLUE },
          { label: 'Deployed', x: 286, color: GREEN },
          { label: 'Overnight', x: 420, color: TEAL },
        ].map((stage, i) => (
          <g key={`stage-${i}`}>
            <rect x={stage.x - 36} y={124} width={72} height={18} rx={3}
              fill={stage.color} opacity={0.12} />
            <rect x={stage.x - 36} y={124} width={72} height={18} rx={3}
              fill="none" stroke={stage.color} strokeWidth={0.8} opacity={0.7} />
            <text x={stage.x} y={136} textAnchor="middle" fontSize={6.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={stage.color}>
              {stage.label}
            </text>
          </g>
        ))}

        {/* Connecting arrows */}
        {[120, 234, 350].map((ax, i) => (
          <path key={`arr-${i}`} d={`M${ax},133 L${ax + 14},133`} fill="none" stroke={MUTED} strokeWidth={1} />
        ))}
        {[134, 248, 364].map((ax, i) => (
          <polygon key={`arh-${i}`} points={`${ax - 2},130 ${ax + 2},133 ${ax - 2},136`} fill={MUTED} opacity={0.7} />
        ))}
      </g>

      {/* === Bottom row: summary stats === */}
      <g>
        <text x={120} y={162} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
          Every field, every file, every day
        </text>
        <text x={380} y={162} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN}>
          Zero manual intervention required
        </text>
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Component — Auto-swaps between views                        */
/* ------------------------------------------------------------------ */
export default function DataIntegrityVisual({ compact = false }: { compact?: boolean }) {
  const [view, setView] = useState<'gateway' | 'impact'>('gateway')

  useEffect(() => {
    const interval = setInterval(() => {
      setView((v) => (v === 'gateway' ? 'impact' : 'gateway'))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative rounded-xl bg-bg overflow-hidden ${compact ? 'h-52' : 'h-[280px]'}`}>
      <div key={view} className="absolute inset-0 flex items-center justify-center p-2">
        {view === 'gateway' ? <GatewayView /> : <ImpactView />}
      </div>

      {/* View indicator dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        <button
          onClick={(e) => { e.stopPropagation(); setView('gateway') }}
          className={`h-1.5 rounded-full transition-all ${view === 'gateway' ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
        />
        <button
          onClick={(e) => { e.stopPropagation(); setView('impact') }}
          className={`h-1.5 rounded-full transition-all ${view === 'impact' ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
        />
      </div>
    </div>
  )
}
