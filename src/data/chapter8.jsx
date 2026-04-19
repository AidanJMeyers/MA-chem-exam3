import React from 'react'
import { Molecule } from '../components/visuals/Molecule.jsx'
import { ShapeDiagram } from '../components/visuals/Shapes.jsx'

// ------------------ Pre-built Lewis structures used throughout Ch 8 ------------------

export const LEWIS = {
  H2O: {
    atoms: [
      { id: 'O', symbol: 'O', x: 120, y: 90, lonePairs: [70, 110] },
      { id: 'H1', symbol: 'H', x: 60, y: 140 },
      { id: 'H2', symbol: 'H', x: 180, y: 140 },
    ],
    bonds: [
      { from: 'O', to: 'H1', order: 1 },
      { from: 'O', to: 'H2', order: 1 },
    ],
  },
  CO2: {
    atoms: [
      { id: 'C', symbol: 'C', x: 120, y: 90 },
      { id: 'O1', symbol: 'O', x: 50, y: 90, lonePairs: [130, 230] },
      { id: 'O2', symbol: 'O', x: 190, y: 90, lonePairs: [-50, 50] },
    ],
    bonds: [
      { from: 'C', to: 'O1', order: 2 },
      { from: 'C', to: 'O2', order: 2 },
    ],
  },
  HCN: {
    atoms: [
      { id: 'H', symbol: 'H', x: 40, y: 90 },
      { id: 'C', symbol: 'C', x: 110, y: 90 },
      { id: 'N', symbol: 'N', x: 210, y: 90, lonePairs: [0] },
    ],
    bonds: [
      { from: 'H', to: 'C', order: 1 },
      { from: 'C', to: 'N', order: 3 },
    ],
  },
  CH2O_correct: {
    atoms: [
      { id: 'C', symbol: 'C', x: 120, y: 95 },
      { id: 'O', symbol: 'O', x: 120, y: 30, lonePairs: [135, 45] },
      { id: 'H1', symbol: 'H', x: 60, y: 145 },
      { id: 'H2', symbol: 'H', x: 180, y: 145 },
    ],
    bonds: [
      { from: 'C', to: 'O', order: 2 },
      { from: 'C', to: 'H1', order: 1 },
      { from: 'C', to: 'H2', order: 1 },
    ],
  },
  CH2O_wrong: {
    atoms: [
      { id: 'C', symbol: 'C', x: 120, y: 95, lonePairs: [225] },
      { id: 'O', symbol: 'O', x: 120, y: 30, lonePairs: [45] },
      { id: 'H1', symbol: 'H', x: 60, y: 145 },
      { id: 'H2', symbol: 'H', x: 180, y: 145 },
    ],
    bonds: [
      { from: 'C', to: 'O', order: 1 },
      { from: 'C', to: 'H1', order: 1 },
      { from: 'C', to: 'H2', order: 1 },
    ],
  },
  NH3: {
    atoms: [
      { id: 'N', symbol: 'N', x: 120, y: 90, lonePairs: [90] },
      { id: 'H1', symbol: 'H', x: 60, y: 150 },
      { id: 'H2', symbol: 'H', x: 180, y: 150 },
      { id: 'H3', symbol: 'H', x: 120, y: 30 },
    ],
    bonds: [
      { from: 'N', to: 'H1', order: 1 },
      { from: 'N', to: 'H2', order: 1 },
      { from: 'N', to: 'H3', order: 1 },
    ],
  },
  CH4: {
    atoms: [
      { id: 'C', symbol: 'C', x: 120, y: 95 },
      { id: 'H1', symbol: 'H', x: 120, y: 30 },
      { id: 'H2', symbol: 'H', x: 60, y: 145 },
      { id: 'H3', symbol: 'H', x: 180, y: 145 },
      { id: 'H4', symbol: 'H', x: 120, y: 160 },
    ],
    bonds: [
      { from: 'C', to: 'H1', order: 1 },
      { from: 'C', to: 'H2', order: 1 },
      { from: 'C', to: 'H3', order: 1 },
      { from: 'C', to: 'H4', order: 1 },
    ],
  },
  BF3: {
    atoms: [
      { id: 'B', symbol: 'B', x: 120, y: 95 },
      { id: 'F1', symbol: 'F', x: 120, y: 30, lonePairs: [45, 135, 270] },
      { id: 'F2', symbol: 'F', x: 55, y: 140, lonePairs: [180, 270, 0] },
      { id: 'F3', symbol: 'F', x: 185, y: 140, lonePairs: [0, 90, 180] },
    ],
    bonds: [
      { from: 'B', to: 'F1', order: 1 },
      { from: 'B', to: 'F2', order: 1 },
      { from: 'B', to: 'F3', order: 1 },
    ],
  },
  PCl5: {
    atoms: [
      { id: 'P', symbol: 'P', x: 120, y: 100 },
      { id: 'Cl1', symbol: 'Cl', x: 120, y: 25 },
      { id: 'Cl2', symbol: 'Cl', x: 120, y: 175 },
      { id: 'Cl3', symbol: 'Cl', x: 35, y: 115 },
      { id: 'Cl4', symbol: 'Cl', x: 205, y: 115 },
      { id: 'Cl5', symbol: 'Cl', x: 175, y: 70 },
    ],
    bonds: [
      { from: 'P', to: 'Cl1', order: 1 },
      { from: 'P', to: 'Cl2', order: 1 },
      { from: 'P', to: 'Cl3', order: 1 },
      { from: 'P', to: 'Cl4', order: 1 },
      { from: 'P', to: 'Cl5', order: 1 },
    ],
  },
  SF4: {
    atoms: [
      { id: 'S', symbol: 'S', x: 120, y: 100, lonePairs: [30] },
      { id: 'F1', symbol: 'F', x: 120, y: 25 },
      { id: 'F2', symbol: 'F', x: 120, y: 175 },
      { id: 'F3', symbol: 'F', x: 35, y: 115 },
      { id: 'F4', symbol: 'F', x: 205, y: 115 },
    ],
    bonds: [
      { from: 'S', to: 'F1', order: 1 },
      { from: 'S', to: 'F2', order: 1 },
      { from: 'S', to: 'F3', order: 1 },
      { from: 'S', to: 'F4', order: 1 },
    ],
  },
  SF6: {
    atoms: [
      { id: 'S', symbol: 'S', x: 120, y: 100 },
      { id: 'F1', symbol: 'F', x: 120, y: 25 },
      { id: 'F2', symbol: 'F', x: 120, y: 175 },
      { id: 'F3', symbol: 'F', x: 35, y: 100 },
      { id: 'F4', symbol: 'F', x: 205, y: 100 },
      { id: 'F5', symbol: 'F', x: 60, y: 50 },
      { id: 'F6', symbol: 'F', x: 180, y: 150 },
    ],
    bonds: [
      { from: 'S', to: 'F1', order: 1 },
      { from: 'S', to: 'F2', order: 1 },
      { from: 'S', to: 'F3', order: 1 },
      { from: 'S', to: 'F4', order: 1 },
      { from: 'S', to: 'F5', order: 1 },
      { from: 'S', to: 'F6', order: 1 },
    ],
  },
  O3: {
    atoms: [
      { id: 'O1', symbol: 'O', x: 60, y: 130, lonePairs: [180, 270, 90] },
      { id: 'O2', symbol: 'O', x: 120, y: 70, lonePairs: [90], charge: 1 },
      { id: 'O3', symbol: 'O', x: 180, y: 130, lonePairs: [0, 270, 90], charge: -1 },
    ],
    bonds: [
      { from: 'O1', to: 'O2', order: 2 },
      { from: 'O2', to: 'O3', order: 1 },
    ],
  },
  O3_alt: {
    atoms: [
      { id: 'O1', symbol: 'O', x: 60, y: 130, lonePairs: [180, 270, 90], charge: -1 },
      { id: 'O2', symbol: 'O', x: 120, y: 70, lonePairs: [90], charge: 1 },
      { id: 'O3', symbol: 'O', x: 180, y: 130, lonePairs: [0, 270, 90] },
    ],
    bonds: [
      { from: 'O1', to: 'O2', order: 1 },
      { from: 'O2', to: 'O3', order: 2 },
    ],
  },
}

