import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PURPLE = '#6B4C9A'
const BLUE = '#3B82F6'
const GREEN = '#22C55E'
const ORANGE = '#F97316'
const MUTED = '#94A3B8'
const DARK = '#1E293B'

/* ------------------------------------------------------------------ */
/*  Conversation sequence data                                        */
/* ------------------------------------------------------------------ */
const CONVERSATION = [
  {
    question: 'Show me denial rates for last quarter',
    sql: 'SELECT denial_category, COUNT(*) ...',
    answer: 'Q4 denial rate: 17.0% automated vs 18.6% manual',
    chartBars: [
      { label: 'Auto', value: 65, color: GREEN },
      { label: 'Manual', value: 80, color: ORANGE },
    ],
  },
  {
    question: 'Now break it down by Payer',
    sql: 'SELECT payer_name, denial_rate ...',
    answer: 'Top 3 payers: Aetna (22.1%), UHC (18.4%), BCBS (15.2%)',
    chartBars: [
      { label: 'Aetna', value: 85, color: ORANGE },
      { label: 'UHC', value: 70, color: BLUE },
      { label: 'BCBS', value: 55, color: GREEN },
    ],
  },
  {
    question: 'Which denial reasons are trending up?',
    sql: 'SELECT denial_reason, trend_pct ...',
    answer: 'Modifier Mismatch +12%, Bundled Services +8%',
    chartBars: [
      { label: 'Mod Mis.', value: 90, color: ORANGE },
      { label: 'Bundled', value: 72, color: ORANGE },
      { label: 'Dx Mis.', value: 40, color: GREEN },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Main Visual                                                       */
/* ------------------------------------------------------------------ */
export default function ConversationalBIVisual({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % CONVERSATION.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const conv = CONVERSATION[step]

  if (compact) {
    return (
      <div className="relative rounded-xl bg-bg overflow-hidden h-52">
        <svg viewBox="0 0 320 160" className="h-full w-full p-3" xmlns="http://www.w3.org/2000/svg">

          {/* Background card */}
          <rect x={4} y={4} width={312} height={152} rx={10} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

          {/* Header bar */}
          <rect x={4} y={4} width={312} height={24} rx={10} fill="#F8FAFC" />
          <rect x={4} y={20} width={312} height={8} fill="#F8FAFC" />
          <circle cx={20} cy={16} r={6} fill={PURPLE} opacity={0.15} />
          <text x={20} y={18.5} textAnchor="middle" fontSize={8} fill={PURPLE} fontWeight={700}>G</text>
          <text x={34} y={19} fontSize={8.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Genie Assistant
          </text>
          <circle cx={296} cy={16} r={3.5} fill={GREEN} />

          {/* User question bubble */}
          <AnimatePresence mode="wait">
            <motion.g
              key={`cq-${step}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <rect x={80} y={36} width={224} height={26} rx={13} fill={PURPLE} opacity={0.1} />
              <rect x={80} y={36} width={224} height={26} rx={13} fill="none" stroke={PURPLE} strokeWidth={0.6} opacity={0.3} />
              <text x={94} y={53} fontSize={8} fontFamily="Inter, sans-serif" fill={PURPLE} fontWeight={500}>
                {conv.question}
              </text>
            </motion.g>
          </AnimatePresence>

          {/* AI response with mini chart */}
          <AnimatePresence mode="wait">
            <motion.g
              key={`ca-${step}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            >
              {/* Response bubble */}
              <rect x={12} y={70} width={200} height={36} rx={12} fill={GREEN} opacity={0.06} />
              <rect x={12} y={70} width={200} height={36} rx={12} fill="none" stroke={GREEN} strokeWidth={0.5} opacity={0.3} />
              <circle cx={26} cy={84} r={7} fill={PURPLE} opacity={0.12} />
              <text x={26} y={87} textAnchor="middle" fontSize={8} fill={PURPLE} fontWeight={700}>G</text>
              <text x={40} y={86} fontSize={7} fontFamily="Inter, sans-serif" fill={DARK}>
                {conv.answer.slice(0, 38)}
              </text>
              <text x={40} y={98} fontSize={7} fontFamily="Inter, sans-serif" fill={DARK}>
                {conv.answer.slice(38, 70)}
              </text>

              {/* Mini bar chart beside the response */}
              {conv.chartBars.map((bar, i) => {
                const barH = bar.value * 0.32
                const barX = 226 + i * 28
                const barY = 102 - barH
                return (
                  <g key={`cb-${i}`}>
                    <motion.rect
                      x={barX} y={barY} width={18} height={barH} rx={3}
                      fill={bar.color} opacity={0.7}
                      initial={{ height: 0, y: 102 }}
                      animate={{ height: barH, y: barY }}
                      transition={{ delay: 1.6 + i * 0.12, duration: 0.35, ease: 'easeOut' }}
                    />
                    <text x={barX + 9} y={112} textAnchor="middle" fontSize={5.5} fill={MUTED} fontFamily="Inter, sans-serif">
                      {bar.label}
                    </text>
                  </g>
                )
              })}
              <line x1={222} y1={102} x2={312} y2={102} stroke="#E2E8F0" strokeWidth={0.5} />
            </motion.g>
          </AnimatePresence>

          {/* Input bar */}
          <rect x={12} y={118} width={296} height={22} rx={11} fill="#F8FAFC" stroke="#E2E8F0" strokeWidth={0.5} />
          <text x={24} y={132} fontSize={7} fill={MUTED} fontFamily="Inter, sans-serif" fontStyle="italic">
            Ask a follow-up question...
          </text>
          <circle cx={296} cy={129} r={8} fill={PURPLE} opacity={0.8} />
          <polygon points="293,126 300,129 293,132" fill="white" />

          {/* Semantic layer badge */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 2 }}
          >
            <rect x={105} y={145} width={110} height={12} rx={6} fill={PURPLE} opacity={0.08} />
            <text x={160} y={153.5} textAnchor="middle" fontSize={6} fill={PURPLE} fontFamily="Inter, sans-serif" fontWeight={500}>
              NLP → SQL → Visualization
            </text>
          </motion.g>

        </svg>

        {/* Step indicator dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {CONVERSATION.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setStep(i) }}
              className={`h-1.5 rounded-full transition-all ${step === i ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative rounded-xl bg-bg overflow-hidden h-[280px]">
      <svg viewBox="0 0 500 200" className="h-full w-full p-3" xmlns="http://www.w3.org/2000/svg">

        {/* === LEFT: Chat Interface === */}
        <rect x={4} y={4} width={215} height={192} rx={8} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

        {/* Chat header */}
        <rect x={4} y={4} width={215} height={22} rx={8} fill="#F8FAFC" />
        <rect x={4} y={18} width={215} height={8} fill="#F8FAFC" />
        <circle cx={18} cy={15} r={5} fill={PURPLE} opacity={0.15} />
        <text x={18} y={17} textAnchor="middle" fontSize={6} fill={PURPLE} fontWeight={700}>G</text>
        <text x={30} y={18} fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
          Genie Assistant
        </text>
        <circle cx={200} cy={15} r={3} fill={GREEN} />

        {/* Previous context hint */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <rect x={14} y={32} width={120} height={16} rx={8} fill="#F1F5F9" />
          <text x={22} y={42} fontSize={5.5} fill={MUTED} fontFamily="Inter, sans-serif">
            {step > 0 ? CONVERSATION[step - 1].question.slice(0, 28) + '...' : 'Ask me about your data...'}
          </text>
        </motion.g>

        {/* User question bubble */}
        <AnimatePresence mode="wait">
          <motion.g
            key={`q-${step}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <rect x={50} y={54} width={160} height={24} rx={12} fill={PURPLE} opacity={0.1} />
            <rect x={50} y={54} width={160} height={24} rx={12} fill="none" stroke={PURPLE} strokeWidth={0.6} opacity={0.3} />
            <text x={60} y={69} fontSize={6} fontFamily="Inter, sans-serif" fill={PURPLE} fontWeight={500}>
              {conv.question.slice(0, 40)}
            </text>
          </motion.g>
        </AnimatePresence>

        {/* Thinking indicator */}
        <AnimatePresence mode="wait">
          <motion.g
            key={`think-${step}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, delay: 0.5, times: [0, 0.1, 0.8, 1] }}
          >
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={i}
                cx={24 + i * 8}
                cy={95}
                r={2}
                fill={MUTED}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </motion.g>
        </AnimatePresence>

        {/* AI response bubble */}
        <AnimatePresence mode="wait">
          <motion.g
            key={`a-${step}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.3 }}
          >
            <rect x={14} y={106} width={195} height={32} rx={12} fill={GREEN} opacity={0.06} />
            <rect x={14} y={106} width={195} height={32} rx={12} fill="none" stroke={GREEN} strokeWidth={0.5} opacity={0.3} />
            <circle cx={26} cy={118} r={6} fill={PURPLE} opacity={0.12} />
            <text x={26} y={120} textAnchor="middle" fontSize={6} fill={PURPLE} fontWeight={700}>G</text>
            <text x={38} y={120} fontSize={5.5} fontFamily="Inter, sans-serif" fill={DARK}>
              {conv.answer.slice(0, 48)}
            </text>
            {conv.answer.length > 48 && (
              <text x={38} y={130} fontSize={5.5} fontFamily="Inter, sans-serif" fill={DARK}>
                {conv.answer.slice(48, 90)}
              </text>
            )}
          </motion.g>
        </AnimatePresence>

        {/* Input bar */}
        <rect x={14} y={146} width={195} height={18} rx={9} fill="#F8FAFC" stroke="#E2E8F0" strokeWidth={0.5} />
        <text x={24} y={157} fontSize={5.5} fill={MUTED} fontFamily="Inter, sans-serif" fontStyle="italic">
          Ask a follow-up question...
        </text>
        <circle cx={198} cy={155} r={6} fill={PURPLE} opacity={0.8} />
        <polygon points="196,153 201,155 196,157" fill="white" />

        {/* Multi-turn indicator */}
        <motion.text
          x={110} y={178} textAnchor="middle" fontSize={5} fill={PURPLE} opacity={0.5} fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 2.5 }}
        >
          Context maintained across turns
        </motion.text>

        {/* === CENTER: Semantic Translation === */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          {/* Arrow from chat to middle */}
          <motion.path
            d="M219,100 C235,100 235,80 250,80"
            fill="none" stroke={PURPLE} strokeWidth={1} strokeDasharray="3 2" opacity={0.4}
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />

          {/* Semantic layer box */}
          <rect x={240} y={55} width={75} height={52} rx={6} fill={PURPLE} opacity={0.06} />
          <rect x={240} y={55} width={75} height={52} rx={6} fill="none" stroke={PURPLE} strokeWidth={1} />

          <text x={277} y={68} textAnchor="middle" fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={PURPLE} letterSpacing="0.05em">
            SEMANTIC
          </text>
          <text x={277} y={77} textAnchor="middle" fontSize={6} fontWeight={700} fontFamily="Inter, sans-serif" fill={PURPLE} letterSpacing="0.05em">
            LAYER
          </text>

          {/* Translation animation */}
          <AnimatePresence mode="wait">
            <motion.g
              key={`sql-${step}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0.7, 0.7] }}
              transition={{ delay: 1.2, duration: 1.5 }}
            >
              <rect x={248} y={83} width={58} height={16} rx={3} fill="#1E1E2E" />
              <text x={253} y={93} fontSize={4.5} fontFamily="monospace" fill="#A6E3A1">
                {conv.sql.slice(0, 28)}
              </text>
            </motion.g>
          </AnimatePresence>

          {/* Arrow from middle to chart */}
          <motion.path
            d="M315,80 C330,80 330,100 345,100"
            fill="none" stroke={PURPLE} strokeWidth={1} strokeDasharray="3 2" opacity={0.4}
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
          />

          {/* NLP label above */}
          <text x={277} y={48} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={MUTED}>
            NLP → SQL → Viz
          </text>
        </motion.g>

        {/* Data particles along the flow */}
        {[0, 1].map((i) => (
          <motion.circle
            key={`dp-${i}`} r={2} fill={PURPLE} opacity={0.5}
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{ delay: 1.0 + i * 0.6, duration: 0.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }}
            style={{ offsetPath: 'path("M219,100 C235,100 235,80 250,80")' }}
          />
        ))}
        {[0, 1].map((i) => (
          <motion.circle
            key={`dp2-${i}`} r={2} fill={ORANGE} opacity={0.5}
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{ delay: 1.8 + i * 0.6, duration: 0.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }}
            style={{ offsetPath: 'path("M315,80 C330,80 330,100 345,100")' }}
          />
        ))}

        {/* === RIGHT: Visualized Result === */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, type: 'spring', stiffness: 300, damping: 25 }}
          style={{ transformOrigin: '420px 100px' }}
        >
          <rect x={345} y={30} width={150} height={140} rx={8} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

          {/* Chart title */}
          <text x={355} y={48} fontSize={6} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
            Result
          </text>
          <motion.rect
            x={385} y={42} width={28} height={8} rx={2} fill={GREEN} opacity={0.15}
            initial={{ width: 0 }} animate={{ width: 28 }} transition={{ delay: 2.2, duration: 0.3 }}
          />
          <text x={390} y={49} fontSize={5} fill={GREEN} fontWeight={600}>LIVE</text>

          {/* Bar chart */}
          <AnimatePresence mode="wait">
            <motion.g
              key={`chart-${step}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.4 }}
            >
              {conv.chartBars.map((bar, i) => {
                const barX = 365 + i * 38
                const barHeight = bar.value * 0.7
                const barY = 135 - barHeight
                return (
                  <g key={`bar-${i}`}>
                    <motion.rect
                      x={barX} y={barY} width={24} height={barHeight} rx={3}
                      fill={bar.color} opacity={0.7}
                      initial={{ height: 0, y: 135 }}
                      animate={{ height: barHeight, y: barY }}
                      transition={{ delay: 2.4 + i * 0.15, duration: 0.4, ease: 'easeOut' }}
                    />
                    <text
                      x={barX + 12} y={145} textAnchor="middle"
                      fontSize={5} fill={MUTED} fontFamily="Inter, sans-serif"
                    >
                      {bar.label}
                    </text>
                    {/* Value label on bar */}
                    <motion.text
                      x={barX + 12} y={barY - 4} textAnchor="middle"
                      fontSize={5} fontWeight={600} fill={bar.color} fontFamily="Inter, sans-serif"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ delay: 2.6 + i * 0.15 }}
                    >
                      {bar.value}%
                    </motion.text>
                  </g>
                )
              })}

              {/* X-axis line */}
              <line x1={358} y1={135} x2={480} y2={135} stroke="#E2E8F0" strokeWidth={0.5} />
            </motion.g>
          </AnimatePresence>

          {/* Instant delivery label */}
          <motion.text
            x={420} y={162} textAnchor="middle" fontSize={5} fill={MUTED} fontFamily="Inter, sans-serif" fontStyle="italic"
            initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 3.0 }}
          >
            Answer in seconds
          </motion.text>
        </motion.g>

      </svg>

      {/* Step indicator dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {CONVERSATION.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setStep(i) }}
            className={`h-1.5 rounded-full transition-all ${step === i ? 'w-4 bg-accent' : 'w-1.5 bg-text-tertiary/40'}`}
          />
        ))}
      </div>
    </div>
  )
}
