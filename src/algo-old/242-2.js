var isAnagram = function (s, t) {
  const m1 = new Map()
  const m2 = new Map()
  for (const c of s) {
    m1.set(c, (m1.get(c) || 0) + 1)
  }
  for (const c of t) {
    m2.set(c, (m2.get(c) || 0) + 1)
  }
  if (m1.size !== m2.size) {
    return false
  }
  for (const [k, v] of m1) {
    if (m2.get(k) !== v) {
      return false
    }
  }
  return true
}

console.log(isAnagram('anagram', 'nagaram'))
