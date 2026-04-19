import React, { useMemo, useState } from 'react'
import { ELEMENTS, PROPERTIES, CATEGORY_COLORS } from '../data/elements.js'

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}
function rgbToHex([r, g, b]) {
  const toH = (v) => Math.round(v).toString(16).padStart(2, '0')
  return `#${toH(r)}${toH(g)}${toH(b)}`
}
function lerpColor(a, b, t) {
  const A = hexToRgb(a)
  const B = hexToRgb(b)
  return rgbToHex([A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t])
}

export default function PeriodicTable() {
  const [mode, setMode] = useState('category')
  const [selected, setSelected] = useState(null)

  const { min, max } = useMemo(() => {
    if (mode === 'category') return { min: 0, max: 0 }
    const vals = ELEMENTS.map((e) => e[mode]).filter((v) => v != null && !Number.isNaN(v))
    return { min: Math.min(...vals), max: Math.max(...vals) }
  }, [mode])

  function colorFor(el) {
    if (mode === 'category') return CATEGORY_COLORS[el.cat] || '#e2e8f0'
    const v = el[mode]
    if (v == null || Number.isNaN(v)) return '#f1f5f9'
    const prop = PROPERTIES[mode]
    let t = (v - min) / (max - min || 1)
    if (prop.invert) t = 1 - t
    return lerpColor(prop.low, prop.high, t)
  }

  function propValue(el) {
    if (mode === 'category') return el.cat
    const v = el[mode]
    return v == null ? '—' : v
  }

  const legendGradient = mode === 'category'
    ? null
    : `linear-gradient(90deg, ${PROPERTIES[mode].low}, ${PROPERTIES[mode].high})`

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Interactive Periodic Table</h2>
          <p className="text-sm text-slate-600 mt-1">
            Pick a property to color the table as a heat map. Hover or click any element for full detail.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            ['category', 'Category'],
            ['radius', 'Atomic radius'],
            ['ie', 'Ionization energy'],
            ['en', 'Electronegativity'],
            ['ea', 'Electron affinity'],
            ['metallic', 'Metallic character'],
          ].map(([k, label]) => (
            <button
              key={k}
              onClick={() => setMode(k)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition ${
                mode === k ? 'bg-brand-600 text-white border-brand-600' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="card p-4 overflow-x-auto">
        <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(18, minmax(32px, 1fr))' }}>
          {ELEMENTS.map((el) => (
            <button
              key={el.n}
              onMouseEnter={() => setSelected(el)}
              onClick={() => setSelected(el)}
              style={{
                gridColumn: el.col,
                gridRow: el.row,
                backgroundColor: colorFor(el),
              }}
              className="relative aspect-square rounded text-[10px] leading-tight font-semibold text-slate-900 flex flex-col items-center justify-center hover:ring-2 hover:ring-brand-500 hover:z-10 transition"
            >
              <span className="text-[9px] opacity-70">{el.n}</span>
              <span className="text-sm font-bold">{el.s}</span>
              {mode !== 'category' && el[mode] != null && (
                <span className="text-[8.5px] font-medium">{el[mode]}</span>
              )}
            </button>
          ))}
        </div>

        {mode !== 'category' && (
          <div className="mt-5 flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">{PROPERTIES[mode].label}</span>
            <div
              className="h-3 w-64 rounded-full border border-slate-200"
              style={{ background: legendGradient }}
            />
            <span className="text-xs text-slate-600 font-medium">
              {PROPERTIES[mode].invert ? `${max} → ${min}` : `${min} → ${max}`}
            </span>
          </div>
        )}
      </div>

      {selected && (
        <div className="mt-4 card p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">{selected.cat}</div>
              <div className="text-2xl font-bold text-slate-900">{selected.name} <span className="text-slate-500 font-mono">({selected.s})</span></div>
              <div className="text-sm text-slate-600 mt-0.5">Atomic number: <b>{selected.n}</b> · Mass: <b>{selected.m}</b></div>
              <div className="text-sm text-slate-600">Electron configuration: <span className="font-mono">{selected.cfg}</span></div>
            </div>
            <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-slate-700 text-lg">×</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4 text-sm">
            <Stat label="Radius (pm)" v={selected.radius} />
            <Stat label="IE (kJ/mol)" v={selected.ie} />
            <Stat label="EA (kJ/mol)" v={selected.ea} />
            <Stat label="Electronegativity" v={selected.en} />
            <Stat label="Metallic (1-10)" v={selected.metallic} />
          </div>
        </div>
      )}
    </div>
  )
}

function Stat({ label, v }) {
  return (
    <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-lg font-bold text-slate-900">{v ?? '—'}</div>
    </div>
  )
}
