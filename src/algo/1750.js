var minimumLength = function (s) {
  if (s.length <= 1) {
    return s.length
  }
  let l = 0,
    r = s.length - 1
  while (l < r) {
    if (s[l] === s[r]) {
      const d = s[l]
      while (s[l] === d) {
        l++
      }
      while (s[r] === d) {
        r--
      }
    } else {
      break
    }
  }
  console.log(l, r)
  return Math.max(0, r - l + 1)
}
console.log(minimumLength('c')) // 1
console.log(minimumLength('aabaaa')) // 1
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
  { args: ['ca'], expected: 2, comment: '// 输入：s = "ca  输出：2' },
  { args: ['cabaabac'], expected: 0, comment: '// 输入：s = "cabaabac  输出：0' },
  { args: ['aabccabba'], expected: 3, comment: '// 输入：s = "aabccabba  输出：3' },
]

__lcRunExamples(minimumLength, __lcExamples)
