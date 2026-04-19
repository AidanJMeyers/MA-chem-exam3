import React from 'react'
import { PeriodicTrendMini } from '../components/visuals/TrendArrow.jsx'
import { Atom } from '../components/visuals/Atom.jsx'

const TITLE = 'Ch. 7 — Periodic Trends'

function ScreeningDiagram() {
  return (
    <svg viewBox="0 0 320 200" width="300" height="190">
      <circle cx={160} cy={100} r={90} fill="none" stroke="#94a3b8" strokeDasharray="4 3" />
      <circle cx={160} cy={100} r={55} fill="none" stroke="#94a3b8" strokeDasharray="4 3" />
      <circle cx={160} cy={100} r={18} fill="#fde68a" stroke="#b45309" />
      <text x={160} y={105} textAnchor="middle" fontSize="14" fontWeight="700" fill="#7c2d12">+11</text>
      {/* core electrons */}
      {[-1, 0, 1].map((k, i) => (
        <circle key={`c${i}`} cx={160 + Math.cos((i * 120 + 40) * Math.PI / 180) * 55} cy={100 + Math.sin((i * 120 + 40) * Math.PI / 180) * 55} r={6} fill="#60a5fa" />
      ))}
      {[-1, 0, 1, 2, 3, 4, 5].map((k, i) => (
        <circle key={`c2${i}`} cx={160 + Math.cos((i * 51 + 10) * Math.PI / 180) * 55} cy={100 + Math.sin((i * 51 + 10) * Math.PI / 180) * 55} r={5} fill="#60a5fa" />
      ))}
      {/* valence 3s */}
      <circle cx={160 + 90} cy={100} r={6} fill="#ef4444" />
      <text x={160 + 95} y={90} fontSize="11" fill="#b91c1c" fontWeight="700">valence e⁻</text>
      <text x={30} y={25} fontSize="11" fill="#475569" fontWeight="700">Na (Z=11)</text>
      <text x={30} y={185} fontSize="11" fill="#475569">Z* felt by valence ≈ 11 − 10 = 1</text>
    </svg>
  )
}

function AtomSizeScale() {
  // a simple horizontal scale showing relative sizes
  const data = [
    { s: 'He', r: 31 },
    { s: 'Ne', r: 38 },
    { s: 'Ar', r: 71 },
    { s: 'Li', r: 167 },
    { s: 'Na', r: 190 },
    { s: 'K', r: 243 },
    { s: 'Rb', r: 265 },
    { s: 'Cs', r: 298 },
  ]
  const max = 298
  return (
    <svg viewBox="0 0 420 210" width="400" height="200">
      {data.map((d, i) => {
        const x = 40 + i * 46
        const scaleR = (d.r / max) * 22
        return (
          <g key={d.s}>
            <Atom x={x} y={90} symbol={d.s} r={Math.max(10, scaleR)} />
            <text x={x} y={150} textAnchor="middle" fontSize="11" fill="#475569" fontWeight="600">{d.r} pm</text>
          </g>
        )
      })}
      <line x1={30} y1={175} x2={390} y2={175} stroke="#94a3b8" />
      <text x={30} y={195} fontSize="11" fill="#475569">noble gases / alkali metals — size grows down a group</text>
    </svg>
  )
}

function IECurve() {
  // For Na: successive IEs. Jumps dramatically between valence and core.
  const ies = [496, 4563, 6913, 9544, 13352, 16610, 20117, 25490]
  const w = 380, h = 200, pad = 34
  const maxY = Math.max(...ies)
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w - 20} height={h - 10}>
      <rect x={0} y={0} width={w} height={h} fill="#f8fafc" rx={8} />
      {/* bars */}
      {ies.map((v, i) => {
        const bw = (w - pad * 2) / ies.length - 4
        const bh = (v / maxY) * (h - pad * 2)
        const x = pad + i * (bw + 4)
        const y = h - pad - bh
        const core = i >= 1
        return (
          <g key={i}>
            <rect x={x} y={y} width={bw} height={bh} fill={core ? '#ef4444' : '#3366ff'} rx={2} />
            <text x={x + bw / 2} y={h - pad + 14} fontSize="10" textAnchor="middle" fill="#475569" fontWeight="600">{`IE${i + 1}`}</text>
            <text x={x + bw / 2} y={y - 4} fontSize="9" textAnchor="middle" fill="#0f172a">{v}</text>
          </g>
        )
      })}
      <text x={pad} y={20} fontSize="12" fontWeight="700" fill="#334155">Na successive ionization energies (kJ/mol)</text>
      <text x={pad} y={34} fontSize="10" fill="#64748b">big jump after removing the single valence electron</text>
    </svg>
  )
}

