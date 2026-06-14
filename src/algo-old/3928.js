// 最小堆（优先队列）实现，用于 Dijkstra 算法
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (this.heap[parent][0] <= this.heap[index][0]) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  pop() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return min;
  }

  bubbleDown(index) {
    const length = this.heap.length;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// Dijkstra 算法
function dijkstra(g, start, price) {
  const n = g.length;
  const dis = new Array(n).fill(price);
  dis[start] = 0;

  const heap = new MinHeap();
  heap.push([0, start]);

  while (!heap.isEmpty()) {
    const [disX, x] = heap.pop();

    if (disX > dis[x]) continue;

    for (const [y, wt] of g[x]) {
      const newDisY = disX + wt;
      if (newDisY < dis[y]) {
        dis[y] = newDisY;
        heap.push([newDisY, y]);
      }
    }
  }

  return dis;
}

// 主逻辑
class Solution {
  minCost(n, prices, roads) {
    // 构建两个图
    const g1 = Array.from({ length: n }, () => []);
    const g2 = Array.from({ length: n }, () => []);

    for (const [x, y, cost, tax] of roads) {
      g1[x].push([y, cost]);
      g1[y].push([x, cost]);
      g2[x].push([y, cost * tax]);
      g2[y].push([x, cost * tax]);
    }

    const ans = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      const price = prices[i];
      const dis1 = dijkstra(g1, i, price);
      const dis2 = dijkstra(g2, i, price);

      let minVal = Infinity;
      for (let j = 0; j < n; j++) {
        const total = prices[j] + dis1[j] + dis2[j];
        if (total < minVal) {
          minVal = total;
        }
      }
      ans[i] = minVal;
    }

    return ans;
  }
}

// 测试调用
const sol = new Solution();
const n = 3;
const prices = [1, 2, 3];
const roads = [[0, 1, 1, 1], [1, 2, 1, 1], [0, 2, 1, 1]];
console.log(sol.minCost(n, prices, roads));