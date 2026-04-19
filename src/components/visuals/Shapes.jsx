import React from 'react'
import { Atom } from './Atom.jsx'

/**
 * VSEPR / molecular geometry shape renderer.
 *
 * shape: 'linear' | 'bent' | 'trigonal-planar' | 'trigonal-pyramidal' | 'tetrahedral'
 *      | 'trigonal-bipyramidal' | 'seesaw' | 'tshape' | 'octahedral' | 'square-planar'
 * central: symbol string (default 'A')
 * ligand: symbol string (default 'X')
 * lonePairs: number of lone pairs on central atom (drawn as greyed balloons)
 */
export function ShapeDiagram({ shape, central = 'A', ligand = 'X', lonePairs = 0, width = 220, height = 220, caption, angle }) {
  const cx = width / 2
  const cy = height / 2
  const r = Math.min(width, height) * 0.32

  function pt(deg, rad = r) {
    const a = (deg * Math.PI) / 180
    return [cx + Math.cos(a) * rad, cy + Math.sin(a) * rad]
  }

  let positions = []
  let lps = []

  switch (shape) {
    case 'linear':
      positions = [pt(180), pt(0)]
      break
    case 'bent': {
      positions = [pt(210), pt(-30)]
      lps = [pt(90, r * 0.9)]
      break
    }
    case 'trigonal-planar':
      positions = [pt(270), pt(30), pt(150)]
      break
    case 'trigonal-pyramidal':
      positions = [pt(270), pt(30), pt(150)]
      lps = [pt(90, r * 0.8)]
      break
    case 'tetrahedral':
      positions = [pt(270), pt(30), pt(150), [cx, cy - r * 1.05]]
      // use 4 points roughly tetrahedral in 2D
      positions = [
        [cx, cy - r],
        [cx - r * 0.95, cy + r * 0.55],
        [cx + r * 0.95, cy + r * 0.55],
        [cx, cy + r * 0.25],
      ]
      break
    case 'trigonal-bipyramidal':
      positions = [
        [cx, cy - r * 1.1],
        [cx, cy + r * 1.1],
        pt(210, r),
        pt(-30, r),
        [cx, cy + r * 0.1],
      ]
      // 3 equatorial + 2 axial
      positions = [
        [cx, cy - r * 1.1], // axial up
        [cx, cy + r * 1.1], // axial down
        [cx - r, cy + r * 0.2],
        [cx + r, cy + r * 0.2],
        [cx, cy - r * 0.05 + r * 0.25],
      ]
      positions = positions.slice(0, 5)
      // recompute cleanly:
      positions = [
        [cx, cy - r * 1.05],
        [cx, cy + r * 1.05],
        [cx - r * 0.95, cy + r * 0.25],
        [cx + r * 0.95, cy + r * 0.25],
        [cx, cy - r * 0.05],
      ]
      // we want only 5 total (5 bond pairs)
      positions = [
        [cx, cy - r * 1.05],
        [cx, cy + r * 1.05],
        [cx - r * 0.95, cy + r * 0.25],
        [cx + r * 0.95, cy + r * 0.25],
        [cx + r * 0.1, cy - r * 0.05],
      ]
      positions = positions.slice(0, 5)
      break
    case 'seesaw':
      positions = [
        [cx - r * 0.95, cy + r * 0.25], // eq
        [cx + r * 0.95, cy + r * 0.25], // eq
        [cx, cy - r * 1.05], // ax up
        [cx, cy + r * 1.05], // ax down
      ]
      lps = [[cx + r * 0.7, cy - r * 0.55]]
      break
    case 'tshape':
      positions = [
        [cx - r, cy],
        [cx + r, cy],
        [cx, cy + r],
      ]
      lps = [[cx - r * 0.55, cy - r * 0.55], [cx + r * 0.55, cy - r * 0.55]]
      break
    case 'octahedral':
      positions = [
        [cx, cy - r * 1.05],
        [cx, cy + r * 1.05],
        [cx - r * 1.05, cy],
        [cx + r * 1.05, cy],
        [cx - r * 0.55, cy - r * 0.4],
        [cx + r * 0.55, cy + r * 0.4],
      ]
      break
    case 'square-planar':
      positions = [
        [cx, cy - r],
        [cx, cy + r],
        [cx - r, cy],
        [cx + r, cy],
      ]
      lps = [[cx - r * 0.55, cy - r * 0.55], [cx + r * 0.55, cy + r * 0.55]]
      break
    default:
      positions = []
  }

  return (
    <figure className="flex flex-col items-center">
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        {positions.map((p, i) => (
          <line key={`b${i}`} x1={cx} y1={cy} x2={p[0]} y2={p[1]} stroke="#334155" strokeWidth="2" />
        ))}
        {lps.map((p, i) => (
          <g key={`lp${i}`}>
            <ellipse cx={p[0]} cy={p[1]} rx={18} ry={10} fill="#fde68a" stroke="#b45309" strokeDasharray="3 2" />
            <circle cx={p[0] - 4} cy={p[1]} r="1.8" fill="#92400e" />
            <circle cx={p[0] + 4} cy={p[1]} r="1.8" fill="#92400e" />
          </g>
        ))}
        <Atom x={cx} y={cy} symbol={central} r={20} />
        {positions.map((p, i) => (
          <Atom key={`a${i}`} x={p[0]} y={p[1]} symbol={ligand} r={16} />
        ))}
        {angle && (
          <text x={cx} y={height - 10} textAnchor="middle" fontSize="12" fill="#475569" fontWeight="600">
            {angle}
          </text>
        )}
      </svg>
      {caption && <figcaption className="text-xs text-slate-500 mt-1">{caption}</figcaption>}
    </figure>
  )
}
