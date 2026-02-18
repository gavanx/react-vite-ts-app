var maximumLengthSubstring = function (s) {
  const map = new Map()
  let i = 0
  let ans = 0
  for (let j = 0; j < s.length; j++) {
    const c = s[j]
    if (map.get(c) >= 2) {
      if (s[i] === c) {
        i++
      } else {
        while (s[i] !== c) {
          const cnt = map.get(s[i])
          if (cnt > 1) {
            map.set(s[i], cnt - 1)
          } else {
            map.delete(s[i])
          }
          i++
        }
        i++
      }
    } else {
      map.set(c, (map.get(c) || 0) + 1)
    }
    ans = Math.max(ans, j - i + 1)
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
  { args: ['bcbbbcba'], expected: 4, comment: '// 输入：s = "bcbbbcba  输出：4' },
  { args: ['aaaa'], expected: 2, comment: '// 输入：s = "aaaa  输出：2' },
]

__lcRunExamples(maximumLengthSubstring, __lcExamples)
