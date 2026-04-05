const BRONZE = '#CD7F32'
const SILVER = '#94A3B8'
const GOLD_COLOR = '#C5A84D'
const GREEN = '#22C55E'
const MUTED = '#94A3B8'

const LAYERS = [
  { label: 'Bronze', desc: 'Raw', color: BRONZE, y: 12 },
  { label: 'Silver', desc: 'Cleaned', color: SILVER, y: 52 },
  { label: 'Gold', desc: 'Curated', color: GOLD_COLOR, y: 92 },
] as const

const DEPARTMENTS = [
  { label: 'Finance', y: 72 },
  { label: 'Sales', y: 97 },
  { label: 'Marketing', y: 122 },
] as const

const BAR_W = 200
const BAR_H = 30
const BAR_X = 10
const BAR_RX = 6

function CogIcon({ x, y }: { x: number; y: number }) {
  const r = 5
  const c = '#1E293B'
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx={0} cy={0} r={r - 1.5} fill="none" stroke={c} strokeWidth={1.4} opacity={0.6} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line key={deg} x1={0} y1={-r + 0.5} x2={0} y2={-r - 2} stroke={c} strokeWidth={1.4} strokeLinecap="round" transform={`rotate(${deg})`} opacity={0.6} />
      ))}
    </g>
  )
}

export default function ArchitectureVisual() {
  const goldCenterY = LAYERS[2].y + BAR_H / 2
  const goldRight = BAR_X + BAR_W

  return (
    <div className="mt-3 flex h-24 lg:mt-4 lg:h-32 items-center justify-center rounded-xl bg-bg overflow-hidden">
      <svg viewBox="0 0 400 160" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {/* Medallion layers */}
        {LAYERS.map((layer) => (
          <g key={layer.label}>
            <rect x={BAR_X} y={layer.y} width={BAR_W} height={BAR_H} rx={BAR_RX} fill={layer.color} opacity={0.9} />
            <CogIcon x={BAR_X + 18} y={layer.y + BAR_H / 2} />
            <text x={BAR_X + 36} y={layer.y + BAR_H / 2 + 1} dominantBaseline="middle" fontSize={11} fontWeight={600} fontFamily="Inter, system-ui, sans-serif" fill="#1E293B">
              {layer.label}
            </text>
            <text x={BAR_X + BAR_W - 10} y={layer.y + BAR_H / 2 + 1} dominantBaseline="middle" textAnchor="end" fontSize={9} fontWeight={500} fontFamily="Inter, system-ui, sans-serif" fill="#1E293B" opacity={0.6}>
              {layer.desc}
            </text>
          </g>
        ))}

        {/* Arrows between layers */}
        {[0, 1].map((i) => {
          const x = BAR_X + BAR_W / 2
          const y = LAYERS[i].y + BAR_H
          return (
            <g key={`arrow-${i}`}>
              <line x1={x} y1={y} x2={x} y2={y + 10} stroke={MUTED} strokeWidth={1.5} strokeLinecap="round" />
              <polygon points={`${x},${y + 12} ${x - 3},${y + 8} ${x + 3},${y + 8}`} fill={MUTED} />
            </g>
          )
        })}

        {/* Department connections */}
        {DEPARTMENTS.map((dept) => {
          const deptX = 270
          const deptW = 110
          const deptH = 20
          return (
            <g key={dept.label}>
              <line x1={goldRight + 4} y1={goldCenterY} x2={deptX} y2={dept.y + deptH / 2} stroke={GOLD_COLOR} strokeWidth={1.2} strokeDasharray="3 2" opacity={0.5} />
              <rect x={deptX} y={dept.y} width={deptW} height={deptH} rx={4} fill="#1E293B" opacity={0.08} stroke={GOLD_COLOR} strokeWidth={1} strokeOpacity={0.4} />
              <text x={deptX + deptW / 2} y={dept.y + deptH / 2 + 1} dominantBaseline="middle" textAnchor="middle" fontSize={9} fontWeight={500} fontFamily="Inter, system-ui, sans-serif" fill={MUTED}>
                {dept.label}
              </text>
            </g>
          )
        })}

        {/* CI/CD Pipeline strip */}
        <rect x={10} y={135} width={380} height={20} rx={4} fill="#1E293B" opacity={0.06} stroke={MUTED} strokeWidth={0.5} strokeOpacity={0.3} />
        <rect x={10} y={135} width={380} height={20} rx={4} fill={GREEN} opacity={0.15} />
        {(['Build', 'Test', 'Stage', 'Deploy'] as const).map((stage, i) => {
          const stageX = 10 + 47.5 + i * 95
          return (
            <g key={stage}>
              <text x={stageX} y={147} textAnchor="middle" dominantBaseline="middle" fontSize={8} fontWeight={500} fontFamily="Inter, system-ui, sans-serif" fill={MUTED}>
                {stage}
              </text>
              {i < 3 && <circle cx={stageX + 47.5} cy={145} r={2} fill={GREEN} />}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
