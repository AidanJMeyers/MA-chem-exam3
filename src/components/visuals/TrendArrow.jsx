import React from 'react'

/**
 * A mini periodic table grid (7×18) with arrows showing a periodic trend.
 */
export function PeriodicTrendMini({ direction = 'increase-right-up', label = 'Trend', color = '#3366ff', caption }) {
  const w = 360
  const h = 180
  const cols = 18
  const rows = 7
  const cellW = (w - 20) / cols
  const cellH = (h - 20) / rows
  return (
    <figure className="flex flex-col items-center">
      <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
        <rect x={0} y={0} width={w} height={h} fill="#f8fafc" rx={8} />
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((__, c) => (
            <rect
              key={`${r}-${c}`}
              x={10 + c * cellW}
              y={10 + r * cellH}
              width={cellW - 1}
              height={cellH - 1}
              fill="#e2e8f0"
              stroke="#cbd5e1"
              strokeWidth="0.5"
              rx={1}
            />
          )),
        )}
        <defs>
          <marker id={`arrow-${color.replace('#','')}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={color} />
          </marker>
        </defs>
        {direction === 'increase-right-up' && (
          <>
            <line x1={12} y1={h / 2} x2={w - 16} y2={h / 2} stroke={color} strokeWidth="3" markerEnd={`url(#arrow-${color.replace('#','')})`} />
            <line x1={w / 2} y1={h - 18} x2={w / 2} y2={18} stroke={color} strokeWidth="3" markerEnd={`url(#arrow-${color.replace('#','')})`} />
            <text x={w / 2 + 8} y={18} fill={color} fontSize="11" fontWeight="700">↑ {label}</text>
            <text x={w - 80} y={h / 2 - 6} fill={color} fontSize="11" fontWeight="700">→ {label}</text>
          </>
        )}
        {direction === 'increase-left-down' && (
          <>
            <line x1={w - 16} y1={h / 2} x2={12} y2={h / 2} stroke={color} strokeWidth="3" markerEnd={`url(#arrow-${color.replace('#','')})`} />
            <line x1={w / 2} y1={18} x2={w / 2} y2={h - 18} stroke={color} strokeWidth="3" markerEnd={`url(#arrow-${color.replace('#','')})`} />
            <text x={w / 2 + 8} y={h - 22} fill={color} fontSize="11" fontWeight="700">↓ {label}</text>
            <text x={24} y={h / 2 - 6} fill={color} fontSize="11" fontWeight="700">← {label}</text>
          </>
        )}
      </svg>
      {caption && <figcaption className="text-xs text-slate-500 mt-1">{caption}</figcaption>}
    </figure>
  )
}
