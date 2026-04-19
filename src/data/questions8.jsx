import React from 'react'
import { Molecule } from '../components/visuals/Molecule.jsx'
import { ShapeDiagram } from '../components/visuals/Shapes.jsx'
import { LEWIS } from './chapter8.jsx'

// Additional Lewis structures used as answer choices
const CN_BAD = {
  atoms: [
    { id: 'C', symbol: 'C', x: 60, y: 70, lonePairs: [180, 270], formalCharge: -2, fcOffset: [0, -28] },
    { id: 'N', symbol: 'N', x: 140, y: 70, lonePairs: [0, 270], formalCharge: 1, fcOffset: [0, -28] },
  ],
  bonds: [{ from: 'C', to: 'N', order: 2 }],
}
const CN_GOOD = {
  atoms: [
    { id: 'C', symbol: 'C', x: 60, y: 70, lonePairs: [180], formalCharge: -1, fcOffset: [0, -28] },
    { id: 'N', symbol: 'N', x: 140, y: 70, lonePairs: [0] },
  ],
  bonds: [{ from: 'C', to: 'N', order: 3 }],
}

// Simple N2 variants for "which is correct" visual
const N2_TRIPLE = {
  atoms: [
    { id: 'N1', symbol: 'N', x: 60, y: 70, lonePairs: [180] },
    { id: 'N2', symbol: 'N', x: 140, y: 70, lonePairs: [0] },
  ],
  bonds: [{ from: 'N1', to: 'N2', order: 3 }],
}
const N2_DOUBLE = {
  atoms: [
    { id: 'N1', symbol: 'N', x: 60, y: 70, lonePairs: [180, 270] },
    { id: 'N2', symbol: 'N', x: 140, y: 70, lonePairs: [0, 270] },
  ],
  bonds: [{ from: 'N1', to: 'N2', order: 2 }],
}

// SO3 resonance-contributor variants
const SO3_best = {
  atoms: [
    { id: 'S', symbol: 'S', x: 120, y: 100 },
    { id: 'O1', symbol: 'O', x: 120, y: 35, lonePairs: [45, 135] },
    { id: 'O2', symbol: 'O', x: 50, y: 150, lonePairs: [180, 225, 270] },
    { id: 'O3', symbol: 'O', x: 190, y: 150, lonePairs: [0, 315, 270] },
  ],
  bonds: [
    { from: 'S', to: 'O1', order: 2 },
    { from: 'S', to: 'O2', order: 1 },
    { from: 'S', to: 'O3', order: 1 },
  ],
}
const SO3_allSingle = {
  atoms: [
    { id: 'S', symbol: 'S', x: 120, y: 100, lonePairs: [270] },
    { id: 'O1', symbol: 'O', x: 120, y: 35, lonePairs: [45, 135, 270] },
    { id: 'O2', symbol: 'O', x: 50, y: 150, lonePairs: [180, 225, 270] },
    { id: 'O3', symbol: 'O', x: 190, y: 150, lonePairs: [0, 315, 270] },
  ],
  bonds: [
    { from: 'S', to: 'O1', order: 1 },
    { from: 'S', to: 'O2', order: 1 },
    { from: 'S', to: 'O3', order: 1 },
  ],
}

