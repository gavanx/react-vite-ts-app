import { MaxPriorityQueue } from 'datastructures-js'

var lastStoneWeight = function (stones) {
  const q = new MaxPriorityQueue()
  for (const v of stones) {
    q.enqueue(v)
  }

  while (q.size() > 1) {
    const x = q.dequeue()
    const y = q.dequeue()
    if (x > y) {
      q.enqueue(x - y)
    }
  }

  return q.isEmpty() ? 0 : q.front()
}
