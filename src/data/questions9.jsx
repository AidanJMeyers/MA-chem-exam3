import React from 'react'
import { HybridizationDiagram, SigmaPiOverlap } from '../components/visuals/Orbitals.jsx'
import { MODiagram, MO_PRESETS } from '../components/visuals/MODiagram.jsx'
import { ShapeDiagram } from '../components/visuals/Shapes.jsx'

export const QUESTIONS_9 = [
  {
    id: 'c9q1',
    prompt: 'What is the hybridization of the central carbon in CH₄?',
    choices: [
      { label: 'sp' }, { label: 'sp²' }, { label: 'sp³' }, { label: 'sp³d' },
    ],
    answer: 2,
    explanation: 'CH₄ has 4 bonding domains, 0 lone pairs → 4 electron domains → sp³ hybridization, 109.5° bond angles.',
  },
  {
    id: 'c9q2',
    prompt: 'Which of the following atomic orbital mixtures produces sp³d hybrid orbitals?',
    choices: [
      { label: 'One s + two p orbitals' },
      { label: 'One s + three p orbitals' },
      { label: 'One s + three p + one d orbitals' },
      { label: 'One s + three p + two d orbitals' },
    ],
    answer: 2,
    explanation: 'sp³d means we mix 1 s, 3 p, and 1 d → 5 degenerate sp³d hybrid orbitals (for 5 electron domains, e.g., PCl₅).',
  },
  {
    id: 'c9q3',
    prompt: 'How many σ and π bonds are in acetylene (C₂H₂)?',
    choices: [
      { label: '3 σ and 2 π' },
      { label: '2 σ and 3 π' },
      { label: '5 σ and 0 π' },
      { label: '1 σ and 4 π' },
    ],
    answer: 0,
    explanation: 'H–C≡C–H has 2 C–H single bonds (2 σ) and 1 C≡C triple bond (1 σ + 2 π). Total = 3 σ + 2 π.',
  },
  {
    id: 'c9q4',
    prompt: 'Which hybridization gives a 120° bond angle?',
    choices: [
      { label: 'sp' }, { label: 'sp²' }, { label: 'sp³' }, { label: 'sp³d²' },
    ],
    answer: 1,
    explanation: 'sp² hybridization gives a trigonal-planar geometry with 120° bond angles. sp = 180°, sp³ = 109.5°, sp³d² = 90°.',
  },
  {
    id: 'c9q5',
    prompt: 'Which statement about a π bond is TRUE?',
    choices: [
      { label: 'π bonds form by head-on overlap along the bond axis' },
      { label: 'A single bond always contains one π bond' },
      { label: 'π bonds form by side-by-side overlap of p orbitals above and below the bond axis' },
      { label: 'π bonds are always stronger than σ bonds' },
    ],
    answer: 2,
    explanation: 'π bonds are the side-by-side overlap of parallel p orbitals. They are weaker than σ bonds (which are head-on overlap) — that\'s why a π bond alone can\'t exist; you always get σ first.',
  },
  {
    id: 'c9q6',
    prompt: 'What is the bond order in N₂ based on its MO diagram?',
    promptVisual: () => <MODiagram {...MO_PRESETS.N2} width={300} height={300} />,
    choices: [
      { label: '1' }, { label: '2' }, { label: '3' }, { label: '2.5' },
    ],
    answer: 2,
    explanation: 'N₂ has 8 bonding electrons and 2 antibonding electrons. BO = (8 − 2)/2 = 3 (triple bond). N₂ is also diamagnetic.',
  },
  {
    id: 'c9q7',
    prompt: 'O₂ is paramagnetic. Using the MO diagram, which MOs contain the unpaired electrons?',
    promptVisual: () => <MODiagram {...MO_PRESETS.O2} width={300} height={300} />,
    choices: [
      { label: 'σ*₂ₛ (one in each)' },
      { label: 'σ₂ₚ (both here)' },
      { label: 'π*₂ₚ (one in each)' },
      { label: 'σ*₂ₚ' },
    ],
    answer: 2,
    explanation: 'In O₂, the last two electrons half-fill the two degenerate π*₂ₚ MOs (Hund\'s rule). These two unpaired electrons make O₂ paramagnetic.',
  },
  {
    id: 'c9q8',
    prompt: 'Which molecule has sp hybridization at its central atom?',
    choices: [
      { label: 'H₂O' },
      { label: 'CO₂' },
      { label: 'BF₃' },
      { label: 'NH₃' },
    ],
    answer: 1,
    explanation: 'CO₂ has 2 electron domains on C (two C=O double bonds) → sp. Double bonds count as 1 domain.',
  },
  {
    id: 'c9q9',
    prompt: 'Why does He₂ not exist as a stable molecule?',
    promptVisual: () => <MODiagram {...MO_PRESETS.He2} width={300} height={280} />,
    choices: [
      { label: 'Its bond order is 0 (bonding and antibonding are equally filled)' },
      { label: 'Helium has no valence electrons' },
      { label: 'He is a metal and cannot form covalent bonds' },
      { label: 'The 1s orbitals do not overlap' },
    ],
    answer: 0,
    explanation: 'With 4 electrons (2 in σ₁ₛ, 2 in σ*₁ₛ), bond order = (2 − 2)/2 = 0. Bonding and antibonding contributions exactly cancel → no net bond.',
  },
  {
    id: 'c9q10',
    prompt: 'Which hybrid orbital diagram corresponds to sp² hybridization?',
    visualChoices: true,
    choices: [
      { visual: () => <HybridizationDiagram type="sp" width={300} height={200} caption="A" /> },
      { visual: () => <HybridizationDiagram type="sp2" width={300} height={200} caption="B" /> },
      { visual: () => <HybridizationDiagram type="sp3" width={300} height={200} caption="C" /> },
      { visual: () => <HybridizationDiagram type="sp3d" width={300} height={200} caption="D" /> },
    ],
    answer: 1,
    explanation: 'sp² mixes 1 s + 2 p orbitals → 3 degenerate sp² orbitals + 1 unhybridized p left over (used for the π bond in alkenes).',
  },
  {
    id: 'c9q11',
    prompt: 'For a central atom with 6 electron domains and no lone pairs, the hybridization and molecular shape are:',
    visualChoices: true,
    choices: [
      { visual: () => <ShapeDiagram shape="octahedral" central="A" ligand="X" width={180} height={180} caption="A — sp³d² octahedral" /> },
      { visual: () => <ShapeDiagram shape="trigonal-bipyramidal" central="A" ligand="X" width={180} height={180} caption="B — sp³d TBP" /> },
      { visual: () => <ShapeDiagram shape="tetrahedral" central="A" ligand="X" width={180} height={180} caption="C — sp³ tetrahedral" /> },
      { visual: () => <ShapeDiagram shape="square-planar" central="A" ligand="X" lonePairs={2} width={180} height={180} caption="D — sp³d² square planar" /> },
    ],
    answer: 0,
    explanation: '6 domains with 0 lone pairs → sp³d² hybridization, octahedral geometry with 90° bond angles (e.g., SF₆).',
  },
  {
    id: 'c9q12',
    prompt: 'Given the MO configuration σ₁ₛ² σ*₁ₛ² σ₂ₛ² σ*₂ₛ² σ₂ₚ² π₂ₚ⁴ π*₂ₚ², calculate the bond order.',
    choices: [
      { label: '1' }, { label: '1.5' }, { label: '2' }, { label: '3' },
    ],
    answer: 2,
    explanation: 'Bonding e⁻ = 2+2+2+4 = 10. Antibonding e⁻ = 2+2+2 = 6. BO = (10 − 6)/2 = 2. This is O₂.',
  },
  {
    id: 'c9q13',
    prompt: 'Removing one electron from O₂ gives O₂⁺. Compared to O₂, the bond in O₂⁺ is:',
    choices: [
      { label: 'Longer and weaker (BO drops to 1.5)' },
      { label: 'Shorter and stronger (BO rises to 2.5)' },
      { label: 'Unchanged' },
      { label: 'Same length but paramagnetic' },
    ],
    answer: 1,
    explanation: 'Electron removed from a π*₂ₚ (antibonding) → fewer antibonding electrons → BO rises from 2 to 2.5 → shorter, stronger bond.',
  },
  {
    id: 'c9q14',
    prompt: 'Which of the following molecules has sp³ hybridization at its central atom?',
    choices: [
      { label: 'BF₃' },
      { label: 'CO₂' },
      { label: 'NH₃' },
      { label: 'SF₆' },
    ],
    answer: 2,
    explanation: 'NH₃ has 4 electron domains on N (3 bonds + 1 lone pair) → sp³. BF₃ is sp², CO₂ is sp, SF₆ is sp³d².',
  },
  {
    id: 'c9q15',
    prompt: 'Which MO diagram corresponds to a paramagnetic molecule?',
    promptVisual: () => <div className="text-slate-600 text-xs">(Compare the unpaired electrons in each diagram.)</div>,
    visualChoices: true,
    choices: [
      { visual: () => <MODiagram {...MO_PRESETS.N2} width={260} height={260} caption="A — N₂" /> },
      { visual: () => <MODiagram {...MO_PRESETS.O2} width={260} height={260} caption="B — O₂" /> },
    ],
    answer: 1,
    explanation: 'O₂ has two unpaired electrons in the degenerate π*₂ₚ orbitals → paramagnetic. N₂ has all electrons paired → diamagnetic.',
  },
  {
    id: 'c9q16',
    prompt: 'In the molecule H–C≡C–H, how many sigma (σ) bonds does the entire molecule contain?',
    choices: [
      { label: '2' }, { label: '3' }, { label: '4' }, { label: '5' },
    ],
    answer: 1,
    explanation: '2 C–H σ bonds + 1 C–C σ bond (from the triple bond) = 3 σ bonds. The other 2 bonds in the triple are π bonds.',
  },
]
