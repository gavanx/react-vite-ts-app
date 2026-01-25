var firstMissingPositive = function (nums) {
  const n = nums.length
  const s = new Set()
  for (let x of nums) {
    if (x > 0) {
      s.add(x)
    }
  }
  let i = 0
  while (++i) {
    if (!s.has(i)) {
      return i
    } else {
      s.delete(i)
    }
  }
  return i
}

console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([7, 8, 9, 11, 12]))
