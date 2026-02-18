var wordPattern = function (pattern, s) {
  const map = new Map()
  const words = s.split(' ')
  const set = new Set()
  if (pattern.length !== words.length) return false
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== words[i]) {
        return false
      }
    } else {
      if (set.has(words[i])) return false
      map.set(pattern[i], words[i])
    }
    set.add(words[i])
  }
  return true
}

// console.log(wordPattern('abba', 'dog cat cat dog'))
// console.log(wordPattern('abba', 'dog cat cat fish'))
// console.log(wordPattern('aaaa', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog dog dog dog'))
