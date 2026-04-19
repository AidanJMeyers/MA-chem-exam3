import React from 'react'

export function Atom({ x, y, symbol, r = 18, charge = null, className = '' }) {
  const cls = `atom-${symbol} atom-default`
  const fillCls = cls.includes(symbol) ? `atom-${symbol}` : 'atom-default'
  const textColor = symbol === 'H' ? '#111' : '#fff'
  return (
    <g className={className}>
      <circle cx={x} cy={y} r={r} className={fillCls} strokeWidth="1.5" />
      <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle" fontSize={r * 0.9} fontWeight="700" fill={textColor}>
        {symbol}
      </text>
      {charge != null && (
        <g>
          <circle cx={x + r * 0.95} cy={y - r * 0.95} r={r * 0.48} fill="#fef3c7" stroke="#92400e" strokeWidth="1" />
          <text x={x + r * 0.95} y={y - r * 0.95 + 1} textAnchor="middle" dominantBaseline="middle" fontSize={r * 0.55} fontWeight="700" fill="#92400e">
            {charge > 0 ? `+${charge}` : charge < 0 ? `${charge}` : '0'}
          </text>
        </g>
      )}
    </g>
  )
}

export function Bond({ x1, y1, x2, y2, order = 1, color = '#111' }) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.sqrt(dx * dx + dy * dy) || 1
  const nx = -dy / len
  const ny = dx / len
  const gap = 4
  const lines = []
  if (order === 1) {
    lines.push([0, 0])
  } else if (order === 2) {
    lines.push([-gap, -gap])
    lines.push([gap, gap])
  } else if (order === 3) {
    lines.push([-gap * 1.6, -gap * 1.6])
    lines.push([0, 0])
    lines.push([gap * 1.6, gap * 1.6])
  }
  // shorten ends a bit so bonds don't poke through atom circles
  const shrink = 18
  const sx1 = x1 + (dx / len) * shrink
  const sy1 = y1 + (dy / len) * shrink
  const sx2 = x2 - (dx / len) * shrink
  const sy2 = y2 - (dy / len) * shrink
  return (
    <g>
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={sx1 + nx * a}
          y1={sy1 + ny * a}
          x2={sx2 + nx * b}
          y2={sy2 + ny * b}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </g>
  )
}

// Lone pair dots placed at a given angle (in degrees) from atom center.
export function LonePair({ x, y, angle, r = 22, color = '#111' }) {
  const rad = (angle * Math.PI) / 180
  const cx = x + Math.cos(rad) * r
  const cy = y + Math.sin(rad) * r
  const px = -Math.sin(rad) * 3
  const py = Math.cos(rad) * 3
  return (
    <g>
      <circle cx={cx + px} cy={cy + py} r="1.8" fill={color} />
      <circle cx={cx - px} cy={cy - py} r="1.8" fill={color} />
    </g>
  )
}

// Total formal charge badge
export function ChargeBadge({ x, y, charge }) {
  if (charge == null) return null
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="700" fill="#b91c1c">
      {charge > 0 ? `+${charge}` : charge}
    </text>
  )
}
