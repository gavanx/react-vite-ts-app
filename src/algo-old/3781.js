import { MaxPriorityQueue } from 'datastructures-js'

var maximumScore = function (nums, s) {
  const n = nums.length
  let ans = 0
  const q = new MaxPriorityQueue()
  for (let i = 0; i < n; i++) {
    q.enqueue(nums[i])
    if (s[i] === '1') {
      ans += q.dequeue()
    }
  }
  return ans
}

console.log(maximumScore([9, 2, 1], '100'))
console.log(maximumScore([4, 7, 2, 9], '0000'))
console.log(maximumScore([2, 1, 5, 2, 3], '01010'))
