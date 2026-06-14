/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const DIRS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  const m0 = grid.length
  const n0 = grid[0].length

  for (let i = 0; i < Math.floor(Math.min(m0, n0) / 2); i++) {
    let m = m0 - i * 2
    let n = n0 - i * 2
    let x = i,
      y = i
    const a = []

    for (const [dx, dy] of DIRS) {
      for (let j = 0; j < n - 1; j++) {
        a.push(grid[x][y])
        x += dx
        y += dy
      }
      ;[m, n] = [n, m]
    }

    const shift = k % a.length
    const rotated = a.slice(shift).concat(a.slice(0, shift))

    x = i
    y = i
    let j = 0
    m = m0 - i * 2
    n = n0 - i * 2

    for (const [dx, dy] of DIRS) {
      for (let p = 0; p < n - 1; p++) {
        grid[x][y] = rotated[j++]
        x += dx
        y += dy
      }
      ;[m, n] = [n, m]
    }
  }

  return grid
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
        [40, 10],
        [30, 20],
      ],
      1,
    ],
    expected: [
      [10, 20],
      [40, 30],
    ],
    comment: '// 输入：grid = [[40,10],[30,20]], k = 1  输出：[[10,20],[40,30]]',
  },
  {
    args: [
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      2,
    ],
    expected: [
      [3, 4, 8, 12],
      [2, 11, 10, 16],
      [1, 7, 6, 15],
      [5, 9, 13, 14],
    ],
    comment:
      '// 输入：grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], k = 2  输出：[[3,4,8,12],[2,11,10,16],[1,7,6,15],[5,9,13,14]]',
  },
]

__lcRunExamples(rotateGrid, __lcExamples)
