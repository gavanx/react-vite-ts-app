var maxPathScore = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  const map = new Map()
  const dfs = (i, j, r) => {
    if (i >= m || j >= n) {
      return -Infinity
    }
    const key = `${i}-${j}-${r}`
    const c = grid[i][j] > 0 ? 1 : 0
    if (r < c) {
      return -Infinity
    }
    if (map.has(key)) {
      return map.get(key)
    }
    if (i === m - 1 && j === n - 1) {
      return grid[i][j]
    } else {
      const c = grid[i][j] > 0 ? 1 : 0
      const res = grid[i][j] + Math.max(dfs(i + 1, j, r - c), dfs(i, j + 1, r - c))
      map.set(key, res)
      return res
    }
  }
  const ans = dfs(0, 0, k)
  return ans === -Infinity ? -1 : ans
}

// [0, 1, 1, 1], 
// [1, 2, 2, 0], 
// [1, 0, 1, 2]]
console.log(maxPathScore([[0, 1, 1, 1], [1, 2, 2, 0], [1, 0, 1, 2]], 4))

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
      [
        [0, 1],
        [2, 0],
      ],
      1,
    ],
    expected: 2,
    comment: '// 输入：grid = [[0, 1],[2, 0]], k = 1  输出：2',
  },
  {
    args: [
      [
        [0, 1],
        [1, 2],
      ],
      1,
    ],
    expected: -1,
    comment: '// 输入：grid = [[0, 1],[1, 2]], k = 1  输出：-1',
  },
]

__lcRunExamples(maxPathScore, __lcExamples)
