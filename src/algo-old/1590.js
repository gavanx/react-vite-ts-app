var minSubarray = function (nums, p) {
  const n = nums.length
  let sum = 0
  for (const num of nums) {
    sum += num
  }
  if (sum % p === 0) {
    return 0
  }
  const mod = sum % p
  const map = new Map()
  map.set(0, -1)
  let res = n
  let cur = 0
  for (let i = 0; i < n; i++) {
    cur = (cur + nums[i]) % p
    const target = (cur - mod + p) % p
    if (map.has(target)) {
      res = Math.min(res, i - map.get(target))
    }
    map.set(cur, i)
  }
  return res < n ? res : -1
}

console.log(minSubarray([3, 1, 4, 2], 6))
console.log(minSubarray([6, 3, 5, 2], 9))
console.log(minSubarray([1, 2, 3], 3))
console.log(minSubarray([1, 2, 3], 7))
console.log(minSubarray([1000000000, 1000000000, 1000000000], 3))
