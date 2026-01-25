var majorityElement = function (nums) {
  const m = new Map()
  for (const num of nums) {
    m.set(num, (m.get(num) || 0) + 1)
    if (m.get(num) > nums.length / 2) {
      return num
    }
  }
}
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))