var repeatedNTimes = function (nums) {
  const s = new Set()
  for (const x of nums) {
    if (s.has(x)) {
      return x
    }
    s.add(x)
  }
}

console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]))
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))