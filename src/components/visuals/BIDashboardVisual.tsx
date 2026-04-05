import { motion } from 'framer-motion'

const kpis = [
  { label: 'Revenue', value: '$2.4M', x: 45, delay: 0.3 },
  { label: 'Users', value: '12,847', x: 160, delay: 0.45 },
  { label: 'Growth', value: '+18%', x: 275, delay: 0.6 },
]

const barHeights = [28, 42, 35, 50, 38]
const barBaseY = 140
const barStartX = 50
const barWidth = 18
const barGap = 6

const linePoints = '230,135 260,118 290,125 320,105 350,95 375,100'

export default function BIDashboardVisual() {
  return (
    <div className="mt-6 flex h-40 items-center justify-center rounded-xl bg-bg overflow-hidden">
      <svg viewBox="0 0 400 160" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {/* Chrome bar background */}
        <motion.rect
          x="20"
          y="5"
          width="360"
          height="20"
          rx="4"
          fill="#1E293B"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ transformOrigin: '200px 15px' }}
        />

        {/* Traffic light dots */}
        {[
          { cx: 35, fill: '#EF4444' },
          { cx: 47, fill: '#EAB308' },
          { cx: 59, fill: '#22C55E' },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy="15"
            r="3"
            fill={dot.fill}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.05, type: 'spring', stiffness: 400, damping: 15 }}
            style={{ transformOrigin: `${dot.cx}px 15px` }}
          />
        ))}

        {/* KPI cards */}
        {kpis.map((kpi, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: kpi.delay, type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Card background */}
            <rect
              x={kpi.x}
              y="32"
              width="100"
              height="42"
              rx="4"
              fill="#ffffff"
              stroke="#E2E8F0"
              strokeWidth="0.5"
            />
            {/* Label */}
            <text
              x={kpi.x + 50}
              y="48"
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="8"
              fontFamily="system-ui, sans-serif"
            >
              {kpi.label}
            </text>
            {/* Value */}
            <text
              x={kpi.x + 50}
              y="64"
              textAnchor="middle"
              fill="#1E293B"
              fontSize="14"
              fontWeight="bold"
              fontFamily="system-ui, sans-serif"
            >
              {kpi.value}
            </text>
          </motion.g>
        ))}

        {/* Bar chart - axes */}
        <motion.line
          x1="40"
          y1={barBaseY}
          x2="175"
          y2={barBaseY}
          stroke="#94A3B8"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        />

        {/* Bar chart - bars */}
        {barHeights.map((h, i) => {
          const x = barStartX + i * (barWidth + barGap)
          return (
            <motion.rect
              key={`bar-${i}`}
              x={x}
              y={barBaseY - h}
              width={barWidth}
              height={h}
              rx="2"
              fill={i === 3 ? '#F97316' : '#64748B'}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: i === 3 ? 1 : 0.7 }}
              transition={{
                delay: 0.8 + i * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              style={{ transformOrigin: `${x + barWidth / 2}px ${barBaseY}px` }}
            />
          )
        })}

        {/* Line chart - grid lines */}
        {[105, 118, 131].map((y, i) => (
          <motion.line
            key={`grid-${i}`}
            x1="220"
            y1={y}
            x2="385"
            y2={y}
            stroke="#94A3B8"
            strokeWidth="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
        ))}

        {/* Line chart - line */}
        <motion.polyline
          points={linePoints}
          stroke="#F97316"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.3, duration: 1, ease: 'easeInOut' }}
        />

        {/* Line chart - data dots */}
        {[
          [230, 135],
          [260, 118],
          [290, 125],
          [320, 105],
          [350, 95],
          [375, 100],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={cx}
            cy={cy}
            r="3"
            fill="#F97316"
            stroke="#fff"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1.4 + i * 0.1,
              type: 'spring',
              stiffness: 400,
              damping: 15,
            }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
      </svg>
    </div>
  )
}
