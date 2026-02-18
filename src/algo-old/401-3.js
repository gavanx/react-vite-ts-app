/**
 * @param {number} turnedOn 点亮的LED灯数量
 * @return {string[]} 所有可能的时间组合
 */
var readBinaryWatch = function (turnedOn) {
  function countBits(num) {
    let count = 0
    while (num > 0) {
      num = num & (num - 1)
      count++
    }
    return count
  }
  const ans = []
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (countBits(h) + countBits(m) === turnedOn) {
        ans.push(`${h}:${m.toString().padStart(2, '0')}`)
      }
    }
  }
  return ans
}

// 测试示例
console.log(readBinaryWatch(1))
// 输出: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
console.log(readBinaryWatch(9))
// 输出: [] (因为最多亮8个灯：小时最多3个，分钟最多5个，3+5=8)
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
    }
  }
}

const __lcExamples = [
  {
    args: [1],
    expected: ['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00'],
    comment:
      '// 输入：turnedOn = 1  输出：["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]',
  },
  { args: [9], expected: [], comment: '// 输入：turnedOn = 9  输出：[]' },
]

__lcRunExamples(readBinaryWatch, __lcExamples)
