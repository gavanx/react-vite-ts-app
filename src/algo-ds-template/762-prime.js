var countPrimeSetBits = function (left, right) {
  const prims = [2, 3, 5, 7, 11, 13, 17, 19]
  const hash = new Array(32).fill(false)
  for (const p of prims) {
    hash[p] = true
  }
  let ans = 0
  let cur
  for (let i = left; i <= right; i++) {
    cur = i
      .toString(2)
      .split('')
      .filter((b) => b === '1').length
    if (hash[cur]) {
      ans += 1
    }
  }
  return ans
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
      throw e
    }
  }
}

const __lcExamples = [
  { args: [6, 10], expected: 4, comment: '// 输入：left = 6, right = 10  输出：4' },
  { args: [10, 15], expected: 5, comment: '// 输入：left = 10, right = 15  输出：5' },
]

__lcRunExamples(countPrimeSetBits, __lcExamples)
