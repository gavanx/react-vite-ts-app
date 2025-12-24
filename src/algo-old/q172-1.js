var minOperations = function (nums) {
  let arr = [...nums]
  let count = 0

  const hasDuplicates = (arr) => {
    return new Set(arr).size !== arr.length
  }

  while (arr.length > 0 && hasDuplicates(arr)) {
    if (arr.length >= 3) {
      arr = arr.slice(3)
    } else {
      arr = []
    }
    count++
  }

  return count
}
