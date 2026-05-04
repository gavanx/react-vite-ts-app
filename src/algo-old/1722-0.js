var minimumHammingDistance = function (source, target, allowedSwaps) {
  const n = source.length
  const g = new Array(n).fill(0).map(() => [])
  for (const [i, j] of allowedSwaps) {
    g[i].push(j)
    g[j].push(i)
  }
  const vis = new Array(n).fill(false)
  const dfs = (x, map) => {
    vis[x] = true
    let k = source[x]
    if (map.has(k)) {
      map.set(k, map.get(k) + 1)
    } else {
      map.set(k, 1)
    }
    k = target[x]
    if (map.has(k)) {
      map.set(k, map.get(k) - 1)
    } else {
      map.set(k, -1)
    }
    for (const y of g[x]) {
      if (!vis[y]) {
        dfs(y, map)
      }
    }
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (!vis[i]) {
      const map = new Map()
      dfs(i, map)
      for (const v of map.values()) {
        if (v !== 0) {
          ans += Math.abs(v)
        }
      }
    }
  }
  return ans / 2
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
  {
    args: [
      [1, 2, 3, 4],
      [2, 1, 4, 5],
      [
        [0, 1],
        [2, 3],
      ],
    ],
    expected: 1,
    comment:
      '// 输入：source = [1,2,3,4], target = [2,1,4,5], allowedSwaps = [[0,1],[2,3]]  输出：1',
  },
  {
    args: [[1, 2, 3, 4], [1, 3, 2, 4], []],
    expected: 2,
    comment: '// 输入：source = [1,2,3,4], target = [1,3,2,4], allowedSwaps = []  输出：2',
  },
  {
    args: [
      [5, 1, 2, 4, 3],
      [1, 5, 4, 2, 3],
      [
        [0, 4],
        [4, 2],
        [1, 3],
        [1, 4],
      ],
    ],
    expected: 0,
    comment:
      '// 输入：source = [5,1,2,4,3], target = [1,5,4,2,3], allowedSwaps = [[0,4],[4,2],[1,3],[1,4]]  输出：0',
  },
]

__lcRunExamples(minimumHammingDistance, __lcExamples)
