const { MaxPriorityQueue } = require('datastructures-js')

/**
 * 滑动窗口最大值
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const n = nums.length
  const pq = new MaxPriorityQueue((item) => item[0])
  for (let i = 0; i < k; i++) {
    pq.enqueue([nums[i], i])
  }
  const ans = [pq.front()[0]]
  for (let i = k; i < n; i++) {
    pq.enqueue([nums[i], i])
    while (pq.front()[1] <= i - k) {
      pq.dequeue()
    }
    ans.push(pq.front()[0])
  }
  return ans
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
