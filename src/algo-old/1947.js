var maxCompatibilitySum = function (students, mentors) {
  const m = students.length
  const n = students[0].length
  const score = new Array(m).fill(0).map(() => new Array(m).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      let sum = 0
      for (let k = 0; k < n; k++) {
        if (students[i][k] == mentors[j][k]) {
          sum++
        }
      }
      score[i][j] = sum
    }
  }
  const FULL = (1 << m) - 1
  const cache = new Map()
  const dfs = (s, t) => {
    if (s === FULL && t === FULL) {
      return 0
    }
    const key = `${s}-${t}`
    if (cache.has(key)) {
      return cache.get(key)
    }
    let res = 0
    for (let i = 0; i < m; i++) {
      if (((s >> i) & 1) === 0) {
        for (let j = 0; j < m; j++) {
          if (((t >> j) & 1) === 0) {
            res = Math.max(res, score[i][j] + dfs(s | (1 << i), t | (1 << j)))
          }
        }
      }
    }
    cache.set(key, res)
    return res
  }
  return dfs(0, 0)
}

console.log(Math.pow(2, 36))

const CASE_SLOW_MS = 20
const TOTAL_SLOW_MS = 100

function __lcRunExamples(fn, cases) {
  let totalMs = 0
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
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
    } catch (e) {
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
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms`, totalStyle)
}

const __lcExamples = [
  {
    args: [
      [
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 1],
      ],
      [
        [1, 0, 0],
        [0, 0, 1],
        [1, 1, 0],
      ],
    ],
    expected: 8,
    comment:
      '// 输入：students = [[1,1,0],[1,0,1],[0,0,1]], mentors = [[1,0,0],[0,0,1],[1,1,0]]  输出：8',
  },
  {
    args: [
      [
        [0, 0],
        [0, 0],
        [0, 0],
      ],
      [
        [1, 1],
        [1, 1],
        [1, 1],
      ],
    ],
    expected: 0,
    comment: '// 输入：students = [[0,0],[0,0],[0,0]], mentors = [[1,1],[1,1],[1,1]]  输出：0',
  },
]

__lcRunExamples(maxCompatibilitySum, __lcExamples)
