import React from 'react'
import { useStoredValue } from './hooks.js'

export default function QuestionCard({ storageKey, question, index, onAnswered }) {
  const [state, setState] = useStoredValue(storageKey, { submitted: false, choice: null, correct: null })
  const submitted = state?.submitted
  const choice = state?.choice
  const correct = state?.correct

  function submit() {
    if (choice == null) return
    const isCorrect = choice === question.answer
    const next = { submitted: true, choice, correct: isCorrect }
    setState(next)
    onAnswered?.(isCorrect)
  }

  function reset() {
    setState({ submitted: false, choice: null, correct: null })
  }

  return (
    <div className="card p-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-600 text-white text-sm font-bold">
          {index + 1}
        </span>
        <div className="flex-1">
          <div className="text-[15px] font-medium text-slate-900 leading-relaxed">
            {typeof question.prompt === 'function' ? question.prompt() : question.prompt}
          </div>
          {question.promptVisual && <div className="mt-3">{question.promptVisual()}</div>}
        </div>
      </div>

      <div className={`mt-4 grid gap-3 ${question.visualChoices ? 'md:grid-cols-2' : ''}`}>
        {question.choices.map((c, i) => {
          const isSelected = choice === i
          const isCorrectChoice = submitted && i === question.answer
          const isWrongChoice = submitted && isSelected && i !== question.answer
          return (
            <button
              key={i}
              onClick={() => !submitted && setState({ ...state, choice: i })}
              disabled={submitted}
              className={`text-left rounded-xl border-2 p-3 transition ${
                isCorrectChoice
                  ? 'border-emerald-500 bg-emerald-50'
                  : isWrongChoice
                  ? 'border-rose-500 bg-rose-50'
                  : isSelected
                  ? 'border-brand-500 bg-brand-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`inline-flex items-center justify-center w-6 h-6 shrink-0 rounded-full text-xs font-bold ${
                  isCorrectChoice
                    ? 'bg-emerald-500 text-white'
                    : isWrongChoice
                    ? 'bg-rose-500 text-white'
                    : isSelected
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-200 text-slate-700'
                }`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <div className="flex-1">
                  {c.visual ? c.visual() : null}
                  {c.label && <div className="text-sm text-slate-800">{c.label}</div>}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {!submitted ? (
          <button onClick={submit} disabled={choice == null} className="btn-primary">Submit</button>
        ) : (
          <button onClick={reset} className="btn-ghost">Try again</button>
        )}
        {submitted && (
          <span className={`text-sm font-semibold ${correct ? 'text-emerald-600' : 'text-rose-600'}`}>
            {correct ? 'Correct!' : `Incorrect — answer is ${String.fromCharCode(65 + question.answer)}`}
          </span>
        )}
      </div>

      {submitted && question.explanation && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 leading-relaxed">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Explanation</div>
          {typeof question.explanation === 'function' ? question.explanation() : question.explanation}
        </div>
      )}
    </div>
  )
}
