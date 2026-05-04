/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {
  const MOD = 1000000007
  const n = nums.length
  const B = Math.floor(Math.sqrt(queries.length))
  const diff = new Array(B).fill(null)

  for (const [l, r, k, v] of queries) {
    if (k < B) {
      if (diff[k] === null) {
        diff[k] = new Array(n + k).fill(1)
      }
      diff[k][l] = (diff[k][l] * v) % MOD

      const rem = (r - l) % k
      const rPos = r - rem + k
      const invV = modInverse(v, MOD)
      diff[k][rPos] = (diff[k][rPos] * invV) % MOD
    } else {
      for (let i = l; i <= r; i += k) {
        nums[i] = (nums[i] * v) % MOD
      }
    }
  }

  for (let k = 0; k < B; k++) {
    const d = diff[k]
    if (!d) continue

    for (let start = 0; start < k; start++) {
      let mul = 1
      for (let i = start; i < n; i += k) {
        mul = (mul * d[i]) % MOD
        nums[i] = (nums[i] * mul) % MOD
      }
    }
  }

  return nums.reduce((a, b) => a ^ b, 0)
}

function modInverse(a, mod) {
  return powMod(a, mod - 2, mod)
}

function powMod(base, exp, mod) {
  let res = 1
  base = base % mod
  while (exp > 0) {
    if (exp % 2 === 1) {
      res = Number((BigInt(res) * base) % mod)
    }
    base = Number((BigInt(base) * base) % mod)
    exp = Math.floor(exp / 2)
  }
  return res
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
    args: [[1, 1, 1], [[0, 2, 1, 4]]],
    expected: 4,
    comment: '// 输入：nums = [1,1,1], queries = [[0,2,1,4]]  输出：4',
  },
  {
    args: [
      [2, 3, 1, 5, 4],
      [
        [1, 4, 2, 3],
        [0, 2, 1, 2],
      ],
    ],
    expected: 31,
    comment: '// 输入：nums = [2,3,1,5,4], queries = [[1,4,2,3],[0,2,1,2]]  输出：31',
  },
]

__lcRunExamples(xorAfterQueries, __lcExamples)
