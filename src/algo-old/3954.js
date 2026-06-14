var sumOfGoodIntegers = function (n, k) {
  let ans = 0
  for (let i = Math.max(1, n - k); i <= n + k; i++) {
    if ((i & n) === 0) {
      ans += i
    }
  }
  return ans
}

console.log(sumOfGoodIntegers(2, 3))