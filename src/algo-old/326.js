var isPowerOfThree = function (n) {
  let res = 1
  while (res < n) {
    res *= 3
  }
  return res === n
}
