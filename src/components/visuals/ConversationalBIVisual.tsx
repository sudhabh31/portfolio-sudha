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
      <svg viewBox="0 0 440 210" className="h-full w-full p-3" xmlns="http://www.w3.org/2000/svg">

        {/* === LEFT: Chat Panel === */}
        <rect x={4} y={4} width={260} height={202} rx={10} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

        {/* Header */}
        <rect x={4} y={4} width={260} height={26} rx={10} fill="#F8FAFC" />
        <rect x={4} y={22} width={260} height={8} fill="#F8FAFC" />
        <circle cx={20} cy={17} r={6} fill={PURPLE} opacity={0.15} />
        <text x={20} y={20} textAnchor="middle" fontSize={7} fill={PURPLE} fontWeight={700}>G</text>
        <text x={32} y={20} fontSize={7.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
          Genie Assistant
        </text>
        <circle cx={246} cy={17} r={3.5} fill={GREEN} />

        {/* Previous hint */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} transition={{ duration: 0.3 }}>
          <rect x={14} y={36} width={130} height={16} rx={8} fill="#F1F5F9" />
          <text x={22} y={47} fontSize={6} fill={MUTED} fontFamily="Inter, sans-serif">
            {step > 0 ? CONVERSATION[step - 1].question.slice(0, 28) + '...' : 'Ask me about your data...'}
          </text>
        </motion.g>

        {/* Question bubble */}
        <AnimatePresence mode="wait">
          <motion.g
            key={`q-${step}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <rect x={60} y={58} width={194} height={24} rx={12} fill={PURPLE} opacity={0.08} />
            <rect x={60} y={58} width={194} height={24} rx={12} fill="none" stroke={PURPLE} strokeWidth={0.6} opacity={0.25} />
            <text x={72} y={74} fontSize={7} fontFamily="Inter, sans-serif" fill={PURPLE} fontWeight={500}>
              {conv.question}
            </text>
          </motion.g>
        </AnimatePresence>

        {/* Thinking dots */}
        <AnimatePresence mode="wait">
          <motion.g
            key={`think-${step}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, delay: 0.4, times: [0, 0.1, 0.8, 1] }}
          >
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={i} cx={24 + i * 8} cy={100} r={2} fill={MUTED}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </motion.g>
        </AnimatePresence>

        {/* Response bubble */}
        <AnimatePresence mode="wait">
          <motion.g
            key={`a-${step}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.3 }}
          >
            <rect x={14} y={90} width={240} height={40} rx={12} fill={GREEN} opacity={0.06} />
            <rect x={14} y={90} width={240} height={40} rx={12} fill="none" stroke={GREEN} strokeWidth={0.5} opacity={0.3} />
            <circle cx={28} cy={104} r={7} fill={PURPLE} opacity={0.12} />
            <text x={28} y={107} textAnchor="middle" fontSize={7} fill={PURPLE} fontWeight={700}>G</text>
            <text x={42} y={106} fontSize={6.5} fontFamily="Inter, sans-serif" fill={DARK}>
              {conv.answer.slice(0, 42)}
            </text>
            {conv.answer.length > 42 && (
              <text x={42} y={118} fontSize={6.5} fontFamily="Inter, sans-serif" fill={DARK}>
                {conv.answer.slice(42, 80)}
              </text>
            )}
          </motion.g>
        </AnimatePresence>

        {/* Input bar */}
        <rect x={14} y={140} width={240} height={18} rx={9} fill="#F8FAFC" stroke="#E2E8F0" strokeWidth={0.5} />
        <text x={24} y={152} fontSize={6.5} fill={MUTED} fontFamily="Inter, sans-serif" fontStyle="italic">
          Ask a follow-up question...
        </text>
        <circle cx={244} cy={149} r={6} fill={PURPLE} opacity={0.8} />
        <polygon points="242,147 247,149 242,151" fill="white" />

        {/* Context badge */}
        <motion.text
          x={132} y={176} textAnchor="middle" fontSize={5.5} fill={PURPLE} opacity={0.4} fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2 }}
        >
          Multi-turn context maintained
        </motion.text>

        {/* NLP → SQL → Viz label */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 2.2 }}>
          <rect x={82} y={184} width={100} height={14} rx={7} fill={PURPLE} opacity={0.06} />
          <text x={132} y={194} textAnchor="middle" fontSize={6} fill={PURPLE} fontFamily="Inter, sans-serif" fontWeight={500}>
            NLP → SQL → Viz
          </text>
        </motion.g>

        {/* === RIGHT: Result Chart === */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, type: 'spring', stiffness: 200, damping: 20 }}
          style={{ transformOrigin: '360px 105px' }}
        >
          <rect x={276} y={4} width={160} height={202} rx={10} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

          {/* Chart header */}
          <text x={292} y={24} fontSize={8} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>Result</text>
          <rect x={332} y={14} width={30} height={12} rx={4} fill={GREEN} opacity={0.15} />
          <text x={338} y={23} fontSize={6.5} fill={GREEN} fontWeight={600}>LIVE</text>

          {/* Bar chart — fits inside box */}
          <AnimatePresence mode="wait">
            <motion.g
              key={`chart-${step}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.3 }}
            >
              {conv.chartBars.map((bar, i) => {
                const maxH = 100
                const barH = (bar.value / 100) * maxH
                const barW = conv.chartBars.length <= 2 ? 40 : 30
                const gap = conv.chartBars.length <= 2 ? 50 : 40
                const totalW = conv.chartBars.length * gap
                const startX = 356 - totalW / 2
                const barX = startX + i * gap
                const baseY = 170
                const barY = baseY - barH
                return (
                  <g key={`bar-${i}`}>
                    <motion.rect
                      x={barX} y={barY} width={barW} height={barH} rx={4}
                      fill={bar.color} opacity={0.75}
                      initial={{ height: 0, y: baseY }}
                      animate={{ height: barH, y: barY }}
                      transition={{ delay: 2.1 + i * 0.12, duration: 0.4, ease: 'easeOut' }}
                    />
                    <motion.text
                      x={barX + barW / 2} y={barY - 5} textAnchor="middle"
                      fontSize={6} fontWeight={600} fill={bar.color} fontFamily="Inter, sans-serif"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ delay: 2.3 + i * 0.12 }}
                    >
                      {bar.value}%
                    </motion.text>
                    <text x={barX + barW / 2} y={182} textAnchor="middle" fontSize={6} fill={MUTED} fontFamily="Inter, sans-serif">
                      {bar.label}
                    </text>
                  </g>
                )
              })}
              <line x1={290} y1={170} x2={424} y2={170} stroke="#E2E8F0" strokeWidth={0.5} />
            </motion.g>
          </AnimatePresence>

          {/* Instant label */}
          <motion.text
            x={356} y={198} textAnchor="middle" fontSize={5.5} fill={MUTED} fontFamily="Inter, sans-serif" fontStyle="italic"
            initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 2.8 }}
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
