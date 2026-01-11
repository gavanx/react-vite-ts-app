const { MinPriorityQueue } = require('datastructures-js')
const p = new MinPriorityQueue(x => x)


p.enqueue(2)
p.enqueue(1)
p.enqueue(1)
p.enqueue(2)
p.enqueue(3)
console.log(p.toArray())