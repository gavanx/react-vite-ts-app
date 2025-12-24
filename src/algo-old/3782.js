var lastInteger = function (n) {
  let a = 1,
    len = n,
    d = 1,
    r = false
  while (len > 1) {
    if (r && len % 2 === 0) {
      a += d
    }
    d = d * 2
    len = Math.ceil(len / 2)
    r = !r
  }
  return a
}

console.log(lastInteger(1))
console.log(lastInteger(5))
console.log(lastInteger(8))
console.log(lastInteger(9))
