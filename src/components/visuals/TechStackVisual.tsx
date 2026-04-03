import { motion } from 'framer-motion'

// Brand colors
const POSTGRES = '#336791'
const DUNDAS = '#5B6770'
const TABLEAU = '#E97627'
const DATABRICKS = '#FF3621'

export default function TechStackVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center justify-center rounded-xl bg-bg overflow-hidden ${compact ? 'h-52' : 'h-[280px]'}`}>
      <svg viewBox="0 0 500 200" className="h-full w-full p-4" xmlns="http://www.w3.org/2000/svg">
        {/* === FAR LEFT: PostgreSQL database === */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* DB cylinder */}
          <ellipse cx={30} cy={88} rx={22} ry={8} fill="none" stroke={POSTGRES} strokeWidth={1.2} opacity={0.6} />
          <rect x={8} y={88} width={44} height={24} fill="none" stroke={POSTGRES} strokeWidth={1.2} opacity={0.6} />
          <ellipse cx={30} cy={112} rx={22} ry={8} fill="none" stroke={POSTGRES} strokeWidth={1.2} opacity={0.6} />
          <ellipse cx={30} cy={88} rx={22} ry={8} fill={POSTGRES} opacity={0.08} />
          <text x={30} y={104} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={POSTGRES} opacity={0.7}>
            PostgreSQL
          </text>

          {/* "SOURCE" label */}
          <text x={30} y={75} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={POSTGRES} opacity={0.4} letterSpacing="0.08em">
            SOURCE
          </text>
        </motion.g>

        {/* === Static report docs flowing from PG to Dundas === */}
        {[0, 1, 2, 3].map((i) => (
          <motion.g key={`report-flow-${i}`}>
            {/* Feed line from PG to Dundas instance */}
            <motion.path
              d={`M52,${95 + (i - 1.5) * 5} C70,${95 + (i - 1.5) * 5} 75,${41 + i * 36} 90,${41 + i * 36}`}
              fill="none"
              stroke={DUNDAS}
              strokeWidth={0.8}
              strokeDasharray="3 2"
              opacity={0.3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
            />
            {/* Static report icon (tiny doc) arriving at each instance */}
            <motion.g
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: [0, 0.6, 0.6, 0.4], x: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 1 }}
            >
              <rect x={80} y={34 + i * 36} width={8} height={10} rx={1} fill="none" stroke={DUNDAS} strokeWidth={0.8} opacity={0.5} />
              <line x1={82} y1={37 + i * 36} x2={86} y2={37 + i * 36} stroke={DUNDAS} strokeWidth={0.5} opacity={0.4} />
              <line x1={82} y1={39 + i * 36} x2={86} y2={39 + i * 36} stroke={DUNDAS} strokeWidth={0.5} opacity={0.4} />
              <line x1={82} y1={41 + i * 36} x2={85} y2={41 + i * 36} stroke={DUNDAS} strokeWidth={0.5} opacity={0.4} />
            </motion.g>
          </motion.g>
        ))}

        {/* === LEFT-CENTER: Dundas BI (4 instances) === */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Instance boxes */}
          {[0, 1, 2, 3].map((i) => (
            <motion.g key={`legacy-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0.3] }}
              transition={{ delay: 0.3 + i * 0.12, duration: 1.5 }}
            >
              <rect
                x={92}
                y={27 + i * 36}
                width={80}
                height={28}
                rx={4}
                fill="none"
                stroke={DUNDAS}
                strokeWidth={1.2}
                strokeDasharray="4 2"
                opacity={0.5}
              />
              <text
                x={132}
                y={44 + i * 36}
                textAnchor="middle"
                fontSize={8}
                fontFamily="Inter, sans-serif"
                fill={DUNDAS}
                opacity={0.7}
              >
                {i === 0 ? 'Dundas BI' : `Instance ${i + 1}`}
              </text>
            </motion.g>
          ))}

          {/* "LEGACY" label */}
          <text x={132} y={18} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={DUNDAS} opacity={0.5} letterSpacing="0.1em">
            LEGACY
          </text>

          {/* Strikethrough line */}
          <motion.line
            x1={87} y1={100} x2={177} y2={100}
            stroke={DUNDAS}
            strokeWidth={1.5}
            opacity={0.4}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2, duration: 0.6, ease: 'easeOut' }}
          />
        </motion.g>

        {/* === CENTER: Flow lines === */}
        {[0, 1, 2, 3].map((i) => (
          <motion.path
            key={`flow-${i}`}
            d={`M172,${41 + i * 36} C230,${41 + i * 36} 280,100 320,100`}
            fill="none"
            stroke="#F97316"
            strokeWidth={1.2}
            opacity={0.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.8, ease: 'easeInOut' }}
          />
        ))}

        {/* Animated data particles */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`particle-${i}`}
            r={3}
            fill="#F97316"
            opacity={0.7}
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{
              delay: 1.5 + i * 0.4,
              duration: 1.2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 2,
            }}
            style={{
              offsetPath: `path("M172,${41 + i * 36} C230,${41 + i * 36} 280,100 320,100")`,
            }}
          />
        ))}

        {/* Arrow head */}
        <motion.polygon
          points="315,94 325,100 315,106"
          fill="#F97316"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.6, duration: 0.3 }}
        />

        {/* === RIGHT: Modern Stack === */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, type: 'spring', stiffness: 300, damping: 25 }}
          style={{ transformOrigin: '400px 100px' }}
        >
          {/* "MODERN" label */}
          <text x={400} y={15} textAnchor="middle" fontSize={8} fontWeight={600} fontFamily="Inter, sans-serif" fill="#F97316" letterSpacing="0.1em">
            MODERN
          </text>

          {/* Unified container */}
          <rect
            x={330}
            y={25}
            width={140}
            height={150}
            rx={8}
            fill="none"
            stroke="#F97316"
            strokeWidth={1.5}
          />

          {/* Tableau block */}
          <rect x={345} y={38} width={110} height={38} rx={4} fill={TABLEAU} opacity={0.15} />
          <rect x={345} y={38} width={110} height={38} rx={4} fill="none" stroke={TABLEAU} strokeWidth={1} opacity={0.5} />
          {/* Tableau simplified logo — stacked squares */}
          <rect x={355} y={48} width={8} height={8} fill={TABLEAU} opacity={0.8} />
          <rect x={365} y={48} width={8} height={8} fill={TABLEAU} opacity={0.6} />
          <rect x={355} y={58} width={8} height={8} fill={TABLEAU} opacity={0.6} />
          <rect x={365} y={58} width={8} height={8} fill={TABLEAU} opacity={0.4} />
          <text x={385} y={61} fontSize={11} fontWeight={600} fontFamily="Inter, sans-serif" fill={TABLEAU}>
            Tableau
          </text>

          {/* Databricks block */}
          <rect x={345} y={84} width={110} height={38} rx={4} fill={DATABRICKS} opacity={0.1} />
          <rect x={345} y={84} width={110} height={38} rx={4} fill="none" stroke={DATABRICKS} strokeWidth={1} opacity={0.5} />
          {/* Databricks simplified logo — diamond shape */}
          <polygon points="362,103 370,95 378,103 370,111" fill="none" stroke={DATABRICKS} strokeWidth={1.2} opacity={0.8} />
          <polygon points="362,103 370,99 378,103 370,107" fill={DATABRICKS} opacity={0.4} />
          <text x={385} y={107} fontSize={11} fontWeight={600} fontFamily="Inter, sans-serif" fill={DATABRICKS}>
            Databricks
          </text>

          {/* "Unified" label at bottom */}
          <text x={400} y={155} textAnchor="middle" fontSize={9} fontFamily="Inter, sans-serif" fill="#64748B">
            Unified &amp; Secure
          </text>

          {/* Checkmark pulse */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 1],
              scale: [0, 1.2, 1, 1],
            }}
            transition={{ delay: 2.2, duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: '460px 30px' }}
          >
            <circle cx={460} cy={30} r={10} fill="#22C55E" opacity={0.9} />
            <polyline
              points="455,30 458,33 465,27"
              fill="none"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  )
}
