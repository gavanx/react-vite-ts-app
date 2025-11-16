var minCost = function (colors, neededTime) {
  let sum = 0
  let max = 0
  let pre
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === colors[i + 1]) {
      sum += neededTime[i]
      max = Math.max(max, neededTime[i])
    } else {
      max = Math.max(max, neededTime[i])
      sum += neededTime[i]
      sum -= max
      max = 0
    }
  }
  return sum
}

console.log(minCost('abaac', [1, 2, 3, 4, 5]))
console.log(minCost('abc', [1, 2, 3]))
console.log(minCost('aabaa', [1, 2, 3, 4, 1]))
