var firstUniqueFreq = function (nums) {
  const map = new Map()
  for (const x of nums) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  const map2 = new Map()
  for (const [x, c] of map) {
    if (map2.has(c)) {
      map2.get(c).push(x)
    } else {
      map2.set(c, [x])
    }
  }
  if (map2.size === 1 && map2.values().next().value.length > 1) {
    return -1
  }
  for (const [c, arr] of map2) {
    if (arr.length === 1) {
      return arr[0]
    }
  }
}
console.log(firstUniqueFreq([20, 20, 10, 30, 30, 30]) == 20) // 20
console.log(firstUniqueFreq([10, 10, 20, 20]) == -1) // -1
console.log(firstUniqueFreq([20, 10, 30, 30]) == 30) // 30
console.log(firstUniqueFreq([1]) == 1) // 1
console.log(firstUniqueFreq([1, 2, 2, 3]) == 2) // 2
