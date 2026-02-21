var totalHammingDistance = function (nums) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      ans += (nums[i] ^ nums[j])
        .toString(2)
        .split('')
        .filter((b) => b === '1').length
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
  { args: [[4, 14, 2]], expected: 6, comment: '// 输入：nums = [4,14,2]  输出：6' },
  { args: [[4, 14, 4]], expected: 4, comment: '// 输入：nums = [4,14,4]  输出：4' },
]

__lcRunExamples(totalHammingDistance, __lcExamples)
