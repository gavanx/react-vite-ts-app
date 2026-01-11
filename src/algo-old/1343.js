var numOfSubarrays = function (arr, k, threshold) {
  const n = arr.length
  let t = k * threshold
  let sum = 0
  let res = 0
  for (let i = 0; i < n; i++) {
    sum += arr[i]
    if (i >= k) {
      sum -= arr[i - k]
    }
    if (i >= k - 1 && sum >= t) {
      res++
    }
  }
  return res
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4))
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5))
