var specialTriplets = function (nums) {
  let i,
    j,
    k,
    t,
    count = 0,
    l = nums.length,
    MOD = 1000000007
  for (j = 1; j < l - 1; j++) {
    t = nums[j] + nums[j]
    for (let i = j - 1; i >= 0; i--) {
      if (nums[i] === t) {
        for (k = j + 1; k < l; k++) {
          if (nums[k] === t) {
            count++
            if (count === MOD) {
              count = 0
            }
          }
        }
      }
    }
  }
  return count
}

console.log(specialTriplets([6, 3, 6]))
console.log(specialTriplets([0, 1, 0, 0]))
console.log(specialTriplets([8, 4, 2, 8, 4]))
