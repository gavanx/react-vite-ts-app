var removeDuplicateLetters = function (s) {
  const left = _.countBy(s)
  const ans = []
  const ansSet = new Set()
  for (const c of s) {
    left[c]--
    if (ansSet.has(c)) {
      continue
    }
    while (ans && c < ans[ans.length - 1] && left[ans[ans.length - 1]]) {
      ansSet.delete(ans.pop())
    }
    ans.push(c)
    ansSet.add(c)
  }
  return ans.join('')
}

function __lcRunExamples(fn, cases) {
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(`${i + 1}`, comment)
    try {
      const got = fn(...args)
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(
        `%c${i + 1} ${ok ? 'OK' : 'FAIL'}`,
        color,
        { got: gotOut, expected: expectedOut },
        `
`
      )
    } catch (e) {
      console.log(
        `%c${i + 1} ERROR`,
        'color: #dc2626; font-weight: 700;',
        { error: String(e) },
        `
`
      )
      throw e
    }
  }
}

const __lcExamples = [
  { args: ['bcabc'], expected: 'abc', comment: '// 输入：s = "bcabc  输出：abc' },
  { args: ['cbacdcbc'], expected: 'acdb', comment: '// 输入：s = "cbacdcbc  输出：acdb' },
]

__lcRunExamples(removeDuplicateLetters, __lcExamples)
