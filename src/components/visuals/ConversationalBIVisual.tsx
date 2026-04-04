import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TEAL = '#0F766E'
const TEAL_LIGHT = '#14B8A6'
const GREEN = '#22C55E'
const ORANGE = '#F97316'
const MUTED = '#94A3B8'
const DARK = '#1E293B'
const RED_MUTED = '#DC2626'

/* ------------------------------------------------------------------ */
/*  View 1 — Before / After Transformation Overview                   */
/* ------------------------------------------------------------------ */
function TransformationView() {
  return (
    <svg viewBox="0 0 500 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x={4} y={4} width={492} height={192} rx={6} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

      {/* ============ BEFORE SECTION (left: x 5-135) ============ */}
      <g>
        {/* Header bar */}
        <rect x={5} y={6} width={130} height={16} rx={3} fill={RED_MUTED} opacity={0.12} />
        <text x={70} y={17} textAnchor="middle" fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={RED_MUTED} letterSpacing="0.04em">
          BEFORE: Manual Ad-Hoc
        </text>

        {/* Problem Box 1: Usability Ceiling */}
        <g>
          <rect x={8} y={28} width={124} height={42} rx={4} fill={RED_MUTED} opacity={0.08} stroke={RED_MUTED} strokeWidth={0.7} strokeDasharray="4 2" />
          {/* Small chart icon */}
          <rect x={14} y={34} width={14} height={12} rx={2} fill="none" stroke={RED_MUTED} strokeWidth={0.8} opacity={0.5} />
          <line x1={17} y1={43} x2={17} y2={38} stroke={RED_MUTED} strokeWidth={1.5} opacity={0.4} />
          <line x1={21} y1={43} x2={21} y2={36} stroke={RED_MUTED} strokeWidth={1.5} opacity={0.4} />
          <line x1={25} y1={43} x2={25} y2={40} stroke={RED_MUTED} strokeWidth={1.5} opacity={0.4} />

          <text x={34} y={39} fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Usability Ceiling
          </text>
          <text x={34} y={48} fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            Dashboard Navigation Barrier
          </text>
          {/* X mark */}
          <g opacity={0.6}>
            <line x1={118} y1={34} x2={126} y2={42} stroke={RED_MUTED} strokeWidth={1.2} />
            <line x1={126} y1={34} x2={118} y2={42} stroke={RED_MUTED} strokeWidth={1.2} />
          </g>
        </g>

        {/* Problem Box 2: Manual Exports */}
        <g>
          <rect x={8} y={76} width={124} height={42} rx={4} fill={RED_MUTED} opacity={0.08} stroke={RED_MUTED} strokeWidth={0.7} strokeDasharray="4 2" />
          {/* Document icons */}
          <rect x={14} y={82} width={10} height={12} rx={1} fill="none" stroke={RED_MUTED} strokeWidth={0.8} opacity={0.5} />
          <line x1={17} y1={86} x2={22} y2={86} stroke={RED_MUTED} strokeWidth={0.5} opacity={0.4} />
          <line x1={17} y1={89} x2={21} y2={89} stroke={RED_MUTED} strokeWidth={0.5} opacity={0.4} />
          <rect x={20} y={84} width={10} height={12} rx={1} fill="none" stroke={RED_MUTED} strokeWidth={0.8} opacity={0.35} />

          <text x={36} y={87} fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Manual Exports
          </text>
          <text x={36} y={96} fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            Engineering Bottleneck
          </text>
          {/* X mark */}
          <g opacity={0.6}>
            <line x1={118} y1={82} x2={126} y2={90} stroke={RED_MUTED} strokeWidth={1.2} />
            <line x1={126} y1={82} x2={118} y2={90} stroke={RED_MUTED} strokeWidth={1.2} />
          </g>
        </g>

        {/* Subtitle */}
        <text x={70} y={132} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={RED_MUTED} opacity={0.7} fontStyle="italic">
          50%+ time on ad-hoc requests
        </text>
      </g>

      {/* ============ CENTER ARROW (x 138-185) ============ */}
      <g>
        {/* Arrow body */}
        <path
          d="M140,75 L170,75"
          fill="none" stroke={TEAL} strokeWidth={2.5} strokeLinecap="round"
        />
        {/* Arrow head */}
        <polygon points="168,68 182,75 168,82" fill={TEAL} opacity={0.8} />
        {/* Label */}
        <text x={161} y={63} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL} opacity={0.8}>
          NLP +
        </text>
        <text x={161} y={90} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL} opacity={0.8}>
          AI/BI
        </text>
      </g>

      {/* ============ AFTER SECTION (right: x 190-495) ============ */}
      <g>
        {/* Header bar */}
        <rect x={190} y={6} width={305} height={16} rx={3} fill={TEAL} opacity={0.1} />
        <text x={342} y={17} textAnchor="middle" fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL} letterSpacing="0.04em">
          AFTER: Conversational Intelligence Platform
        </text>
      </g>

      {/* Solution Box 1: Semantic Layer (x 190-260) */}
      <g>
        <rect x={190} y={28} width={70} height={90} rx={5} fill={TEAL} opacity={0.06} />
        <rect x={190} y={28} width={70} height={90} rx={5} fill="none" stroke={TEAL} strokeWidth={1} />
        {/* Icon - layers */}
        <ellipse cx={225} cy={38} rx={10} ry={3.5} fill={TEAL} opacity={0.15} stroke={TEAL} strokeWidth={0.5} />
        <ellipse cx={225} cy={42} rx={10} ry={3.5} fill={TEAL} opacity={0.1} stroke={TEAL} strokeWidth={0.5} />
        <ellipse cx={225} cy={46} rx={10} ry={3.5} fill={TEAL} opacity={0.12} stroke={TEAL} strokeWidth={0.5} />

        <text x={225} y={57} textAnchor="middle" fontSize={6.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL}>
          Semantic
        </text>
        <text x={225} y={65} textAnchor="middle" fontSize={6.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL}>
          Layer
        </text>
        <text x={225} y={74} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={MUTED}>
          Metadata Mapping
        </text>

        {/* Numbered steps */}
        {[
          { n: '1', t: 'SQL Joins' },
          { n: '2', t: 'Biz Terms' },
          { n: '3', t: 'AI Prompts' },
        ].map((step, i) => (
          <g key={`s-${i}`}>
            <circle cx={199} cy={84 + i * 10} r={3.5} fill={TEAL} opacity={0.15} />
            <text x={199} y={86.5 + i * 10} textAnchor="middle" fontSize={5} fontWeight={700} fill={TEAL}>{step.n}</text>
            <text x={207} y={86.5 + i * 10} fontSize={5.5} fontFamily="Inter, sans-serif" fill={DARK}>{step.t}</text>
          </g>
        ))}
      </g>

      {/* Solution Box 2: Genie Chatbot (x 268-338) */}
      <g>
        <rect x={268} y={28} width={70} height={90} rx={5} fill={TEAL} opacity={0.06} />
        <rect x={268} y={28} width={70} height={90} rx={5} fill="none" stroke={TEAL_LIGHT} strokeWidth={1} />
        {/* Robot icon */}
        <rect x={293} y={33} width={18} height={14} rx={4} fill={TEAL_LIGHT} opacity={0.2} stroke={TEAL_LIGHT} strokeWidth={0.7} />
        <circle cx={299} cy={39} r={2} fill={TEAL_LIGHT} opacity={0.6} />
        <circle cx={305} cy={39} r={2} fill={TEAL_LIGHT} opacity={0.6} />
        <line x1={297} y1={44} x2={307} y2={44} stroke={TEAL_LIGHT} strokeWidth={0.8} opacity={0.5} />
        {/* Antenna */}
        <line x1={302} y1={33} x2={302} y2={29} stroke={TEAL_LIGHT} strokeWidth={0.7} opacity={0.5} />
        <circle cx={302} cy={28.5} r={1.5} fill={TEAL_LIGHT} opacity={0.4} />

        <text x={303} y={57} textAnchor="middle" fontSize={7} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL}>
          GENIE
        </text>
        <text x={303} y={65} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL_LIGHT}>
          Chatbot
        </text>
        <text x={303} y={74} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={MUTED}>
          Multi-Turn Context
        </text>

        {/* Features */}
        <g>
          <rect x={274} y={80} width={58} height={10} rx={3} fill={TEAL} opacity={0.12} />
          <text x={303} y={88} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={DARK}>
            Context Drilling
          </text>
        </g>
        <g>
          <rect x={274} y={94} width={58} height={10} rx={3} fill={TEAL} opacity={0.12} />
          <text x={303} y={102} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={MUTED} fontStyle="italic">
            e.g., &quot;by Payer&quot;
          </text>
        </g>
      </g>

      {/* Arrow: Semantic Layer -> Genie */}
      <path d="M260,73 L268,73" fill="none" stroke={TEAL_LIGHT} strokeWidth={0.8} />
      <polygon points="266,70.5 270,73 266,75.5" fill={TEAL_LIGHT} opacity={0.6} />

      {/* Solution Box 3: Real-Time Viz (x 346-416) */}
      <g>
        <rect x={346} y={28} width={70} height={90} rx={5} fill={GREEN} opacity={0.06} />
        <rect x={346} y={28} width={70} height={90} rx={5} fill="none" stroke={GREEN} strokeWidth={1} />

        <text x={381} y={40} textAnchor="middle" fontSize={6.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Real-Time
        </text>
        <text x={381} y={49} textAnchor="middle" fontSize={6.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
          Viz
        </text>
        <text x={381} y={58} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={MUTED}>
          Analyst-First Design
        </text>

        {/* Mini dashboard mockup */}
        <g>
          <rect x={354} y={64} width={54} height={46} rx={3} fill="white" stroke="#E2E8F0" strokeWidth={0.5} />
          {/* Mini bars */}
          {[
            { x: 358, h: 20, c: TEAL },
            { x: 366, h: 30, c: GREEN },
            { x: 374, h: 15, c: ORANGE },
            { x: 382, h: 25, c: TEAL_LIGHT },
            { x: 390, h: 18, c: GREEN },
          ].map((bar, i) => (
            <rect key={`mb-${i}`} x={bar.x} y={104 - bar.h} width={6} height={bar.h} rx={1}
              fill={bar.c} opacity={0.6}
            />
          ))}
          <line x1={356} y1={104} x2={406} y2={104} stroke="#E2E8F0" strokeWidth={0.4} />
          {/* Mini line overlay */}
          <polyline points="358,90 366,82 374,94 382,85 390,88 398,80"
            fill="none" stroke={ORANGE} strokeWidth={0.8} opacity={0.7}
          />
        </g>
      </g>

      {/* Arrow: Genie -> Real-Time Viz */}
      <path d="M338,73 L346,73" fill="none" stroke={GREEN} strokeWidth={0.8} />
      <polygon points="344,70.5 348,73 344,75.5" fill={GREEN} opacity={0.6} />

      {/* ============ IMPACT COLUMN (x 420-495) ============ */}
      <g>
        <text x={457} y={35} textAnchor="middle" fontSize={5.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL} letterSpacing="0.06em">
          IMPACT
        </text>

        {/* Impact item 1: Bandwidth */}
        <g>
          <rect x={422} y={40} width={72} height={24} rx={4} fill={GREEN} opacity={0.12} stroke={GREEN} strokeWidth={0.8} />
          <text x={458} y={50} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN}>
            Bandwidth
          </text>
          <text x={458} y={59} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            Reduced Ad-hoc Load
          </text>
        </g>

        {/* Impact item 2: Discovery */}
        <g>
          <rect x={422} y={70} width={72} height={24} rx={4} fill={TEAL_LIGHT} opacity={0.12} stroke={TEAL_LIGHT} strokeWidth={0.8} />
          <text x={458} y={80} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
            Discovery
          </text>
          <text x={458} y={89} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            Self-Service Analytics
          </text>
        </g>

        {/* Impact item 3: Speed */}
        <g>
          <rect x={422} y={100} width={72} height={24} rx={4} fill={ORANGE} opacity={0.12} stroke={ORANGE} strokeWidth={0.8} />
          <text x={458} y={110} textAnchor="middle" fontSize={5.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={ORANGE}>
            Speed
          </text>
          <text x={458} y={119} textAnchor="middle" fontSize={4.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            Reduced Time-to-Insight
          </text>
        </g>
      </g>

      {/* Arrow: Real-Time Viz -> Impact */}
      <path d="M416,73 L422,73" fill="none" stroke={MUTED} strokeWidth={0.6} />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  View 2 — Solution Architecture Detail                             */
/* ------------------------------------------------------------------ */
function ArchitectureDetail() {
  return (
    <svg viewBox="0 0 500 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background card */}
      <rect x={4} y={4} width={492} height={192} rx={6} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

      {/* Title */}
      <text x={250} y={20} textAnchor="middle" fontSize={8} fontWeight={700} fontFamily="Inter, sans-serif" fill={DARK}>
        Solution Architecture
      </text>
      <text x={250} y={29} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
        NLP Semantic Layer + AI/BI Genie Chatbot
      </text>

      {/* ============ LEFT: Semantic Layer (x 14-168) ============ */}
      <g>
        <rect x={14} y={38} width={154} height={120} rx={6} fill={TEAL} opacity={0.05} />
        <rect x={14} y={38} width={154} height={120} rx={6} fill="none" stroke={TEAL} strokeWidth={1.2} />

        {/* Header */}
        <rect x={14} y={38} width={154} height={18} rx={6} fill={TEAL} opacity={0.1} />
        <rect x={14} y={50} width={154} height={6} fill={TEAL} opacity={0.1} />
        <text x={91} y={51} textAnchor="middle" fontSize={6.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL} letterSpacing="0.04em">
          INTUITIVE SEMANTIC LAYER
        </text>

        {/* Step 1 */}
        <g>
          <circle cx={28} cy={68} r={5} fill={TEAL} opacity={0.15} />
          <text x={28} y={70.5} textAnchor="middle" fontSize={6} fontWeight={700} fill={TEAL}>1</text>
          <text x={38} y={67} fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Map Complex SQL Joins
          </text>
          <rect x={38} y={71} width={50} height={9} rx={2} fill={ORANGE} opacity={0.1} stroke={ORANGE} strokeWidth={0.5} />
          <text x={63} y={78} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={ORANGE} fontWeight={500}>
            Databricks
          </text>
        </g>

        {/* Step 2 */}
        <g>
          <circle cx={28} cy={94} r={5} fill={TEAL} opacity={0.15} />
          <text x={28} y={96.5} textAnchor="middle" fontSize={6} fontWeight={700} fill={TEAL}>2</text>
          <text x={38} y={93} fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Abstract Business Terms
          </text>
          <text x={38} y={102} fontSize={5} fontFamily="monospace" fill={MUTED}>
            rev_adj_amt
          </text>
          <text x={90} y={102} fontSize={5.5} fill={TEAL}>→</text>
          <text x={98} y={102} fontSize={5} fontFamily="Inter, sans-serif" fill={TEAL} fontWeight={500}>
            Revenue Adj.
          </text>
        </g>

        {/* Step 3 */}
        <g>
          <circle cx={28} cy={120} r={5} fill={TEAL} opacity={0.15} />
          <text x={28} y={122.5} textAnchor="middle" fontSize={6} fontWeight={700} fill={TEAL}>3</text>
          <text x={38} y={119} fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            AI-Augmented Prompting
          </text>
          <text x={38} y={128} fontSize={5} fontFamily="Inter, sans-serif" fill={MUTED}>
            LLMs for Intent Resolution
          </text>
        </g>

        {/* Connecting line between steps */}
        <line x1={28} y1={73} x2={28} y2={115} stroke={TEAL} strokeWidth={0.6} opacity={0.3} />
      </g>

      {/* ============ Arrow: Semantic -> Genie ============ */}
      <path d="M168,98 L192,98" fill="none" stroke={TEAL_LIGHT} strokeWidth={1.2} />
      <polygon points="190,95 196,98 190,101" fill={TEAL_LIGHT} opacity={0.7} />

      {/* ============ CENTER: Genie Chatbot (x 194-318) ============ */}
      <g>
        <rect x={194} y={38} width={124} height={120} rx={6} fill={TEAL_LIGHT} opacity={0.08} />
        <rect x={194} y={38} width={124} height={120} rx={6} fill="none" stroke={TEAL_LIGHT} strokeWidth={1.2} />

        {/* Header */}
        <rect x={194} y={38} width={124} height={18} rx={6} fill={TEAL_LIGHT} opacity={0.12} />
        <rect x={194} y={50} width={124} height={6} fill={TEAL_LIGHT} opacity={0.12} />

        {/* Robot icon in header */}
        <rect x={208} y={41} width={12} height={10} rx={3} fill={TEAL_LIGHT} opacity={0.3} stroke={TEAL_LIGHT} strokeWidth={0.5} />
        <circle cx={212} cy={45} r={1.5} fill={TEAL_LIGHT} opacity={0.7} />
        <circle cx={216} cy={45} r={1.5} fill={TEAL_LIGHT} opacity={0.7} />

        <text x={270} y={51} textAnchor="middle" fontSize={7} fontWeight={700} fontFamily="Inter, sans-serif" fill={TEAL} letterSpacing="0.05em">
          GENIE
        </text>

        {/* Feature 1: Multi-Turn Context */}
        <g>
          <rect x={200} y={62} width={112} height={18} rx={4} fill={TEAL} opacity={0.06} />
          <circle cx={212} cy={71} r={4} fill={GREEN} opacity={0.2} />
          <text x={212} y={73.5} textAnchor="middle" fontSize={6} fill={GREEN}>&#10003;</text>
          <text x={220} y={73} fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Multi-Turn Context
          </text>
        </g>

        {/* Feature 2: Automated Context Drilling */}
        <g>
          <rect x={200} y={84} width={112} height={18} rx={4} fill={TEAL} opacity={0.06} />
          <circle cx={212} cy={93} r={4} fill={GREEN} opacity={0.2} />
          <text x={212} y={95.5} textAnchor="middle" fontSize={6} fill={GREEN}>&#10003;</text>
          <text x={220} y={92} fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Context Drilling
          </text>
          <text x={220} y={100} fontSize={5} fontFamily="Inter, sans-serif" fill={MUTED} fontStyle="italic">
            e.g., &quot;by Payer&quot;, &quot;last 90 days&quot;
          </text>
        </g>

        {/* Chat mockup */}
        <g>
          {/* User message */}
          <rect x={240} y={108} width={70} height={11} rx={5} fill={TEAL} opacity={0.1} />
          <text x={275} y={116} textAnchor="middle" fontSize={5} fontFamily="Inter, sans-serif" fill={TEAL}>
            &quot;Denials by Payer?&quot;
          </text>
          {/* Bot response */}
          <rect x={200} y={122} width={86} height={11} rx={5} fill={GREEN} opacity={0.12} />
          <text x={208} y={130} fontSize={5} fontFamily="Inter, sans-serif" fill={GREEN}>
            Aetna: 22.1%, UHC: 18.4%
          </text>
        </g>

        {/* Data source badges */}
        <g opacity={0.7}>
          <rect x={200} y={140} width={26} height={10} rx={3} fill={ORANGE} opacity={0.1} stroke={ORANGE} strokeWidth={0.5} />
          <text x={213} y={148} textAnchor="middle" fontSize={5} fontWeight={600} fill={ORANGE}>S3</text>
          <rect x={230} y={140} width={32} height={10} rx={3} fill={ORANGE} opacity={0.1} stroke={ORANGE} strokeWidth={0.5} />
          <text x={246} y={148} textAnchor="middle" fontSize={5} fontWeight={600} fill={ORANGE}>SFTP</text>
        </g>
      </g>

      {/* ============ Arrow: Genie -> Viz ============ */}
      <path d="M318,98 L340,98" fill="none" stroke={GREEN} strokeWidth={1.2} />
      <polygon points="338,95 344,98 338,101" fill={GREEN} opacity={0.7} />

      {/* ============ RIGHT: Real-Time Visualizations (x 342-490) ============ */}
      <g>
        <rect x={342} y={38} width={148} height={120} rx={6} fill={GREEN} opacity={0.08} />
        <rect x={342} y={38} width={148} height={120} rx={6} fill="none" stroke={GREEN} strokeWidth={1.2} />

        {/* Header */}
        <rect x={342} y={38} width={148} height={18} rx={6} fill={GREEN} opacity={0.1} />
        <rect x={342} y={50} width={148} height={6} fill={GREEN} opacity={0.1} />
        <text x={416} y={51} textAnchor="middle" fontSize={6.5} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN} letterSpacing="0.04em">
          REAL-TIME VISUALIZATIONS
        </text>

        <text x={416} y={66} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
          Analyst-First Dashboard Design
        </text>

        {/* Dashboard mockup area */}
        <rect x={350} y={72} width={132} height={78} rx={4} fill="white" stroke="#E2E8F0" strokeWidth={0.5} />

        {/* Top KPI cards */}
        <g>
          <rect x={354} y={76} width={38} height={16} rx={2} fill={TEAL} opacity={0.06} stroke={TEAL} strokeWidth={0.4} />
          <text x={373} y={83} textAnchor="middle" fontSize={4.5} fontWeight={600} fill={TEAL}>17.0%</text>
          <text x={373} y={89} textAnchor="middle" fontSize={3.5} fill={MUTED}>Denial Rate</text>

          <rect x={396} y={76} width={38} height={16} rx={2} fill={GREEN} opacity={0.06} stroke={GREEN} strokeWidth={0.4} />
          <text x={415} y={83} textAnchor="middle" fontSize={4.5} fontWeight={600} fill={GREEN}>$100K+</text>
          <text x={415} y={89} textAnchor="middle" fontSize={3.5} fill={MUTED}>Savings</text>

          <rect x={438} y={76} width={38} height={16} rx={2} fill={ORANGE} opacity={0.06} stroke={ORANGE} strokeWidth={0.4} />
          <text x={457} y={83} textAnchor="middle" fontSize={4.5} fontWeight={600} fill={ORANGE}>104K</text>
          <text x={457} y={89} textAnchor="middle" fontSize={3.5} fill={MUTED}>Cases</text>
        </g>

        {/* Bar chart */}
        <g>
          {[
            { x: 358, h: 28, c: TEAL },
            { x: 370, h: 38, c: GREEN },
            { x: 382, h: 20, c: TEAL_LIGHT },
            { x: 394, h: 32, c: TEAL },
            { x: 406, h: 24, c: GREEN },
          ].map((bar, i) => (
            <rect key={`db-${i}`} x={bar.x} y={140 - bar.h} width={9} height={bar.h} rx={1.5}
              fill={bar.c} opacity={0.55}
            />
          ))}
          <line x1={356} y1={140} x2={416} y2={140} stroke="#E2E8F0" strokeWidth={0.4} />
        </g>

        {/* Line chart */}
        <g>
          <polyline points="424,135 434,125 444,130 454,118 464,122 474,112"
            fill="none" stroke={ORANGE} strokeWidth={1} opacity={0.7}
          />
          <polyline points="424,138 434,132 444,136 454,128 464,130 474,124"
            fill="none" stroke={TEAL_LIGHT} strokeWidth={0.8} opacity={0.5} strokeDasharray="2 1"
          />
          <line x1={422} y1={140} x2={478} y2={140} stroke="#E2E8F0" strokeWidth={0.4} />
          {/* Y-axis */}
          <line x1={422} y1={108} x2={422} y2={140} stroke="#E2E8F0" strokeWidth={0.3} />
        </g>

        {/* LIVE badge */}
        <g>
          <rect x={454} y={69} width={24} height={9} rx={3} fill={GREEN} opacity={0.15} />
          <circle cx={460} cy={73.5} r={2} fill={GREEN} opacity={0.8} />
          <text x={468} y={76} fontSize={5} fill={GREEN} fontWeight={700}>LIVE</text>
        </g>
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Main — Auto-swaps between Transformation and Architecture views   */
/* ------------------------------------------------------------------ */
export default function ConversationalBIVisual({ compact = false }: { compact?: boolean }) {
  const [view, setView] = useState<'one' | 'two'>('one')

  useEffect(() => {
    const interval = setInterval(() => {
      setView((v) => (v === 'one' ? 'two' : 'one'))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative rounded-xl bg-bg overflow-hidden ${compact ? 'h-52' : 'h-[280px]'}`}>
      <div key={view} className="absolute inset-0 flex items-center justify-center p-2">
        {view === 'one' ? <TransformationView /> : <ArchitectureDetail />}
      </div>

      {/* View indicator dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        <button
          onClick={(e) => { e.stopPropagation(); setView('one') }}
          className={`h-1.5 rounded-full transition-all ${view === 'one' ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
        />
        <button
          onClick={(e) => { e.stopPropagation(); setView('two') }}
          className={`h-1.5 rounded-full transition-all ${view === 'two' ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
        />
      </div>
    </div>
  )
}
