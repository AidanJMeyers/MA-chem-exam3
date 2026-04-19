import React from 'react'
import { useStoredValue } from './hooks.js'

export function ConfidenceDot({ value, size = 10 }) {
  if (!value) {
    return <span className="inline-block rounded-full border border-slate-300" style={{ width: size, height: size }} />
  }
  return (
    <span
      className={`inline-block rounded-full confidence-${value}`}
      style={{ width: size, height: size }}
      title={`Confidence ${value}/5`}
    />
  )
}

export function ReviewDot({ reviewed }) {
  return (
    <span
      className={`inline-block w-4 h-4 rounded-full border-2 ${reviewed ? 'bg-brand-500 border-brand-600' : 'bg-white border-slate-300'}`}
    />
  )
}

export default function StudyBlock({ chapterId, block, index }) {
  const reviewedKey = `studyguide:ch${chapterId}:block${index}:reviewed`
  const confidenceKey = `studyguide:ch${chapterId}:block${index}:confidence`
  const [reviewed, setReviewed] = useStoredValue(reviewedKey, false)
  const [confidence, setConfidence] = useStoredValue(confidenceKey, 0)

  return (
    <section id={`ch${chapterId}-block${index}`} className="card p-6 scroll-mt-20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Block {index + 1}</span>
            {block.tag && <span className="chip">{block.tag}</span>}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-1">{block.title}</h3>
        </div>
      </div>

      <div className="mt-4 prose prose-slate max-w-none text-[15px] leading-relaxed">
        {typeof block.body === 'function' ? block.body() : block.body}
      </div>

      {block.visuals && block.visuals.length > 0 && (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {block.visuals.map((v, i) => (
            <div key={i} className="rounded-xl bg-slate-50 border border-slate-200 p-3 flex flex-col items-center">
              {v.render ? v.render() : v}
              {v.note && <p className="text-xs text-slate-500 mt-2 text-center">{v.note}</p>}
            </div>
          ))}
        </div>
      )}

      {block.whyItMatters && (
        <div className="mt-5 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wide">Why it matters</div>
          <p className="text-sm text-amber-900 mt-1">{block.whyItMatters}</p>
        </div>
      )}

      <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-slate-100 pt-4">
        <label className="inline-flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={!!reviewed}
            onChange={(e) => setReviewed(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          <span className="text-sm font-medium text-slate-700">I've reviewed this block</span>
        </label>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500">Confidence:</span>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setConfidence(confidence === n ? 0 : n)}
              className={`w-7 h-7 rounded-full text-white text-xs font-bold transition ${
                confidence >= n ? `confidence-${n}` : 'bg-slate-200 text-slate-400'
              }`}
              title={`${n}/5`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
