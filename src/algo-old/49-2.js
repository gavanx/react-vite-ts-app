var groupAnagrams = function (strs) {
  const map = new Map()
  const hash = (str) => {
    for (const c of str) {
    }
  }
  for (const str of strs) {
    const key = str.split('').sort().join('')
    if (map.has(key)) {
      map.get(key).push(str)
    } else {
      map.set(key, [str])
    }
  }
  return Array.from(map.values())
}
