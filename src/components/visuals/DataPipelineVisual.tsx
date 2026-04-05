import { motion } from 'framer-motion'

const BLUE = '#2563EB'
const TEAL = '#0D9488'
const GREEN = '#22C55E'
const MUTED = '#94A3B8'

const STAGES = [
  { label: 'Ingest', x: 50 },
  { label: 'Validate', x: 145 },
  { label: 'Transform', x: 240 },
  { label: 'Deploy', x: 335 },
] as const

const NODE_W = 70
const NODE_H = 40
const NODE_RX = 8
const NODE_Y = 40

/* --- Small SVG icons (drawn at origin, 16x16 conceptual) --- */

function IngestIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <line x1={0} y1={-6} x2={0} y2={5} stroke="white" strokeWidth={1.8} strokeLinecap="round" />
      <polyline points="-4,1 0,5 4,1" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <line x1={-5} y1={8} x2={5} y2={8} stroke="white" strokeWidth={1.8} strokeLinecap="round" />
    </g>
  )
}

function ValidateIcon({ x, y }: { x: number; y: number }) {
  return (
    <polyline
      points={`${x - 5},${y} ${x - 1},${y + 4} ${x + 5},${y - 4}`}
      fill="none"
      stroke="white"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

function TransformIcon({ x, y }: { x: number; y: number }) {
  // Simple gear: circle with 4 notches
  const r = 5
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx={0} cy={0} r={r - 1.5} fill="none" stroke="white" strokeWidth={1.5} />
      {[0, 45, 90, 135].map((deg) => (
        <line
          key={deg}
          x1={0}
          y1={-r + 0.5}
          x2={0}
          y2={-r - 1.5}
          stroke="white"
          strokeWidth={1.8}
          strokeLinecap="round"
          transform={`rotate(${deg})`}
        />
      ))}
    </g>
  )
}

function DeployIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <line x1={0} y1={6} x2={0} y2={-5} stroke="white" strokeWidth={1.8} strokeLinecap="round" />
      <polyline points="-4,-1 0,-5 4,-1" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  )
}

const ICONS = [IngestIcon, ValidateIcon, TransformIcon, DeployIcon]

/* --- Connection path IDs for offset-distance particle animation --- */
function connectionPathD(fromX: number, toX: number) {
  const y = NODE_Y + NODE_H / 2
  const x1 = fromX + NODE_W / 2
  const x2 = toX - NODE_W / 2
  return `M${x1},${y} L${x2},${y}`
}

export default function DataPipelineVisual() {
  return (
    <div className="mt-6 flex h-40 items-center justify-center rounded-xl bg-bg overflow-hidden">
      <svg viewBox="0 0 400 160" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Define connection paths for particle animation */}
          {[0, 1, 2].map((i) => (
            <path
              key={`path-${i}`}
              id={`conn-${i}`}
              d={connectionPathD(STAGES[i].x, STAGES[i + 1].x)}
              fill="none"
            />
          ))}
        </defs>

        {/* Connection lines */}
        {[0, 1, 2].map((i) => {
          const y = NODE_Y + NODE_H / 2
          const x1 = STAGES[i].x + NODE_W / 2
          const x2 = STAGES[i + 1].x - NODE_W / 2
          return (
            <motion.line
              key={`line-${i}`}
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke={TEAL}
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
            />
          )
        })}

        {/* Arrow heads on connections */}
        {[0, 1, 2].map((i) => {
          const y = NODE_Y + NODE_H / 2
          const x2 = STAGES[i + 1].x - NODE_W / 2
          return (
            <motion.polygon
              key={`arrow-${i}`}
              points={`${x2},${y} ${x2 - 5},${y - 3} ${x2 - 5},${y + 3}`}
              fill={TEAL}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.3 }}
            />
          )
        })}

        {/* Animated data particles */}
        {[0, 1, 2].map((i) => {
          const y = NODE_Y + NODE_H / 2
          const x1 = STAGES[i].x + NODE_W / 2
          const x2 = STAGES[i + 1].x - NODE_W / 2 - 5
          return (
            <motion.circle
              key={`particle-${i}`}
              r={3}
              fill={GREEN}
              initial={{ cx: x1, cy: y, opacity: 0 }}
              animate={{
                cx: [x1, x2, x1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: 1 + i * 0.6,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: 'easeInOut',
              }}
            />
          )
        })}

        {/* Second wave of particles offset in time */}
        {[0, 1, 2].map((i) => {
          const y = NODE_Y + NODE_H / 2
          const x1 = STAGES[i].x + NODE_W / 2
          const x2 = STAGES[i + 1].x - NODE_W / 2 - 5
          return (
            <motion.circle
              key={`particle2-${i}`}
              r={2}
              fill={TEAL}
              opacity={0.7}
              initial={{ cx: x1, cy: y, opacity: 0 }}
              animate={{
                cx: [x1, x2, x1],
                opacity: [0, 0.7, 0.7, 0],
              }}
              transition={{
                duration: 2,
                delay: 2.2 + i * 0.6,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: 'easeInOut',
              }}
            />
          )
        })}

        {/* Stage nodes */}
        {STAGES.map((stage, i) => {
          const Icon = ICONS[i]
          const cx = stage.x + NODE_W / 2
          const cy = NODE_Y + NODE_H / 2
          return (
            <motion.g
              key={stage.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: i * 0.12,
              }}
            >
              {/* Node background */}
              <rect
                x={stage.x}
                y={NODE_Y}
                width={NODE_W}
                height={NODE_H}
                rx={NODE_RX}
                fill={BLUE}
              />

              {/* Icon */}
              <Icon x={cx} y={cy} />

              {/* Label */}
              <text
                x={cx}
                y={NODE_Y + NODE_H + 14}
                textAnchor="middle"
                fontSize={10}
                fontWeight={500}
                fontFamily="Inter, system-ui, sans-serif"
                fill={MUTED}
              >
                {stage.label}
              </text>

              {/* Status bar background */}
              <rect
                x={stage.x + 8}
                y={NODE_Y + NODE_H + 22}
                width={NODE_W - 16}
                height={4}
                rx={2}
                fill="#E2E8F0"
              />

              {/* Status bar fill — sequential green animation */}
              <motion.rect
                x={stage.x + 8}
                y={NODE_Y + NODE_H + 22}
                height={4}
                rx={2}
                fill={GREEN}
                initial={{ width: 0 }}
                animate={{ width: NODE_W - 16 }}
                transition={{
                  delay: 1.2 + i * 0.5,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
              />
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
