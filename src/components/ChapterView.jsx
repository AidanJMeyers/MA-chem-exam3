import React, { useMemo } from 'react'
import StudyBlock, { ReviewDot, ConfidenceDot } from './StudyBlock.jsx'
import QuestionCard from './QuestionCard.jsx'
import { useStoredValue } from './hooks.js'
import storage from '../storage.js'

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      {children}
    </section>
  )
}

export default function ChapterView({ chapter, questions }) {
  const [tab, setTab] = useStoredValue(`chapterView:ch${chapter.id}:tab`, 'study')

  // observe reviewed/confidence state from storage
  const [bump] = useStoredValue(`__bump_${chapter.id}`, 0)
  void bump // unused — triggers re-render via subscribe chain

  const blockStates = useMemo(() => {
    return chapter.blocks.map((_, i) => ({
      reviewed: !!storage.get(`studyguide:ch${chapter.id}:block${i}:reviewed`, false),
      confidence: storage.get(`studyguide:ch${chapter.id}:block${i}:confidence`, 0) || 0,
    }))
  }, [chapter])

  const reviewedCount = blockStates.filter((b) => b.reviewed).length
  const total = chapter.blocks.length
  const pct = total ? Math.round((reviewedCount / total) * 100) : 0

  const qStates = useMemo(() => {
    return questions.map((q) => {
      const s = storage.get(`studyguide:ch${chapter.id}:q${q.id}`, { submitted: false, correct: null })
      return s || { submitted: false, correct: null }
    })
  }, [questions, chapter.id])
  const answered = qStates.filter((s) => s.submitted).length
  const correct = qStates.filter((s) => s.submitted && s.correct).length

  return (
    <div>
      <header className="mb-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{chapter.title}</h1>
            <p className="text-slate-600 mt-1 max-w-3xl">{chapter.summary}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-slate-500">Study progress</div>
              <div className="text-2xl font-bold text-brand-600">{reviewedCount}/{total}</div>
            </div>
            <div className="w-40 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>

        <nav className="mt-5 flex gap-2 border-b border-slate-200">
          {['study', 'practice'].map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-4 py-2 text-sm font-semibold border-b-2 transition ${
                tab === k ? 'text-brand-700 border-brand-600' : 'text-slate-500 border-transparent hover:text-slate-800'
              }`}
            >
              {k === 'study' ? 'Study Guide' : `Practice Questions · ${correct}/${answered || questions.length}`}
            </button>
          ))}
        </nav>
      </header>

      {tab === 'study' && (
        <div className="space-y-6">
          <Section title="Table of Contents">
            <div className="card p-4">
              <ol className="space-y-2">
                {chapter.blocks.map((b, i) => {
                  const state = blockStates[i]
                  return (
                    <li key={i}>
                      <a
                        href={`#ch${chapter.id}-block${i}`}
                        className="flex items-center gap-3 text-sm text-slate-800 hover:text-brand-700 py-1"
                      >
                        <ReviewDot reviewed={state.reviewed} />
                        <ConfidenceDot value={state.confidence} size={12} />
                        <span className="font-medium">{i + 1}. {b.title}</span>
                        {b.tag && <span className="chip ml-auto">{b.tag}</span>}
                      </a>
                    </li>
                  )
                })}
              </ol>
            </div>
          </Section>

          <Section title="Content blocks">
            <div className="space-y-5">
              {chapter.blocks.map((b, i) => (
                <StudyBlock key={i} chapterId={chapter.id} block={b} index={i} />
              ))}
            </div>
          </Section>
        </div>
      )}

      {tab === 'practice' && (
        <div className="space-y-5">
          <div className="card p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="text-sm text-slate-500">Chapter {chapter.id} practice set</div>
              <div className="text-2xl font-bold text-slate-900">Score: {correct} / {answered || questions.length} <span className="text-base font-medium text-slate-500">({questions.length} total questions)</span></div>
            </div>
            <button
              onClick={() => {
                if (!confirm('Reset all question answers for this chapter?')) return
                questions.forEach((q) => storage.remove(`studyguide:ch${chapter.id}:q${q.id}`))
              }}
              className="btn-ghost text-sm"
            >
              Reset answers
            </button>
          </div>
          {questions.map((q, i) => (
            <QuestionCard
              key={q.id}
              storageKey={`studyguide:ch${chapter.id}:q${q.id}`}
              question={q}
              index={i}
            />
          ))}
        </div>
      )}
    </div>
  )
}
