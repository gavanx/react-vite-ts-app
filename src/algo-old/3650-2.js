class MinHeap {
  constructor() {
    this.heap = []
  }

  push(val) {
    this.heap.push(val)
    this._bubbleUp(this.heap.length - 1)
  }

  pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this._sinkDown(0)
    return min
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null
  }

  size() {
    return this.heap.length
  }

  _bubbleUp(idx) {
    const element = this.heap[idx]
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2)
      const parent = this.heap[parentIdx]
      if (element[0] >= parent[0]) break
      this.heap[idx] = parent
      this.heap[parentIdx] = element
      idx = parentIdx
    }
  }

  _sinkDown(idx) {
    const length = this.heap.length
    const element = this.heap[idx]

    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let swap = null

      if (leftChildIdx < length) {
        const leftChild = this.heap[leftChildIdx]
        if (leftChild[0] < element[0]) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        const rightChild = this.heap[rightChildIdx]
        if (
          (swap === null && rightChild[0] < element[0]) ||
          (swap !== null && rightChild[0] < this.heap[swap][0])
        ) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break
      this.heap[idx] = this.heap[swap]
      this.heap[swap] = element
      idx = swap
    }
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function minCost(n, edges) {
  // 构建邻接表
  const g = Array.from({ length: n }, () => [])
  for (const [x, y, wt] of edges) {
    g[x].push([y, wt])
    g[y].push([x, wt * 2])
  }

  // 初始化距离数组
  const dis = Array(n).fill(Number.MAX_SAFE_INTEGER)
  dis[0] = 0 // 起点到自己的距离是 0

  // 使用最小堆（优先队列）
  const heap = new MinHeap()
  heap.push([0, 0]) // 堆中保存 [起点到节点x的最短路长度, 节点x]

  while (heap.size() > 0) {
    const [dis_x, x] = heap.pop()

    // 如果当前距离大于记录的最小距离，说明是旧数据，跳过
    if (dis_x > dis[x]) {
      continue
    }

    // 到达终点
    if (x === n - 1) {
      return dis_x
    }

    // 遍历邻居
    for (const [y, wt] of g[x]) {
      const new_dis_y = dis_x + wt
      if (new_dis_y < dis[y]) {
        dis[y] = new_dis_y
        // 懒更新堆：只插入新数据
        heap.push([new_dis_y, y])
      }
    }
  }

  return -1
}
// 示例：4个节点，3条边
const n = 4;
const edges = [[0, 1, 3],
[3, 1, 1],
[2, 3, 4],
[0, 2, 2],];
console.log(minCost(n, edges));  // 输出最短路径长度
console.log(
  minCost(4, [
    [0, 2, 1],
    [2, 1, 1],
    [1, 3, 1],
    [2, 3, 3],
  ])
)

console.log(
  minCost(3, [
    [1, 2, 14],
    [0, 1, 17],
    [1, 0, 2],
    [2, 1, 10],
  ])
)
