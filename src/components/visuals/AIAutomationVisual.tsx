const PURPLE = '#6B4C9A'
const ORANGE = '#F97316'
const GREEN = '#22C55E'
const SLATE = '#64748B'
const SLATE_LIGHT = '#94A3B8'
const DARK = '#1E293B'

export default function AIAutomationVisual() {
  return (
    <div className="mt-4 flex h-32 items-center justify-center rounded-xl bg-bg overflow-hidden">
      <svg viewBox="0 0 400 160" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {/* ============ CHAT BUBBLE (left) ============ */}
        <rect x={20} y={30} width={110} height={40} rx={8} fill="white" stroke={ORANGE} strokeWidth={1.2} />
        <polygon points="120,55 132,62 120,62" fill="white" stroke={ORANGE} strokeWidth={1.2} />
        <rect x={118} y={54} width={4} height={9} fill="white" />
        <text x={75} y={54} textAnchor="middle" fontSize={7.5} fontFamily="Inter, sans-serif" fontWeight={500} fill={DARK}>
          Show revenue by payer
        </text>

        {/* ============ DOTTED LINE: Chat → NLP ============ */}
        <line x1={132} y1={55} x2={168} y2={55} stroke={SLATE_LIGHT} strokeWidth={1} strokeDasharray="3 3" />
        <polygon points="165,51 171,55 165,59" fill={SLATE_LIGHT} />

        {/* ============ NLP NODE (center) ============ */}
        <circle cx={200} cy={55} r={28} fill={PURPLE} opacity={0.08} />
        <rect x={174} y={33} width={52} height={44} rx={12} fill={PURPLE} opacity={0.12} stroke={PURPLE} strokeWidth={1.2} />
        <text x={200} y={52} textAnchor="middle" fontSize={11} fontWeight={700} fontFamily="Inter, sans-serif" fill={PURPLE} letterSpacing="0.05em">
          NLP
        </text>
        <text x={200} y={64} textAnchor="middle" fontSize={5.5} fontFamily="Inter, sans-serif" fill={SLATE}>
          Processing
        </text>

        {/* ============ DOTTED LINE: NLP → Chart ============ */}
        <line x1={228} y1={55} x2={268} y2={55} stroke={SLATE_LIGHT} strokeWidth={1} strokeDasharray="3 3" />
        <polygon points="265,51 271,55 265,59" fill={SLATE_LIGHT} />

        {/* ============ BAR CHART (right) ============ */}
        <rect x={270} y={24} width={110} height={62} rx={6} fill="white" stroke="#E2E8F0" strokeWidth={0.8} />
        <line x1={282} y1={76} x2={370} y2={76} stroke="#E2E8F0" strokeWidth={0.6} />
        <rect x={290} y={46} width={14} height={30} rx={2} fill={GREEN} opacity={0.75} />
        <rect x={310} y={36} width={14} height={40} rx={2} fill={GREEN} opacity={0.6} />
        <rect x={330} y={52} width={14} height={24} rx={2} fill={GREEN} opacity={0.85} />
        <rect x={350} y={42} width={14} height={34} rx={2} fill={GREEN} opacity={0.7} />

        {/* ============ LABEL PILLS (bottom row) ============ */}
        <rect x={100} y={110} width={50} height={20} rx={10} fill={ORANGE} opacity={0.1} stroke={ORANGE} strokeWidth={0.8} />
        <text x={125} y={123} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={ORANGE}>
          Intent
        </text>
        <line x1={154} y1={120} x2={168} y2={120} stroke={SLATE_LIGHT} strokeWidth={0.8} />
        <polygon points="166,117.5 171,120 166,122.5" fill={SLATE_LIGHT} />
        <rect x={174} y={110} width={50} height={20} rx={10} fill={PURPLE} opacity={0.1} stroke={PURPLE} strokeWidth={0.8} />
        <text x={199} y={123} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={PURPLE}>
          Query
        </text>
        <line x1={228} y1={120} x2={242} y2={120} stroke={SLATE_LIGHT} strokeWidth={0.8} />
        <polygon points="240,117.5 245,120 240,122.5" fill={SLATE_LIGHT} />
        <rect x={248} y={110} width={50} height={20} rx={10} fill={GREEN} opacity={0.1} stroke={GREEN} strokeWidth={0.8} />
        <text x={273} y={123} textAnchor="middle" fontSize={7} fontWeight={600} fontFamily="Inter, sans-serif" fill={GREEN}>
          Result
        </text>
      </svg>
    </div>
  )
}
