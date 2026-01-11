var numberOfWays = function (s) {
  const n = s.length
  let t0 = s.split('').filter((ch) => ch === '0').length
  let t1 = n - t0
  let res = 0
  let c0 = 0
  let c1 = 0

  for (let i = 0; i < n; i++) {
    if (s[i] === '0') {
      t0--
      res += c1 * t1
      c0++
    } else {
      t1--
      res += c0 * t0
      c1++
    }
  }

  return res
}

console.log(numberOfWays('001101')) // 6
console.log(numberOfWays('11100')) // 0
