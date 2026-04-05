import { motion } from 'framer-motion'

const BRONZE = '#CD7F32'
const SILVER = '#94A3B8'
const GOLD = '#C5A84D'
const GREEN = '#22C55E'
const MUTED = '#94A3B8'

const LAYERS = [
  { label: 'Bronze', desc: 'Raw', color: BRONZE, y: 12 },
  { label: 'Silver', desc: 'Cleaned', color: SILVER, y: 52 },
  { label: 'Gold', desc: 'Curated', color: GOLD, y: 92 },
] as const

const DEPARTMENTS = [
  { label: 'Finance', y: 72 },
  { label: 'Sales', y: 97 },
  { label: 'Marketing', y: 122 },
] as const

const CICD_STAGES = ['Build', 'Test', 'Stage', 'Deploy'] as const

const BAR_W = 200
const BAR_H = 30
const BAR_X = 10
const BAR_RX = 6

/* --- Small cog icon --- */
function CogIcon({ x, y }: { x: number; y: number }) {
  const r = 5
  const darkened = '#1E293B'
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx={0} cy={0} r={r - 1.5} fill="none" stroke={darkened} strokeWidth={1.4} opacity={0.6} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1={0}
          y1={-r + 0.5}
          x2={0}
          y2={-r - 2}
          stroke={darkened}
          strokeWidth={1.4}
          strokeLinecap="round"
          transform={`rotate(${deg})`}
          opacity={0.6}
        />
      ))}
    </g>
  )
}

/* --- Downward arrow between layers --- */
function LayerArrow({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      <motion.line
        x1={x}
        y1={y}
        x2={x}
        y2={y + 10}
        stroke={MUTED}
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      />
      <motion.polygon
        points={`${x},${y + 12} ${x - 3},${y + 8} ${x + 3},${y + 8}`}
        fill={MUTED}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.3, duration: 0.2 }}
      />
    </motion.g>
  )
}

export default function ArchitectureVisual() {
  return (
    <div className="mt-6 flex h-40 items-center justify-center rounded-xl bg-bg overflow-hidden">
      <svg viewBox="0 0 400 160" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {/* Medallion layers */}
        {LAYERS.map((layer, i) => (
          <motion.g
            key={layer.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: i * 0.35,
            }}
          >
            {/* Layer bar */}
            <rect
              x={BAR_X}
              y={layer.y}
              width={BAR_W}
              height={BAR_H}
              rx={BAR_RX}
              fill={layer.color}
              opacity={0.9}
            />

            {/* Cog icon */}
            <CogIcon x={BAR_X + 18} y={layer.y + BAR_H / 2} />

            {/* Layer name */}
            <text
              x={BAR_X + 36}
              y={layer.y + BAR_H / 2 + 1}
              dominantBaseline="middle"
              fontSize={11}
              fontWeight={600}
              fontFamily="Inter, system-ui, sans-serif"
              fill="#1E293B"
            >
              {layer.label}
            </text>

            {/* Description on the right */}
            <text
              x={BAR_X + BAR_W - 10}
              y={layer.y + BAR_H / 2 + 1}
              dominantBaseline="middle"
              textAnchor="end"
              fontSize={9}
              fontWeight={500}
              fontFamily="Inter, system-ui, sans-serif"
              fill="#1E293B"
              opacity={0.6}
            >
              {layer.desc}
            </text>
          </motion.g>
        ))}

        {/* Arrows between layers */}
        <LayerArrow x={BAR_X + BAR_W / 2} y={LAYERS[0].y + BAR_H} delay={0.3} />
        <LayerArrow x={BAR_X + BAR_W / 2} y={LAYERS[1].y + BAR_H} delay={0.65} />

        {/* Horizontal connection lines from Gold to departments */}
        {DEPARTMENTS.map((dept, i) => {
          const goldRight = BAR_X + BAR_W
          const goldCenterY = LAYERS[2].y + BAR_H / 2
          const deptX = 270
          const deptW = 110
          const deptH = 20

          return (
            <motion.g
              key={dept.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 18,
                delay: 1.1 + i * 0.15,
              }}
            >
              {/* Connection line */}
              <motion.line
                x1={goldRight + 4}
                y1={goldCenterY}
                x2={deptX}
                y2={dept.y + deptH / 2}
                stroke={GOLD}
                strokeWidth={1.2}
                strokeDasharray="3 2"
                opacity={0.5}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.0 + i * 0.15, duration: 0.4, ease: 'easeOut' }}
              />

              {/* Department node */}
              <rect
                x={deptX}
                y={dept.y}
                width={deptW}
                height={deptH}
                rx={4}
                fill="#1E293B"
                opacity={0.08}
                stroke={GOLD}
                strokeWidth={1}
                strokeOpacity={0.4}
              />

              <text
                x={deptX + deptW / 2}
                y={dept.y + deptH / 2 + 1}
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize={9}
                fontWeight={500}
                fontFamily="Inter, system-ui, sans-serif"
                fill={MUTED}
              >
                {dept.label}
              </text>
            </motion.g>
          )
        })}

        {/* CI/CD Pipeline strip */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
        >
          {/* Background bar */}
          <rect
            x={10}
            y={135}
            width={380}
            height={20}
            rx={4}
            fill="#1E293B"
            opacity={0.06}
            stroke={MUTED}
            strokeWidth={0.5}
            strokeOpacity={0.3}
          />

          {/* Animated fill bar */}
          <motion.rect
            x={10}
            y={135}
            height={20}
            rx={4}
            fill={GREEN}
            opacity={0.15}
            initial={{ width: 0 }}
            animate={{ width: 380 }}
            transition={{ delay: 1.8, duration: 1.2, ease: 'easeOut' }}
          />

          {/* Stage labels and dots */}
          {CICD_STAGES.map((stage, i) => {
            const stageX = 10 + 47.5 + i * 95
            return (
              <motion.g
                key={stage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 + i * 0.2, duration: 0.3 }}
              >
                <text
                  x={stageX}
                  y={147}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={8}
                  fontWeight={500}
                  fontFamily="Inter, system-ui, sans-serif"
                  fill={MUTED}
                >
                  {stage}
                </text>

                {/* Dot separator (except after last) */}
                {i < CICD_STAGES.length - 1 && (
                  <motion.circle
                    cx={stageX + 47.5}
                    cy={145}
                    r={2}
                    fill={GREEN}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.0 + i * 0.2, duration: 0.2 }}
                  />
                )}
              </motion.g>
            )
          })}
        </motion.g>
      </svg>
    </div>
  )
}
