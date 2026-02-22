import { Deque } from 'datastructures-js'

var longestSubarray = function (nums, limit) {
  const minQ = new Deque()
  const maxQ = new Deque()
  let ans = 0,
    l = 0
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    while (!minQ.isEmpty() && x <= nums[minQ.back()]) {
      minQ.popBack()
    }
    minQ.pushBack(i)
    while (!maxQ.isEmpty() && x >= nums[maxQ.back()]) {
      maxQ.popBack()
    }
    maxQ.pushBack(i)
    while (nums[maxQ.front()] - nums[minQ.front()] > limit) {
      l++
      if (minQ.front() < l) {
        minQ.popFront()
      }
      if (maxQ.front() < l) {
        maxQ.popFront()
      }
    }
    ans = Math.max(ans, i - l + 1)
  }
  return ans
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
  {
    args: [[8, 2, 4, 7], 4],
    expected: 2,
    comment: '// 输入：nums = [8,2,4,7], limit = 4  输出：2',
  },
  {
    args: [[10, 1, 2, 4, 7, 2], 5],
    expected: 4,
    comment: '// 输入：nums = [10,1,2,4,7,2], limit = 5  输出：4',
  },
  {
    args: [[4, 2, 2, 2, 4, 4, 2, 2], 0],
    expected: 3,
    comment: '// 输入：nums = [4,2,2,2,4,4,2,2], limit = 0  输出：3',
  },
]

__lcRunExamples(longestSubarray, __lcExamples)
