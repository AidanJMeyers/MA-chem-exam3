import React from 'react'
import { PeriodicTrendMini } from '../components/visuals/TrendArrow.jsx'

export const QUESTIONS_7 = [
  {
    id: 'c7q1',
    prompt: 'Which arrow correctly shows the direction of increasing atomic radius on the periodic table?',
    visualChoices: true,
    choices: [
      { visual: () => <PeriodicTrendMini direction="increase-left-down" label="radius" color="#0ea5e9" /> },
      { visual: () => <PeriodicTrendMini direction="increase-right-up" label="radius" color="#0ea5e9" /> },
    ],
    answer: 0,
    explanation: 'Radius grows down a group (additional shells) and to the left across a period (lower effective nuclear charge). So the arrow points left-and-down.',
  },
  {
    id: 'c7q2',
    prompt: 'Calculate Z* (effective nuclear charge) felt by the valence electron in Mg, using Z* ≈ Z − (core e⁻).',
    choices: [
      { label: 'Z* ≈ +1' },
      { label: 'Z* ≈ +2' },
      { label: 'Z* ≈ +10' },
      { label: 'Z* ≈ +12' },
    ],
    answer: 1,
    explanation: 'Mg has 12 protons and 10 core electrons ([Ne] core). Z* ≈ 12 − 10 = +2.',
  },
  {
    id: 'c7q3',
    prompt: 'Rank the following isoelectronic species from largest to smallest radius: N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺.',
    choices: [
      { label: 'Mg²⁺ > Na⁺ > F⁻ > O²⁻ > N³⁻' },
      { label: 'N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺' },
      { label: 'F⁻ > O²⁻ > N³⁻ > Na⁺ > Mg²⁺' },
      { label: 'Na⁺ > Mg²⁺ > F⁻ > O²⁻ > N³⁻' },
    ],
    answer: 1,
    explanation: 'All are isoelectronic (10 e⁻). Highest electron-to-proton ratio (N³⁻: 10/7 = 1.43) is largest; lowest (Mg²⁺: 10/12 = 0.83) is smallest.',
  },
  {
    id: 'c7q4',
    prompt: 'Which of these statements about ionization energy is FALSE?',
    choices: [
      { label: 'I₁ is always positive (endothermic)' },
      { label: 'Successive IEs increase: I₁ < I₂ < I₃' },
      { label: 'IE generally increases across a period' },
      { label: 'IE generally increases going down a group' },
    ],
    answer: 3,
    explanation: 'IE *decreases* down a group because the outer electron is farther from the nucleus and more easily removed.',
  },
  {
    id: 'c7q5',
    prompt: 'Element X has successive IEs of 738, 1450, 7730, 10500, 13600 kJ/mol. How many valence electrons does X have?',
    choices: [
      { label: '1' },
      { label: '2' },
      { label: '3' },
      { label: '4' },
    ],
    answer: 1,
    explanation: 'The big jump sits between I₂ and I₃ (1450 → 7730), so there are 2 valence electrons. (This is Mg.)',
  },
  {
    id: 'c7q6',
    prompt: 'Which element has the most exothermic (most negative) electron affinity?',
    choices: [
      { label: 'Na' },
      { label: 'Cl' },
      { label: 'Ne' },
      { label: 'Mg' },
    ],
    answer: 1,
    explanation: 'Chlorine has EA = −349 kJ/mol, the most exothermic of any element. Noble gases have EA ≈ 0; Mg has an essentially zero EA (filled 3s).',
  },
  {
    id: 'c7q7',
    prompt: 'Which atom has the smallest atomic radius?',
    choices: [
      { label: 'Li' },
      { label: 'N' },
      { label: 'F' },
      { label: 'Na' },
    ],
    answer: 2,
    explanation: 'F sits in the top-right of the table — highest Z* in this set and only 2 shells, so smallest.',
  },
  {
    id: 'c7q8',
    prompt: 'Which of these cations is SMALLER than its parent neutral atom?',
    choices: [
      { label: 'Na⁺ (vs. Na)' },
      { label: 'Cl⁻ (vs. Cl)' },
      { label: 'F⁻ (vs. F)' },
      { label: 'O²⁻ (vs. O)' },
    ],
    answer: 0,
    explanation: 'Cations are always smaller than their neutral parent (lost electrons → less repulsion, tighter pull). Anions are always larger.',
  },
  {
    id: 'c7q9',
    prompt: 'Why is I₂ (the second ionization energy) of sodium MUCH larger than I₁?',
    choices: [
      { label: 'Na⁺ is larger than Na' },
      { label: 'I₂ removes a core [Ne] electron, which feels a much larger Z*' },
      { label: 'Sodium loses stability after losing its valence electron' },
      { label: 'The 3s orbital is higher in energy than 2p' },
    ],
    answer: 1,
    explanation: 'Na⁺ has the [Ne] configuration — I₂ pulls a core 2p electron out, and those feel a much larger effective nuclear charge.',
  },
  {
    id: 'c7q10',
    prompt: 'Which set is correctly ordered by increasing first ionization energy?',
    choices: [
      { label: 'F < Cl < Br < I' },
      { label: 'Cs < K < Na < Li' },
      { label: 'Na < Mg < Al < Si' },
      { label: 'Ar < Ne < He' },
    ],
    answer: 1,
    explanation: 'Cs < K < Na < Li: IE rises up a group (smaller atoms, stronger hold). (A) reverses halogens, (C) has a B/Al-style dip, (D) is wrong (He > Ne > Ar in IE).',
  },
  {
    id: 'c7q11',
    prompt: 'The noble gases generally have electron affinities of approximately zero. Why?',
    choices: [
      { label: 'They have full valence shells and no attraction for additional electrons' },
      { label: 'They are highly electronegative' },
      { label: 'Their nuclear charge is too weak' },
      { label: 'They are too small to accommodate another electron' },
    ],
    answer: 0,
    explanation: 'Filled ns²np⁶ shells are maximally stable — adding a new electron would require starting a whole new shell, which is unfavorable.',
  },
  {
    id: 'c7q12',
    prompt: 'Which of the following best summarizes how Z* (effective nuclear charge) changes?',
    choices: [
      { label: 'Decreases across a period, increases down a group' },
      { label: 'Increases across a period, barely changes down a group' },
      { label: 'Increases down a group, decreases across a period' },
      { label: 'Independent of periodic position' },
    ],
    answer: 1,
    explanation: 'Across a period, Z grows but core doesn\'t — Z* rises. Down a group, both Z and core grow roughly in step — Z* barely changes.',
  },
]
