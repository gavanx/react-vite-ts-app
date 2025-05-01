var countGoodNumbers = function (n) {
  const MOD = 1000000007n
  const quickPow = (a, b) => {
    let ans = 1n
    while (b > 0) {
      if (b % 2n === 1n) {
        ans = (ans * a) % MOD
      }
      a = (a * a) % MOD
      b = b / 2n
    }
    return ans
  }
  return (quickPow(5n, BigInt(n + 1) / 2n) * quickPow(4n, BigInt(n) / 2n)) % MOD
}

console.log(countGoodNumbers(1) === 5n)
console.log(countGoodNumbers(4) === 400n)
console.log(countGoodNumbers(50) === 564908303n)
