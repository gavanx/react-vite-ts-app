var minimumXORSum = function (nums1, nums2) {
  const n = nums1.length
  const FULL = (1 << n) - 1
  const cache = new Map()
  const dfs = (s) => {
    if (s === FULL) {
      return 0
    }
    const key = s
    if (cache.has(key)) {
      return cache.get(key)
    }
    let i = s
      .toString(2)
      .split('')
      .filter((b) => b === '1').length
    let res = Infinity
    for (let j = 0; j < n; j++) {
      if (((s >> j) & 1) == 0) {
        res = Math.min(res, (nums1[i] ^ nums2[j]) + dfs(s | (1 << j)))
      }
    }
    cache.set(key, res)
    return res
  }
  return dfs(0)
}

const CASE_SLOW_MS = 20
const TOTAL_SLOW_MS = 100

function __lcRunExamples(fn, cases) {
  let totalMs = 0
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
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
      const slow = ms > CASE_SLOW_MS
      const timeStyle = slow
        ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;'
        : 'color:#64748b;'
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`)
    } catch (e) {
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
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms`, totalStyle)
}

const __lcExamples = [
  {
    args: [
      [1, 2],
      [2, 3],
    ],
    expected: 2,
    comment: '// 输入：nums1 = [1,2], nums2 = [2,3]  输出：2',
  },
  {
    args: [
      [1, 0, 3],
      [5, 3, 4],
    ],
    expected: 8,
    comment: '// 输入：nums1 = [1,0,3], nums2 = [5,3,4]  输出：8',
  },
]

__lcRunExamples(minimumXORSum, __lcExamples)
