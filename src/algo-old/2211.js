var countCollisions = function (directions) {
  let res = 0
  let left = 0
  let right = directions.length - 1
  while (left < directions.length && directions[left] === 'L') {
    left++
  }
  while (right >= 0 && directions[right] === 'R') {
    right--
  }
  for (let i = left; i <= right; i++) {
    if (directions[i] !== 'S') {
      res++
    }
  }
  return res
}

// 测试用例
console.log(countCollisions('RLRSLL')) // 5
console.log(countCollisions('LLRR')) // 0