export const QUESTIONS_8 = [
  {
    id: 'c8q1',
    prompt: 'Which of these is the CORRECT Lewis structure for N₂?',
    visualChoices: true,
    choices: [
      { visual: () => <Molecule {...N2_TRIPLE} caption="A" /> },
      { visual: () => <Molecule {...N2_DOUBLE} caption="B" /> },
    ],
    answer: 0,
    explanation: 'N₂ has 10 valence electrons. Each N completes its octet only with a triple bond (1 σ + 2 π) and one lone pair, giving formal charge 0 on both atoms.',
  },
  {
    id: 'c8q2',
    prompt: 'Which Lewis structure of CN⁻ (cyanide anion) is preferred by formal-charge reasoning?',
    visualChoices: true,
    choices: [
      { visual: () => <Molecule {...CN_GOOD} caption="A — C≡N with LP on each, FC(C)=−1, FC(N)=0" showFormalCharges /> },
      { visual: () => <Molecule {...CN_BAD} caption="B — C=N with 2 LPs on C, FC(C)=−2, FC(N)=+1" showFormalCharges /> },
    ],
    answer: 0,
    explanation: 'Structure A minimizes formal charges (sum = −1 for the anion, with the negative on C, fine since both C and N are comparable). Structure B has |FC| = 2 somewhere AND +/− on adjacent atoms — worse.',
  },
  {
    id: 'c8q3',
    prompt: 'Total valence electrons in the sulfate ion SO₄²⁻?',
    choices: [
      { label: '30' }, { label: '32' }, { label: '34' }, { label: '24' },
    ],
    answer: 1,
    explanation: 'S: 6 + 4·O: 6·4 = 24 + 2 (from 2− charge) = 32 valence electrons.',
  },
  {
    id: 'c8q4',
    prompt: 'Calculate the formal charge on the central oxygen in H₃O⁺ (the hydronium ion).',
    choices: [
      { label: '0' }, { label: '+1' }, { label: '−1' }, { label: '+2' },
    ],
    answer: 1,
    explanation: 'O has V=6, one lone pair (L=2), and 3 O–H bonds (B=6). FC = 6 − (2 + 6/2) = 6 − 5 = +1. Sum of FCs matches the +1 charge on H₃O⁺.',
  },
  {
    id: 'c8q5',
    prompt: 'How many total electron domains (bonding + lone pairs) are on the central atom in SF₄?',
    choices: [
      { label: '4' }, { label: '5' }, { label: '6' }, { label: '3' },
    ],
    answer: 1,
    explanation: 'S has 4 bonded F\'s and 1 lone pair = 5 electron domains → trigonal-bipyramidal electron geometry, seesaw molecular shape.',
  },
  {
    id: 'c8q6',
    prompt: 'Which molecular geometry corresponds to AX₂E₂ (e.g., H₂O)?',
    visualChoices: true,
    choices: [
      { visual: () => <ShapeDiagram shape="bent" central="A" ligand="X" lonePairs={2} width={180} height={180} caption="A — bent" /> },
      { visual: () => <ShapeDiagram shape="trigonal-planar" central="A" ligand="X" width={180} height={180} caption="B — trigonal planar" /> },
      { visual: () => <ShapeDiagram shape="linear" central="A" ligand="X" width={180} height={180} caption="C — linear" /> },
      { visual: () => <ShapeDiagram shape="tetrahedral" central="A" ligand="X" width={180} height={180} caption="D — tetrahedral" /> },
    ],
    answer: 0,
    explanation: 'AX₂E₂ = 4 electron domains (tetrahedral electron geometry) with 2 lone pairs, giving a bent molecular shape (~104.5°).',
  },
  {
    id: 'c8q7',
    prompt: 'Which molecule is NONPOLAR despite having polar bonds?',
    choices: [
      { label: 'H₂O' },
      { label: 'NH₃' },
      { label: 'CO₂' },
      { label: 'HCl' },
    ],
    answer: 2,
    explanation: 'CO₂ is linear (AX₂), so the two equal C=O bond dipoles point in opposite directions and cancel. H₂O (bent) and NH₃ (trigonal pyramidal) do not cancel; HCl is a single polar bond.',
  },
  {
    id: 'c8q8',
    prompt: 'Rank bond lengths from shortest to longest: C–C, C=C, C≡C.',
    choices: [
      { label: 'C–C < C=C < C≡C' },
      { label: 'C≡C < C=C < C–C' },
      { label: 'C=C < C–C < C≡C' },
      { label: 'They are all equal' },
    ],
    answer: 1,
    explanation: 'Higher bond order → shorter bond. C≡C (~120 pm) < C=C (~134) < C–C (~154).',
  },
  {
    id: 'c8q9',
    prompt: 'Which of the following ΔEN values corresponds to a POLAR COVALENT bond (approximate)?',
    choices: [
      { label: 'ΔEN = 0.0' },
      { label: 'ΔEN = 0.2' },
      { label: 'ΔEN = 1.0' },
      { label: 'ΔEN = 2.5' },
    ],
    answer: 2,
    explanation: 'ΔEN between 0.4 and 1.7 is polar covalent. Below ~0.4 is essentially nonpolar; above ~1.7 is considered ionic.',
  },
  {
    id: 'c8q10',
    prompt: 'Which molecule is polar?',
    visualChoices: true,
    choices: [
      { visual: () => <ShapeDiagram shape="tetrahedral" central="C" ligand="Cl" width={180} height={180} caption="A — CCl₄" /> },
      { visual: () => <ShapeDiagram shape="bent" central="O" ligand="H" lonePairs={2} width={180} height={180} caption="B — H₂O" /> },
      { visual: () => <ShapeDiagram shape="trigonal-planar" central="B" ligand="F" width={180} height={180} caption="C — BF₃" /> },
      { visual: () => <ShapeDiagram shape="linear" central="C" ligand="O" width={180} height={180} caption="D — CO₂" /> },
    ],
    answer: 1,
    explanation: 'H₂O is bent (lone pairs on O) — its bond dipoles do not cancel, giving a net dipole. CCl₄, BF₃, and CO₂ are all symmetric → nonpolar.',
  },
  {
    id: 'c8q11',
    prompt: 'Which best-fits the Lewis structure of SO₃?',
    visualChoices: true,
    choices: [
      { visual: () => <Molecule {...SO3_best} caption="A — one S=O double bond (+ resonance)" /> },
      { visual: () => <Molecule {...SO3_allSingle} caption="B — all single bonds, LP on S" /> },
    ],
    answer: 0,
    explanation: 'SO₃ has 24 valence electrons. The best structure has one S=O and two S–O (with resonance — all three equivalent in reality), giving formal charges of 0 on S and most atoms.',
  },
  {
    id: 'c8q12',
    prompt: 'The electron-domain geometry of PCl₅ is:',
    visualChoices: true,
    choices: [
      { visual: () => <ShapeDiagram shape="tetrahedral" central="P" ligand="Cl" width={180} height={180} caption="A — tetrahedral" /> },
      { visual: () => <ShapeDiagram shape="octahedral" central="P" ligand="Cl" width={180} height={180} caption="B — octahedral" /> },
      { visual: () => <ShapeDiagram shape="trigonal-bipyramidal" central="P" ligand="Cl" width={180} height={180} caption="C — trigonal bipyramidal" /> },
      { visual: () => <ShapeDiagram shape="seesaw" central="P" ligand="Cl" lonePairs={1} width={180} height={180} caption="D — seesaw" /> },
    ],
    answer: 2,
    explanation: 'PCl₅ has 5 bonding domains and no lone pairs → trigonal-bipyramidal electron and molecular geometry.',
  },
  {
    id: 'c8q13',
    prompt: 'How many lone pairs are on the central atom in ClF₃?',
    choices: [
      { label: '0' }, { label: '1' }, { label: '2' }, { label: '3' },
    ],
    answer: 2,
    explanation: 'Cl has 7 VE. Three F atoms take 3·2 = 6 electrons for the single bonds → 7 − 3 = 4 extra on Cl, arranged as 2 lone pairs. AX₃E₂ → T-shaped.',
  },
  {
    id: 'c8q14',
    prompt: 'Which of the following describes CORRECTLY how bond dissociation energy (BDE) varies?',
    choices: [
      { label: 'BDE decreases with increasing bond order' },
      { label: 'BDE is independent of bond order' },
      { label: 'BDE increases with increasing bond order' },
      { label: 'BDE only depends on atomic radius' },
    ],
    answer: 2,
    explanation: 'A triple bond holds the atoms together with more shared electron density than a single bond — more energy required to break → higher BDE.',
  },
  {
    id: 'c8q15',
    prompt: 'Which molecule does NOT obey the octet rule (central atom has fewer than 8 valence electrons)?',
    choices: [
      { label: 'CO₂' },
      { label: 'NH₃' },
      { label: 'BF₃' },
      { label: 'H₂O' },
    ],
    answer: 2,
    explanation: 'BF₃ has only 6 electrons around B. This is acceptable because making B=F would place a +1 formal charge on the very electronegative F.',
  },
  {
    id: 'c8q16',
    prompt: 'Which pair of atoms forms the MOST polar bond?',
    choices: [
      { label: 'C–H' },
      { label: 'O–H' },
      { label: 'N–H' },
      { label: 'F–H' },
    ],
    answer: 3,
    explanation: 'ΔEN: F–H ≈ 1.8 (highest), O–H ≈ 1.2, N–H ≈ 0.8, C–H ≈ 0.4. Largest ΔEN = most polar.',
  },
  {
    id: 'c8q17',
    prompt: 'How many σ and π bonds are in CO₂?',
    choices: [
      { label: '2 σ and 2 π' },
      { label: '4 σ and 0 π' },
      { label: '2 σ and 0 π' },
      { label: '1 σ and 2 π' },
    ],
    answer: 0,
    explanation: 'Each C=O double bond = 1 σ + 1 π. Two double bonds total → 2 σ + 2 π.',
  },
]
