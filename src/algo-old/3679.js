var minArrivalsToDiscard = function (arrivals, w, m) {
  let ans = 0
  const map = new Map()
  for (let i = 0; i < arrivals.length; i++) {
    if (i >= w) {
      const cnt = map.get(arrivals[i - w])
      if (cnt > 1) {
        map.set(arrivals[i - w], cnt - 1)
      } else {
        map.delete(arrivals[i - w])
      }
    }
    if (map.get(arrivals[i]) >= m) {
      ans += 1
    } else {
      map.set(arrivals[i], (map.get(arrivals[i]) || 0) + 1)
    }
  }
  return ans
}
// console.log(minArrivalsToDiscard([10, 4, 3, 6, 4, 5, 6, 1, 4], 7, 1)) //2
console.log(
  minArrivalsToDiscard(
    [7, 3, 9, 9, 7, 3, 5, 9, 7, 2, 6, 10, 9, 7, 9, 1, 3, 6, 2, 4, 6, 2, 6, 8, 4, 8, 2, 7, 5, 6],
    10,
    1
  )
) //13
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
    args: [[1, 2, 1, 3, 1], 4, 2],
    expected: 0,
    comment: '// 输入：arrivals = [1,2,1,3,1], w = 4, m = 2  输出：0',
  },
  {
    args: [[1, 2, 3, 3, 3, 4], 3, 2],
    expected: 1,
    comment: '// 输入：arrivals = [1,2,3,3,3,4], w = 3, m = 2  输出：1',
  },
]

__lcRunExamples(minArrivalsToDiscard, __lcExamples)
