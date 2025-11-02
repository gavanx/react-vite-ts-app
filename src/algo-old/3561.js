var resultingString = function (s) {
  const n = s.length
  const a = []
  let d
  for (let i = 0; i < n; i++) {
    if (a.length > 0) {
      d = Math.abs(a[a.length - 1].charCodeAt(0) - s[i].charCodeAt(0))
      if (d === 1 || d === 25) {
        a.length = a.length - 1
        continue
      }
    }
    a.push(s[i])
  }
  return a.join('')
}

console.log(resultingString('abc') === 'c')
console.log(resultingString('adcb') === '')
console.log(resultingString('zadb') === 'db')
