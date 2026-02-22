const f = (n) => {
  if (n === 0) {
    return 1
  }
  if (n === 1) {
    return 1
  }
  return n * f(n - 1)
}
const pre = new Array(10).fill(0).map((_, i) => f(i))

var isDigitorialPermutation = function (n) {
  const a = n
    .toString()
    .split('')
    .map((v) => Number(v))
  let sum = 0
  for (const v of a) {
    sum += pre[v]
  }

  const perm = () => {
    const ch = sum.toString().split('').sort().join() == n.toString().split('').sort().join()
    if (ch) {
      return Math.floor(Math.log10(n)) === Math.floor(Math.log10(sum))
    }
    return false
  }

  return n === sum || perm()
}

console.log(isDigitorialPermutation(145)) // true
console.log(isDigitorialPermutation(10)) // false
console.log(isDigitorialPermutation(415)) // true
console.log(isDigitorialPermutation(40558)) // true
