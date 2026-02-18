var numberOfSubstrings = function (s) {
  s = s.split('').map((c) => c.charCodeAt(0) - 97)
  const cnt = [0, 0, 0]
  let ans = 0,
    l = 0,
    i
  for (let r = 0; r < s.length; r++) {
    i = s[r]
    cnt[i] += 1
    while (cnt.every((c) => c > 0)) {
      cnt[s[l]]--
      l++
    }
    ans += Math.max(l, 0)
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
    }
  }
}

const __lcExamples = [
  { args: ['abcabc'], expected: 10, comment: '// 输入：s = "abcabc  输出：10' },
  { args: ['aaacb'], expected: 3, comment: '// 输入：s = "aaacb  输出：3' },
  { args: ['abc'], expected: 1, comment: '// 输入：s = "abc  输出：1' },
]

__lcRunExamples(numberOfSubstrings, __lcExamples)
