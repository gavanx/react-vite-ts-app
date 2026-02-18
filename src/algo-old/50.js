var myPow = function (x, n) {
  const dfs = (x, n) => {
    if (n < 0) {
      return 1 / dfs(x, -n)
    }
    if (n === 1) {
      return x
    }
    if (n % 2 === 0) {
      return dfs(x * x, n / 2)
    } else {
      return x * dfs(x, n - 1)
    }
  }
  return dfs(x, n)
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
  { args: [2.0, 10], expected: 1024.0, comment: '// 输入：x = 2.00000, n = 10  输出：1024.00000' },
  { args: [2.1, 3], expected: 9.261, comment: '// 输入：x = 2.10000, n = 3  输出：9.26100' },
  { args: [2.0, -2], expected: 0.25, comment: '// 输入：x = 2.00000, n = -2  输出：0.25000' },
]

__lcRunExamples(myPow, __lcExamples)
