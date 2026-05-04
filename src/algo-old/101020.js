var uniformArray = function (nums1) {
  let odd = 0
  let minOdd = Infinity
  for (const x of nums1) {
    if (x % 2 === 1) {
      minOdd = Math.min(minOdd, x)
      odd += 1
    }
  }
  if (odd > 0 && odd < nums1.length) {
    for (const x of nums1) {
      if (x % 2 === 0) {
        if (x < minOdd) {
          return false
        }
      }
    }
  }
  return true
}
