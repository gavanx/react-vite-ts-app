const DIRS = [
  [],
  [
    [0, -1],
    [0, 1],
  ],
  [
    [-1, 0],
    [1, 0],
  ],
  [
    [0, -1],
    [1, 0],
  ],
  [
    [0, 1],
    [1, 0],
  ],
  [
    [0, -1],
    [-1, 0],
  ],
  [
    [0, 1],
    [-1, 0],
  ],
]

function contains(street, dx, dy) {
  const ds = DIRS[street]
  return (ds[0][0] === dx && ds[0][1] === dy) || (ds[1][0] === dx && ds[1][1] === dy)
}

var hasValidPath = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const vis = Array.from({ length: m }, () => Array(n).fill(false))

  function dfs(x, y) {
    if (x === m - 1 && y === n - 1) {
      return true
    }
    vis[x][y] = true
    for (const [dx, dy] of DIRS[grid[x][y]]) {
      const i = x + dx,
        j = y + dy
      if (
        0 <= i &&
        i < m &&
        0 <= j &&
        j < n &&
        !vis[i][j] &&
        contains(grid[i][j], -dx, -dy) &&
        dfs(i, j)
      ) {
        return true
      }
    }
    return false
  }

  return dfs(0, 0)
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
      [
        [2, 4, 3],
        [6, 5, 2],
      ],
    ],
    expected: true,
    comment: '// 输入：grid = [[2,4,3],[6,5,2]]  输出：true',
  },
  {
    args: [
      [
        [1, 2, 1],
        [1, 2, 1],
      ],
    ],
    expected: false,
    comment: '// 输入：grid = [[1,2,1],[1,2,1]]  输出：false',
  },
  { args: [[[1, 1, 2]]], expected: false, comment: '// 输入：grid = [[1,1,2]]  输出：false' },
  {
    args: [[[1, 1, 1, 1, 1, 1, 3]]],
    expected: true,
    comment: '// 输入：grid = [[1,1,1,1,1,1,3]]  输出：true',
  },
  {
    args: [[[2], [2], [2], [2], [2], [2], [6]]],
    expected: true,
    comment: '// 输入：grid = [[2],[2],[2],[2],[2],[2],[6]]  输出：true',
  },
]

__lcRunExamples(hasValidPath, __lcExamples)
