class MinHeap {
  constructor() {
    this.heap = []
  }

  push(val) {
    this.heap.push(val)
    this.bubbleUp(this.heap.length - 1)
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = (index - 1) >> 1
      if (this.heap[parent][0] <= this.heap[index][0]) break
        ;[this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
      index = parent
    }
  }

  pop() {
    const min = this.heap[0]
    const end = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = end
      this.bubbleDown(0)
    }
    return min
  }

  bubbleDown(index) {
    const length = this.heap.length
    while (true) {
      let left = 2 * index + 1
      let right = 2 * index + 2
      let smallest = index

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left
      }
      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right
      }
      if (smallest === index) break
        ;[this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
      index = smallest
    }
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

function dijkstra(g, start, price) {
  const n = g.length
  const dis = new Array(n).fill(price)
  dis[start] = 0

  const heap = new MinHeap()
  heap.push([0, start])

  while (!heap.isEmpty()) {
    const [disX, x] = heap.pop()

    if (disX > dis[x]) continue

    for (const [y, wt] of g[x]) {
      const newDisY = disX + wt
      if (newDisY < dis[y]) {
        dis[y] = newDisY
        heap.push([newDisY, y])
      }
    }
  }

  return dis
}

function minCost(n, prices, roads) {
  const g1 = Array.from({ length: n }, () => [])
  const g2 = Array.from({ length: n }, () => [])

  for (const [x, y, cost, tax] of roads) {
    g1[x].push([y, cost])
    g1[y].push([x, cost])
    g2[x].push([y, cost * tax])
    g2[y].push([x, cost * tax])
  }

  const ans = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    const price = prices[i]
    const dis1 = dijkstra(g1, i, price)
    const dis2 = dijkstra(g2, i, price)

    let minVal = Infinity
    for (let j = 0; j < n; j++) {
      const total = prices[j] + dis1[j] + dis2[j]
      if (total < minVal) {
        minVal = total
      }
    }
    ans[i] = minVal
  }

  return ans
}

const n = 3
const prices = [1, 2, 3]
const roads = [
  [0, 1, 1, 1],
  [1, 2, 1, 1],
  [0, 2, 1, 1],
]
console.log(minCost(n, prices, roads))

const CASE_SLOW_MS = 20
const TOTAL_SLOW_MS = 100

function __lcRunExamples(fn, cases) {
  let totalMs = 0
  let allPassed = true
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(`${i + 1}`, comment)
    const t0 = performance.now()
    try {
      const got = fn(...args)
      const ms = performance.now() - t0
      totalMs += ms
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      if (!ok) allPassed = false
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
    } catch (e) {
      allPassed = false
      const ms = performance.now() - t0
      totalMs += ms
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) })
      throw e
    }
  }
  const totalSlow = totalMs > TOTAL_SLOW_MS
  const totalStyle = totalSlow
    ? 'color:#dc2626;font-weight:800;background:#fee2e2;padding:2px 4px;border-radius:4px;border:1px solid #dc2626;'
    : 'color:#64748b;'
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms [${allPassed ? 'success' : 'fail'}]`, totalStyle)
}

const __lcExamples = [
  {
    args: [2, [8, 3], [[0, 1, 1, 2]]],
    expected: [6, 3],
    comment: '// 输入：n = 2, prices = [8,3], roads = [[0,1,1,2]]  输出：[6,3]',
  },
  {
    args: [
      3,
      [9, 4, 6],
      [
        [0, 1, 1, 3],
        [1, 2, 4, 2],
      ],
    ],
    expected: [8, 4, 6],
    comment: '// 输入：n = 3, prices = [9,4,6], roads = [[0,1,1,3],[1,2,4,2]]  输出：[8,4,6]',
  },
  {
    args: [
      3,
      [10, 11, 1],
      [
        [0, 2, 1, 3],
        [1, 2, 3, 4],
        [0, 1, 5, 2],
      ],
    ],
    expected: [5, 11, 1],
    comment:
      '// 输入：n = 3, prices = [10,11,1], roads = [[0,2,1,3],[1,2,3,4],[0,1,5,2]]  输出：[5,11,1]',
  },
]

__lcRunExamples(minCost, __lcExamples)
