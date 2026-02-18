var mergeAdjacent = function (nums) {
  const s = []
  let t
  for (let i = 0; i < nums.length; i++) {
    t = nums[i]
    while (s.length > 0 && s[s.length - 1] === t) {
      t *= 2
      s.pop()
    }
    s.push(t)
  }
  return s
}
