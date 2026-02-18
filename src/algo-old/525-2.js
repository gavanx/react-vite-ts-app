/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const processedNums = nums.map((x) => (x === 1 ? 1 : -1))

  const prefixSum = [0]
  for (let i = 0; i < processedNums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + processedNums[i]
  }

  const pos = new Map()
  let ans = 0

  for (let i = 0; i < prefixSum.length; i++) {
    const x = prefixSum[i]
    if (pos.has(x)) {
      ans = Math.max(ans, i - pos.get(x))
    } else {
      pos.set(x, i)
    }
  }

  return ans
}

console.log(findMaxLength([0, 1]))
console.log(findMaxLength([0, 1, 0]))
console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]))
