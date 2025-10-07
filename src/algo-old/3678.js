var smallestAbsent = function (nums) {
  const m = new Map()
  let avg = 0
  for (const i of nums) {
    m.set(i, true)
    avg += i
  }
  avg /= nums.length
  let i = Math.round(avg + 0.5)
  i = Math.max(i, 1)
  while (m.has(i)) {
    i++
  }
  return i
}
console.log(smallestAbsent([3, 5]))
console.log(smallestAbsent([-1, 1, 2]))
console.log(smallestAbsent([4, -1]))
console.log(smallestAbsent([-34]))
