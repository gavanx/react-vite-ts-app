var numSub = function (s) {
  const MOD = 1e9 + 7
  let res = 0,
    count = 0
  for (const c of s) {
    if (c === '1') {
      count++
    } else {
      res = (res + (count * (count + 1)) / 2) % MOD
      count = 0
    }
  }
  res = (res + (count * (count + 1)) / 2) % MOD
  return res
}

console.log(numSub('0110111'))
console.log(numSub('101'))

console.log(numSub('111111'))
