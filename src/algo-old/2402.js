const { MinPriorityQueue } = require('datastructures-js')

var mostBooked = function (n, meetings) {
  // 按开始时间排序
  meetings.sort((a, b) => a[0] - b[0])

  // 空闲会议室堆（存储会议室编号）
  const idle = new MinPriorityQueue((x) => x)
  for (let i = 0; i < n; i++) {
    idle.enqueue(i)
  }

  // 使用中会议室堆（存储[结束时间, 会议室编号]）
  const using = new MinPriorityQueue(
    (x) => x[0] * 1000 + x[1] // 先按结束时间排序，相同结束时间按编号排序
  )

  // 记录每个会议室的使用次数
  const cnt = new Array(n).fill(0)

  for (let [start, end] of meetings) {
    // 将在 start 时刻结束的会议室释放
    while (!using.isEmpty() && using.front() && using.front()[0] <= start) {
      const [, room] = using.dequeue()
      idle.enqueue(room)
    }

    let room
    if (!idle.isEmpty()) {
      // 有空闲会议室
      room = idle.dequeue()
    } else {
      // 没有空闲会议室，等待最早结束的会议室
      const [endTime, r] = using.dequeue()
      room = r
      // 更新当前会议的结束时间
      end = endTime + (end - start)
    }

    // 使用会议室
    using.enqueue([end, room])
    cnt[room]++
  }

  // 找到使用次数最多的会议室
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
console.log(mostBooked(3, [[1, 20], [2, 10], [3, 5], [4, 9], [6, 8]]))