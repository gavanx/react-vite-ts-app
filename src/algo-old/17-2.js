var letterCombinations = function (digits) {
  const arr = new Array(10)
  arr[2] = 'abc'
  arr[3] = 'def'
  arr[4] = 'ghi'
  arr[5] = 'jkl'
  arr[6] = 'mno'
  arr[7] = 'pqrs'
  arr[8] = 'tuv'
  arr[9] = 'wxyz'

  const res = []
  const dfs = (prefix, i) => {
    if (i === digits.length) {
      res.push(prefix)
      return
    }
    for (const c of arr[digits[i] - '0']) {
      dfs(prefix + c, i + 1)
    }
  }
  dfs('', 0)
  return res
}

console.log(letterCombinations('23'))
