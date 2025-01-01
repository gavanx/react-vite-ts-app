class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}
var countPathsWithXorValue = function (grid, k) {
  const b = 10 ** 9 + 7;
  const m = grid.length;
  const n = grid[0].length;
  const q = new Queue();
  let cur,
    tmp,
    i,
    j,
    sum = 0;
  q.enqueue([0, 0, grid[0][0]]);
  while (!q.isEmpty()) {
    [i, j, cur] = q.dequeue();
    if (i === m - 1 && j === n - 1 && cur === k) {
      sum += 1;
      sum = sum % b;
    }
    if (i < m - 1) {
      q.enqueue([i + 1, j, cur ^ grid[i + 1][j]]);
    }
    if (j < n - 1) {
      q.enqueue([i, j + 1, cur ^ grid[i][j + 1]]);
    }
  }
  return sum;
};

console.log(
  countPathsWithXorValue(
    [
      [2, 1, 5],
      [7, 10, 0],
      [12, 6, 4],
    ],
    11
  ) === 3
);
console.log(
  countPathsWithXorValue(
    [
      [1, 3, 3, 3],
      [0, 3, 3, 2],
      [3, 0, 1, 1],
    ],
    2
  ) === 5
);

console.log(
  countPathsWithXorValue(
    [
      [1, 1, 1, 2],
      [3, 0, 3, 2],
      [3, 0, 2, 2],
    ],
    10
  ) === 0
);
