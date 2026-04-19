import React from 'react'

/**
 * MO diagram for homonuclear second-row diatomics.
 * Accepts `levels` — an array of { name, y, electrons, type } with y being
 * relative energy (lower number = higher energy visually), and draws them.
 *
 * Simplified rendering: left column = AO of atom 1, right column = AO of atom 2,
 * middle column = MO.
 */
export function MODiagram({ levels, leftLabel = 'Atom A', rightLabel = 'Atom B', width = 360, height = 360, caption }) {
  const midX = width / 2
  const leftX = 60
  const rightX = width - 60
  const top = 30
  const bottom = height - 50
  const yRange = bottom - top

  return (
    <figure className="flex flex-col items-center">
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <text x={leftX} y={20} textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">{leftLabel}</text>
        <text x={midX} y={20} textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">MO</text>
        <text x={rightX} y={20} textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">{rightLabel}</text>

        <text x={14} y={top + 8} fontSize="10" fill="#64748b">E</text>
        <line x1={14} y1={top + 4} x2={14} y2={bottom + 4} stroke="#94a3b8" strokeWidth="1" markerEnd="url(#moArrow)" />
        <defs>
          <marker id="moArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,6 L6,3 L0,0 Z" fill="#94a3b8" />
          </marker>
        </defs>

        {levels.map((lvl, i) => {
          const y = top + (1 - lvl.yRel) * yRange
          const isMO = lvl.side === 'center'
          const x = lvl.side === 'left' ? leftX : lvl.side === 'right' ? rightX : midX
          const lineWidth = isMO ? 54 : 40
          const color = lvl.antibonding ? '#ef4444' : isMO ? '#22c55e' : '#475569'
          return (
            <g key={i}>
              <line
                x1={x - lineWidth / 2}
                y1={y}
                x2={x + lineWidth / 2}
                y2={y}
                stroke={color}
                strokeWidth="2"
              />
              <text
                x={lvl.side === 'left' ? x - lineWidth / 2 - 6 : lvl.side === 'right' ? x + lineWidth / 2 + 6 : x}
                y={y + (isMO ? -8 : 4)}
                textAnchor={lvl.side === 'left' ? 'end' : lvl.side === 'right' ? 'start' : 'middle'}
                fontSize="11"
                fill={color}
                fontWeight="600"
              >
                {lvl.label}
              </text>
              {/* electrons */}
              {Array.from({ length: lvl.electrons || 0 }).map((_, e) => {
                const spin = e % 2 === 0 ? 'up' : 'down'
                const ex = x - lineWidth / 2 + 6 + (e * 8)
                return (
                  <g key={e}>
                    <line x1={ex} y1={y - (spin === 'up' ? 8 : 0)} x2={ex} y2={y + (spin === 'down' ? 8 : 0)} stroke="#0f172a" strokeWidth="1.5" />
                    <polygon
                      points={
                        spin === 'up'
                          ? `${ex - 2},${y - 6} ${ex + 2},${y - 6} ${ex},${y - 9}`
                          : `${ex - 2},${y + 6} ${ex + 2},${y + 6} ${ex},${y + 9}`
                      }
                      fill="#0f172a"
                    />
                  </g>
                )
              })}
              {/* connecting dotted lines from AO -> MO */}
              {lvl.connectsTo != null && (
                <line
                  x1={x + lineWidth / 2}
                  y1={y}
                  x2={midX - 27}
                  y2={top + (1 - lvl.connectsTo) * yRange}
                  stroke="#cbd5e1"
                  strokeDasharray="3 3"
                />
              )}
            </g>
          )
        })}
      </svg>
      {caption && <figcaption className="text-xs text-slate-500 mt-1">{caption}</figcaption>}
    </figure>
  )
}

// Canonical MO diagram presets for common diatomics.
export const MO_PRESETS = {
  H2: {
    leftLabel: 'H',
    rightLabel: 'H',
    levels: [
      { side: 'left', label: '1s', yRel: 0.5, electrons: 1 },
      { side: 'right', label: '1s', yRel: 0.5, electrons: 1 },
      { side: 'center', label: 'σ*₁ₛ', yRel: 0.85, electrons: 0, antibonding: true },
      { side: 'center', label: 'σ₁ₛ', yRel: 0.15, electrons: 2 },
    ],
  },
  He2: {
    leftLabel: 'He',
    rightLabel: 'He',
    levels: [
      { side: 'left', label: '1s', yRel: 0.5, electrons: 2 },
      { side: 'right', label: '1s', yRel: 0.5, electrons: 2 },
      { side: 'center', label: 'σ*₁ₛ', yRel: 0.85, electrons: 2, antibonding: true },
      { side: 'center', label: 'σ₁ₛ', yRel: 0.15, electrons: 2 },
    ],
  },
  N2: {
    leftLabel: 'N',
    rightLabel: 'N',
    levels: [
      { side: 'left', label: '2p', yRel: 0.55, electrons: 3 },
      { side: 'right', label: '2p', yRel: 0.55, electrons: 3 },
      { side: 'left', label: '2s', yRel: 0.25, electrons: 2 },
      { side: 'right', label: '2s', yRel: 0.25, electrons: 2 },
      { side: 'center', label: 'σ*₂ₚ', yRel: 0.95, electrons: 0, antibonding: true },
      { side: 'center', label: 'π*₂ₚ', yRel: 0.80, electrons: 0, antibonding: true },
      { side: 'center', label: 'σ₂ₚ', yRel: 0.70, electrons: 2 },
      { side: 'center', label: 'π₂ₚ', yRel: 0.60, electrons: 4 },
      { side: 'center', label: 'σ*₂ₛ', yRel: 0.40, electrons: 2, antibonding: true },
      { side: 'center', label: 'σ₂ₛ', yRel: 0.10, electrons: 2 },
    ],
  },
  O2: {
    leftLabel: 'O',
    rightLabel: 'O',
    levels: [
      { side: 'left', label: '2p', yRel: 0.60, electrons: 4 },
      { side: 'right', label: '2p', yRel: 0.60, electrons: 4 },
      { side: 'left', label: '2s', yRel: 0.25, electrons: 2 },
      { side: 'right', label: '2s', yRel: 0.25, electrons: 2 },
      { side: 'center', label: 'σ*₂ₚ', yRel: 0.95, electrons: 0, antibonding: true },
      { side: 'center', label: 'π*₂ₚ', yRel: 0.80, electrons: 2, antibonding: true },
      { side: 'center', label: 'π₂ₚ', yRel: 0.60, electrons: 4 },
      { side: 'center', label: 'σ₂ₚ', yRel: 0.50, electrons: 2 },
      { side: 'center', label: 'σ*₂ₛ', yRel: 0.35, electrons: 2, antibonding: true },
      { side: 'center', label: 'σ₂ₛ', yRel: 0.10, electrons: 2 },
    ],
  },
}
