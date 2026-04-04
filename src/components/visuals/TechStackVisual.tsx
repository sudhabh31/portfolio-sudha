import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TEAL = '#0F766E'
const TEAL_DARK = '#115E59'
const GREEN = '#22C55E'
const ORANGE = '#F97316'
const RED = '#EF4444'
const MUTED = '#94A3B8'
const DARK = '#1E293B'
const JENKINS_RED = '#D33833'
const PYTHON_BLUE = '#306998'

/* ------------------------------------------------------------------ */
/*  View 1 — BI Infrastructure Pipeline Flow                         */
/* ------------------------------------------------------------------ */
function PipelineView() {
  return (
    <svg viewBox="0 0 500 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x={4} y={4} width={492} height={192} rx={6} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

      {/* === STAGE 1: FILE RECEIPT (x: 8-70) === */}
      <g>
        <text x={39} y={14} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL} letterSpacing="0.06em">
          FILE RECEIPT
        </text>

        {/* Stacked SFTP bucket icons */}
        {[0, 1, 2, 3].map((i) => (
          <g
            key={`sftp-${i}`}
            opacity={0.7}
          >
            <rect x={12 + i * 2} y={20 + i * 9} width={30} height={10} rx={2}
              fill={TEAL} opacity={0.12} stroke={TEAL} strokeWidth={0.8} />
            <line x1={16 + i * 2} y1={24 + i * 9} x2={28 + i * 2} y2={24 + i * 9}
              stroke={TEAL} strokeWidth={0.4} opacity={0.4} />
            <line x1={16 + i * 2} y1={27 + i * 9} x2={24 + i * 2} y2={27 + i * 9}
              stroke={TEAL} strokeWidth={0.4} opacity={0.3} />
          </g>
        ))}

        {/* Stacked icons for remaining 4 */}
        {[0, 1, 2, 3].map((i) => (
          <g
            key={`sftp2-${i}`}
            opacity={0.7}
          >
            <rect x={38 + i * 2} y={20 + i * 9} width={30} height={10} rx={2}
              fill={TEAL} opacity={0.12} stroke={TEAL} strokeWidth={0.8} />
            <line x1={42 + i * 2} y1={24 + i * 9} x2={54 + i * 2} y2={24 + i * 9}
              stroke={TEAL} strokeWidth={0.4} opacity={0.4} />
            <line x1={42 + i * 2} y1={27 + i * 9} x2={50 + i * 2} y2={27 + i * 9}
              stroke={TEAL} strokeWidth={0.4} opacity={0.3} />
          </g>
        ))}

        <text x={39} y={68} textAnchor="middle" fontSize={7} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL} opacity={0.8}>
          8 Clients
        </text>
        <text x={39} y={78} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
          SFTP Buckets
        </text>

        {/* SFTP Connection box */}
        <g>
          <rect x={10} y={84} width={58} height={18} rx={3} fill={TEAL_DARK} opacity={0.1} />
          <rect x={10} y={84} width={58} height={18} rx={3} fill="none" stroke={TEAL_DARK} strokeWidth={0.8} />
          <text x={39} y={96} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL_DARK}>
            SFTP Conn.
          </text>
        </g>
      </g>

      {/* Arrow: Stage 1 -> Stage 2 */}
      <path d="M70,93 L82,93" fill="none" stroke={TEAL} strokeWidth={1} />
      <polygon points="80,90 86,93 80,96" fill={TEAL} opacity={0.7} />

      {/* === STAGE 2: PIPELINE ORCHESTRATION (x: 85-160) === */}
      <g>
        <text x={122} y={14} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={PYTHON_BLUE} letterSpacing="0.06em">
          ORCHESTRATION
        </text>

        {/* Cron / Trigger box */}
        <rect x={88} y={24} width={68} height={22} rx={4} fill={JENKINS_RED} opacity={0.07} />
        <rect x={88} y={24} width={68} height={22} rx={4} fill="none" stroke={JENKINS_RED} strokeWidth={0.8} />
        {/* Jenkins-like circle icon */}
        <circle cx={100} cy={35} r={5} fill="none" stroke={JENKINS_RED} strokeWidth={0.8} opacity={0.6} />
        <line x1={100} y1={32} x2={100} y2={35} stroke={JENKINS_RED} strokeWidth={0.6} opacity={0.6} />
        <line x1={100} y1={35} x2={103} y2={33} stroke={JENKINS_RED} strokeWidth={0.6} opacity={0.6} />
        <text x={130} y={38} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={JENKINS_RED}>
          Cron/Trigger
        </text>

        {/* Arrow down */}
        <path d="M122,46 L122,56" fill="none" stroke={PYTHON_BLUE} strokeWidth={0.8} />
        <polygon points="119,54 122,60 125,54" fill={PYTHON_BLUE} opacity={0.5} />

        {/* File Ingestion box */}
        <rect x={88} y={62} width={68} height={22} rx={4} fill={PYTHON_BLUE} opacity={0.12} />
        <rect x={88} y={62} width={68} height={22} rx={4} fill="none" stroke={PYTHON_BLUE} strokeWidth={0.8} />
        <text x={122} y={76} textAnchor="middle" fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={PYTHON_BLUE}>
          File Ingestion
        </text>

        {/* Python label */}
        <text x={122} y={96} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={PYTHON_BLUE} opacity={0.5}>
          Python &amp; Jenkins
        </text>
      </g>

      {/* Arrow: Stage 2 -> Stage 3 */}
      <path d="M158,73 L170,73" fill="none" stroke={TEAL} strokeWidth={1} />
      <polygon points="168,70 174,73 168,76" fill={TEAL} opacity={0.7} />

      {/* === STAGE 3: QC VALIDATION (x: 175-285) — Decision Diamond === */}
      <g>
        <text x={230} y={14} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK} letterSpacing="0.06em">
          QC &amp; VALIDATION
        </text>

        {/* Field-Level Audit box */}
        <rect x={178} y={28} width={60} height={18} rx={3} fill={TEAL} opacity={0.06} />
        <rect x={178} y={28} width={60} height={18} rx={3} fill="none" stroke={TEAL} strokeWidth={0.8} />
        <text x={208} y={40} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={TEAL}>
          Field Audit
        </text>

        {/* Arrow down to Check Restrictions */}
        <path d="M208,46 L208,52" fill="none" stroke={MUTED} strokeWidth={0.6} />

        {/* Check Restrictions box */}
        <rect x={178} y={53} width={60} height={18} rx={3} fill={TEAL} opacity={0.06} />
        <rect x={178} y={53} width={60} height={18} rx={3} fill="none" stroke={TEAL} strokeWidth={0.8} />
        <text x={208} y={65} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={TEAL}>
          Restrictions
        </text>

        {/* Arrow down to decision diamond */}
        <path d="M208,71 L230,80" fill="none" stroke={MUTED} strokeWidth={0.8} />

        {/* Decision Diamond */}
        <g
          style={{ transformOrigin: '248px 98px' }}
        >
          <rect x={232} y={82} width={32} height={32} rx={2}
            fill={ORANGE} opacity={0.1} stroke={ORANGE} strokeWidth={1.2}
            transform="rotate(45 248 98)" />
          <text x={248} y={96} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Field
          </text>
          <text x={248} y={103} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Deviates?
          </text>
        </g>
      </g>

      {/* === NO PATH (top branch) — HAPPY PATH -> Production === */}
      <g>
        {/* NO label */}
        <text x={278} y={72} fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          NO
        </text>

        {/* Arrow from diamond up-right */}
        <path d="M264,86 C275,75 285,68 298,55" fill="none" stroke={GREEN} strokeWidth={1.2} />
        <polygon points="296,51 302,54 296,58" fill={GREEN} opacity={0.7} />

        {/* RESPONSE GENERATION label */}
        <text x={360} y={14} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN} letterSpacing="0.06em">
          RESPONSE GEN
        </text>

        {/* Receipt Acknowledgement */}
        <rect x={300} y={22} width={56} height={16} rx={3} fill={GREEN} opacity={0.12} />
        <rect x={300} y={22} width={56} height={16} rx={3} fill="none" stroke={GREEN} strokeWidth={0.7} />
        <text x={328} y={33} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={GREEN}>
          Receipt Ack.
        </text>

        {/* Arrow down */}
        <path d="M328,38 L328,44" fill="none" stroke={GREEN} strokeWidth={0.6} />

        {/* Error-Free Response */}
        <rect x={300} y={44} width={56} height={16} rx={3} fill={GREEN} opacity={0.12} />
        <rect x={300} y={44} width={56} height={16} rx={3} fill="none" stroke={GREEN} strokeWidth={0.7} />
        <text x={328} y={55} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={GREEN}>
          Clean Response
        </text>

        {/* Arrow down */}
        <path d="M328,60 L328,66" fill="none" stroke={GREEN} strokeWidth={0.6} />

        {/* Deployment box */}
        <rect x={300} y={66} width={56} height={16} rx={3} fill={GREEN} opacity={0.15} />
        <rect x={300} y={66} width={56} height={16} rx={3} fill="none" stroke={GREEN} strokeWidth={0.8} />
        <text x={328} y={77} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN}>
          Deploy
        </text>

        {/* Arrow to Production */}
        <path d="M356,74 L380,74" fill="none" stroke={GREEN} strokeWidth={1.2} />
        <polygon points="378,71 384,74 378,77" fill={GREEN} opacity={0.8} />

        {/* Production badge */}
        <g
          style={{ transformOrigin: '405px 74px' }}
        >
          <rect x={386} y={62} width={50} height={24} rx={5} fill={GREEN} opacity={0.15} />
          <rect x={386} y={62} width={50} height={24} rx={5} fill="none" stroke={GREEN} strokeWidth={1.2} />
          <text x={411} y={77} textAnchor="middle" fontSize={7} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
            PROD
          </text>
        </g>
      </g>

      {/* === YES PATH (bottom branch) — ERROR PATH === */}
      <g>
        {/* YES label */}
        <text x={278} y={126} fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={RED}>
          YES
        </text>

        {/* Arrow from diamond down-right (dashed) */}
        <path d="M264,110 C275,120 285,128 298,132" fill="none" stroke={RED} strokeWidth={1.2}
          strokeDasharray="4 3" />
        <polygon points="296,128 302,132 296,136" fill={RED} opacity={0.6} />

        {/* Error Manifest box */}
        <rect x={300} y={122} width={56} height={18} rx={3} fill={RED} opacity={0.06} />
        <rect x={300} y={122} width={56} height={18} rx={3} fill="none" stroke={RED} strokeWidth={0.8} strokeDasharray="4 3" />
        <text x={328} y={132} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={RED}>
          Error Manifest
        </text>
        <text x={328} y={137} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
          CAV + Error Code
        </text>

        {/* Arrow right (dashed) */}
        <path d="M356,132 L380,132" fill="none" stroke={RED} strokeWidth={0.8} strokeDasharray="4 3" />
        <polygon points="378,129 384,132 378,135" fill={RED} opacity={0.5} />

        {/* Client Feedback Loop box */}
        <rect x={386} y={120} width={56} height={24} rx={4} fill={ORANGE} opacity={0.12} />
        <rect x={386} y={120} width={56} height={24} rx={4} fill="none" stroke={ORANGE} strokeWidth={0.8} strokeDasharray="4 3" />
        <text x={414} y={131} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={ORANGE}>
          Client Loop
        </text>
        <text x={414} y={140} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
          Auto Push
        </text>
      </g>

      {/* === FAILURE BRANCH: Halt & Alert === */}
      <g>
        {/* Arrow down from Error Manifest */}
        <path d="M328,140 L328,158" fill="none" stroke={RED} strokeWidth={0.8} strokeDasharray="3 2" />

        {/* Halt / Alert box */}
        <rect x={298} y={158} width={60} height={20} rx={3} fill={RED} opacity={0.12} />
        <rect x={298} y={158} width={60} height={20} rx={3} fill="none" stroke={RED} strokeWidth={0.8} />
        {/* Alert icon */}
        <g opacity={0.8}>
          <polygon points="308,170 311,164 314,170" fill="none" stroke={RED} strokeWidth={0.8} />
          <line x1={311} y1={166} x2={311} y2={168} stroke={RED} strokeWidth={0.6} />
          <circle cx={311} cy={169} r={0.5} fill={RED} />
        </g>
        <text x={340} y={171} textAnchor="middle" fontSize={5} fontWeight={600} fontFamily="Inter, sans-serif" fill={RED}>
          Halt &amp; Alert
        </text>
      </g>

      {/* === BOTTOM: Pipeline label === */}
      <text x={130} y={190} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={MUTED} opacity={0.5}>
        Programmatic QC &amp; Validation Pipeline
      </text>
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
      <rect x={4} y={4} width={492} height={192} rx={6} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

      {/* Title bar */}
      <rect x={4} y={4} width={492} height={18} rx={6} fill="#F8FAFC" />
      <rect x={4} y={16} width={492} height={6} fill="#F8FAFC" />
      <circle cx={16} cy={13} r={3} fill="#FCA5A5" />
      <circle cx={26} cy={13} r={3} fill="#FDE68A" />
      <circle cx={36} cy={13} r={3} fill="#86EFAC" />
      <text x={250} y={16} textAnchor="middle" fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
        BI Infrastructure Modernization — Impact
      </text>

      {/* === THREE KPI CARDS === */}

      {/* KPI 1: Reclaimed Daily Bandwidth */}
      <g>
        <rect x={14} y={28} width={152} height={68} rx={5} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />
        <text x={90} y={40} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL} opacity={0.8}>
          Reclaimed Daily Bandwidth
        </text>

        {/* Clock/gauge icon */}
        <circle cx={50} cy={65} r={14} fill={TEAL} opacity={0.12} stroke={TEAL} strokeWidth={0.8} />
        <path d="M50,55 A10,10 0 1,1 40,65" fill="none" stroke={TEAL} strokeWidth={1.5} />
        {/* Clock hand */}
        <line x1={50} y1={65} x2={50} y2={57} stroke={TEAL} strokeWidth={1} strokeLinecap="round" opacity={0.8} />
        <line x1={50} y1={65} x2={56} y2={62} stroke={TEAL} strokeWidth={0.8} strokeLinecap="round" opacity={0.6} />

        {/* Big number */}
        <text x={110} y={72} textAnchor="middle" fontSize={20} fontWeight={800} fontFamily="Inter, sans-serif" fill={TEAL}>
          ~30%
        </text>
        <text x={110} y={88} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
          ops time recovered
        </text>
      </g>

      {/* KPI 2: Industrial-Grade Scalability */}
      <g>
        <rect x={174} y={28} width={152} height={68} rx={5} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />
        <text x={250} y={40} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL_DARK} opacity={0.8}>
          Industrial-Grade Scalability
        </text>

        {/* Gear icon */}
        <g
          style={{ transformOrigin: '210px 65px' }}
        >
          <circle cx={210} cy={65} r={10} fill={TEAL_DARK} opacity={0.06} stroke={TEAL_DARK} strokeWidth={0.8} />
          <circle cx={210} cy={65} r={5} fill="none" stroke={TEAL_DARK} strokeWidth={0.8} />
          {/* Gear teeth */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line key={`tooth-${angle}`}
              x1={210 + 9 * Math.cos(angle * Math.PI / 180)}
              y1={65 + 9 * Math.sin(angle * Math.PI / 180)}
              x2={210 + 12 * Math.cos(angle * Math.PI / 180)}
              y2={65 + 12 * Math.sin(angle * Math.PI / 180)}
              stroke={TEAL_DARK} strokeWidth={1.5} strokeLinecap="round" />
          ))}
        </g>

        {/* Text */}
        <text x={270} y={62} textAnchor="middle" fontSize={8} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL_DARK}>
          Consistent
        </text>
        <text x={270} y={74} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
          validation standard
        </text>
        <text x={270} y={86} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
          across all clients
        </text>
      </g>

      {/* KPI 3: Zero-Latency Client Reporting */}
      <g>
        <rect x={334} y={28} width={152} height={68} rx={5} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />
        <text x={410} y={40} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN} opacity={0.8}>
          Zero-Latency Reporting
        </text>

        {/* Speed/bolt icon */}
        <g
          style={{ transformOrigin: '370px 65px' }}
        >
          <circle cx={370} cy={65} r={12} fill={GREEN} opacity={0.12} stroke={GREEN} strokeWidth={0.8} />
          <path d="M368,57 L365,66 L370,66 L367,75" fill="none" stroke={GREEN} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Text */}
        <text x={435} y={60} textAnchor="middle" fontSize={7} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Minutes
        </text>
        <text x={435} y={72} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
          Automated error
        </text>
        <text x={435} y={82} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
          manifests generated
        </text>
      </g>

      {/* === BOTTOM ROW: Before vs After === */}
      <g>
        {/* Before */}
        <rect x={14} y={104} width={234} height={42} rx={4} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />
        <rect x={14} y={104} width={234} height={14} rx={4} fill={RED} opacity={0.06} />
        <rect x={14} y={114} width={234} height={4} fill={RED} opacity={0.06} />
        <text x={24} y={114} fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={RED} opacity={0.7}>
          BEFORE
        </text>

        {/* Before items */}
        {[
          { icon: '4x', label: '4 Dundas Instances', x: 28 },
          { icon: 'M', label: 'Manual RLS', x: 108 },
          { icon: '@', label: 'Excel via Email', x: 175 },
        ].map((item, i) => (
          <g key={`before-${i}`}>
            <circle cx={item.x} cy={134} r={7} fill={RED} opacity={0.12} stroke={RED} strokeWidth={0.5} />
            <text x={item.x} y={137} textAnchor="middle" fontSize={5} fontWeight={700} fill={RED} opacity={0.6}>
              {item.icon}
            </text>
            <text x={item.x + 14} y={136} fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
              {item.label}
            </text>
          </g>
        ))}

        {/* Arrow between */}
        <path d="M252,125 L260,125" fill="none" stroke={MUTED} strokeWidth={1} />
        <polygon points="258,122 264,125 258,128" fill={MUTED} opacity={0.5} />

        {/* After */}
        <rect x={266} y={104} width={220} height={42} rx={4} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />
        <rect x={266} y={104} width={220} height={14} rx={4} fill={GREEN} opacity={0.06} />
        <rect x={266} y={114} width={220} height={4} fill={GREEN} opacity={0.06} />
        <text x={276} y={114} fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          AFTER
        </text>

        {/* After items */}
        {[
          { icon: '1x', label: '1 Unified Tableau', x: 280 },
          { icon: 'A', label: 'Automated RLS', x: 355 },
          { icon: 'S', label: 'Secure SFTP/S3', x: 430 },
        ].map((item, i) => (
          <g key={`after-${i}`}>
            <circle cx={item.x} cy={134} r={7} fill={GREEN} opacity={0.1} stroke={GREEN} strokeWidth={0.5} />
            <text x={item.x} y={137} textAnchor="middle" fontSize={5} fontWeight={700} fill={GREEN} opacity={0.7}>
              {item.icon}
            </text>
            <text x={item.x + 14} y={136} fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
              {item.label}
            </text>
          </g>
        ))}
      </g>

      {/* === BOTTOM: Modernization summary === */}
      <g opacity={0.6}>
        <text x={250} y={165} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={TEAL}>
          Full-stack migration: PostgreSQL → Databricks Lakehouse + Tableau
        </text>
        <text x={250} y={176} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={MUTED}>
          Replaced fragmented Dundas BI with unified, automated BI infrastructure
        </text>

        {/* Check mark */}
        <g
          style={{ transformOrigin: '250px 188px' }}
        >
          <circle cx={250} cy={188} r={5} fill={GREEN} opacity={0.8} />
          <polyline points="247,188 249,190 253,186" fill="none" stroke="white" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Component — Auto-swaps between views                        */
/* ------------------------------------------------------------------ */
export default function TechStackVisual({ compact = false }: { compact?: boolean }) {
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
        {view === 'pipeline' ? <PipelineView /> : <ImpactView />}
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
