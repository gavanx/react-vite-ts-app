const { MinPriorityQueue } = require('datastructures-js')

var mostBooked = function (n, meetings) {
  meetings.sort((a, b) => a[0] - b[0])
  const idle = new MinPriorityQueue((x) => x)
  for (let i = 0; i < n; i++) {
    idle.enqueue(i)
  }
  const using = new MinPriorityQueue((x) => x[0] * 1000 + x[1])
  const cnt = new Array(n).fill(0)
  for (let [start, end] of meetings) {
    // 将在 start 时刻结束的会议室释放
    while (!using.isEmpty() && using.front() && using.front()[0] <= start) {
      const [, room] = using.dequeue()
      idle.enqueue(room)
    }
    let room
    if (!idle.isEmpty()) {
      room = idle.dequeue()
    } else {
      const [endTime, r] = using.dequeue()
      room = r
      end = endTime + (end - start)
    }
    using.enqueue([end, room])
    cnt[room]++
  }

  let maxCnt = 0
  let result = 0
  for (let i = 0; i < n; i++) {
    if (cnt[i] > maxCnt) {
      maxCnt = cnt[i]
      result = i
    }
  }
  return result
}

console.log(
  mostBooked(2, [
    [0, 10],
    [1, 5],
    [2, 7],
    [3, 4],
  ])
)
console.log(
  mostBooked(3, [
    [1, 20],
    [2, 10],
    [3, 5],
    [4, 9],
    [6, 8],
  ])
)
