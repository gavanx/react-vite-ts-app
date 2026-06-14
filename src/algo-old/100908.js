var minGenerations = function (points, target) {
  const key = (p) => p[0] + ',' + p[1] + ',' + p[2]
  const tk = key(target)

  let set = new Set()
  let pts = []
  for (const p of points) {
    const k = key(p)
    if (k === tk) return 0
    if (!set.has(k)) {
      set.add(k)
      pts.push(p)
    }
  }

  for (let gen = 1; ; gen++) {
    const s2 = new Set(set)
    const newPts = []
    for (const p0 of pts) {
      for (const p1 of pts) {
        if (p0 !== p1) {
          const mid = [
            Math.floor((p0[0] + p1[0]) / 2),
            Math.floor((p0[1] + p1[1]) / 2),
            Math.floor((p0[2] + p1[2]) / 2),
          ]
          const mk = key(mid)
          if (mk === tk) return gen
          if (!s2.has(mk)) {
            s2.add(mk)
            newPts.push(mid)
          }
        }
      }
    }
    if (s2.size === set.size) return -1
    set = s2
    pts = [...pts, ...newPts]
  }
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
        [0, 0, 0],
        [6, 6, 6],
      ],
      [3, 3, 3],
    ],
    expected: 1,
    comment: '// 输入：points = [[0,0,0],[6,6,6]], target = [3,3,3]  输出：1',
  },
  {
    args: [
      [
        [0, 0, 0],
        [5, 5, 5],
      ],
      [1, 1, 1],
    ],
    expected: 2,
    comment: '// 输入：points = [[0,0,0],[5,5,5]], target = [1,1,1]  输出：2',
  },
  {
    args: [
      [
        [0, 0, 0],
        [2, 2, 2],
        [3, 3, 3],
      ],
      [2, 2, 2],
    ],
    expected: 0,
    comment: '// 输入：points = [[0,0,0],[2,2,2],[3,3,3]], target = [2,2,2]  输出：0',
  },
  {
    args: [[[1, 2, 3]], [5, 5, 5]],
    expected: -1,
    comment: '// 输入：points = [[1,2,3]], target = [5,5,5]  输出：-1',
  },
]

__lcRunExamples(minGenerations, __lcExamples)
