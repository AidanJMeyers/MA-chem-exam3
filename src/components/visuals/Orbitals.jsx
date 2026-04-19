import React from 'react'

/**
 * Hybrid orbital energy diagram.
 *
 * Shows "before" (atomic orbitals) and "after" (hybrid orbitals).
 * type: 'sp' | 'sp2' | 'sp3' | 'sp3d' | 'sp3d2'
 */
export function HybridizationDiagram({ type = 'sp3', width = 360, height = 220, caption }) {
  const config = {
    sp: { atomic: [{ label: 's', y: 0.65, boxes: 1 }, { label: 'p', y: 0.35, boxes: 3 }], hybrid: [{ label: 'sp', y: 0.55, boxes: 2 }, { label: 'p (unused)', y: 0.35, boxes: 2 }] },
    sp2: { atomic: [{ label: 's', y: 0.65, boxes: 1 }, { label: 'p', y: 0.35, boxes: 3 }], hybrid: [{ label: 'sp²', y: 0.5, boxes: 3 }, { label: 'p (unused)', y: 0.3, boxes: 1 }] },
    sp3: { atomic: [{ label: 's', y: 0.65, boxes: 1 }, { label: 'p', y: 0.35, boxes: 3 }], hybrid: [{ label: 'sp³', y: 0.5, boxes: 4 }] },
    sp3d: { atomic: [{ label: 's', y: 0.75, boxes: 1 }, { label: 'p', y: 0.5, boxes: 3 }, { label: 'd', y: 0.2, boxes: 5 }], hybrid: [{ label: 'sp³d', y: 0.45, boxes: 5 }, { label: 'd (unused)', y: 0.2, boxes: 4 }] },
    sp3d2: { atomic: [{ label: 's', y: 0.75, boxes: 1 }, { label: 'p', y: 0.5, boxes: 3 }, { label: 'd', y: 0.2, boxes: 5 }], hybrid: [{ label: 'sp³d²', y: 0.4, boxes: 6 }, { label: 'd (unused)', y: 0.2, boxes: 3 }] },
  }
  const cfg = config[type]
  if (!cfg) return null

  const drawSet = (set, x) => {
    const out = []
    set.forEach((row, i) => {
      const y = height * (1 - row.y)
      for (let b = 0; b < row.boxes; b++) {
        out.push(
          <rect key={`${i}-${b}`} x={x + b * 20} y={y - 12} width={16} height={12} fill="#fff" stroke="#334155" strokeWidth="1.2" />,
        )
      }
      out.push(
        <text key={`l-${i}`} x={x + row.boxes * 20 + 8} y={y - 2} fontSize="11" fill="#475569">{row.label}</text>,
      )
    })
    return out
  }

  return (
    <figure className="flex flex-col items-center">
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="#f8fafc" rx={8} />
        <text x={60} y={20} fontSize="12" fontWeight="700" fill="#334155">Atomic orbitals</text>
        <text x={width - 140} y={20} fontSize="12" fontWeight="700" fill="#334155">Hybrid orbitals</text>
        <g>{drawSet(cfg.atomic, 30)}</g>
        <g>{drawSet(cfg.hybrid, width - 180)}</g>
        <path d={`M ${width / 2 - 30},${height / 2} L ${width / 2 + 30},${height / 2}`} stroke="#3366ff" strokeWidth="3" markerEnd="url(#orbArrow)" />
        <defs>
          <marker id="orbArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#3366ff" />
          </marker>
        </defs>
        <text x={width / 2} y={height / 2 - 8} textAnchor="middle" fontSize="11" fill="#3366ff" fontWeight="600">hybridize</text>
      </svg>
      {caption && <figcaption className="text-xs text-slate-500 mt-1">{caption}</figcaption>}
    </figure>
  )
}

// Sigma vs pi overlap illustration
export function SigmaPiOverlap({ kind = 'sigma', width = 240, height = 140, caption }) {
  return (
    <figure className="flex flex-col items-center">
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="#f8fafc" rx={8} />
        {kind === 'sigma' && (
          <>
            <ellipse cx={70} cy={70} rx={28} ry={22} fill="#bfdbfe" stroke="#1d4ed8" />
            <ellipse cx={170} cy={70} rx={28} ry={22} fill="#fecaca" stroke="#b91c1c" />
            <ellipse cx={120} cy={70} rx={22} ry={20} fill="rgba(34,197,94,0.35)" stroke="#166534" strokeDasharray="3 2" />
            <text x={120} y={115} textAnchor="middle" fontSize="12" fontWeight="700" fill="#166534">σ bond (head-on)</text>
          </>
        )}
        {kind === 'pi' && (
          <>
            <ellipse cx={70} cy={50} rx={22} ry={14} fill="#bfdbfe" stroke="#1d4ed8" />
            <ellipse cx={70} cy={90} rx={22} ry={14} fill="#bfdbfe" stroke="#1d4ed8" />
            <ellipse cx={170} cy={50} rx={22} ry={14} fill="#fecaca" stroke="#b91c1c" />
            <ellipse cx={170} cy={90} rx={22} ry={14} fill="#fecaca" stroke="#b91c1c" />
            <line x1={40} y1={70} x2={200} y2={70} stroke="#475569" strokeDasharray="4 3" />
            <text x={120} y={125} textAnchor="middle" fontSize="12" fontWeight="700" fill="#166534">π bond (side-by-side)</text>
          </>
        )}
      </svg>
      {caption && <figcaption className="text-xs text-slate-500 mt-1">{caption}</figcaption>}
    </figure>
  )
}
