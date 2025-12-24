/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function (nums, k) {
  const MOD = 1_000_000_007
  const n = nums.length
  const minQueue = []
  const maxQueue = []
  const f = new Array(n + 1).fill(0)
  f[0] = 1

  let sumF = 0
  let left = 0
  for (let i = 0; i < n; i++) {
    const x = nums[i]
    sumF = (sumF + f[i]) % MOD
    while (minQueue.length > 0 && x <= nums[minQueue[minQueue.length - 1]]) {
      minQueue.pop()
    }
    minQueue.push(i)
    while (maxQueue.length > 0 && x >= nums[maxQueue[maxQueue.length - 1]]) {
      maxQueue.pop()
    }
    maxQueue.push(i)
    while (nums[maxQueue[0]] - nums[minQueue[0]] > k) {
      sumF = (sumF - f[left] + MOD) % MOD
      left++
      if (minQueue[0] < left) {
        minQueue.shift()
      }
      if (maxQueue[0] < left) {
        maxQueue.shift()
      }
    }
    f[i + 1] = sumF
  }

  return f[n]
}

console.log(countPartitions([9, 4, 1, 3, 7], 4))
console.log(countPartitions([3, 3, 4], 0))
