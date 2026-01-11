var maxScore = function (s) {
  const n = s.length
  const total0 = s.split('').filter((c) => c === '0').length
  let left0 = s[0] === '0' ? 1 : 0
  let ans = 0
  let right1
  for (let i = 1; i < n; i++) {
    right1 = n - i - (total0 - left0)
    ans = Math.max(ans, left0 + right1)
    if (s[i] === '0') {
      left0++
    }
  }
  return ans
}

console.log(maxScore('011101'))//5
console.log(maxScore('00111'))//5
console.log(maxScore('1111'))
console.log(maxScore('00'))
