var maxKDistinct = function (nums, k) {
  const arr = [...new Set(nums)]
  arr.sort((a, b) => b - a)
  return arr.slice(0, k)
}
