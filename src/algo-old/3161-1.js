/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function (queries) {
  let mx = 0
  for (const q of queries) {
    mx = Math.max(mx, q[1])
  }
  const m = mx + 1
  const n = 2 << m.toString(2).length
  const d = new Array(n).fill(0)

  function update(o, l, r, i, v) {
    if (l === r) {
      d[o] = v
      return
    }
    const mid = Math.floor((l + r) / 2)
    if (i <= mid) {
      update(o * 2, l, mid, i, v)
    } else {
      update(o * 2 + 1, mid + 1, r, i, v)
    }
    d[o] = Math.max(d[o * 2], d[o * 2 + 1])
  }

  function query(o, l, r, R) {
    if (r <= R) {
      return d[o]
    }
    const mid = Math.floor((l + r) / 2)
    if (R <= mid) {
      return query(o * 2, l, mid, R)
    }
    return Math.max(d[o * 2], query(o * 2 + 1, mid + 1, r, R))
  }

  function bs(a, t) {
    let l = 0,
      r = a.length
    while (l < r) {
      const mid = Math.floor((l + r) / 2)
      if (a[mid] < t) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
  }

  const arr = [0, m]
  const ans = []

  for (const q of queries) {
    const x = q[1]
    const idx = bs(arr, x)
    const pre = arr[idx - 1]
    if (q[0] === 1) {
      const nxt = arr[idx]
      arr.splice(idx, 0, x)
      update(1, 0, m, x, x - pre)
      update(1, 0, m, nxt, nxt - x)
    } else {
      if (x - pre >= q[2]) {
        ans.push(true)
      } else {
        ans.push(query(1, 0, m, pre) >= q[2])
      }
    }
  }

  return ans
}

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
    args: [
      [
        [1, 2],
        [2, 3, 3],
        [2, 3, 1],
        [2, 2, 2],
      ],
    ],
    expected: [false, true, true],
    comment: '// 输入：queries = [[1,2],[2,3,3],[2,3,1],[2,2,2]]  输出：[false,true,true]',
  },
  {
    args: [
      [
        [1, 7],
        [2, 7, 6],
        [1, 2],
        [2, 7, 5],
        [2, 7, 6],
      ],
    ],
    expected: [true, true, false],
    comment: '// 输入：queries = [[1,7],[2,7,6],[1,2],[2,7,5],[2,7,6]]  输出：[true,true,false]',
  },
]

__lcRunExamples(getResults, __lcExamples)
