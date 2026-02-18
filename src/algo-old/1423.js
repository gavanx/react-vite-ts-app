var maxScore = function (cardPoints, k) {
  const arr = cardPoints.slice(0, k).reverse().concat(cardPoints.slice(-k).reverse())
  let sum = 0
  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    if (i >= k) {
      sum -= arr[i - k]
    }
    sum += arr[i]
    ans = Math.max(ans, sum)
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
  {
    args: [[1, 2, 3, 4, 5, 6, 1], 3],
    expected: 12,
    comment: '// 输入：cardPoints = [1,2,3,4,5,6,1], k = 3  输出：12',
  },
  { args: [[2, 2, 2], 2], expected: 4, comment: '// 输入：cardPoints = [2,2,2], k = 2  输出：4' },
  {
    args: [[9, 7, 7, 9, 7, 7, 9], 7],
    expected: 55,
    comment: '// 输入：cardPoints = [9,7,7,9,7,7,9], k = 7  输出：55',
  },
  {
    args: [[1, 1000, 1], 1],
    expected: 1,
    comment: '// 输入：cardPoints = [1,1000,1], k = 1  输出：1',
  },
  {
    args: [[1, 79, 80, 1, 1, 1, 200, 1], 3],
    expected: 202,
    comment: '// 输入：cardPoints = [1,79,80,1,1,1,200,1], k = 3  输出：202',
  },
]

__lcRunExamples(maxScore, __lcExamples)
