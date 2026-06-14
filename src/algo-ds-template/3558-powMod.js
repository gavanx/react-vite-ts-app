var assignEdgeWeights = function (edges) {
  const MOD = 1000000007n

  function powModBig(a, b, mod) {
    let res = 1n
    a = BigInt(a) % mod
    b = BigInt(b)
    while (b > 0n) {
      if (b & 1n) res = (res * a) % mod
      a = (a * a) % mod
      b >>= 1n
    }
    return Number(res)
  }

  const g = []
  for (const [u, v] of edges) {
    if (!g[u]) {
      g[u] = []
    }
    if (!g[v]) {
      g[v] = []
    }
    g[u].push(v)
    g[v].push(u)
  }
  const dfs = (u, p) => {
    let d = 0
    for (const v of g[u]) {
      if (v != p) {
        d = Math.max(d, dfs(v, u) + 1)
      }
    }
    return d
  }
  const d = dfs(1, 0)
  return powModBig(2, d - 1, MOD)
}

const CASE_SLOW_MS = 20
const TOTAL_SLOW_MS = 100

function __lcRunExamples(fn, cases) {
  let totalMs = 0
  let allPassed = true
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(`${i + 1}`, comment)
    const t0 = performance.now()
    try {
      const got = fn(...args)
      const ms = performance.now() - t0
      totalMs += ms
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      if (!ok) allPassed = false
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
    } catch (e) {
      allPassed = false
      const ms = performance.now() - t0
      totalMs += ms
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) })
      throw e
    }
  }
  const totalSlow = totalMs > TOTAL_SLOW_MS
  const totalStyle = totalSlow
    ? 'color:#dc2626;font-weight:800;background:#fee2e2;padding:2px 4px;border-radius:4px;border:1px solid #dc2626;'
    : 'color:#64748b;'
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms [${allPassed ? 'success' : 'fail'}]`, totalStyle)
}

const __lcExamples = [
  { args: [[[1, 2]]], expected: 1, comment: '// 输入：edges = [[1,2]]  输出：1' },
  {
    args: [
      [
        [1, 2],
        [1, 3],
        [3, 4],
        [3, 5],
      ],
    ],
    expected: 2,
    comment: '// 输入：edges = [[1,2],[1,3],[3,4],[3,5]]  输出：2',
  },
]

__lcRunExamples(assignEdgeWeights, __lcExamples)
