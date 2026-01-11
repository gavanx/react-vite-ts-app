var numIdenticalPairs = function (nums) {
  const map = new Map()
  for (let x of nums) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  let ans = 0
  for (let [_, v] of map) {
    ans += (v * (v - 1)) / 2
  }
  return ans
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
console.log(numIdenticalPairs([1, 1, 1, 1]))
console.log(numIdenticalPairs([1, 2, 3]))
