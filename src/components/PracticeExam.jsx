import React, { useMemo } from 'react'
import QuestionCard from './QuestionCard.jsx'
import { QUESTIONS_7 } from '../data/questions7.jsx'
import { QUESTIONS_8 } from '../data/questions8.jsx'
import { QUESTIONS_9 } from '../data/questions9.jsx'
import { EXAM_EXTRA } from '../data/examExtra.jsx'
import storage from '../storage.js'
import { useStoredValue } from './hooks.js'

const CH7 = QUESTIONS_7.map((q) => ({ ...q, chapter: 7, id: `exam-${q.id}` }))
const CH8 = QUESTIONS_8.map((q) => ({ ...q, chapter: 8, id: `exam-${q.id}` }))
const CH9 = QUESTIONS_9.map((q) => ({ ...q, chapter: 9, id: `exam-${q.id}` }))
const EXTRA7 = EXAM_EXTRA.filter((q) => q.chapter === 7).map((q) => ({ ...q, id: `exam-${q.id}` }))
const EXTRA8 = EXAM_EXTRA.filter((q) => q.chapter === 8).map((q) => ({ ...q, id: `exam-${q.id}` }))
const EXTRA9 = EXAM_EXTRA.filter((q) => q.chapter === 9).map((q) => ({ ...q, id: `exam-${q.id}` }))

// Proportional selection to hit 50 questions total.
// Chapter weights reflect exam scope (ch8 and ch9 are larger topics than ch7).
function buildExam() {
  const take = (arr, n) => arr.slice(0, n)
  const ch7 = [...take(CH7, 10), ...take(EXTRA7, 3)] // 13
  const ch8 = [...take(CH8, 14), ...take(EXTRA8, 5)] // 19
  const ch9 = [...take(CH9, 12), ...take(EXTRA9, 6)] // 18
  return [...ch7, ...ch8, ...ch9]
}

const EXAM_QUESTIONS = buildExam()

export default function PracticeExam() {
  const [bump] = useStoredValue('__examBump', 0)
  void bump

  const states = useMemo(() => {
    return EXAM_QUESTIONS.map((q) => storage.get(`studyguide:exam:${q.id}`, { submitted: false, correct: null }))
  }, [])

  const answered = states.filter((s) => s?.submitted).length
  const correct = states.filter((s) => s?.submitted && s.correct).length

  const byChapter = [7, 8, 9].map((ch) => {
    const qs = EXAM_QUESTIONS.map((q, i) => ({ q, s: states[i] })).filter((x) => x.q.chapter === ch)
    const ans = qs.filter((x) => x.s?.submitted).length
    const cor = qs.filter((x) => x.s?.submitted && x.s.correct).length
    return { ch, total: qs.length, ans, cor }
  })

  const done = answered === EXAM_QUESTIONS.length

  return (
    <div>
      <header className="mb-5">
        <h1 className="text-3xl font-bold text-slate-900">Practice Exam</h1>
        <p className="text-slate-600 mt-1 max-w-3xl">
          50 questions drawn proportionally from chapters 7, 8, and 9. Submit each one individually and watch the
          running score update at the top.
        </p>
      </header>

      <div className="card p-5 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Running score</div>
            <div className="text-3xl font-bold text-slate-900">
              {correct} <span className="text-slate-400">/</span> {answered || EXAM_QUESTIONS.length}
            </div>
            <div className="text-sm text-slate-500 mt-1">{answered} of {EXAM_QUESTIONS.length} answered · {answered ? Math.round((correct / answered) * 100) : 0}% correct so far</div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all"
                style={{ width: `${(answered / EXAM_QUESTIONS.length) * 100}%` }}
              />
            </div>
            <div className="text-xs text-slate-500 mt-2">Progress · {Math.round((answered / EXAM_QUESTIONS.length) * 100)}%</div>
          </div>
          <button
            onClick={() => {
              if (!confirm('Reset your practice exam progress?')) return
              EXAM_QUESTIONS.forEach((q) => storage.remove(`studyguide:exam:${q.id}`))
            }}
            className="btn-ghost text-sm"
          >
            Reset
          </button>
        </div>

        {done && (
          <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="text-sm font-bold text-emerald-800 uppercase">Exam complete!</div>
            <div className="text-2xl font-bold text-emerald-900 mt-1">
              Final score: {correct} / {EXAM_QUESTIONS.length} ({Math.round((correct / EXAM_QUESTIONS.length) * 100)}%)
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {byChapter.map((b) => (
                <div key={b.ch} className="rounded-lg bg-white border border-emerald-200 p-3 text-center">
                  <div className="text-xs text-slate-500 font-semibold">Chapter {b.ch}</div>
                  <div className="text-xl font-bold text-slate-900">{b.cor}/{b.total}</div>
                  <div className="text-xs text-slate-500">{Math.round((b.cor / b.total) * 100)}%</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {[7, 8, 9].map((ch) => {
        const chapterQs = EXAM_QUESTIONS.filter((q) => q.chapter === ch)
        const b = byChapter.find((x) => x.ch === ch)
        return (
          <section key={ch} className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              Chapter {ch}
              <span className="chip">{b.cor}/{b.ans || b.total} so far</span>
            </h2>
            <div className="space-y-4">
              {chapterQs.map((q, i) => {
                // global index for numbering
                const globalIdx = EXAM_QUESTIONS.indexOf(q)
                return (
                  <QuestionCard
                    key={q.id}
                    storageKey={`studyguide:exam:${q.id}`}
                    question={q}
                    index={globalIdx}
                  />
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
