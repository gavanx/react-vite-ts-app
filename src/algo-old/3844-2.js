var almostPalindromic = function (s) {
  if (s.length === 2) {
    return 2
  }
  let ans = 0
  const n = s.length
  const expand = (l, r) => {
    while (l >= 0 && r < n && s[l] === s[r]) {
      l--
      r++
    }
    ans = Math.max(Math.min(r - l - 1, n), ans)
  }
  for (let i = 1; i < 2 * n - 1; i++) {
    let l = Math.floor(i / 2),
      r = Math.floor((i + 1) / 2)
    let flag = true
    while (s[l] === s[r] || flag) {
      if (s[l] === s[r]) {
        l--
        r++
        if (l < 0 || r >= n) {
          ans = Math.max(Math.min(r - l, n), ans)
          break
        }
      } else if (flag) {
        flag = false
        expand(l - 1, r)
        expand(l, r + 1)
        break
      }
    }
  }
  return ans
}

console.log(almostPalindromic('aaab')) //4
console.log(almostPalindromic('abb')) //3
console.log(almostPalindromic('abaa')) //4
console.log(almostPalindromic('aaa')) // 3
console.log(almostPalindromic('aa')) //2

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
  { args: ['abca'], expected: 4, comment: '// 输入：s = "abca  输出：4' },
  { args: ['abba'], expected: 4, comment: '// 输入：s = "abba  输出：4' },
  { args: ['zzabba'], expected: 5, comment: '// 输入：s = "zzabba  输出：5' },
]

__lcRunExamples(almostPalindromic, __lcExamples)