export const CHAPTER_7 = {
  id: 7,
  title: TITLE,
  summary:
    'Periodic trends — how atomic and ionic size, ionization energy, electron affinity, and effective nuclear charge change across the periodic table.',
  blocks: [
    {
      title: 'Effective nuclear charge (Z*)',
      tag: 'core concept',
      body: () => (
        <>
          <p>
            <b>Effective nuclear charge (Z*)</b> is the net positive charge felt by a particular electron — usually a
            valence electron — in a multi-electron atom. It's <i>not</i> the full nuclear charge (Z), because inner
            "core" electrons screen (shield) the valence electron from the full pull of the nucleus.
          </p>
          <p className="mt-3 font-semibold">
            Z* = Z − S
          </p>
          <p className="mt-1 text-sm text-slate-600">
            <b>Z</b> = atomic number (number of protons). <b>S</b> ≈ number of core electrons (the ones doing the
            screening; valence electrons barely screen each other).
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Na: 11 protons − 10 core e⁻ = <b>Z* ≈ +1</b> for the 3s valence electron</li>
            <li>Mg: 12 − 10 = <b>Z* ≈ +2</b></li>
            <li>Al: 13 − 10 = <b>Z* ≈ +3</b> — note how Z* <i>rises</i> across a period</li>
          </ul>
          <p className="mt-3">
            Going <b>across</b> a period, Z and S mostly stay the same (for the same core), so Z* rises sharply.
            Going <b>down</b> a group, you add a whole new shell of core electrons — S grows roughly in step with Z, so
            Z* changes only modestly.
          </p>
        </>
      ),
      whyItMatters:
        'Z* is the single best predictor of every trend in this chapter — larger Z* pulls electrons in tighter, shrinks the atom, raises ionization energy, and makes electron affinity more exothermic.',
      visuals: [
        { render: () => <ScreeningDiagram />, note: 'Na — 10 core electrons screen the nucleus; the 3s valence electron feels ≈ +1.' },
      ],
    },
    {
      title: 'Atomic radius trends',
      tag: 'trend',
      body: () => (
        <>
          <p>
            The <b>atomic radius</b> is defined as ½ the distance between two identical atoms touching
            (covalent radius) or nearly touching. Two competing effects determine size:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><b>Adding a shell (going down a group)</b> → radius <b>increases</b> (new, higher-n orbital lives farther out)</li>
            <li><b>Higher Z* (going across a period)</b> → radius <b>decreases</b> (valence electrons pulled in tighter)</li>
          </ul>
          <p className="mt-3">
            Therefore: radius <b>grows down a group</b> and <b>shrinks across a period (left → right)</b>. The largest
            main-group atoms sit in the bottom-left (Cs, Fr); the smallest sit in the top-right (He, Ne, F).
          </p>
        </>
      ),
      whyItMatters:
        'Size controls how easily the nucleus can grab or release electrons — every other trend on the exam follows from it.',
      visuals: [
        { render: () => <PeriodicTrendMini direction="increase-left-down" label="radius" color="#0ea5e9" caption="Radius increases left & down" /> },
        { render: () => <AtomSizeScale />, note: 'Relative radii across periods & groups (pm).' },
      ],
    },
    {
      title: 'Cation vs anion size',
      tag: 'ionic radius',
      body: () => (
        <>
          <p>
            When a neutral atom loses electrons to form a <b>cation</b>, the remaining electrons are pulled in more
            tightly (fewer electrons, same nuclear charge → higher Z* per electron). <b>Cations are smaller than their parent atom.</b>
          </p>
          <p className="mt-2">
            When an atom gains electrons to form an <b>anion</b>, electron–electron repulsion rises and the added
            electron is held more loosely. <b>Anions are larger than their parent atom.</b>
          </p>
          <p className="mt-3">
            For an <b>isoelectronic series</b> (same electron configuration, different nuclear charge — e.g., N³⁻, O²⁻,
            F⁻, Na⁺, Mg²⁺, all with 10 electrons):
          </p>
          <p className="mt-1 font-semibold">
            Larger electron-to-proton ratio → larger ion.
          </p>
          <p className="mt-1 text-sm">
            Ranking: <b>N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Na⁺ &gt; Mg²⁺</b>
          </p>
        </>
      ),
      whyItMatters:
        'A classic exam question ranks isoelectronic ions — the shortcut is always: lowest e/p ratio = smallest, highest e/p = largest.',
      visuals: [
        {
          render: () => (
            <svg viewBox="0 0 320 120" width="300" height="120">
              {[
                { s: 'N³⁻', r: 30, x: 30 },
                { s: 'O²⁻', r: 26, x: 90 },
                { s: 'F⁻', r: 22, x: 140 },
                { s: 'Na⁺', r: 14, x: 200 },
                { s: 'Mg²⁺', r: 11, x: 250 },
              ].map((d) => (
                <g key={d.s}>
                  <circle cx={d.x} cy={60} r={d.r} fill="#bae6fd" stroke="#0284c7" />
                  <text x={d.x} y={64} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0c4a6e">{d.s}</text>
                </g>
              ))}
              <text x={160} y={110} textAnchor="middle" fontSize="11" fill="#475569">isoelectronic with Ne (10 e⁻)</text>
            </svg>
          ),
          note: 'All have 10 electrons; the one with fewest protons (N) is largest.',
        },
      ],
    },
    {
      title: 'Ionization energy (IE) — definition & trend',
      tag: 'energy',
      body: () => (
        <>
          <p>
            <b>Ionization energy (IE or I)</b> is the minimum energy required to remove an electron from a gaseous
            atom in its ground state. The first ionization energy (<b>I₁</b>) removes the most loosely held electron:
          </p>
          <p className="mt-2 font-mono bg-slate-100 rounded p-2 inline-block">
            K(g) + I₁ → K⁺(g) + e⁻ &nbsp;&nbsp; I₁ = +419 kJ/mol
          </p>
          <p className="mt-3">
            IE is <b>always endothermic</b> (you must put in energy to pull an electron away from a positive nucleus).
            Successive IEs always rise: <b>I₁ &lt; I₂ &lt; I₃ &lt; …</b> because each electron is pulled off a progressively
            more-positive ion.
          </p>
          <p className="mt-3">
            <b>Periodic trend:</b> IE <b>decreases down a group</b> (outer electron farther from the nucleus, easier to
            remove) and <b>increases across a period</b> (higher Z*, tighter hold).
          </p>
          <p className="mt-3 text-sm text-slate-700">
            <b>Watch out:</b> small exceptions exist — B has lower I₁ than Be (2p is easier to remove than filled
            2s), and O has lower I₁ than N (paired 2p electrons repel). These "dips" are fair game.
          </p>
        </>
      ),
      whyItMatters:
        'When successive IE values are given, the "big jump" reveals how many valence electrons an atom has — critical for predicting ionic charges.',
      visuals: [
        { render: () => <PeriodicTrendMini direction="increase-right-up" label="IE" color="#e11d48" caption="IE rises right & up" /> },
        { render: () => <IECurve />, note: 'Successive IEs for Na. Big jump (IE₁ → IE₂) means Na has only one valence electron.' },
      ],
    },
    {
      title: 'Electron affinity (EA)',
      tag: 'energy',
      body: () => (
        <>
          <p>
            <b>Electron affinity (EA)</b> is the energy change when a neutral gaseous atom gains an electron to form
            a 1− ion:
          </p>
          <p className="mt-2 font-mono bg-slate-100 rounded p-2 inline-block">
            Cl(g) + e⁻ → Cl⁻(g) &nbsp;&nbsp; ΔEA = −349 kJ/mol
          </p>
          <p className="mt-3">
            A <b>negative EA</b> means adding an electron is favorable (energy released). The halogens (F, Cl, Br, I)
            have the most negative EAs — they really want that 8th valence electron to become noble-gas-like.
          </p>
          <p className="mt-3">
            <b>Noble gases</b> have EA ≈ 0 (they already have a full valence shell — no affinity). <b>Group 2 and
            group 15 elements</b> also have very small or slightly positive EAs because adding an electron would
            disrupt a filled or half-filled subshell.
          </p>
          <p className="mt-3">
            <b>Trend:</b> EA becomes <b>more negative across a period</b> (more exothermic) and <b>roughly less negative
            down a group</b> (the new electron lands farther from the nucleus).
          </p>
        </>
      ),
      whyItMatters:
        'Don\'t confuse EA with IE. IE measures how hard it is to lose an electron (always +). EA measures how much energy is released gaining one (usually −).',
      visuals: [
        {
          render: () => (
            <svg viewBox="0 0 320 170" width="300" height="160">
              <rect x={0} y={0} width={320} height={170} fill="#f8fafc" rx={8} />
              <text x={20} y={22} fontSize="12" fontWeight="700" fill="#334155">Halogen EAs (kJ/mol)</text>
              {[
                { s: 'F', v: -328 },
                { s: 'Cl', v: -349 },
                { s: 'Br', v: -325 },
                { s: 'I', v: -295 },
              ].map((d, i) => {
                const x = 40 + i * 70
                const bh = Math.abs(d.v) / 4
                return (
                  <g key={d.s}>
                    <rect x={x} y={150 - bh} width={40} height={bh} fill="#22c55e" rx={3} />
                    <text x={x + 20} y={160} textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">{d.s}</text>
                    <text x={x + 20} y={148 - bh} textAnchor="middle" fontSize="10" fill="#166534" fontWeight="700">{d.v}</text>
                  </g>
                )
              })}
              <text x={20} y={155} fontSize="10" fill="#64748b">Cl — most exothermic EA</text>
            </svg>
          ),
        },
        {
          render: () => (
            <div className="text-sm">
              <div className="font-semibold text-slate-800 mb-1">IE vs EA, side by side</div>
              <table className="text-xs w-full">
                <thead className="text-slate-500 text-left">
                  <tr>
                    <th></th>
                    <th>Process</th>
                    <th>Sign</th>
                    <th>Favorable?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-1 font-semibold">IE</td>
                    <td>X(g) → X⁺(g) + e⁻</td>
                    <td className="text-rose-600 font-bold">always +</td>
                    <td>no (needs energy)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-1 font-semibold">EA</td>
                    <td>X(g) + e⁻ → X⁻(g)</td>
                    <td className="text-emerald-600 font-bold">usually −</td>
                    <td>yes (releases energy)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ],
    },
    {
      title: 'Putting it all together — a master cheat card',
      tag: 'recap',
      body: () => (
        <>
          <p>
            All four periodic trends covered in this chapter collapse to one idea: <b>higher Z* pulls electrons in
            harder.</b> Memorize the direction of the four arrows on the periodic table.
          </p>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-sm">
              <b>Atomic radius</b> — grows <i>left</i> &amp; <i>down</i> (low Z*, big).
            </div>
            <div className="rounded-lg bg-rose-50 border border-rose-200 p-3 text-sm">
              <b>Ionization energy</b> — grows <i>right</i> &amp; <i>up</i> (high Z*, hard to remove).
            </div>
            <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-3 text-sm">
              <b>Electronegativity</b> — grows <i>right</i> &amp; <i>up</i> (F is the highest, 3.98).
            </div>
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm">
              <b>Electron affinity (|EA|)</b> — grows <i>right</i> &amp; <i>up</i>, peaks at halogens; noble gases ≈ 0.
            </div>
          </div>
          <p className="mt-4">
            Exception spots to remember: <b>B &lt; Be</b> for IE₁ (2p easier than filled 2s), and <b>O &lt; N</b>
            for IE₁ (paired 2p repulsion).
          </p>
        </>
      ),
    },
  ],
}
