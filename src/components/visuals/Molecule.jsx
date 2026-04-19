import React from 'react'
import { Atom, Bond, LonePair, ChargeBadge } from './Atom.jsx'

/**
 * Generic Lewis/structure renderer.
 *
 * props.atoms: [{ id, symbol, x, y, lonePairs?: number[], formalCharge?, charge? }]
 * props.bonds: [{ from, to, order }]
 * props.width, props.height, props.caption
 *
 * lonePairs is an array of angles (degrees) where dot pairs should render around the atom.
 */
export function Molecule({ atoms, bonds = [], width = 240, height = 180, caption, label, viewBox, showFormalCharges = false }) {
  const vb = viewBox || `0 0 ${width} ${height}`
  const byId = Object.fromEntries(atoms.map((a) => [a.id, a]))
  return (
    <figure className="flex flex-col items-center">
      <svg viewBox={vb} width={width} height={height} className="select-none">
        {bonds.map((b, i) => {
          const A = byId[b.from]
          const B = byId[b.to]
          if (!A || !B) return null
          return <Bond key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} order={b.order || 1} />
        })}
        {atoms.map((a) => (
          <g key={a.id}>
            <Atom x={a.x} y={a.y} symbol={a.symbol} r={a.r || 18} charge={a.charge ?? null} />
            {(a.lonePairs || []).map((ang, i) => (
              <LonePair key={i} x={a.x} y={a.y} angle={ang} r={(a.r || 18) + 8} />
            ))}
            {showFormalCharges && a.formalCharge != null && (
              <ChargeBadge x={a.x + (a.fcOffset?.[0] ?? 22)} y={a.y + (a.fcOffset?.[1] ?? -22)} charge={a.formalCharge} />
            )}
          </g>
        ))}
        {label && (
          <text x="50%" y={height - 8} textAnchor="middle" fontSize="12" fill="#475569" fontWeight="600">
            {label}
          </text>
        )}
      </svg>
      {caption && <figcaption className="text-xs text-slate-500 mt-1">{caption}</figcaption>}
    </figure>
  )
}
