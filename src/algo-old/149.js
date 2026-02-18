var maxPoints = function (points) {
  const n = points.length
  let ans = 0
  for (let i = 0; i < n - 1; i++) {
    const [x, y] = points[i]
    const cnt = new Map()
    for (let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j]
      const dx = x2 - x,
        dy = y2 - y
      const k = dx !== 0 ? dy / dx : Infinity
      const c = (cnt.get(k) ?? 0) + 1
      cnt.set(k, c)
      ans = Math.max(ans, c)
    }
  }
  return ans + 1
}
function __lcRunExamples(fn, cases) {
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(comment)
    try {
      const got = fn(...args)
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
    } catch (e) {
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) })
    }
  }
}

const __lcExamples = [
  {
    args: [
      [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
    ],
    expected: 3,
    comment: '// 输入：points = [[1,1],[2,2],[3,3]]  输出：3',
  },
  {
    args: [
      [
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4],
      ],
    ],
    expected: 4,
    comment: '// 输入：points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]  输出：4',
  },
]

__lcRunExamples(maxPoints, __lcExamples)
