# CHM 1045 — Unit 3 Interactive Study Guide

A React + Tailwind study guide for the CHM 1045 Unit 3 Exam, covering:

- **Chapter 7** — Periodic Trends (atomic radius, ionization energy, electron affinity, effective nuclear charge)
- **Chapter 8** — Bonding & Molecular Structure (Lewis structures, formal charge, VSEPR / AXE, polarity, bond order)
- **Chapter 9** — Hybridization & Molecular Orbital Theory (sp / sp² / sp³ / sp³d / sp³d², σ/π bonds, MO diagrams, paramagnetism)

Plus:

- An interactive **Periodic Table** tab with switchable property heat-maps (atomic radius, IE, electronegativity, EA, metallic character).
- A **50-question Practice Exam** drawn proportionally from all three chapters.
- All review progress, confidence ratings, and question answers persist across sessions via `window.storage` (a thin wrapper on top of `localStorage`).

All chemistry visuals (Lewis structures, VSEPR shapes, hybridization diagrams, MO diagrams, periodic-trend arrows) are rendered as inline SVG.

## Run locally

```bash
npm install
npm run dev       # opens http://localhost:5173
npm run build     # production build into ./dist
npm run preview   # serve the built dist/
```

## Source layout

```
src/
├── App.jsx                       # main shell + top navigation
├── main.jsx                      # React root + storage hydration
├── storage.js                    # window.storage wrapper (get / set / has / subscribe / clear)
├── index.css                     # Tailwind entry + atom/confidence color utilities
├── components/
│   ├── ChapterView.jsx           # per-chapter study guide + practice tabs
│   ├── StudyBlock.jsx            # single content block (body + visuals + review/confidence)
│   ├── QuestionCard.jsx          # MCQ card with submit-per-question + explanation
│   ├── PeriodicTable.jsx         # interactive 18-column table with property heat-map
│   ├── PracticeExam.jsx          # 50-question exam (proportional sampling)
│   ├── hooks.js                  # useStoredValue hook
│   └── visuals/
│       ├── Atom.jsx              # Atom / Bond / LonePair / ChargeBadge SVG primitives
│       ├── Molecule.jsx          # Generic Lewis-structure renderer
│       ├── Shapes.jsx            # VSEPR / molecular-shape renderer
│       ├── Orbitals.jsx          # Hybrid-orbital + σ/π overlap diagrams
│       ├── MODiagram.jsx         # Molecular Orbital diagrams (H₂, He₂, N₂, O₂ presets)
│       └── TrendArrow.jsx        # Periodic-trend arrow minigrid
└── data/
    ├── chapter7.jsx              # Ch. 7 content blocks + body/visuals
    ├── chapter8.jsx              # Ch. 8 content blocks (Lewis library re-used by questions)
    ├── chapter9.jsx              # Ch. 9 content blocks
    ├── questions7.jsx            # Ch. 7 MCQs
    ├── questions8.jsx            # Ch. 8 MCQs (visual Lewis + VSEPR choices)
    ├── questions9.jsx            # Ch. 9 MCQs (visual hybridization + MO choices)
    ├── examExtra.jsx             # exam-only questions to round out to 50
    └── elements.js               # periodic-table dataset
```

## Storage keys

```
studyguide:ch{N}:block{M}:reviewed    → boolean
studyguide:ch{N}:block{M}:confidence  → 0-5 integer
studyguide:ch{N}:q{ID}                → { submitted, choice, correct }
studyguide:exam:{ID}                  → { submitted, choice, correct }
activeTab                             → 'ch7' | 'ch8' | 'ch9' | 'periodic' | 'exam'
chapterView:ch{N}:tab                 → 'study' | 'practice'
```

Source PDFs used to build the content:
- `CHM 1045 Chapter 7 fall 22.pdf`
- `CHM 1045 Chapter 8  Spring 2023.pdf`
- `CHM 1045 Chapter 9 Spring 23.pdf`
- `Study Guide Chapters 7, 8 and 9.pdf`
