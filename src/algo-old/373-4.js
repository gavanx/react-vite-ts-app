import { PriorityQueue } from 'datastructures-js'

var kSmallestPairs = function (nums1, nums2, k) {
  const q = new PriorityQueue((a, b) => a[0] > b[0])
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    q.enqueue([nums1[i] + nums2[0], i, 0])
  }
  const res = []
  while (res.length < k) {
    const [_, i, j] = q.dequeue()
    res.push([nums1[i], nums2[j]])
    if (j + 1 < nums2.length) {
      q.enqueue([nums1[i] + nums2[j + 1], i, j + 1])
    }
  }
  return res
}
console.log(kSmallestPairs([1, 2, 4, 5, 6], [3, 5, 7, 9], 20).join())
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
