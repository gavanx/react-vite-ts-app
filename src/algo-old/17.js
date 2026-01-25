var letterCombinations = function (digits) {
  const arr = new Array(10)
  arr[2] = 'abc'.split('')
  arr[3] = 'def'.split('')
  arr[4] = 'ghi'.split('')
  arr[5] = 'jkl'.split('')
  arr[6] = 'mno'.split('')
  arr[7] = 'pqrs'.split('')
  arr[8] = 'tuv'.split('')
  arr[9] = 'wxyz'.split('')

  const dfs = (i) => {
    if (i === digits.length) {
      return []
    }
    let d = digits[i] - '0'
    const next = dfs(i + 1)
    return arr[d].map((c) => next.map((n) => c + n)).flat()
  }
  return dfs(0)
}

console.log(letterCombinations('23'))
