var change = function (amount, coins) {
  const n = coins.length
  const f = (i, t) => {
    if (t < 0) {
      return 0
    }
    if (i === n) {
      return t === 0 ? 1 : 0
    }
    return f(i + 1, t) + f(i, t - coins[i])
  }
  return f(0, amount)
}

console.log(change(5, [1, 2, 5])) // 4
console.log(change(3, [2])) // 0
console.log(change(10, [10])) // 1
