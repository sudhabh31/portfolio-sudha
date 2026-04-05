import { motion } from 'framer-motion'

const PURPLE = '#6B4C9A'
const ORANGE = '#F97316'
const GREEN = '#22C55E'
const SLATE = '#64748B'
const SLATE_LIGHT = '#94A3B8'
const DARK = '#1E293B'

export default function AIAutomationVisual() {
  return (
    <div className="mt-6 flex h-40 items-center justify-center rounded-xl bg-bg overflow-hidden">
      <svg viewBox="0 0 400 160" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="nlp-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ============ CHAT BUBBLE (left: x 20-130) ============ */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Bubble body */}
          <rect x={20} y={30} width={110} height={40} rx={8} fill="white" stroke={ORANGE} strokeWidth={1.2} />
          {/* Tail triangle */}
          <polygon points="120,55 132,62 120,62" fill="white" stroke={ORANGE} strokeWidth={1.2} />
          <rect x={118} y={54} width={4} height={9} fill="white" />

          {/* Typewriter text */}
          <motion.text
            x={75} y={54}
            textAnchor="middle"
            fontSize={7.5}
            fontFamily="Inter, sans-serif"
            fontWeight={500}
            fill={DARK}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Show revenue by payer
          </motion.text>
        </motion.g>

        {/* ============ DOTTED LINE: Chat → NLP ============ */}
        <motion.line
          x1={132} y1={55}
          x2={168} y2={55}
          stroke={SLATE_LIGHT}
          strokeWidth={1}
          strokeDasharray="3 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        />
        {/* Arrow head */}
        <motion.polygon
          points="165,51 171,55 165,59"
          fill={SLATE_LIGHT}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.4 }}
        />

        {/* ============ NLP NODE (center: x 170-230) ============ */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.3 }}
        >
          {/* Pulsing glow circle */}
          <motion.circle
            cx={200} cy={55} r={28}
            fill={PURPLE}
            opacity={0.08}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
          />
          {/* Main node */}
          <motion.rect
            x={174} y={33}
            width={52} height={44}
            rx={12}
            fill={PURPLE}
            opacity={0.12}
            stroke={PURPLE}
            strokeWidth={1.2}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
            style={{ transformOrigin: '200px 55px' }}
          />
          <text
            x={200} y={52}
            textAnchor="middle"
            fontSize={11}
            fontWeight={700}
            fontFamily="Inter, sans-serif"
            fill={PURPLE}
            letterSpacing="0.05em"
          >
            NLP
          </text>
          <text
            x={200} y={64}
            textAnchor="middle"
            fontSize={5.5}
            fontFamily="Inter, sans-serif"
            fill={SLATE}
          >
            Processing
          </text>
        </motion.g>

        {/* ============ DOTTED LINE: NLP → Chart ============ */}
        <motion.line
          x1={228} y1={55}
          x2={268} y2={55}
          stroke={SLATE_LIGHT}
          strokeWidth={1}
          strokeDasharray="3 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.0 }}
        />
        <motion.polygon
          points="265,51 271,55 265,59"
          fill={SLATE_LIGHT}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 2.4 }}
        />

        {/* ============ BAR CHART (right: x 270-380) ============ */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.3 }}
        >
          {/* Chart background */}
          <rect x={270} y={24} width={110} height={62} rx={6} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />

          {/* Axis line */}
          <line x1={282} y1={76} x2={370} y2={76} stroke="#E2E8F0" strokeWidth={0.6} />

          {/* Bar 1 */}
          <motion.rect
            x={290} y={76} width={14} height={0} rx={2}
            fill={GREEN} opacity={0.75}
            animate={{ y: 46, height: 30 }}
            transition={{ duration: 0.5, delay: 2.5, ease: 'easeOut' }}
          />
          {/* Bar 2 */}
          <motion.rect
            x={310} y={76} width={14} height={0} rx={2}
            fill={GREEN} opacity={0.6}
            animate={{ y: 36, height: 40 }}
            transition={{ duration: 0.5, delay: 2.65, ease: 'easeOut' }}
          />
          {/* Bar 3 */}
          <motion.rect
            x={330} y={76} width={14} height={0} rx={2}
            fill={GREEN} opacity={0.85}
            animate={{ y: 52, height: 24 }}
            transition={{ duration: 0.5, delay: 2.8, ease: 'easeOut' }}
          />
          {/* Bar 4 */}
          <motion.rect
            x={350} y={76} width={14} height={0} rx={2}
            fill={GREEN} opacity={0.7}
            animate={{ y: 42, height: 34 }}
            transition={{ duration: 0.5, delay: 2.95, ease: 'easeOut' }}
          />
        </motion.g>

        {/* ============ LABEL PILLS (bottom row) ============ */}
        <motion.g
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.2 }}
        >
          {/* Intent pill */}
          <rect x={100} y={110} width={50} height={20} rx={10} fill={ORANGE} opacity={0.1} stroke={ORANGE} strokeWidth={0.8} />
          <text x={125} y={123} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={ORANGE}>
            Intent
          </text>

          {/* Arrow 1 */}
          <line x1={154} y1={120} x2={168} y2={120} stroke={SLATE_LIGHT} strokeWidth={0.8} />
          <polygon points="166,117.5 171,120 166,122.5" fill={SLATE_LIGHT} />

          {/* Query pill */}
          <rect x={174} y={110} width={50} height={20} rx={10} fill={PURPLE} opacity={0.1} stroke={PURPLE} strokeWidth={0.8} />
          <text x={199} y={123} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={PURPLE}>
            Query
          </text>

          {/* Arrow 2 */}
          <line x1={228} y1={120} x2={242} y2={120} stroke={SLATE_LIGHT} strokeWidth={0.8} />
          <polygon points="240,117.5 245,120 240,122.5" fill={SLATE_LIGHT} />

          {/* Result pill */}
          <rect x={248} y={110} width={50} height={20} rx={10} fill={GREEN} opacity={0.1} stroke={GREEN} strokeWidth={0.8} />
          <text x={273} y={123} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN}>
            Result
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
