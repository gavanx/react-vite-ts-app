var countSubarrays = function (nums, k) {
  const minQ = []
  const maxQ = []
  let ans = 0
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    const x = nums[right]
    while (minQ.length > 0 && x < nums[minQ[minQ.length - 1]]) {
      minQ.pop()
    }
    minQ.push(right)

    while (maxQ.length > 0 && x > nums[maxQ[maxQ.length - 1]]) {
      maxQ.pop()
    }
    maxQ.push(right)

    while ((nums[maxQ[0]] - nums[minQ[0]]) * (right - left + 1) > k) {
      left++
      if (minQ[0] < left) {
        minQ.shift() // 性能损耗
      }
      if (maxQ[0] < left) {
        maxQ.shift() // 性能损耗
      }
    }
    ans += right - left + 1
  }
  return ans
}

console.log(countSubarrays([1, 3, 2], 4)) // 5
console.log(countSubarrays([5, 5, 5, 5], 0)) // 10
console.log(countSubarrays([1, 2, 3], 0)) // 3
console.log(countSubarrays([1000000000, 1, 1000000000, 1], 10000_0000_0000_000)) // 10
