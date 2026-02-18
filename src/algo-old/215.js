import { PriorityQueue } from 'datastructures-js'

var findKthLargest = function (nums, k) {
  const h = new PriorityQueue((a, b) => a < b)
  for (const x of nums) {
    h.enqueue(x)
  }
  for (let i = 0; i < k - 1; i++) {
    h.dequeue()
  }
  return h.front()
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
