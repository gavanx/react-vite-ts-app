var countPairs = function (words) {
  const map = new Map()
  for (const w of words) {
    const arr = []
    for (let i = 1; i < w.length; i++) {
      const diff = w.charCodeAt(i) - w.charCodeAt(i - 1)
      arr.push((diff + 26) % 26)
    }
    const key = arr.join(',')
    map.set(key, (map.get(key) || 0) + 1)
  }
  let ans = 0
  for (const [key, value] of map) {
    if (value > 1) {
      ans += (value * (value - 1)) / 2
    }
  }
  return ans
}

console.log(countPairs(["fusion", "layout"]))
console.log(countPairs(["ab", "aa", "za", "aa"]))
