var removeAnagrams = function (words) {
  const n = words.length
  let m1 = new Map()
  let m2 = new Map()
  const ret = []
  const isMapEqual = (m1, m2) => {
    if (m1.size !== m2.size) return false
    for (const [key, value] of m1) {
      if (!m2.has(key)) return false
      if (m2.get(key) !== value) return false
    }
    return true
  }
  for (let i = 0; i < n; i++) {
    const word = words[i]
    let key = ''
    for (let j = 0; j < word.length; j++) {
      const c = word[j]
      if (m2.has(c)) {
        m2.set(c, m2.get(c) + 1)
      } else {
        m2.set(c, 1)
      }
    }
    if (isMapEqual(m1, m2)) {
      m2 = new Map()
      continue
    } else {
      ret.push(word)
      m1 = m2
      m2 = new Map()
    }
  }
  return ret
}

console.log(removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd']))
console.log(removeAnagrams(['a', 'b', 'c', 'd', 'e']))
