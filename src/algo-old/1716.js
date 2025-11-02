var totalMoney = function (n) {
  let res = 0
  const week = Math.floor(n / 7)
  const day = n % 7
  for (let i = 0; i < week; i++) {
    res += 28 + i * 7
  }
  for (let i = 0; i < day; i++) {
    res += week + i + 1
  }
  return res
}

console.log(totalMoney(4))
console.log(totalMoney(10))
console.log(totalMoney(20))
