var minimumDeletions = function (word, k) {
  let m = new Map()
  for (let c of word) {
    m.set(c, (m.get(c) || 0) + 1)
  }
  let s = word.length
  for (let a of m.values()) {
    let d = 0
    for (let b of m.values()) {
      if (b < a) {
        d += b
      } else if (b > a + k) {
        d += b - a - k
      }
    }
    s = Math.min(s, d)
  }
  return s
}
