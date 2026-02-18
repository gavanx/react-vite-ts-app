var twoSum = function (numbers, target) {
  let l = 0
  let r = numbers.length - 1
  while (l < r) {
    const sum = numbers[l] + numbers[r]
    if (sum === target) {
      return [l + 1, r + 1]
    } else if (sum < target) {
      l++
    } else {
      r--
    }
  }
  return [-1, -1]
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
    args: [[2, 7, 11, 15], 9],
    expected: [1, 2],
    comment: '// 输入：numbers = [ 2 , 7 ,11,15], target = 9  输出：[1,2]',
  },
  {
    args: [[2, 3, 4], 6],
    expected: [1, 3],
    comment: '// 输入：numbers = [ 2 ,3, 4 ], target = 6  输出：[1,3]',
  },
  {
    args: [[-1, 0], -1],
    expected: [1, 2],
    comment: '// 输入：numbers = [ -1 , 0 ], target = -1  输出：[1,2]',
  },
]

__lcRunExamples(twoSum, __lcExamples)
