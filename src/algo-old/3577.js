var countPermutations = function (complexity) {
  let ans = 1
  for (let i = 1; i < complexity.length; i++) {
    if (complexity[i] <= complexity[0]) {
      return 0
    }
    ans = (ans * i) % 1000000007
  }
  return ans
}
