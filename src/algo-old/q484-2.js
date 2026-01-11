var centeredSubarrays = function (nums) {
  const n = nums.length
  let ans = n
  const pre = new Array(n + 1).fill(0)
  const s = new Set()
  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] + nums[i]
  }
  for (let i = 0; i < n; i++) {
    s.add(nums[i])
    for (let j = i + 1; j < n; j++) {
      s.add(nums[j])
      if (s.has(pre[j + 1] - pre[i])) {
        ans++
      }
    }
    s.clear()
  }
  return ans
}

console.log(centeredSubarrays([-1, 1, 0]))
console.log(centeredSubarrays([2, -3]))