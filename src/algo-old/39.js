var combinationSum = function (candidates, target) {
  const res = []
  const backtrack = (start, path, sum) => {
    if (sum === target) {
      res.push([...path])
      return
    }
    if (sum > target) {
      return
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i])
      backtrack(i, path, sum + candidates[i])
      path.pop()
    }
  }
  backtrack(0, [], 0)
  return res
}
