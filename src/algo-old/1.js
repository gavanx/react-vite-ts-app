var twoSum = function (nums, target) {
  const map = new Map()
  let x
  for (let i = 0; i < nums.length; i++) {
    x = nums[i]
    if (map.has(x)) {
      map.get(x).push(i)
    } else {
      map.set(nums[i], [i])
    }
  }
  let y
  for (const x of nums) {
    y = target - x
    if (map.has(y)) {
      if (y !== x) {
        return [map.get(x)[0], map.get(y)[0]]
      } else if (map.get(x).length > 1) {
        return map.get(x).slice(0, 2)
      }
    }
  }
}
