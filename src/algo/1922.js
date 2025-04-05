var countGoodNumbers = function (n) {
  const MOD = 1000000007
  let ans = 1
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      ans = (ans * 5) % MOD
    } else {
      ans = (ans * 4) % MOD
    }
  }
  return ans
}

console.log(countGoodNumbers(1))
console.log(countGoodNumbers(4))
console.log(countGoodNumbers(50))
