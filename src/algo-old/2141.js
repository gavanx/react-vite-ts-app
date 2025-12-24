var maxRunTime = function (n, batteries) {
  let s, l, r
  s = batteries.reduce((a, b) => a + b, 0)
  l = 0
  r = Math.floor(s / n) + 1
  while (l + 1 < r) {
    let x = l + Math.floor((r - l) / 2)
    s = batteries.reduce((a, b) => a + Math.min(x, b), 0)
    if (n * x <= s) {
      l = x
    } else {
      r = x
    }
  }
  return l
}

console.log(maxRunTime(2, [3, 3, 3]))
console.log(maxRunTime(2, [1, 1, 1, 1]))
console.log(maxRunTime(3, [1, 1, 1, 1, 1]))
