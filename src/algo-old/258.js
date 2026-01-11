var addDigits = function (num) {
  const f = (n) => {
    let res = 0
    while (n > 0) {
      res += n % 10
      n = Math.floor(n / 10)
    }
    if (res < 10) {
      return res
    }
    return f(res)
  }
  return f(num)
}
