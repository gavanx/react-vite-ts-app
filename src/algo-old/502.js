import { PriorityQueue } from 'datastructures-js'

var findMaximizedCapital = function (k, w, profits, capital) {
  const q = new PriorityQueue((a, b) => a[0] < b[0])
  for (let i = 0; i < profits.length; i++) {
    q.enqueue([profits[i], capital[i]])
  }
  let cnt = 0
  let sum = w
  while (cnt < k) {
    const arr = []
    while (true) {
      if (q.isEmpty()) {
        return sum
      }
      const [p, c] = q.dequeue()
      if (c > w) {
        arr.push([p, c])
      } else {
        sum += p
        cnt += 1
        w += p
        break
      }
    }
    if (arr.length > 0) {
      for (const item of arr) {
        q.enqueue(item)
      }
    }
  }
  return sum
}

console.log(findMaximizedCapital(1, 0, [1, 2, 3], [1, 1, 2]))
console.log(findMaximizedCapital(1, 2, [1, 2, 3], [1, 1, 2]))

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
