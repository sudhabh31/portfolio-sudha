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
      fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    />
  )
}

function TransformIcon({ x, y }: { x: number; y: number }) {
  const r = 5
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx={0} cy={0} r={r - 1.5} fill="none" stroke="white" strokeWidth={1.5} />
      {[0, 45, 90, 135].map((deg) => (
        <line key={deg} x1={0} y1={-r + 0.5} x2={0} y2={-r - 1.5} stroke="white" strokeWidth={1.8} strokeLinecap="round" transform={`rotate(${deg})`} />
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

export default function DataPipelineVisual() {
  const connY = NODE_Y + NODE_H / 2

  return (
    <div className="mt-4 flex h-32 items-center justify-center rounded-xl bg-bg overflow-hidden">
      <svg viewBox="0 0 400 160" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {/* Connection lines + arrows */}
        {[0, 1, 2].map((i) => {
          const x1 = STAGES[i].x + NODE_W / 2
          const x2 = STAGES[i + 1].x - NODE_W / 2
          return (
            <g key={`conn-${i}`}>
              <line x1={x1} y1={connY} x2={x2} y2={connY} stroke={TEAL} strokeWidth={2} strokeLinecap="round" />
              <polygon points={`${x2},${connY} ${x2 - 5},${connY - 3} ${x2 - 5},${connY + 3}`} fill={TEAL} />
            </g>
          )
        })}

        {/* Stage nodes */}
        {STAGES.map((stage, i) => {
          const Icon = ICONS[i]
          const cx = stage.x + NODE_W / 2
          const cy = NODE_Y + NODE_H / 2
          return (
            <g key={stage.label}>
              <rect x={stage.x} y={NODE_Y} width={NODE_W} height={NODE_H} rx={NODE_RX} fill={BLUE} />
              <Icon x={cx} y={cy} />
              <text x={cx} y={NODE_Y + NODE_H + 14} textAnchor="middle" fontSize={10} fontWeight={500} fontFamily="Inter, system-ui, sans-serif" fill={MUTED}>
                {stage.label}
              </text>
              {/* Status bar */}
              <rect x={stage.x + 8} y={NODE_Y + NODE_H + 22} width={NODE_W - 16} height={4} rx={2} fill="#E2E8F0" />
              <rect x={stage.x + 8} y={NODE_Y + NODE_H + 22} width={NODE_W - 16} height={4} rx={2} fill={GREEN} />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
