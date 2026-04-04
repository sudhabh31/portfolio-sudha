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
      <svg viewBox="0 0 500 260" className="h-full w-full p-3" xmlns="http://www.w3.org/2000/svg">

        {/* === TOP ROW: Chat Conversation === */}
        <rect x={8} y={8} width={484} height={130} rx={10} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

        {/* Chat header */}
        <rect x={8} y={8} width={484} height={26} rx={10} fill="#F8FAFC" />
        <rect x={8} y={26} width={484} height={8} fill="#F8FAFC" />
        <circle cx={24} cy={21} r={7} fill={PURPLE} opacity={0.15} />
        <text x={24} y={24} textAnchor="middle" fontSize={8} fill={PURPLE} fontWeight={700}>G</text>
        <text x={38} y={24} fontSize={8} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
          Genie Assistant
        </text>
        <circle cx={472} cy={21} r={4} fill={GREEN} />
        <text x={410} y={24} fontSize={6.5} fill={MUTED} fontFamily="Inter, sans-serif">
          Multi-turn context
        </text>

        {/* User question bubble */}
        <AnimatePresence mode="wait">
          <motion.g
            key={`q-${step}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <rect x={180} y={44} width={300} height={28} rx={14} fill={PURPLE} opacity={0.08} />
            <rect x={180} y={44} width={300} height={28} rx={14} fill="none" stroke={PURPLE} strokeWidth={0.6} opacity={0.25} />
            <text x={196} y={62} fontSize={7.5} fontFamily="Inter, sans-serif" fill={PURPLE} fontWeight={500}>
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
            transition={{ duration: 1.5, delay: 0.5, times: [0, 0.1, 0.8, 1] }}
          >
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={i} cx={32 + i * 10} cy={88} r={2.5} fill={MUTED}
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.3 }}
          >
            <rect x={20} y={80} width={380} height={28} rx={14} fill={GREEN} opacity={0.06} />
            <rect x={20} y={80} width={380} height={28} rx={14} fill="none" stroke={GREEN} strokeWidth={0.5} opacity={0.3} />
            <circle cx={36} cy={94} r={8} fill={PURPLE} opacity={0.12} />
            <text x={36} y={97} textAnchor="middle" fontSize={8} fill={PURPLE} fontWeight={700}>G</text>
            <text x={52} y={97} fontSize={7} fontFamily="Inter, sans-serif" fill={DARK}>
              {conv.answer}
            </text>
          </motion.g>
        </AnimatePresence>

        {/* Input bar */}
        <rect x={20} y={116} width={460} height={16} rx={8} fill="#F8FAFC" stroke="#E2E8F0" strokeWidth={0.5} />
        <text x={34} y={127} fontSize={6.5} fill={MUTED} fontFamily="Inter, sans-serif" fontStyle="italic">
          Ask a follow-up question...
        </text>
        <circle cx={468} cy={124} r={6} fill={PURPLE} opacity={0.8} />
        <polygon points="466,122 471,124 466,126" fill="white" />

        {/* === BOTTOM ROW: Pipeline Flow === */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          {/* NLP Input label */}
          <rect x={8} y={152} width={100} height={44} rx={8} fill={PURPLE} opacity={0.06} />
          <rect x={8} y={152} width={100} height={44} rx={8} fill="none" stroke={PURPLE} strokeWidth={0.8} strokeDasharray="3 2" />
          <text x={58} y={170} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={PURPLE}>
            NLP Input
          </text>
          <text x={58} y={184} textAnchor="middle" fontSize={6} fill={MUTED} fontFamily="Inter, sans-serif">
            Natural Language
          </text>

          {/* Arrow 1 */}
          <motion.path
            d="M108,174 L138,174"
            fill="none" stroke={PURPLE} strokeWidth={1.2} strokeDasharray="4 3" opacity={0.4}
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
          <polygon points="136,171 142,174 136,177" fill={PURPLE} opacity={0.4} />

          {/* Semantic Layer box */}
          <rect x={142} y={148} width={120} height={52} rx={8} fill={PURPLE} opacity={0.06} />
          <rect x={142} y={148} width={120} height={52} rx={8} fill="none" stroke={PURPLE} strokeWidth={1} />
          <text x={202} y={166} textAnchor="middle" fontSize={7} fontWeight={700} fontFamily="Inter, sans-serif" fill={PURPLE} letterSpacing="0.05em">
            SEMANTIC LAYER
          </text>

          {/* SQL snippet */}
          <AnimatePresence mode="wait">
            <motion.g
              key={`sql-${step}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.4 }}
            >
              <rect x={152} y={174} width={100} height={18} rx={4} fill="#1E1E2E" />
              <text x={158} y={186} fontSize={5.5} fontFamily="monospace" fill="#A6E3A1">
                {conv.sql.slice(0, 30)}
              </text>
            </motion.g>
          </AnimatePresence>

          {/* Arrow 2 */}
          <motion.path
            d="M262,174 L292,174"
            fill="none" stroke={PURPLE} strokeWidth={1.2} strokeDasharray="4 3" opacity={0.4}
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 1.8, duration: 0.3 }}
          />
          <polygon points="290,171 296,174 290,177" fill={PURPLE} opacity={0.4} />

          {/* Result chart panel */}
          <motion.g
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.0, type: 'spring', stiffness: 300, damping: 25 }}
            style={{ transformOrigin: '395px 174px' }}
          >
            <rect x={296} y={148} width={196} height={52} rx={8} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

            {/* Chart title + LIVE badge */}
            <text x={308} y={164} fontSize={6.5} fontWeight={600} fontFamily="Inter, sans-serif" fill={DARK}>
              Result
            </text>
            <rect x={338} y={157} width={26} height={10} rx={3} fill={GREEN} opacity={0.15} />
            <text x={342} y={165} fontSize={5.5} fill={GREEN} fontWeight={600}>LIVE</text>

            {/* Bar chart */}
            <AnimatePresence mode="wait">
              <motion.g
                key={`chart-${step}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.3 }}
              >
                {conv.chartBars.map((bar, i) => {
                  const barX = 380 + i * 34
                  const maxH = 28
                  const barH = (bar.value / 100) * maxH
                  const barY = 192 - barH
                  return (
                    <g key={`bar-${i}`}>
                      <motion.rect
                        x={barX} y={barY} width={22} height={barH} rx={3}
                        fill={bar.color} opacity={0.75}
                        initial={{ height: 0, y: 192 }}
                        animate={{ height: barH, y: barY }}
                        transition={{ delay: 2.3 + i * 0.12, duration: 0.35, ease: 'easeOut' }}
                      />
                      <text x={barX + 11} y={198} textAnchor="middle" fontSize={5} fill={MUTED} fontFamily="Inter, sans-serif">
                        {bar.label}
                      </text>
                    </g>
                  )
                })}
                <line x1={376} y1={192} x2={484} y2={192} stroke="#E2E8F0" strokeWidth={0.5} />
              </motion.g>
            </AnimatePresence>
          </motion.g>

          {/* Data particles */}
          {[0, 1].map((i) => (
            <motion.circle
              key={`dp-${i}`} r={2.5} fill={PURPLE} opacity={0.5}
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '100%' }}
              transition={{ delay: 1.2 + i * 0.5, duration: 0.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4 }}
              style={{ offsetPath: 'path("M108,174 L142,174")' }}
            />
          ))}
          {[0, 1].map((i) => (
            <motion.circle
              key={`dp2-${i}`} r={2.5} fill={ORANGE} opacity={0.5}
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '100%' }}
              transition={{ delay: 2.0 + i * 0.5, duration: 0.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4 }}
              style={{ offsetPath: 'path("M262,174 L296,174")' }}
            />
          ))}
        </motion.g>

        {/* Pipeline label */}
        <motion.text
          x={250} y={218} textAnchor="middle" fontSize={6} fill={PURPLE} opacity={0.4} fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2.5 }}
        >
          Natural Language → SQL Translation → Instant Visualization
        </motion.text>

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
