var solveQueries = function (nums, queries) {
  const n = nums.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    const x = nums[i]
    if (map.has(x)) {
      map.get(x).push(i)
    } else {
      map.set(x, [i])
    }
  }
  const ans = []
  for (const i of queries) {
    const x = nums[i]
    let ret = Infinity
    if (map.has(x)) {
      const arr = map.get(x)
      if (arr.length > 1) {
        let l = 0,
          r = arr.length,
          m,
          j
        while (l < r) {
          m = (l + r) >> 1
          j = arr[m]
          if (j > i) {
            r = m
          } else if (j < i) {
            l = m + 1
          } else {
            let k = arr[m - 1]
            if (k === undefined) {
              k = arr[arr.length - 1]
            }
            let d = Math.abs(k - i)
            ret = Math.min(ret, d, n - d)

            k = arr[m + 1]
            if (k === undefined) {
              k = arr[0]
            }
            d = Math.abs(k - i)
            ret = Math.min(ret, d, n - d)
            break
          }
        }
      }
    }
    ans.push(ret === Infinity ? -1 : ret)
  }
  return ans
}

console.log(solveQueries([13, 13, 10, 6, 5, 2, 6, 6, 1, 1, 18, 18, 6], [10, 6, 1, 5, 7]))
console.log(solveQueries([14, 14, 4, 2, 19, 19, 14, 19, 14], [2, 4, 8, 6, 3]))

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
      [1, 3, 1, 4, 1, 3, 2],
      [0, 3, 5],
    ],
    expected: [2, -1, 3],
    comment: '// 输入：nums = [1,3,1,4,1,3,2], queries = [0,3,5]  输出：[2,-1,3]',
  },
  {
    args: [
      [1, 2, 3, 4],
      [0, 1, 2, 3],
    ],
    expected: [-1, -1, -1, -1],
    comment: '// 输入：nums = [1,2,3,4], queries = [0,1,2,3]  输出：[-1,-1,-1,-1]',
  },
]

__lcRunExamples(solveQueries, __lcExamples)
