import { motion } from 'framer-motion'

const TEAL = '#0D9488'
const GREEN = '#22C55E'
const AMBER = '#F59E0B'
const GOLD = '#C5A84D'
const MUTED = '#94A3B8'

export default function HealthcareAnalyticsVisual() {
  return (
    <div className="mt-6 flex h-40 items-center justify-center rounded-xl bg-bg overflow-hidden">
      <svg viewBox="0 0 400 160" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">

        {/* === LEFT: Claims Funnel === */}
        <motion.g
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <text x={55} y={18} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={MUTED} letterSpacing="0.08em">
            CLAIMS
          </text>
          {/* Trapezoid funnel — wide left, narrow right */}
          <polygon
            points="10,30 100,30 85,90 25,90"
            fill={TEAL} opacity={0.1}
            stroke={TEAL} strokeWidth={1}
          />
          {/* Horizontal lines inside funnel to suggest rows */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={`fl-${i}`}
              x1={15 + i * 2} y1={42 + i * 14}
              x2={95 - i * 2} y2={42 + i * 14}
              stroke={TEAL} strokeWidth={0.5} opacity={0.3}
            />
          ))}
          <text x={55} y={110} textAnchor="middle" fontSize={7} fontFamily="Inter, sans-serif" fill={MUTED}>
            104K cases
          </text>
        </motion.g>

        {/* === Arrow: Funnel → Shield === */}
        <motion.path
          d="M100,60 L128,60"
          fill="none" stroke={TEAL} strokeWidth={1.2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />
        <motion.polygon
          points="126,56 132,60 126,64"
          fill={TEAL}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8 }}
        />

        {/* === CENTER: Shield with Pulse === */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 300, damping: 20 }}
          style={{ transformOrigin: '170px 60px' }}
        >
          {/* Shield shape */}
          <motion.path
            d="M170,30 L195,38 L195,65 C195,80 170,95 170,95 C170,95 145,80 145,65 L145,38 Z"
            fill={TEAL} opacity={0.15}
            stroke={TEAL} strokeWidth={1.2}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ delay: 1.0, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '170px 62px' }}
          />
          {/* Checkmark inside shield */}
          <motion.path
            d="M158,60 L166,68 L182,50"
            fill="none" stroke={TEAL} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
          />
          <text x={170} y={112} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={TEAL}>
            AI Engine
          </text>
        </motion.g>

        {/* === TOP BRANCH: Cleared === */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.4 }}>
          {/* Line from shield to Cleared box */}
          <motion.path
            d="M195,50 C220,50 230,35 248,35"
            fill="none" stroke={GREEN} strokeWidth={1.2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          />
          <polygon points="246,31 252,35 246,39" fill={GREEN} opacity={0.7} />

          {/* Cleared box */}
          <rect x={254} y={18} width={80} height={34} rx={5} fill={GREEN} opacity={0.08} />
          <rect x={254} y={18} width={80} height={34} rx={5} fill="none" stroke={GREEN} strokeWidth={1} />
          <text x={294} y={32} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN} letterSpacing="0.05em">
            CLEARED
          </text>
          <text x={294} y={44} textAnchor="middle" fontSize={8} fontWeight={700} fontFamily="Inter, sans-serif" fill={GREEN}>
            35K cases
          </text>
        </motion.g>

        {/* === BOTTOM BRANCH: Flagged === */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.4 }}>
          {/* Dashed line from shield to Flagged box */}
          <motion.path
            d="M195,72 C220,72 230,95 248,95"
            fill="none" stroke={AMBER} strokeWidth={1.2} strokeDasharray="4 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
          />
          <polygon points="246,91 252,95 246,99" fill={AMBER} opacity={0.6} />

          {/* Flagged box */}
          <rect x={254} y={78} width={80} height={34} rx={5} fill={AMBER} opacity={0.06} />
          <rect x={254} y={78} width={80} height={34} rx={5} fill="none" stroke={AMBER} strokeWidth={1} strokeDasharray="4 3" />
          <text x={294} y={92} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={AMBER} letterSpacing="0.05em">
            FLAGGED
          </text>
          <text x={294} y={104} textAnchor="middle" fontSize={8} fontWeight={600} fontFamily="Inter, sans-serif" fill={AMBER}>
            Review
          </text>
        </motion.g>

        {/* === FAR RIGHT: Savings Callout === */}
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, type: 'spring', stiffness: 300, damping: 22 }}
          style={{ transformOrigin: '370px 65px' }}
        >
          {/* Converging arrows from Cleared and Flagged → Savings */}
          <motion.path
            d="M334,35 C348,35 350,55 355,55"
            fill="none" stroke={GOLD} strokeWidth={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.8, duration: 0.3 }}
          />
          <motion.path
            d="M334,95 C348,95 350,75 355,75"
            fill="none" stroke={GOLD} strokeWidth={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.8, duration: 0.3 }}
          />

          {/* Savings box */}
          <rect x={355} y={40} width={42} height={50} rx={6} fill={GOLD} opacity={0.08} />
          <rect x={355} y={40} width={42} height={50} rx={6} fill="none" stroke={GOLD} strokeWidth={1.3} />

          <motion.text
            x={376} y={62} textAnchor="middle" fontSize={12} fontWeight={800} fontFamily="Inter, sans-serif" fill={GOLD}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.3 }}
          >
            $100K+
          </motion.text>
          <text x={376} y={76} textAnchor="middle" fontSize={6} fontFamily="Inter, sans-serif" fill={MUTED}>
            quarterly
          </text>
        </motion.g>

      </svg>
    </div>
  )
}
