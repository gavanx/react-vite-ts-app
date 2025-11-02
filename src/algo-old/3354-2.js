var countValidSelections = function (nums) {
  let sum = 0
  for (let n of nums) {
    sum += n
  }
  let ans = 0
  let pre = 0
  let double
  for (let n of nums) {
    if (n === 0) {
      double = 2 * pre
      if (double === sum) {
        ans += 2
      } else if (Math.abs(double - sum) === 1) {
        ans++
      }
    } else {
      pre += n
    }
  }
  return ans
}

console.log(countValidSelections([1, 0, 2, 0, 3]))
console.log(countValidSelections([2, 3, 4, 0, 4, 1, 0]))
console.log(countValidSelections([16, 13, 10, 0, 0, 0, 10, 6, 7, 8, 7]))
console.log(countValidSelections([16, 0, 0, 12, 5]))
console.log(countValidSelections([0]))
console.log(countValidSelections([0, 2, 3, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 10]))
console.log(countValidSelections([0, 1]))
