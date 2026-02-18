import { PriorityQueue } from 'datastructures-js'

var kSmallestPairs = function (nums1, nums2, k) {
  const m1 = new PriorityQueue((a, b) => a > b)
  const m2 = new PriorityQueue((a, b) => a > b)
  for (const x of nums1) {
    m1.enqueue(x)
  }
  for (const x of nums2) {
    m2.enqueue(x)
  }
  const res = []
  while (res.length < k) {
    const x1 = m1.front()
    const x2 = m2.front()
    res.push([x1, x2])
    if (x1 <= x2) {
      m2.dequeue()
    } else {
      m1.dequeue()
    }
  }
  return res
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
    args: [[1, 7, 11], [2, 4, 6], 3],
    expected: [
      [1, 2],
      [1, 4],
      [1, 6],
    ],
    comment: '// 输入：nums1 = [1,7,11], nums2 = [2,4,6], k = 3  输出：[[1,2],[1,4],[1,6]]',
  },
  {
    args: [[1, 1, 2], [1, 2, 3], 2],
    expected: [
      [1, 1],
      [1, 1],
    ],
    comment: '// 输入：nums1 = [1,1,2], nums2 = [1,2,3], k = 2  输出：[[1,1],[1,1]]',
  },
]

__lcRunExamples(kSmallestPairs, __lcExamples)
