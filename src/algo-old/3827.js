var countMonobit = function (n) {
  let ans = 1
  let i = 1
  while (i <= n) {
    ans++
    i = i * 2 + 1
  }
  return ans
}

// console.log(countMonobit(1))
// console.log(countMonobit(4))
console.log(countMonobit(7))
