import { motion } from 'framer-motion'

const CENTER = { x: 200, y: 80 }

// Scattered, word-cloud-like placement with varying sizes
const mentees = [
  { x: 45,  y: 55,  r: 16, icon: 'bars',    delay: 0.3 },
  { x: 105, y: 22,  r: 12, icon: 'trend',   delay: 0.9 },
  { x: 310, y: 28,  r: 18, icon: 'pie',     delay: 0.5 },
  { x: 355, y: 85,  r: 11, icon: 'scatter', delay: 1.2 },
  { x: 145, y: 130, r: 14, icon: 'bars',    delay: 0.7 },
  { x: 290, y: 135, r: 17, icon: 'trend',   delay: 0.4 },
  { x: 80,  y: 110, r: 10, icon: 'pie',     delay: 1.0 },
  { x: 355, y: 45,  r: 13, icon: 'scatter', delay: 0.8 },
  { x: 260, y: 18,  r: 15, icon: 'bars',    delay: 0.6 },
  { x: 50,  y: 135, r: 11, icon: 'trend',   delay: 1.1 },
  { x: 175, y: 15,  r: 10, icon: 'scatter', delay: 0.85 },
  { x: 340, y: 130, r: 12, icon: 'pie',     delay: 0.95 },
]

// Generate a squiggly cubic bezier path between two points
function squigglePath(x1: number, y1: number, x2: number, y2: number, seed: number) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const dx = x2 - x1
  const dy = y2 - y1
  // Perpendicular offset, seeded for variety
  const perpX = -dy * 0.3 * Math.sin(seed * 2.7 + 1)
  const perpY = dx * 0.3 * Math.sin(seed * 3.1 + 2)
  const perpX2 = -dy * 0.25 * Math.cos(seed * 1.9 + 3)
  const perpY2 = dx * 0.25 * Math.cos(seed * 2.3 + 1)

  const cp1x = mx - dx * 0.15 + perpX
  const cp1y = my - dy * 0.15 + perpY
  const cp2x = mx + dx * 0.15 + perpX2
  const cp2y = my + dy * 0.15 + perpY2

  return `M${x1},${y1} C${cp1x},${cp1y} ${cp2x},${cp2y} ${x2},${y2}`
}

function AnalyticsIcon({ type, x, y, r }: { type: string; x: number; y: number; r: number }) {
  const s = r / 14 // scale factor relative to base size 14
  const ox = x - 6 * s
  const oy = y - 6 * s

  switch (type) {
    case 'bars':
      return (
        <g>
          <rect x={ox} y={oy + 5 * s} width={3 * s} height={7 * s} rx={0.5} fill="#fff" />
          <rect x={ox + 4.5 * s} y={oy + 2 * s} width={3 * s} height={10 * s} rx={0.5} fill="#fff" />
          <rect x={ox + 9 * s} y={oy + 6 * s} width={3 * s} height={6 * s} rx={0.5} fill="#fff" />
        </g>
      )
    case 'trend':
      return (
        <polyline
          points={`${ox},${oy + 10 * s} ${ox + 4 * s},${oy + 5 * s} ${ox + 8 * s},${oy + 7 * s} ${ox + 12 * s},${oy + 1 * s}`}
          stroke="#fff"
          strokeWidth={1.5 * s}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )
    case 'pie':
      return (
        <g>
          <circle cx={x} cy={y} r={5.5 * s} stroke="#fff" strokeWidth={1.2 * s} fill="none" />
          <path
            d={`M${x},${y} L${x},${y - 5.5 * s} A${5.5 * s},${5.5 * s} 0 0,1 ${x + 4.8 * s},${y + 2.75 * s} Z`}
            fill="#fff"
            opacity="0.8"
          />
        </g>
      )
    case 'scatter':
      return (
        <g>
          <circle cx={ox + 2 * s} cy={oy + 9 * s} r={1.3 * s} fill="#fff" />
          <circle cx={ox + 5 * s} cy={oy + 4 * s} r={1.3 * s} fill="#fff" />
          <circle cx={ox + 9 * s} cy={oy + 7 * s} r={1.3 * s} fill="#fff" />
          <circle cx={ox + 11 * s} cy={oy + 2 * s} r={1.3 * s} fill="#fff" />
        </g>
      )
    default:
      return null
  }
}

export default function LeadershipVisual() {
  return (
    <div className="mt-4 flex h-32 items-center justify-center rounded-xl bg-bg overflow-hidden">
      <svg viewBox="0 0 400 160" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {/* Squiggly connection lines */}
        {mentees.map((m, i) => (
          <motion.path
            key={`line-${i}`}
            d={squigglePath(CENTER.x, CENTER.y, m.x, m.y, i)}
            stroke="#94A3B8"
            strokeWidth="1"
            fill="none"
            opacity="0.35"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: m.delay, duration: 0.6, ease: 'easeOut' }}
          />
        ))}

        {/* Mentee nodes — random sizes and timing */}
        {mentees.map((m, i) => (
          <g key={`node-${i}`}>
            <motion.circle
              cx={m.x}
              cy={m.y}
              r={m.r}
              fill="#64748B"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: m.delay + 0.3,
                type: 'spring',
                stiffness: 300 + i * 30,
                damping: 15 + i * 2,
              }}
              style={{ transformOrigin: `${m.x}px ${m.y}px` }}
            />
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: m.delay + 0.6, duration: 0.3 }}
            >
              <AnalyticsIcon type={m.icon} x={m.x} y={m.y} r={m.r} />
            </motion.g>
          </g>
        ))}

        {/* Central node — Sudha */}
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="22"
          fill="#F97316"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1, 1.06, 1, 1.06, 1],
            opacity: 1,
          }}
          transition={{
            scale: {
              times: [0, 0.12, 0.5, 0.65, 0.8, 0.95, 1],
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1,
            },
            opacity: { duration: 0.3 },
          }}
          style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
        />

        {/* Dashboard grid icon inside central node */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <rect x={CENTER.x - 9} y={CENTER.y - 9} width="8" height="8" rx="1" fill="#fff" opacity="0.9" />
          <rect x={CENTER.x + 1} y={CENTER.y - 9} width="8" height="8" rx="1" fill="#fff" opacity="0.7" />
          <rect x={CENTER.x - 9} y={CENTER.y + 1} width="8" height="8" rx="1" fill="#fff" opacity="0.7" />
          <rect x={CENTER.x + 1} y={CENTER.y + 1} width="8" height="8" rx="1" fill="#fff" opacity="0.5" />
        </motion.g>
      </svg>
    </div>
  )
}
