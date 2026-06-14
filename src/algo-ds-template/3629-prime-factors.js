const MX = 1000001
const primeFactors = Array.from({ length: MX }, () => [])

for (let i = 2; i < MX; i++) {
  if (primeFactors[i].length === 0) {
    for (let j = i; j < MX; j += i) {
      primeFactors[j].push(i)
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function (nums) {
  const n = nums.length
  const groups = new Map()

  for (let i = 0; i < n; i++) {
    const x = nums[i]
    for (const p of primeFactors[x]) {
      if (!groups.has(p)) {
        groups.set(p, [])
      }
      groups.get(p).push(i)
    }
  }

  let ans = 0
  const vis = new Array(n).fill(false)
  vis[0] = true
  let queue = [0]

  while (true) {
    const tmp = queue
    queue = []

    for (const i of tmp) {
      if (i === n - 1) {
        return ans
      }

      const idx = groups.get(nums[i]) || []
      idx.push(i + 1)
      if (i > 0) {
        idx.push(i - 1)
      }

      for (const j of idx) {
        if (!vis[j]) {
          vis[j] = true
          queue.push(j)
        }
      }

      idx.length = 0
    }

    ans++
  }
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
  { args: [[1, 2, 4, 6]], expected: 2, comment: '// 输入：nums = [1,2,4,6]  输出：2' },
  { args: [[2, 3, 4, 7, 9]], expected: 2, comment: '// 输入：nums = [2,3,4,7,9]  输出：2' },
  { args: [[4, 6, 5, 8]], expected: 3, comment: '// 输入：nums = [4,6,5,8]  输出：3' },
]

__lcRunExamples(minJumps, __lcExamples)
