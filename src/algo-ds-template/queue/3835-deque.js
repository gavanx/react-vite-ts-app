import { Deque } from 'datastructures-js'

var countSubarrays = function (nums, k) {
  const minQ = new Deque()
  const maxQ = new Deque()
  let ans = 0,
    l = 0

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]

    while (!minQ.isEmpty() && x < nums[minQ.back()]) {
      minQ.popBack()
    }
    minQ.pushBack(i)
    while (!maxQ.isEmpty() && x > nums[maxQ.back()]) {
      maxQ.popBack()
    }
    maxQ.pushBack(i)

    while ((nums[maxQ.front()] - nums[minQ.front()]) * (i - l + 1) > k) {
      l++
      if (minQ.front() < l) {
        minQ.popFront()
      }
      if (maxQ.front() < l) {
        maxQ.popFront()
      }
    }

    ans += i - l + 1
  }

  return ans
}

console.log(countSubarrays([1, 3, 2], 4)) // 5
console.log(countSubarrays([5, 5, 5, 5], 0)) // 10
console.log(countSubarrays([1, 2, 3], 0)) // 3
console.log(countSubarrays([1000000000, 1, 1000000000, 1], 10000_0000_0000_000)) // 10
