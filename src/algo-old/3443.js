var maxDistance = function (str, k) {
  let n = 0,
    s = 0,
    w = 0,
    e = 0,
    ans = 0,
    t
  const count = (x, y, t) => {
    let a = t * 2 // t > 0 ? t * 2 : 0
    return Math.abs(x - y) + a
  }
  for (const c of str) {
    switch (c) {
      case 'N':
        n++
        break
      case 'S':
        s++
        break
      case 'W':
        w++
        break
      case 'E':
        e++
        break
    }
    t = Math.min(n, s, k)
    ans = Math.max(ans, count(n, s, t) + count(w, e, Math.min(w, e, k - t)))
  }
  return ans
}

console.log(maxDistance('NWSE', 1))
console.log(maxDistance('NSWWEW', 3))
