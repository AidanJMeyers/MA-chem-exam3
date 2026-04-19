import React from 'react'
import { Molecule } from '../components/visuals/Molecule.jsx'
import { ShapeDiagram } from '../components/visuals/Shapes.jsx'
import { MODiagram, MO_PRESETS } from '../components/visuals/MODiagram.jsx'
import { HybridizationDiagram } from '../components/visuals/Orbitals.jsx'
import { PeriodicTrendMini } from '../components/visuals/TrendArrow.jsx'

// Exam-only questions to round out to 50. These are NEW (not recycled from chapter sets).

export const EXAM_EXTRA = [
  // ------ Chapter 7 extras ------
  {
    chapter: 7,
    id: 'ex-c7-1',
    prompt: 'Which of these elements has the LARGEST atomic radius?',
    choices: [{ label: 'Li' }, { label: 'Na' }, { label: 'K' }, { label: 'Cs' }],
    answer: 3,
    explanation: 'Radius grows down a group. Cs is the bottom of the alkali metals in the dataset → largest.',
  },
  {
    chapter: 7,
    id: 'ex-c7-2',
    prompt: 'Which element has the HIGHEST first ionization energy?',
    choices: [{ label: 'Na' }, { label: 'Mg' }, { label: 'F' }, { label: 'He' }],
    answer: 3,
    explanation: 'IE rises right and up. He (top-right corner) has the highest IE₁ of any element (~2372 kJ/mol).',
  },
  {
    chapter: 7,
    id: 'ex-c7-3',
    prompt: 'Which is smaller: Cl or Cl⁻?',
    choices: [
      { label: 'Cl (because gaining an electron makes the atom smaller)' },
      { label: 'Cl⁻ (anions are always smaller than their parent atom)' },
      { label: 'Cl (adding an electron increases repulsion, making the ion larger)' },
      { label: 'They are the same size' },
    ],
    answer: 2,
    explanation: 'Wording matters: Cl is smaller than Cl⁻ because adding an electron raises repulsion and expands the electron cloud. Anions are larger than their parent atoms.',
  },
  {
    chapter: 7,
    id: 'ex-c7-4',
    prompt: 'Predict Z* (effective nuclear charge) felt by the 3s valence electron in Al.',
    choices: [{ label: '+1' }, { label: '+2' }, { label: '+3' }, { label: '+13' }],
    answer: 2,
    explanation: 'Al: 13 protons − 10 core electrons = +3 effective nuclear charge (Slater-style shortcut).',
  },
  {
    chapter: 7,
    id: 'ex-c7-5',
    prompt: 'Which element is expected to have a POSITIVE (or near-zero) electron affinity — i.e., resist gaining an electron?',
    choices: [{ label: 'Cl' }, { label: 'N' }, { label: 'O' }, { label: 'C' }],
    answer: 1,
    explanation: 'Nitrogen\'s 2p³ subshell is half-filled — an added electron destabilizes that arrangement, making EA nearly zero (slightly positive in textbooks).',
  },

  // ------ Chapter 8 extras ------
  {
    chapter: 8,
    id: 'ex-c8-1',
    prompt: 'What is the electron-domain geometry and molecular shape of XeF₄?',
    visualChoices: true,
    choices: [
      { visual: () => <ShapeDiagram shape="square-planar" central="Xe" ligand="F" lonePairs={2} width={180} height={180} caption="A — square planar (AX₄E₂)" /> },
      { visual: () => <ShapeDiagram shape="tetrahedral" central="Xe" ligand="F" width={180} height={180} caption="B — tetrahedral" /> },
      { visual: () => <ShapeDiagram shape="seesaw" central="Xe" ligand="F" lonePairs={1} width={180} height={180} caption="C — seesaw" /> },
      { visual: () => <ShapeDiagram shape="octahedral" central="Xe" ligand="F" width={180} height={180} caption="D — octahedral" /> },
    ],
    answer: 0,
    explanation: 'XeF₄ has 6 electron domains (4 bonds + 2 lone pairs). Octahedral electron geometry → square-planar molecular shape (lone pairs opposite each other).',
  },
  {
    chapter: 8,
    id: 'ex-c8-2',
    prompt: 'The formal charge on sulfur in the best Lewis structure of SO₄²⁻ (with two S=O double bonds) is:',
    choices: [{ label: '0' }, { label: '+1' }, { label: '+2' }, { label: '−2' }],
    answer: 0,
    explanation: 'S (V=6) with 4 bonded O (two single → FC = 6; two double → more bonding e⁻) works out to FC(S) = 0 when two S=O are drawn. This is the preferred structure.',
  },
  {
    chapter: 8,
    id: 'ex-c8-3',
    prompt: 'Which species has a bent molecular shape?',
    visualChoices: true,
    choices: [
      { visual: () => <ShapeDiagram shape="linear" central="C" ligand="O" width={180} height={180} caption="A — CO₂" /> },
      { visual: () => <ShapeDiagram shape="bent" central="S" ligand="O" lonePairs={1} width={180} height={180} caption="B — SO₂" /> },
      { visual: () => <ShapeDiagram shape="trigonal-planar" central="B" ligand="F" width={180} height={180} caption="C — BF₃" /> },
      { visual: () => <ShapeDiagram shape="tetrahedral" central="C" ligand="H" width={180} height={180} caption="D — CH₄" /> },
    ],
    answer: 1,
    explanation: 'SO₂ is AX₂E — one lone pair on S pushes the two S=O bonds into a bent shape (~119°).',
  },
  {
    chapter: 8,
    id: 'ex-c8-4',
    prompt: 'Between HF, HCl, HBr, and HI, which bond is the STRONGEST (highest BDE)?',
    choices: [{ label: 'HF' }, { label: 'HCl' }, { label: 'HBr' }, { label: 'HI' }],
    answer: 0,
    explanation: 'HF: smallest atoms, shortest bond, highest BDE (~567 kJ/mol). BDE drops as you go down the halogens.',
  },
  {
    chapter: 8,
    id: 'ex-c8-5',
    prompt: 'Which molecule contains EXACTLY TWO lone pairs on the central atom?',
    choices: [{ label: 'H₂O' }, { label: 'NH₃' }, { label: 'CH₄' }, { label: 'SF₄' }],
    answer: 0,
    explanation: 'H₂O: O has 2 bonds + 2 lone pairs. NH₃ has 1 LP, CH₄ has 0 LPs, SF₄ has 1 LP.',
  },
  {
    chapter: 8,
    id: 'ex-c8-6',
    prompt: 'Which statement about polarity is TRUE?',
    choices: [
      { label: 'A molecule with no polar bonds must still be polar if it is bent' },
      { label: 'Any molecule with polar bonds is automatically polar' },
      { label: 'A symmetric molecule with identical polar bonds can be nonpolar' },
      { label: 'Only ionic compounds can be polar' },
    ],
    answer: 2,
    explanation: 'CO₂ has polar bonds but is nonpolar because the dipoles cancel by symmetry. Shape dictates whether bond dipoles cancel.',
  },

  // ------ Chapter 9 extras ------
  {
    chapter: 9,
    id: 'ex-c9-1',
    prompt: 'How many σ bonds and π bonds are in ethylene (C₂H₄)?',
    choices: [
      { label: '5 σ and 1 π' }, { label: '4 σ and 2 π' }, { label: '6 σ and 0 π' }, { label: '3 σ and 2 π' },
    ],
    answer: 0,
    explanation: 'Ethylene: 4 C–H bonds (4 σ) + 1 C=C (1 σ + 1 π) → 5 σ + 1 π.',
  },
  {
    chapter: 9,
    id: 'ex-c9-2',
    prompt: 'What is the hybridization of the central atom in SF₆?',
    choices: [{ label: 'sp²' }, { label: 'sp³' }, { label: 'sp³d' }, { label: 'sp³d²' }],
    answer: 3,
    explanation: 'SF₆ has 6 bonding domains and 0 lone pairs → 6 electron domains → sp³d² hybridization, octahedral shape.',
  },
  {
    chapter: 9,
    id: 'ex-c9-3',
    prompt: 'Which MO is designated an "antibonding" orbital?',
    choices: [{ label: 'σ₂ₚ' }, { label: 'π₂ₚ' }, { label: 'σ*₂ₛ' }, { label: 'σ₁ₛ' }],
    answer: 2,
    explanation: 'The star (*) denotes an antibonding MO. Antibonding MOs are higher in energy than the parent atomic orbitals.',
  },
  {
    chapter: 9,
    id: 'ex-c9-4',
    prompt: 'Which diatomic species has a BOND ORDER of 2.5?',
    choices: [{ label: 'N₂' }, { label: 'O₂' }, { label: 'O₂⁺' }, { label: 'O₂⁻' }],
    answer: 2,
    explanation: 'O₂⁺ removes one electron from π*₂ₚ, giving BO = (8 − 3)/2 = 2.5. O₂⁻ is BO 1.5.',
  },
  {
    chapter: 9,
    id: 'ex-c9-5',
    prompt: 'If four atomic orbitals (1 s + 3 p) are mixed, how many hybrid orbitals are produced?',
    choices: [{ label: '3' }, { label: '4' }, { label: '2' }, { label: '6' }],
    answer: 1,
    explanation: '# atomic orbitals mixed = # hybrid orbitals produced. 1 + 3 = 4 → four sp³ hybrids.',
  },
  {
    chapter: 9,
    id: 'ex-c9-6',
    prompt: 'The bond angle around the central atom in a molecule with sp³ hybridization and NO lone pairs is:',
    choices: [{ label: '180°' }, { label: '120°' }, { label: '109.5°' }, { label: '90°' }],
    answer: 2,
    explanation: 'sp³ with 4 bonding domains gives tetrahedral geometry → 109.5° angles (like CH₄).',
  },
  {
    chapter: 9,
    id: 'ex-c9-7',
    prompt: 'Which of these diatomics is diamagnetic?',
    promptVisual: () => (
      <div className="flex gap-4">
        <MODiagram {...MO_PRESETS.N2} width={200} height={240} />
        <MODiagram {...MO_PRESETS.O2} width={200} height={240} />
      </div>
    ),
    choices: [{ label: 'O₂' }, { label: 'N₂' }, { label: 'B₂' }, { label: 'O₂⁻' }],
    answer: 1,
    explanation: 'N₂ has no unpaired electrons in its MO diagram — all paired, all in bonding orbitals up through σ₂ₚ → diamagnetic.',
  },
  {
    chapter: 9,
    id: 'ex-c9-8',
    prompt: 'Which hybridization has ONE unhybridized p orbital left over to form a π bond?',
    choices: [{ label: 'sp' }, { label: 'sp²' }, { label: 'sp³' }, { label: 'sp³d' }],
    answer: 1,
    explanation: 'sp² uses 1 s + 2 of the 3 p orbitals → 1 p orbital left unhybridized, available to form a π bond (as in ethylene).',
  },
  {
    chapter: 9,
    id: 'ex-c9-9',
    prompt: 'Name the hybrid orbitals produced by mixing a 3s, three 3p, and two 3d orbitals.',
    choices: [
      { label: 'Six sp³d² orbitals' },
      { label: 'Five sp³d orbitals' },
      { label: 'Four sp³ orbitals' },
      { label: 'Three sp² orbitals' },
    ],
    answer: 0,
    explanation: '1 + 3 + 2 = 6 orbitals in → 6 hybrid orbitals out, named sp³d². Used for octahedral species like SF₆.',
  },
  {
    chapter: 9,
    id: 'ex-c9-10',
    prompt: 'For the molecule HCN, how many π bonds are present?',
    choices: [{ label: '0' }, { label: '1' }, { label: '2' }, { label: '3' }],
    answer: 2,
    explanation: 'H–C≡N has one triple bond (1 σ + 2 π) plus one single C–H bond. Total π = 2.',
  },
]
