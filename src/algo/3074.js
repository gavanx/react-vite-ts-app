var minimumBoxes = function (apple, capacity) {
  let total = apple.reduce((a, b) => a + b, 0)
  let count = 0
  let sum = 0
  capacity.sort((a, b) => b - a)
  for (let i = 0; i < capacity.length; i++) {
    sum += capacity[i]
    count++
    if (sum >= total) break
  }
  return count
}
