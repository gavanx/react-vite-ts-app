var countPermutations = function (complexity) {
  const n = complexity.length
  const m = complexity[0]
  for (let i = 1; i < n; i++) {
    if (complexity[i] <= m) {
      return 0
    }
  }
  let ans = 1
  for (let i = 2; i < n; i++) {
    ans = (ans * i) % 1000000007
  }
  return ans
}

console.log(countPermutations([3, 3, 3, 4, 4, 4]))
