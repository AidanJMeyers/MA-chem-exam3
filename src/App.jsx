import React, { useMemo } from 'react'
import { CHAPTER_7 } from './data/chapter7.jsx'
import { CHAPTER_8 } from './data/chapter8.jsx'
import { CHAPTER_9 } from './data/chapter9.jsx'
import { QUESTIONS_7 } from './data/questions7.jsx'
import { QUESTIONS_8 } from './data/questions8.jsx'
import { QUESTIONS_9 } from './data/questions9.jsx'
import ChapterView from './components/ChapterView.jsx'
import PeriodicTable from './components/PeriodicTable.jsx'
import PracticeExam from './components/PracticeExam.jsx'
import storage from './storage.js'
import { useStoredValue } from './components/hooks.js'

const CHAPTERS = [
  { ...CHAPTER_7, questions: QUESTIONS_7 },
  { ...CHAPTER_8, questions: QUESTIONS_8 },
  { ...CHAPTER_9, questions: QUESTIONS_9 },
]

function ChapterBadge({ chapter }) {
  const [bump] = useStoredValue(`__chbadge_${chapter.id}`, 0)
  void bump
  const reviewed = chapter.blocks.filter((_, i) =>
    storage.get(`studyguide:ch${chapter.id}:block${i}:reviewed`, false),
  ).length
  return (
    <span className="ml-2 text-[10px] font-bold rounded-full bg-white/90 text-brand-700 px-1.5 py-0.5">
      {reviewed}/{chapter.blocks.length}
    </span>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useStoredValue('activeTab', 'ch7')
  const [bump] = useStoredValue('__global_bump', 0)
  void bump

  const globalStats = useMemo(() => {
    let reviewed = 0
    let total = 0
    CHAPTERS.forEach((ch) => {
      total += ch.blocks.length
      ch.blocks.forEach((_, i) => {
        if (storage.get(`studyguide:ch${ch.id}:block${i}:reviewed`, false)) reviewed++
      })
    })
    return { reviewed, total }
  }, [])

  const resetAll = () => {
    if (!confirm('Reset ALL progress — study reviews, confidence ratings, question answers, and exam progress? This cannot be undone.')) return
    storage.clear()
    window.location.reload()
  }

  const activeChapter = CHAPTERS.find((c) => `ch${c.id}` === activeTab)

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-r from-brand-700 to-brand-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-brand-100">CHM 1045 · Unit 3 Exam</div>
              <h1 className="text-2xl md:text-3xl font-bold">Interactive Study Guide — Chapters 7, 8 & 9</h1>
              <p className="text-brand-100 text-sm mt-1">Periodic trends · Bonding & molecular structure · Hybridization & MO theory</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs uppercase tracking-wide text-brand-100">Overall review</div>
                <div className="text-2xl font-bold">
                  {globalStats.reviewed}/{globalStats.total}
                </div>
              </div>
              <button onClick={resetAll} className="text-xs bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg">
                Reset all progress
              </button>
            </div>
          </div>

          <nav className="mt-5 flex flex-wrap gap-1 -mb-2">
            {CHAPTERS.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(`ch${c.id}`)}
                className={`px-3 md:px-4 py-2 text-sm font-semibold rounded-t-lg transition flex items-center ${
                  activeTab === `ch${c.id}` ? 'bg-slate-50 text-brand-800' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                Ch. {c.id}
                <ChapterBadge chapter={c} />
              </button>
            ))}
            <button
              onClick={() => setActiveTab('periodic')}
              className={`px-3 md:px-4 py-2 text-sm font-semibold rounded-t-lg transition ${
                activeTab === 'periodic' ? 'bg-slate-50 text-brand-800' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Periodic Table
            </button>
            <button
              onClick={() => setActiveTab('exam')}
              className={`px-3 md:px-4 py-2 text-sm font-semibold rounded-t-lg transition ${
                activeTab === 'exam' ? 'bg-slate-50 text-brand-800' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Practice Exam
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeChapter && <ChapterView chapter={activeChapter} questions={activeChapter.questions} />}
        {activeTab === 'periodic' && <PeriodicTable />}
        {activeTab === 'exam' && <PracticeExam />}
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-8 text-center text-xs text-slate-500">
        Built with React + Tailwind. All progress stored locally via{' '}
        <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">window.storage</code>.
      </footer>
    </div>
  )
}
