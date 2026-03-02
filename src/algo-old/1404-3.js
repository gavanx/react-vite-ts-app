/**
 * 计算将二进制字符串表示的数字变为 1 所需的步骤数
 * @param {string} s - 二进制字符串（仅包含 '0' 和 '1'）
 * @returns {number} 所需步骤数
 */
function numSteps(s) {
  let ans = s.length - 1 // 除最高位外，其余位默认需要一次「除以2」操作
  let carry = 0

  // 从倒数第二位向前遍历到第一位（索引 0 是最高位，最后处理）
  for (let i = s.length - 1; i > 0; i--) {
    const sum = Number(s[i]) + carry
    // sum % 2 为 1 时，说明当前位是 1（含进位），需要先加 1 再除 2，额外加 1 步
    ans += sum % 2
    // 计算新的进位：sum + (sum%2) 是加 1 后的结果，除以 2 得到进位
    carry = Math.floor((sum + (sum % 2)) / 2)
  }

  // 最高位如果有进位（1+1=10），需要多一次除以 2 的操作
  return ans + carry
}

// 测试用例（验证逻辑正确性）
console.log(numSteps('1101')) // 预期输出：6
console.log(numSteps('10')) // 预期输出：1
console.log(numSteps('1')) // 预期输出：0

console.log(numSteps('1111011110000011100000110001011011110010111001010111110001') === 85) // 85

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
  { args: ['1101'], expected: 6, comment: '// 输入：s = "1101  输出：6' },
  { args: ['10'], expected: 1, comment: '// 输入：s = "10  输出：1' },
  { args: ['1'], expected: 0, comment: '// 输入：s = "1  输出：0' },
]

__lcRunExamples(numSteps, __lcExamples)
