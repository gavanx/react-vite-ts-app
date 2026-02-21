var makeLargestSpecial = function (s) {
  if (s.length <= 2) {
    return s
  }
  let diff = 0,
    start = 0
  const sub = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      diff++
    } else {
      diff--
      if (diff === 0) {
        const inner = makeLargestSpecial(s.slice(start + 1, i))
        sub.push(`1${inner}0`)
        start = i + 1
      }
    }
  }
  return sub.sort((a, b) => b.localeCompare(a)).join('')
}

console.log(makeLargestSpecial('11011000')) // 输出 "11100100"
// console.log(makeLargestSpecial('1010')) // 输出 "1100"
// console.log(makeLargestSpecial('10')) // 输出 "1100"