function FormalChargeTable() {
  return (
    <div className="text-sm w-full">
      <div className="font-semibold text-slate-800 mb-1">Formal charge worked example — HCN</div>
      <p className="text-xs text-slate-600 mb-2">FC = V − (L + ½B), where V = valence e⁻, L = lone-pair e⁻, B = bonding e⁻.</p>
      <table className="w-full text-xs">
        <thead className="text-slate-500 text-left">
          <tr>
            <th>Atom</th><th>V</th><th>L</th><th>B</th><th>FC</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t"><td className="py-1 font-semibold">H</td><td>1</td><td>0</td><td>2</td><td className="text-emerald-600 font-bold">0</td></tr>
          <tr className="border-t"><td className="py-1 font-semibold">C</td><td>4</td><td>0</td><td>8</td><td className="text-emerald-600 font-bold">0</td></tr>
          <tr className="border-t"><td className="py-1 font-semibold">N</td><td>5</td><td>2</td><td>6</td><td className="text-emerald-600 font-bold">0</td></tr>
        </tbody>
      </table>
      <p className="text-xs text-emerald-700 mt-2 font-semibold">Sum = 0 ✓ (neutral molecule)</p>
    </div>
  )
}

function AXETable() {
  const rows = [
    ['AX₂', 0, 'Linear', 'Linear', '180°'],
    ['AX₃', 0, 'Trigonal planar', 'Trigonal planar', '120°'],
    ['AX₂E', 1, 'Trigonal planar', 'Bent', '~118°'],
    ['AX₄', 0, 'Tetrahedral', 'Tetrahedral', '109.5°'],
    ['AX₃E', 1, 'Tetrahedral', 'Trigonal pyramidal', '~107°'],
    ['AX₂E₂', 2, 'Tetrahedral', 'Bent', '~104.5°'],
    ['AX₅', 0, 'Trig. bipyramidal', 'Trig. bipyramidal', '120°/90°'],
    ['AX₄E', 1, 'Trig. bipyramidal', 'Seesaw', '~(<120°/<90°)'],
    ['AX₃E₂', 2, 'Trig. bipyramidal', 'T-shaped', '~90°'],
    ['AX₂E₃', 3, 'Trig. bipyramidal', 'Linear', '180°'],
    ['AX₆', 0, 'Octahedral', 'Octahedral', '90°'],
    ['AX₅E', 1, 'Octahedral', 'Square pyramidal', '~(<90°)'],
    ['AX₄E₂', 2, 'Octahedral', 'Square planar', '90°'],
  ]
  return (
    <div className="text-xs w-full">
      <div className="font-semibold text-slate-800 mb-1 text-sm">VSEPR / AXE reference table</div>
      <table className="w-full">
        <thead className="text-slate-500 text-left">
          <tr>
            <th>AXE</th><th>LP</th><th>Electron geom.</th><th>Molecular shape</th><th>Angles</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t">
              <td className="py-0.5 font-mono font-bold text-slate-800">{r[0]}</td>
              <td>{r[1]}</td>
              <td>{r[2]}</td>
              <td className="font-semibold">{r[3]}</td>
              <td>{r[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function BondOrderTable() {
  return (
    <div className="text-sm w-full">
      <div className="font-semibold text-slate-800 mb-1">Bond order → length & strength</div>
      <table className="w-full text-xs">
        <thead className="text-slate-500 text-left">
          <tr><th>Bond</th><th>Order</th><th>Length</th><th>BDE</th></tr>
        </thead>
        <tbody>
          <tr className="border-t"><td className="py-1">C—C</td><td>1</td><td>~154 pm</td><td>~346 kJ/mol</td></tr>
          <tr className="border-t"><td className="py-1">C=C</td><td>2</td><td>~134 pm</td><td>~611 kJ/mol</td></tr>
          <tr className="border-t"><td className="py-1">C≡C</td><td>3</td><td>~120 pm</td><td>~835 kJ/mol</td></tr>
        </tbody>
      </table>
      <p className="text-xs text-slate-600 mt-2">Higher bond order → <b>shorter</b> bond, <b>stronger</b> bond, <b>larger</b> bond dissociation energy (BDE).</p>
    </div>
  )
}

export const CHAPTER_8 = {
  id: 8,
  title: 'Ch. 8 — Bonding & Molecular Structure',
  summary:
    'Lewis structures, formal charge, VSEPR (AXE model), electronegativity, bond polarity, molecular polarity, and bond-order trends.',
  blocks: [
    {
      title: 'Valence electrons & Lewis symbols',
      tag: 'foundation',
      body: () => (
        <>
          <p>
            Chemistry of main-group atoms is the chemistry of <b>valence electrons</b> — the outermost electrons with
            the highest principal quantum number (<i>n</i>). Lewis symbols track these by placing up to 8 dots around
            the element symbol (4 "sides," 2 dots each, only pairing when forced).
          </p>
          <p className="mt-3">
            The <b>octet rule</b> says most main-group atoms bond so that each atom ends with 8 valence electrons
            (ns²np⁶ — a noble-gas configuration). Hydrogen follows a <b>duet rule</b> — it's stable at 2 valence
            electrons (like He).
          </p>
          <p className="mt-3">
            <b>Covalency</b> = the number of bonds an atom typically forms. Count how many electrons it's missing from
            an octet: H needs 1, O needs 2, N needs 3, C needs 4. Those missing electrons become shared bonding pairs.
          </p>
        </>
      ),
      whyItMatters: 'Every Lewis structure you draw starts with counting valence electrons — miscount once, and the rest of the problem is wrong.',
    },
    {
      title: 'Drawing Lewis structures — the 5-step algorithm',
      tag: 'procedure',
      body: () => (
        <>
          <ol className="list-decimal pl-5 space-y-2">
            <li><b>Count total valence electrons.</b> Add 1 per negative charge; subtract 1 per positive charge.</li>
            <li><b>Put the least electronegative atom in the center</b> (H and F are always terminal).</li>
            <li><b>Connect everything with single bonds</b> first (2 e⁻ per bond).</li>
            <li><b>Complete octets on outer atoms</b> (add lone pairs). Any leftover electrons go on the central atom.</li>
            <li><b>If the central atom lacks an octet,</b> shift a lone pair from an outer atom to form a double or triple bond.</li>
          </ol>
          <p className="mt-3 text-sm text-slate-600">
            H never has lone pairs or multiple bonds. Elements like C, N, O, S, P readily form multiple bonds.
          </p>
        </>
      ),
      whyItMatters: 'This procedure is how you\'ll draw every structure on the exam. Internalize the order.',
      visuals: [
        { render: () => <Molecule {...LEWIS.CO2} caption="CO₂ — each O=C=O double bond gives C an octet" /> },
        { render: () => <Molecule {...LEWIS.H2O} caption="H₂O — 2 bonding pairs + 2 lone pairs on O" /> },
        { render: () => <Molecule {...LEWIS.NH3} caption="NH₃ — 3 bonds + 1 lone pair on N" /> },
        { render: () => <Molecule {...LEWIS.HCN} caption="HCN — C≡N triple bond, 1 lone pair on N" /> },
      ],
    },
    {
      title: 'Formal charge',
      tag: 'calculation',
      body: () => (
        <>
          <p>
            When more than one Lewis structure is possible, <b>formal charge</b> tells us which is most likely. It's
            the charge each atom would have if all bonding electrons were split evenly.
          </p>
          <p className="mt-3 text-lg font-mono bg-slate-100 rounded p-2 inline-block">
            FC = V − (L + ½·B)
          </p>
          <p className="mt-2 text-sm">
            <b>V</b> = valence electrons the atom brings in. <b>L</b> = lone-pair electrons. <b>B</b> = bonding
            electrons (2 per bond, so a double bond contributes 4 to B).
          </p>
          <p className="mt-3">The best Lewis structure is the one where:</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Formal charges are <b>as close to zero as possible</b>.</li>
            <li>Any negative formal charge sits on the <b>most electronegative</b> atom.</li>
            <li>Adjacent atoms don't carry <b>same-sign</b> formal charges.</li>
            <li>The sum of FCs equals the overall charge of the species.</li>
          </ul>
        </>
      ),
      whyItMatters: 'Formal charge is the referee for ambiguous Lewis structures. Memorize the formula — it\'ll appear on the exam.',
      visuals: [
        { render: () => <Molecule {...LEWIS.CH2O_correct} caption="CH₂O — C=O double bond, all FC = 0 ✓" /> },
        { render: () => <Molecule {...LEWIS.CH2O_wrong} caption="CH₂O alt — C–O single bond gives FC(C)=−1, FC(O)=+1 ✗" /> },
        { render: () => <FormalChargeTable /> },
      ],
    },
    {
      title: 'Resonance structures',
      tag: 'special case',
      body: () => (
        <>
          <p>
            When two or more equivalent Lewis structures exist that differ <b>only in the placement of electrons
            (not atoms)</b>, the real molecule is a <b>resonance hybrid</b> — an average of all contributors.
          </p>
          <p className="mt-3">
            Ozone (O₃) is the classic example. Both O–O bonds have the same length, which is between a single and a
            double bond. Neither Lewis structure alone is "correct" — together, they describe the delocalized
            electrons.
          </p>
        </>
      ),
      whyItMatters: 'When asked for "the best resonance contributor," pick the one that minimizes formal charges and places any negative charges on the most electronegative atom.',
      visuals: [
        { render: () => <Molecule {...LEWIS.O3} caption="O₃ resonance form 1" showFormalCharges /> },
        { render: () => <Molecule {...LEWIS.O3_alt} caption="O₃ resonance form 2" showFormalCharges /> },
      ],
    },
    {
      title: 'Expanded octets',
      tag: 'exception',
      body: () => (
        <>
          <p>
            Elements in period 3 and beyond (P, S, Cl, Br, I, Xe, etc.) can have <b>more than 8</b> valence electrons
            because they have empty <i>d</i> orbitals available. You'll see this in PCl₅ (10 e⁻ around P) and SF₆
            (12 e⁻ around S).
          </p>
          <p className="mt-3">
            Elements in period 2 (C, N, O, F) <b>never</b> exceed an octet — they have no 2d orbitals.
          </p>
          <p className="mt-3">
            Boron is the main "incomplete octet" case — BF₃ only has 6 e⁻ on B, and that's accepted as the best
            structure because it avoids placing a formal + charge on F.
          </p>
        </>
      ),
      visuals: [
        { render: () => <Molecule {...LEWIS.PCl5} caption="PCl₅ — 10 e⁻ on P (expanded octet)" /> },
        { render: () => <Molecule {...LEWIS.SF6} caption="SF₆ — 12 e⁻ on S" /> },
        { render: () => <Molecule {...LEWIS.BF3} caption="BF₃ — B has only 6 e⁻ (incomplete octet)" /> },
      ],
    },
    {
      title: 'Electron domains & the VSEPR / AXE model',
      tag: 'geometry',
      body: () => (
        <>
          <p>
            <b>VSEPR (Valence Shell Electron Pair Repulsion)</b> says electron groups around a central atom arrange
            themselves in 3-D to minimize repulsion.
          </p>
          <p className="mt-3">
            An <b>electron domain</b> is any region of electron density around the central atom:
          </p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>A <b>single bond</b> = 1 domain</li>
            <li>A <b>double bond</b> = 1 domain (multiple bonds count as one)</li>
            <li>A <b>triple bond</b> = 1 domain</li>
            <li>A <b>lone pair</b> = 1 domain</li>
          </ul>
          <p className="mt-3">
            In the <b>AXE notation</b>: A = central atom, X = bonded atoms (any order), E = lone pairs. So NH₃ = AX₃E,
            H₂O = AX₂E₂, SF₄ = AX₄E.
          </p>
          <p className="mt-3 text-sm">
            <b>Lone pairs take up more space than bonding pairs</b> and compress bond angles: CH₄ (109.5°) &gt; NH₃
            (~107°) &gt; H₂O (~104.5°).
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Repulsion strength: <b>lp–lp &gt; lp–bp &gt; bp–bp</b>.
          </p>
        </>
      ),
      whyItMatters: 'Every "predict the shape" problem on the exam is solved by (1) counting domains, (2) picking the electron-domain geometry, (3) placing lone pairs in the least repulsive spot.',
      visuals: [
        { render: () => <AXETable /> },
        { render: () => <ShapeDiagram shape="tetrahedral" central="C" ligand="H" caption="CH₄ — AX₄, tetrahedral, 109.5°" /> },
        { render: () => <ShapeDiagram shape="trigonal-pyramidal" central="N" ligand="H" lonePairs={1} caption="NH₃ — AX₃E, trigonal pyramidal" /> },
        { render: () => <ShapeDiagram shape="bent" central="O" ligand="H" lonePairs={2} caption="H₂O — AX₂E₂, bent (~104.5°)" /> },
        { render: () => <ShapeDiagram shape="seesaw" central="S" ligand="F" lonePairs={1} caption="SF₄ — AX₄E, seesaw" /> },
        { render: () => <ShapeDiagram shape="tshape" central="Cl" ligand="F" lonePairs={2} caption="ClF₃ — AX₃E₂, T-shaped" /> },
      ],
    },
    {
      title: 'Electronegativity & bond polarity',
      tag: 'polarity',
      body: () => (
        <>
          <p>
            <b>Electronegativity (χ)</b> measures how strongly an atom in a bond pulls shared electrons toward itself.
            On the Pauling scale it runs from ~0.7 (Fr, Cs) to 3.98 (F). It follows the same trend as Z*: <b>rises
            left→right</b>, <b>falls top→bottom</b>.
          </p>
          <p className="mt-3">
            A bond's polarity comes from the <b>difference in electronegativity (Δχ)</b> between the two atoms:
          </p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Δχ ≈ <b>0 – 0.4</b> → nonpolar covalent</li>
            <li>Δχ ≈ <b>0.4 – 1.7</b> → polar covalent</li>
            <li>Δχ ≈ <b>&gt; 1.7</b> → ionic</li>
          </ul>
          <p className="mt-3">
            The more electronegative atom picks up a partial negative charge (δ⁻); the less electronegative becomes δ⁺.
            Worked example: H–F (Δχ = 1.8) is polar covalent; H–Cl (Δχ = 0.9) is less polar; H–H (Δχ = 0) is nonpolar.
          </p>
        </>
      ),
      whyItMatters: 'You\'ll get Δχ values on the exam — know the 0.4 and 1.7 cutoffs cold.',
      visuals: [
        {
          render: () => (
            <svg viewBox="0 0 320 120" width="300" height="110">
              <rect x={0} y={0} width={320} height={120} fill="#f8fafc" rx={8} />
              <line x1={20} y1={60} x2={300} y2={60} stroke="#334155" strokeWidth="2" />
              {[
                { x: 20, v: '0', label: 'nonpolar' },
                { x: 100, v: '0.4', label: '' },
                { x: 200, v: '1.7', label: '' },
                { x: 300, v: '', label: 'ionic' },
              ].map((d, i) => (
                <g key={i}>
                  <line x1={d.x} y1={55} x2={d.x} y2={65} stroke="#334155" />
                  <text x={d.x} y={50} textAnchor="middle" fontSize="10" fill="#334155" fontWeight="700">{d.v}</text>
                </g>
              ))}
              <rect x={20} y={70} width={80} height={18} fill="#bfdbfe" />
              <text x={60} y={82} textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e40af">nonpolar</text>
              <rect x={100} y={70} width={100} height={18} fill="#fde68a" />
              <text x={150} y={82} textAnchor="middle" fontSize="10" fontWeight="700" fill="#854d0e">polar covalent</text>
              <rect x={200} y={70} width={100} height={18} fill="#fecaca" />
              <text x={250} y={82} textAnchor="middle" fontSize="10" fontWeight="700" fill="#991b1b">ionic</text>
              <text x={160} y={110} textAnchor="middle" fontSize="11" fill="#475569">Δ electronegativity</text>
            </svg>
          ),
          note: 'Pauling Δχ bond-polarity scale',
        },
      ],
    },
    {
      title: 'Molecular polarity — bonds vs. whole molecule',
      tag: 'polarity',
      body: () => (
        <>
          <p>
            A molecule is polar when it has a <b>net dipole moment</b>. This depends on:
          </p>
          <ol className="mt-2 list-decimal pl-5 space-y-1">
            <li>Whether the individual bonds are polar (Δχ &gt; 0.4).</li>
            <li>Whether those bond dipoles <b>cancel</b> by symmetry, or <b>add</b>.</li>
          </ol>
          <p className="mt-3">
            <b>CO₂</b> has two polar C=O bonds but the molecule is <b>linear</b> — the two dipoles point in opposite
            directions and cancel. <b>Nonpolar molecule.</b>
          </p>
          <p className="mt-3">
            <b>H₂O</b> also has two polar O–H bonds but is <b>bent</b> — the dipoles add up to a net dipole pointing
            toward O. <b>Polar molecule.</b>
          </p>
          <p className="mt-3">
            <b>Rule of thumb:</b> symmetric arrangements (linear AX₂, trigonal-planar AX₃, tetrahedral AX₄, trigonal-
            bipyramidal AX₅, octahedral AX₆) with identical ligands → <b>nonpolar</b>. Shapes with lone pairs on the
            central atom are almost always <b>polar</b>.
          </p>
        </>
      ),
      whyItMatters: 'The "is this molecule polar?" question is a classic exam item. Symmetric + identical ligands = nonpolar, broken symmetry = polar.',
      visuals: [
        {
          render: () => (
            <svg viewBox="0 0 260 110" width="240" height="110">
              <text x={130} y={20} textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">CO₂ (nonpolar)</text>
              <line x1={60} y1={60} x2={200} y2={60} stroke="#334155" strokeWidth="2" />
              <polygon points="55,60 65,55 65,65" fill="#ef4444" />
              <polygon points="205,60 195,55 195,65" fill="#ef4444" />
              <text x={130} y={95} textAnchor="middle" fontSize="10" fill="#475569">equal &amp; opposite dipoles cancel</text>
            </svg>
          ),
        },
        {
          render: () => (
            <svg viewBox="0 0 260 140" width="240" height="140">
              <text x={130} y={20} textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">H₂O (polar)</text>
              <line x1={130} y1={50} x2={70} y2={110} stroke="#334155" strokeWidth="2" />
              <line x1={130} y1={50} x2={190} y2={110} stroke="#334155" strokeWidth="2" />
              <polygon points="70,115 82,105 80,115" fill="#ef4444" />
              <polygon points="190,115 178,105 180,115" fill="#ef4444" />
              <line x1={130} y1={50} x2={130} y2={125} stroke="#ef4444" strokeWidth="3" markerEnd="url(#netArrow)" />
              <defs>
                <marker id="netArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#ef4444" />
                </marker>
              </defs>
              <text x={130} y={135} textAnchor="middle" fontSize="10" fill="#475569">bent → dipoles add → net dipole</text>
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Bond order, length & strength',
      tag: 'bond properties',
      body: () => (
        <>
          <p>
            Bond order is just the number of shared pairs: <b>single = 1, double = 2, triple = 3</b>. As bond order
            rises:
          </p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li><b>Bond length</b> decreases — more shared electron density pulls the atoms closer.</li>
            <li><b>Bond dissociation energy (BDE)</b> increases — more bonds to break means more energy needed.</li>
          </ul>
          <p className="mt-3">
            Compare O–O (BDE ≈ 146 kJ/mol, ~148 pm), O=O (498 kJ/mol, 121 pm), and O≡O doesn't exist in stable form
            but the trend is clear: triple &gt; double &gt; single.
          </p>
          <p className="mt-3">
            For bonds between different elements, larger atoms make longer, weaker bonds: H–F &gt; H–Cl &gt; H–Br &gt;
            H–I in strength.
          </p>
        </>
      ),
      whyItMatters: 'Bond-order questions are almost free points — remember shorter bond = stronger = higher BDE.',
      visuals: [
        { render: () => <BondOrderTable /> },
      ],
    },
  ],
}
