var pathsWithMaxScore = function (board) {
  const n = board.length
  const mod = 10 ** 9 + 7
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => [0, 0]))
  dp[0][0] = [0, 1]
  for (let i = 1; i < n; i++) {
    dp[0][i] = [dp[0][i - 1][0] + Number(board[0][i]), dp[0][i - 1][1]]
    dp[i][0] = [dp[i - 1][0][0] + Number(board[i][0]), dp[i - 1][0][1]]
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (board[i][j] === 'X') {
        dp[i][j] = [0, 0]
        continue
      }
      const score = i === n - 1 && j === n - 1 ? 0 : Number(board[i][j])
      const sArr = [dp[i - 1][j][1], dp[i][j - 1][1], dp[i - 1][j - 1][1]]
      let arr = [dp[i - 1][j][0], dp[i][j - 1][0], dp[i - 1][j - 1][0]]
      arr = arr.map((v, index) => [v, index]).sort((v1, v2) => v2[0] - v1[0])
      if (arr[0][0] > arr[1][0]) {
        dp[i][j] = [arr[0][0] + score, sArr[arr[0][1]]]
      } else if (arr[1][0] > arr[2][0]) {
        dp[i][j] = [arr[0][0] + score, sArr[arr[0][1]] + sArr[arr[1][1]]]
      } else {
        dp[i][j] = [arr[0][0] + score, sArr[arr[0][1]] + sArr[arr[1][1]] + sArr[arr[2][1]]]
      }
    }
  }
  return dp[n - 1][n - 1]
}

console.log(pathsWithMaxScore(['E23', '2X2', '12S']))
console.log(pathsWithMaxScore(['E12', '1X1', '21S']))
console.log(pathsWithMaxScore(['E11', 'XXX', '11S']))
