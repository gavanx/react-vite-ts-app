var countSubarrays = function (nums, k, m) {
  const calc = function (distinctLimit) {
    const map = new Map()
    let geM = 0
    let ans = 0
    let left = 0

    for (const x of nums) {
      map.set(x, (map.get(x) || 0) + 1)
      if (map.get(x) === m) {
        geM++
      }

      while (map.size >= distinctLimit && geM >= k) { // 合法则移动left，直到不合法
        const x = nums[left]
        if (map.get(x) === m) {
          geM--
        }
        if (map.get(x) > 1) {
          map.set(x, map.get(x) - 1)
        } else {
          map.delete(x)
        }
        left++
      }

      ans += left // 越长越合法，右边的都是合法的
    }
    return ans
  }

  return calc(k) - calc(k + 1)
}

// 测试用例验证（和原Python代码预期结果一致）
console.log(countSubarrays([1, 2, 1, 2, 3], 2, 2)) // 预期输出：2
console.log(countSubarrays([1, 2, 1, 3, 4], 3, 1)) // 预期输出：3
console.log(countSubarrays([2, 2, 2, 2], 1, 3)) // 预期输出：2

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
    args: [[1, 2, 1, 2, 2], 2, 2],
    expected: 2,
    comment: '// 输入：nums = [1,2,1,2,2], k = 2, m = 2  输出：2',
  },
  {
    args: [[3, 1, 2, 4], 2, 1],
    expected: 3,
    comment: '// 输入：nums = [3,1,2,4], k = 2, m = 1  输出：3',
  },
]

__lcRunExamples(countSubarrays, __lcExamples)
