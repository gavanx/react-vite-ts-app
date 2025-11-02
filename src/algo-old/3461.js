var hasSameDigits = function (s) {
  s = s.split('')
  let n = s.length
  while (--n > 1) {
    for (let i = 0; i < n; i++) {
      s[i] = ((Number(s[i]) + Number(s[i + 1])) % 10) + ''
    }
  }
  return s[0] === s[1]
}
console.log(hasSameDigits('3902'))
console.log(hasSameDigits('34789'))
