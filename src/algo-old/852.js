var peakIndexInMountainArray = function (arr) {
  let left = 0
  let right = arr.length
  let mid
  while (right - left > 1) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid - 1] < arr[mid]) {
      left = mid
    } else {
      right = mid
    }
  }
  return left
}

console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.log(peakIndexInMountainArray([0, 1, 1, 2, 10, 5, 2]))
