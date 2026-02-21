import { MaxPriorityQueue } from 'datastructures-js'

var pickGifts = function (gifts, k) {
  const q = new MaxPriorityQueue()
  for (const v of gifts) {
    q.enqueue(v)
  }
  if (q.front() > 1) {
    for (let i = 0; i < k; i++) {
      const v = Math.floor(Math.sqrt(q.dequeue()))
      q.enqueue(v)
      // const v = q.dequeue()
      // const v2 = Math.floor(v / 2)
      // q.enqueue(v - v2)
      // }
    }
  }
  let ans = 0
  q.toArray().forEach((v) => (ans += v))
  return ans
}
