const f = (n) => {
  if (n === 0) {
    return 1
  }
  if (n === 1) {
    return 1
  }
  return n * f(n - 1)
}
const pre = new Array(10).fill(0).map((_, i) => f(i))

var isDigitorialPermutation = function (n) {
  const a = n
    .toString()
    .split('')
    .map((v) => Number(v))
  let sum = 0
  for (const v of a) {
    sum += pre[v]
  }

  const perm = () => {
    function backtrack(current, remaining) {
      if (current[0] === 0) {
        return false
      }
      if (remaining.length === 0) {
        const permutation = parseInt(current.join(''), 10)
        if (permutation === sum) {
          return true
        }
      }

      for (let i = 0; i < remaining.length; i++) {
        const chosen = remaining[i]
        const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)]
        if (
          backtrack([...current, chosen], newRemaining))
          return true
      }
      return false
    }
    return backtrack([], a)
  }
  return n === sum || perm()
}

console.log(isDigitorialPermutation(145)) // true
console.log(isDigitorialPermutation(10)) // false
console.log(isDigitorialPermutation(415)) // true
console.log(isDigitorialPermutation(40558)) // true
