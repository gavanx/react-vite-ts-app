var isHappy = function (n) {
  const s = new Set()
  const f = (x) => {
    s.add(x)
    let next = 0
    while (x > 0) {
      next += (x % 10) ** 2
      x = Math.floor(x / 10)
    }
    if (next === 1) {
      return true
    }
    if (s.has(next)) {
      return false
    }
    return f(next)
  }
  return f(n)
}

console.log(isHappy(19))
console.log(isHappy(2))
