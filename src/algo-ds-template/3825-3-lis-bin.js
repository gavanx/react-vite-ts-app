var longestSubsequence = function (nums) {
  let ans = 0

  const maxNum = Math.max(...nums)
  const w = maxNum === 0 ? 1 : maxNum.toString(2).length

  for (let i = 0; i < w; i++) {
    const bit = 1 << i
    const f = []

    for (const x of nums) {
      if ((x & bit) === 0) continue
      let left = 0,
        right = f.length
      while (left < right) {
        const mid = (left + right) >> 1
        if (f[mid] >= x) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      const j = left
      if (j < f.length) {
        f[j] = x
      } else {
        f.push(x)
      }
    }
    ans = Math.max(ans, f.length)
  }
  return ans
}

console.log(longestSubsequence([6, 8, 38, 40, 48, 28, 4])) // 3
console.log(longestSubsequence([6, 0])) //1
console.log(longestSubsequence([2, 3, 6])) //3

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
  { args: [[5, 4, 7]], expected: 2, comment: '// 输入：nums = [5,4,7]  输出：2' },
  { args: [[2, 3, 6]], expected: 3, comment: '// 输入：nums = [2,3,6]  输出：3' },
  { args: [[0, 1]], expected: 1, comment: '// 输入：nums = [0,1]  输出：1' },
]

__lcRunExamples(longestSubsequence, __lcExamples)
