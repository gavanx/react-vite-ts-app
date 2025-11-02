var maxSubarraySumCircular = function (nums) {
  let max = -Infinity
  let min = Infinity
  let sum = 0
  let sum1 = 0
  let sum2 = 0
  for (const num of nums) {
    sum1 = Math.max(sum1 + num, num)
    max = Math.max(max, sum1)

    sum2 = Math.min(sum2 + num, num)
    min = Math.min(min, sum2)

    sum += num
  }
  return sum === min ? max : Math.max(max, sum - min)
}

console.log(maxSubarraySumCircular([1, -2, 3, -2]) === 3)
console.log(maxSubarraySumCircular([5, -3, 5]) === 10)
console.log(maxSubarraySumCircular([3, -2, 2, -3]) === 3)
