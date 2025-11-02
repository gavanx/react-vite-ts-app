var countValidSelections = function (nums) {
  let sum = 0
  let cur = 0
  let arr = []
  let zero = []
  let count = 0
  for (let n of nums) {
    if (n !== 0) {
      cur += n
      sum += n
      if (count > 0) {
        if (arr.length > 0) {
          zero.push(count)
        }
        count = 0
      }
    } else {
      count++
      if (cur > 0) {
        arr.push(cur)
        cur = 0
      }
    }
  }
  if (arr.length === 0) {
    return nums.length * 2
  }
  cur = 0
  let double
  for (let i = 0; i < arr.length; i++) {
    cur += arr[i]
    double = cur * 2
    if (double === sum || double === sum + 1 || double === sum - 1) {
      return sum % 2 === 0 ? 2 * zero[i] : zero[i]
    }
  }
  return 0
}

console.log(countValidSelections([1, 0, 2, 0, 3]))
console.log(countValidSelections([2, 3, 4, 0, 4, 1, 0]))
console.log(countValidSelections([16, 13, 10, 0, 0, 0, 10, 6, 7, 8, 7]))
console.log(countValidSelections([16, 0, 0, 12, 5]))
console.log(countValidSelections([0]))
console.log(countValidSelections([0, 2, 3, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 10]))
// [0,1]
