import { PriorityQueue } from 'datastructures-js'

var findMaximizedCapital = function (k, w, profits, capital) {
  const q = new PriorityQueue((a, b) => a[0] < b[0])
  let arr = []
  for (let i = 0; i < profits.length; i++) {
    arr.push([profits[i], capital[i]])
  }
  arr = arr.sort((a, b) => a[1] - b[1])
  let sum = w
  let cur = 0
  while (k > 0) {
    let i = cur
    for (; i < arr.length; i++) {
      if (arr[i][1] <= w) {
        q.enqueue(arr[i])
      } else {
        break
      }
    }
    if (q.isEmpty()) {
      return sum
    }
    cur = i
    const [p] = q.dequeue()
    sum += p
    w += p
    k--
  }
  return sum
}

// console.log(findMaximizedCapital(1, 0, [1, 2, 3], [1, 1, 2])) // 0
// console.log(findMaximizedCapital(1, 2, [1, 2, 3], [1, 1, 2])) // 5
console.log(findMaximizedCapital(10, 0, [1, 2, 3], [0, 1, 2])) // 6

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
  {
    args: [2, 0, [1, 2, 3], [0, 1, 1]],
    expected: 4,
    comment: '// 输入：k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]  输出：4',
  },
  {
    args: [3, 0, [1, 2, 3], [0, 1, 2]],
    expected: 6,
    comment: '// 输入：k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]  输出：6',
  },
]

// __lcRunExamples(findMaximizedCapital, __lcExamples)
