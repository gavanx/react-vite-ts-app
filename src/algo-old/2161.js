var pivotArray = function (nums, pivot) {
  const a = [],
    b = [],
    c = []
  for (const x of nums) {
    if (x < pivot) {
      a.push(x)
    } else if (x > pivot) {
      c.push(x)
    } else {
      b.push(x)
    }
  }
  return [...a, ...b, ...c]
}
