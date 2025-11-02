var maxPartitionsAfterOperations = function (s, k) {
  if (k >= 26) {
    return 1
  }
  const lowercaseLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  const map = new Map()
  const dfs = (i, mask, changed) => {
    if (i === s.length) return 1
    let key = `${i}-${mask}-${changed}`
    let max = map.get(key)
    if (max !== undefined) return max
    max = 0
    let m = 1 << (s[i].charCodeAt(0) - 97)
    let newMask = mask | m
    if (newMask.toString(2).match(/1/g).length > k) {
      max = Math.max(max, dfs(i + 1, m, changed) + 1)
    } else {
      max = Math.max(max, dfs(i + 1, newMask, changed))
    }

    if (!changed) {
      for (let c of lowercaseLetters) {
        if (c !== s[i]) {
          m = 1 << (c.charCodeAt(0) - 97)
          newMask = mask | m
          if (newMask.toString(2).match(/1/g).length > k) {
            max = Math.max(max, dfs(i + 1, m, true) + 1)
          } else {
            max = Math.max(max, dfs(i + 1, newMask, true))
          }
        }
      }
    }
    map.set(key, max)
    return max
  }
  return dfs(0, 0, false)
}

console.log(maxPartitionsAfterOperations('accca', 2) === 3)
console.log(maxPartitionsAfterOperations('aabaab', 3) === 1)
console.log(maxPartitionsAfterOperations('xxyz', 1) === 4)
