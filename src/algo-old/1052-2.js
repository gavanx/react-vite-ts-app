var maxSatisfied = function (customers, grumpy, minutes) {
  let t = 0
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      t += customers[i]
    }
  }
  let s = 0
  let max = 0
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 1) {
      s += customers[i]
    }
    if (i >= minutes) {
      if (grumpy[i - minutes] === 1) {
        s -= customers[i - minutes]
      }
    }
    max = Math.max(max, s)
  }
  return t + max
}
console.log(maxSatisfied([4, 10, 10], [1, 1, 0], 2)) //24
console.log(maxSatisfied([2, 6, 6, 9], [0, 0, 1, 1], 1)) // 17

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
    args: [[1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3],
    expected: 16,
    comment:
      '// 输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3  输出：16',
  },
  {
    args: [[1], [0], 1],
    expected: 1,
    comment: '// 输入：customers = [1], grumpy = [0], minutes = 1  输出：1',
  },
]

__lcRunExamples(maxSatisfied, __lcExamples)
