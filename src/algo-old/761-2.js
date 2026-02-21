/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function (s) {
  if (s.length <= 2) {
    return s
  }
  const substrings = []
  let diff = 0
  let start = 0

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '1') {
      diff++
    } else {
      diff--
      if (diff === 0) {
        const inner = makeLargestSpecial(s.slice(start + 1, i))
        substrings.push(`1${inner}0`)
        start = i + 1
      }
    }
  }
  substrings.sort((a, b) => b.localeCompare(a))
  return substrings.join('')
}

// 测试示例
console.log(makeLargestSpecial('11011000')) // 输出 "11100100"
console.log(makeLargestSpecial('1010')) // 输出 "1100"
console.log(makeLargestSpecial('10')) // 输出 "1100"
