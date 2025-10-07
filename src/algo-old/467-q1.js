var earliestTime = function (tasks) {
  let ans = Infinity
  for (const t of tasks) {
    ans = Math.min(ans, t[0] + t[1])
  }
  return ans
}

console.log(earliestTime([[1,6],[2,3]] )
