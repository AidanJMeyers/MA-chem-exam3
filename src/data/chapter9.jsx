import React from 'react'
import { HybridizationDiagram, SigmaPiOverlap } from '../components/visuals/Orbitals.jsx'
import { MODiagram, MO_PRESETS } from '../components/visuals/MODiagram.jsx'
import { ShapeDiagram } from '../components/visuals/Shapes.jsx'
import { Molecule } from '../components/visuals/Molecule.jsx'
import { LEWIS } from './chapter8.jsx'

function HybridSummaryTable() {
  const rows = [
    ['sp', 2, 'Linear', '180°', 'C≡C, C=C=C, CO₂, HCN'],
    ['sp²', 3, 'Trigonal planar', '120°', 'BF₃, C=C (ethylene), CO₃²⁻'],
    ['sp³', 4, 'Tetrahedral', '109.5°', 'CH₄, NH₃, H₂O'],
    ['sp³d', 5, 'Trig. bipyramidal', '120°/90°', 'PCl₅, SF₄, ClF₃'],
    ['sp³d²', 6, 'Octahedral', '90°', 'SF₆, XeF₄'],
  ]
  return (
    <div className="text-xs w-full">
      <div className="font-semibold text-slate-800 mb-1 text-sm">Hybridization cheat-table</div>
      <table className="w-full">
        <thead className="text-slate-500 text-left">
          <tr><th>Type</th><th>e⁻ domains</th><th>Geometry</th><th>Angles</th><th>Examples</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t">
              <td className="py-0.5 font-mono font-bold text-slate-800">{r[0]}</td>
              <td>{r[1]}</td>
              <td className="font-semibold">{r[2]}</td>
              <td>{r[3]}</td>
              <td className="text-slate-600">{r[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SigmaPiCountTable() {
  return (
    <div className="text-sm">
      <div className="font-semibold text-slate-800 mb-1">Counting σ and π bonds</div>
      <table className="w-full text-xs">
        <thead className="text-slate-500 text-left">
          <tr><th>Bond</th><th>σ</th><th>π</th></tr>
        </thead>
        <tbody>
          <tr className="border-t"><td className="py-1">Single</td><td>1</td><td>0</td></tr>
          <tr className="border-t"><td className="py-1">Double</td><td>1</td><td>1</td></tr>
          <tr className="border-t"><td className="py-1">Triple</td><td>1</td><td>2</td></tr>
        </tbody>
      </table>
      <p className="text-xs text-slate-600 mt-2">
        Total σ count = total number of bond lines in the Lewis structure.
        Total π count = (double bonds) + 2×(triple bonds).
      </p>
    </div>
  )
}

function BondOrderMOTable() {
  const rows = [
    ['H₂', '(σ₁ₛ)²', 1, 'diamagnetic'],
    ['He₂', '(σ₁ₛ)²(σ*₁ₛ)²', 0, 'does not exist'],
    ['Li₂', '(σ₂ₛ)²', 1, 'diamagnetic'],
    ['Be₂', '(σ₂ₛ)²(σ*₂ₛ)²', 0, 'does not exist'],
    ['B₂', '…(π₂ₚ)²', 1, 'paramagnetic'],
    ['C₂', '…(π₂ₚ)⁴', 2, 'diamagnetic'],
    ['N₂', '…(π₂ₚ)⁴(σ₂ₚ)²', 3, 'diamagnetic'],
    ['O₂', '…(σ₂ₚ)²(π₂ₚ)⁴(π*₂ₚ)²', 2, 'paramagnetic'],
    ['F₂', '…(π*₂ₚ)⁴', 1, 'diamagnetic'],
    ['Ne₂', '…(σ*₂ₚ)²', 0, 'does not exist'],
  ]
  return (
    <div className="text-xs">
      <div className="font-semibold text-slate-800 mb-1 text-sm">Homonuclear diatomics — bond order & magnetism</div>
      <table className="w-full">
        <thead className="text-slate-500 text-left">
          <tr><th>Molecule</th><th>MO config</th><th>BO</th><th>Magnetism</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t">
              <td className="py-0.5 font-bold text-slate-800">{r[0]}</td>
              <td className="font-mono text-[10px]">{r[1]}</td>
              <td className="font-bold text-brand-600">{r[2]}</td>
              <td className="text-slate-600">{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs mt-2 text-amber-700 bg-amber-50 border border-amber-200 rounded p-2">
        <b>Note:</b> For B₂, C₂, N₂ the σ₂ₚ sits <b>above</b> the π₂ₚ. For O₂, F₂, Ne₂ the σ₂ₚ sits <b>below</b> the π₂ₚ.
      </p>
    </div>
  )
}

export const CHAPTER_9 = {
  id: 9,
  title: 'Ch. 9 — Hybridization & MO Theory',
  summary:
    'Valence Bond theory (sigma and pi bonds, hybridization of atomic orbitals), and Molecular Orbital (MO) theory for diatomic molecules.',
  blocks: [
    {
      title: 'Valence Bond theory — sigma and pi bonds',
      tag: 'VB theory',
      body: () => (
        <>
          <p>
            <b>Valence Bond (VB) theory</b> says a bond forms when <b>two half-filled atomic orbitals on adjacent
            atoms overlap</b>, sharing their two electrons (with opposite spins).
          </p>
          <p className="mt-3">Two types of overlap produce two types of bonds:</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li><b>Sigma (σ) bond</b> — <i>head-on / end-to-end</i> overlap along the bond axis. Strong, cylindrically symmetric.</li>
            <li><b>Pi (π) bond</b> — <i>side-by-side</i> overlap of p orbitals above and below the bond axis. Weaker than σ.</li>
          </ul>
          <p className="mt-3 font-semibold">Bond-order translation:</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li><b>Single bond = 1 σ</b></li>
            <li><b>Double bond = 1 σ + 1 π</b></li>
            <li><b>Triple bond = 1 σ + 2 π</b></li>
          </ul>
          <p className="mt-3">
            A σ bond is <i>always</i> the first bond between two atoms. Additional bonds (to make a double or triple)
            are <i>always</i> π bonds.
          </p>
        </>
      ),
      whyItMatters: 'Counting σ and π bonds is a reliable easy question. From any Lewis structure: σ count = total bond lines, π count = multiple bonds beyond the first.',
      visuals: [
        { render: () => <SigmaPiOverlap kind="sigma" caption="σ bond — head-on overlap" /> },
        { render: () => <SigmaPiOverlap kind="pi" caption="π bond — side-by-side overlap" /> },
        { render: () => <SigmaPiCountTable /> },
      ],
    },
    {
      title: 'Hybridization — why we mix orbitals',
      tag: 'VB theory',
      body: () => (
        <>
          <p>
            In its ground state, a carbon atom has the config <span className="font-mono">2s² 2p²</span> — only 2
            half-filled orbitals. But methane (CH₄) has <b>4 equivalent C–H bonds</b> at 109.5°. How?
          </p>
          <p className="mt-3">
            The 2s orbital "mixes" with the three 2p orbitals to produce <b>4 new, degenerate (equal-energy)
            hybrid orbitals</b> called <span className="font-mono font-bold">sp³</span>. Each can now form one σ
            bond with a hydrogen.
          </p>
          <p className="mt-3">
            <b>The key rule:</b> <i>the number of atomic orbitals you mix equals the number of hybrid orbitals you
            produce.</i> You can't mix 4 and get 3 — you always get 4 back out.
          </p>
          <p className="mt-3">
            Hybrid orbitals lie at an <b>intermediate energy</b> — lower than the original p orbitals, higher than the
            original s. This small energy cost is paid back by the stronger bonds they form.
          </p>
        </>
      ),
      whyItMatters: 'On the exam you\'ll be asked to name hybrid orbitals from their parent atomic orbitals. "Mix 3s + three 3p + one 3d" → 5 new sp³d orbitals.',
      visuals: [
        { render: () => <HybridizationDiagram type="sp3" caption="sp³ hybridization — 1s + 3p → 4 sp³" /> },
        { render: () => <HybridizationDiagram type="sp2" caption="sp² hybridization — 1s + 2p → 3 sp², 1 p left over for π" /> },
        { render: () => <HybridizationDiagram type="sp" caption="sp hybridization — 1s + 1p → 2 sp, 2 p left for 2 π bonds" /> },
        { render: () => <HybridizationDiagram type="sp3d" caption="sp³d — adds a d orbital (5 domains)" /> },
        { render: () => <HybridizationDiagram type="sp3d2" caption="sp³d² — 6 domains (octahedral)" /> },
      ],
    },
    {
      title: 'Predicting hybridization from geometry',
      tag: 'procedure',
      body: () => (
        <>
          <p>Hybridization is uniquely determined by the number of electron domains on the central atom:</p>
          <ol className="mt-2 list-decimal pl-5 space-y-1">
            <li>Draw the Lewis structure.</li>
            <li>Count electron domains (bonds + lone pairs; multiple bonds count once).</li>
            <li>Read off the hybridization.</li>
          </ol>
          <p className="mt-3 font-semibold">Shortcut:</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>2 domains → <b>sp</b> (linear, 180°)</li>
            <li>3 domains → <b>sp²</b> (trigonal planar, 120°)</li>
            <li>4 domains → <b>sp³</b> (tetrahedral, 109.5°)</li>
            <li>5 domains → <b>sp³d</b> (trigonal bipyramidal, 120°/90°)</li>
            <li>6 domains → <b>sp³d²</b> (octahedral, 90°)</li>
          </ul>
          <p className="mt-3 text-sm">
            Worked example: "What's the hybridization of C in CSCl₂?" Total VE = 24, central C has 3 domains (one
            C=S, two C–Cl), so <b>sp²</b>, trigonal planar, 120°.
          </p>
        </>
      ),
      whyItMatters: 'If you can do VSEPR (ch 8), you can do hybridization. The two are the same count, different label.',
      visuals: [
        { render: () => <HybridSummaryTable /> },
        { render: () => <ShapeDiagram shape="linear" central="C" ligand="O" caption="CO₂ — 2 domains → sp" /> },
        { render: () => <ShapeDiagram shape="trigonal-planar" central="B" ligand="F" caption="BF₃ — 3 domains → sp²" /> },
        { render: () => <ShapeDiagram shape="tetrahedral" central="C" ligand="H" caption="CH₄ — 4 domains → sp³" /> },
      ],
    },
    {
      title: 'Ethylene (C₂H₄) & acetylene (C₂H₂) — σ/π in action',
      tag: 'worked example',
      body: () => (
        <>
          <p>
            <b>C₂H₄ (ethylene)</b> has a C=C double bond. Each C is sp² (3 domains each: 2 C–H + 1 C=C). The
            <b> σ bond</b> between the carbons is from head-on sp²–sp² overlap. The <b>π bond</b> forms from the
            left-over unhybridized p orbital on each carbon, overlapping above and below the C–C axis.
          </p>
          <p className="mt-3">
            <b>C₂H₂ (acetylene)</b> has a C≡C triple bond. Each C is sp (2 domains: 1 C–H + 1 C≡C). The <b>σ bond</b>
            is sp–sp overlap. Each carbon has <b>two</b> unhybridized p orbitals left, giving <b>two π bonds</b>
            (perpendicular to each other, both perpendicular to the bond axis).
          </p>
          <p className="mt-3">
            <b>Count check:</b> C₂H₄ has 5 σ (4 C–H, 1 C–C) + 1 π = 6 bonds total. C₂H₂ has 3 σ (2 C–H, 1 C–C) + 2 π =
            5 bonds total.
          </p>
        </>
      ),
      visuals: [
        {
          render: () => (
            <svg viewBox="0 0 300 160" width="280" height="150">
              <text x={150} y={20} textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">C₂H₄ (sp² + 1π)</text>
              <line x1={110} y1={80} x2={190} y2={80} stroke="#1e293b" strokeWidth="2" />
              <line x1={110} y1={90} x2={190} y2={90} stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
              <circle cx={110} cy={85} r={16} fill="#4b5563" />
              <text x={110} y={89} fontSize="12" textAnchor="middle" fontWeight="700" fill="#fff">C</text>
              <circle cx={190} cy={85} r={16} fill="#4b5563" />
              <text x={190} y={89} fontSize="12" textAnchor="middle" fontWeight="700" fill="#fff">C</text>
              <line x1={110} y1={85} x2={70} y2={40} stroke="#1e293b" />
              <line x1={110} y1={85} x2={70} y2={130} stroke="#1e293b" />
              <line x1={190} y1={85} x2={230} y2={40} stroke="#1e293b" />
              <line x1={190} y1={85} x2={230} y2={130} stroke="#1e293b" />
              {[[70,40],[70,130],[230,40],[230,130]].map(([x,y],i)=>(
                <g key={i}>
                  <circle cx={x} cy={y} r={10} fill="#fff" stroke="#111" />
                  <text x={x} y={y+3} fontSize="10" textAnchor="middle" fontWeight="700">H</text>
                </g>
              ))}
              <text x={150} y={145} textAnchor="middle" fontSize="10" fill="#ef4444" fontWeight="700">red dashed = π bond</text>
            </svg>
          ),
        },
        {
          render: () => (
            <svg viewBox="0 0 300 160" width="280" height="150">
              <text x={150} y={20} textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">C₂H₂ (sp + 2π)</text>
              <line x1={110} y1={80} x2={190} y2={80} stroke="#1e293b" strokeWidth="2" />
              <line x1={110} y1={70} x2={190} y2={70} stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
              <line x1={110} y1={90} x2={190} y2={90} stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
              <circle cx={110} cy={80} r={16} fill="#4b5563" />
              <text x={110} y={84} fontSize="12" textAnchor="middle" fontWeight="700" fill="#fff">C</text>
              <circle cx={190} cy={80} r={16} fill="#4b5563" />
              <text x={190} y={84} fontSize="12" textAnchor="middle" fontWeight="700" fill="#fff">C</text>
              <line x1={110} y1={80} x2={60} y2={80} stroke="#1e293b" />
              <line x1={190} y1={80} x2={240} y2={80} stroke="#1e293b" />
              <circle cx={50} cy={80} r={10} fill="#fff" stroke="#111" />
              <text x={50} y={83} fontSize="10" textAnchor="middle" fontWeight="700">H</text>
              <circle cx={250} cy={80} r={10} fill="#fff" stroke="#111" />
              <text x={250} y={83} fontSize="10" textAnchor="middle" fontWeight="700">H</text>
              <text x={150} y={145} textAnchor="middle" fontSize="10" fill="#ef4444" fontWeight="700">2 π bonds (above and below)</text>
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Molecular Orbital (MO) theory — bonding & antibonding orbitals',
      tag: 'MO theory',
      body: () => (
        <>
          <p>
            MO theory takes a different view: instead of localizing bonds between pairs of atoms, it says atomic
            orbitals on <i>all</i> the atoms combine to make <b>molecular orbitals</b> that spread over the whole
            molecule.
          </p>
          <p className="mt-3">
            When two atomic orbitals (AOs) combine:
          </p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li><b>Constructive addition</b> → <b>bonding MO</b> (σ, π). Lower in energy than the AOs — favors the
              bond.</li>
            <li><b>Destructive subtraction</b> → <b>antibonding MO</b> (σ*, π*, marked with a star). Higher in energy
              than the AOs — favors atoms staying separated.</li>
          </ul>
          <p className="mt-3">
            Electrons fill MOs following the same rules as atomic orbitals — <b>Aufbau</b> (lowest energy first),
            <b> Hund's rule</b> (half-fill degenerate orbitals), <b>Pauli</b> (2 electrons, opposite spin, per MO).
          </p>
        </>
      ),
      whyItMatters: 'MO theory is the only one of these theories that correctly predicts O₂ is paramagnetic (has unpaired electrons). It\'s also how you compute bond order without resonance.',
      visuals: [
        { render: () => <MODiagram {...MO_PRESETS.H2} caption="H₂ — 2 e⁻ in σ₁ₛ → bond order 1" /> },
        { render: () => <MODiagram {...MO_PRESETS.He2} caption="He₂ — equal filling of σ and σ* → BO = 0, unstable" /> },
      ],
    },
    {
      title: 'Bond order from MO diagrams',
      tag: 'formula',
      body: () => (
        <>
          <p>From an MO diagram, bond order is:</p>
          <p className="mt-2 text-lg font-mono bg-slate-100 rounded p-2 inline-block">
            BO = (# bonding e⁻ − # antibonding e⁻) / 2
          </p>
          <p className="mt-3">
            Higher BO → stronger, shorter bond. BO = 0 means the molecule doesn't exist (He₂, Be₂, Ne₂).
          </p>
          <p className="mt-3">
            <b>Fractional bond orders</b> are allowed by MO theory. Adding an electron to O₂ gives O₂⁻ with BO = 1.5.
            Removing one gives O₂⁺ with BO = 2.5.
          </p>
        </>
      ),
      visuals: [
        { render: () => <MODiagram {...MO_PRESETS.N2} caption="N₂ — BO = (8−2)/2 = 3 (triple bond); diamagnetic" /> },
        { render: () => <MODiagram {...MO_PRESETS.O2} caption="O₂ — BO = (8−4)/2 = 2 (double); 2 unpaired e⁻ in π* → paramagnetic" /> },
      ],
    },
    {
      title: 'Paramagnetic vs diamagnetic',
      tag: 'MO theory',
      body: () => (
        <>
          <p>
            From an MO diagram, look at the filling pattern:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><b>Paramagnetic</b> — has <b>one or more unpaired electrons</b>. Attracted to a magnetic field.</li>
            <li><b>Diamagnetic</b> — <b>all electrons paired</b>. Very weakly repelled by a magnetic field.</li>
          </ul>
          <p className="mt-3">
            Classic example: <b>O₂</b> has 12 valence electrons; the last two go into the two degenerate π*₂ₚ
            orbitals, unpaired (Hund's rule). That makes O₂ paramagnetic — famously confirmed by liquid O₂ sticking
            to magnets.
          </p>
          <p className="mt-3">
            <b>N₂</b>, with 10 valence electrons, fills everything through σ₂ₚ cleanly — all paired → diamagnetic.
          </p>
        </>
      ),
      whyItMatters: 'Every "is this molecule paramagnetic?" question boils down to: are there any unpaired electrons on the MO diagram?',
      visuals: [
        { render: () => <BondOrderMOTable /> },
      ],
    },
    {
      title: 'The σ/π energy-order switch',
      tag: 'subtle detail',
      body: () => (
        <>
          <p>
            For MO diagrams of second-row homonuclear diatomics, there are <b>two possible orderings</b> of the
            middle block:
          </p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li><b>B₂, C₂, N₂</b>: &nbsp;σ₂ₛ &lt; σ*₂ₛ &lt; π₂ₚ &lt; σ₂ₚ &lt; π*₂ₚ &lt; σ*₂ₚ &nbsp; (π <i>below</i> σ₂ₚ)</li>
            <li><b>O₂, F₂, Ne₂</b>: σ₂ₛ &lt; σ*₂ₛ &lt; σ₂ₚ &lt; π₂ₚ &lt; π*₂ₚ &lt; σ*₂ₚ &nbsp; (σ₂ₚ <i>below</i> π)</li>
          </ul>
          <p className="mt-3">
            The swap happens because of <b>s-p mixing</b>, which matters less as Z rises across the period. You'll be
            given the correct diagram on the exam — just know which molecule uses which.
          </p>
        </>
      ),
    },
  ],
}
