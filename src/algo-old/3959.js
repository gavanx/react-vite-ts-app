var checkGoodInteger = function (n) {
  let s = 0,
    d = 0
  while (n > 0) {
    let x = n % 10
    d += x
    s += x * x
    n = Math.floor(n / 10)
  }
  return s - d >= 50
}
