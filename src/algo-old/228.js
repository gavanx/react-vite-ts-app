var summaryRanges = function (nums) {
  const ans = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      ans[ans.length - 1][1] = nums[i]
    } else {
      ans.push([nums[i]])
    }
  }
  return ans.map((r) => (r[1] !== undefined ? `${r[0]}->${r[1]}` : '' + r[0]))
}

console.log(summaryRanges([-1, 0, 2, 9]))

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
    args: [[0, 1, 2, 4, 5, 7]],
    expected: ['0->2', '4->5', '7'],
    comment: '// 输入：nums = [0,1,2,4,5,7]  输出：["0->2","4->5","7"]',
  },
  {
    args: [[0, 2, 3, 4, 6, 8, 9]],
    expected: ['0', '2->4', '6', '8->9'],
    comment: '// 输入：nums = [0,2,3,4,6,8,9]  输出：["0","2->4","6","8->9"]',
  },
]

// __lcRunExamples(summaryRanges, __lcExamples)
