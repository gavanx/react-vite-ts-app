var isTrionic = function (nums) {
  const n = nums.length
  let step = 0
  let p = 0,
    q = n
  for (let i = 1; i < n; i++) {
    if (step === 0) {
      if (nums[i] > nums[i - 1]) {
        continue
      } else {
        p = i - 1
        step = 1
      }
    } else if (step === 1) {
      if (nums[i] < nums[i - 1]) {
        continue
      } else {
        q = i - 1
        step = 2
        if (i === n - 1) {
          return false
        }
      }
    } else if (step === 2) {
      if (nums[i] > nums[i - 1]) {
        continue
      } else {
        return false
      }
    }
  }
  return p > 0 && p < q && q < n - 1
}

console.log(isTrionic([1, 3, 5, 4, 2, 6]))
// console.log(isTrionic([2, 1, 3]))
// console.log(isTrionic([2, 4, 3, 3]))
