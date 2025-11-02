var removeAnagrams = function (words) {
  let base = ''
  let k = 0
  for (const word of words) {
    const s = word.split('').sort().join('')
    if (s !== base) {
      base = s
      words[k++] = word
    }
  }
  words.length = k
  return words
}

console.log(removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd']))
console.log(removeAnagrams(['a', 'b', 'c', 'd', 'e']))
