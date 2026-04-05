const ORANGE = '#F97316'
const SLATE = '#64748B'
const SLATE_LIGHT = '#94A3B8'
const DARK = '#1E293B'

const kpis = [
  { label: 'Revenue', value: '$2.4M', x: 45 },
  { label: 'Users', value: '12,847', x: 160 },
  { label: 'Growth', value: '+18%', x: 275 },
]

const barHeights = [28, 42, 35, 50, 38]
const barBaseY = 140
const barStartX = 50
const barWidth = 18
const barGap = 6

export default function BIDashboardVisual() {
  return (
    <div className="mt-3 flex h-24 lg:mt-4 lg:h-32 items-center justify-center rounded-xl bg-bg overflow-hidden">
      <svg viewBox="0 0 400 160" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {/* Chrome bar */}
        <rect x={20} y={5} width={360} height={20} rx={4} fill={DARK} />
        <circle cx={35} cy={15} r={3} fill="#EF4444" />
        <circle cx={47} cy={15} r={3} fill="#EAB308" />
        <circle cx={59} cy={15} r={3} fill="#22C55E" />

        {/* KPI cards */}
        {kpis.map((kpi, i) => (
          <g key={i}>
            <rect x={kpi.x} y={32} width={100} height={42} rx={4} fill="#ffffff" stroke="#E2E8F0" strokeWidth={0.5} />
            <text x={kpi.x + 50} y={48} textAnchor="middle" fill={SLATE_LIGHT} fontSize={8} fontFamily="system-ui, sans-serif">
              {kpi.label}
            </text>
            <text x={kpi.x + 50} y={64} textAnchor="middle" fill={DARK} fontSize={14} fontWeight="bold" fontFamily="system-ui, sans-serif">
              {kpi.value}
            </text>
          </g>
        ))}

        {/* Bar chart axis */}
        <line x1={40} y1={barBaseY} x2={175} y2={barBaseY} stroke={SLATE_LIGHT} strokeWidth={0.5} opacity={0.5} />

        {/* Bar chart bars */}
        {barHeights.map((h, i) => {
          const x = barStartX + i * (barWidth + barGap)
          return (
            <rect
              key={`bar-${i}`}
              x={x}
              y={barBaseY - h}
              width={barWidth}
              height={h}
              rx={2}
              fill={i === 3 ? ORANGE : SLATE}
              opacity={i === 3 ? 1 : 0.7}
            />
          )
        })}

        {/* Line chart grid */}
        {[105, 118, 131].map((y, i) => (
          <line key={`grid-${i}`} x1={220} y1={y} x2={385} y2={y} stroke={SLATE_LIGHT} strokeWidth={0.3} opacity={0.3} />
        ))}

        {/* Line chart */}
        <polyline
          points="230,135 260,118 290,125 320,105 350,95 375,100"
          stroke={ORANGE}
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Line chart dots */}
        {[[230, 135], [260, 118], [290, 125], [320, 105], [350, 95], [375, 100]].map(([cx, cy], i) => (
          <circle key={`dot-${i}`} cx={cx} cy={cy} r={3} fill={ORANGE} stroke="#fff" strokeWidth={1} />
        ))}
      </svg>
    </div>
  )
}
