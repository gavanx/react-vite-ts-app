/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  const players = scores.map((score, index) => [score, ages[index]])
  players.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    }
    return a[1] - b[1]
  })

  const n = players.length
  const f = new Array(n).fill(0)
  let result = 0

  for (let i = 0; i < n; i++) {
    const [score, age] = players[i]
    f[i] = score
    for (let j = 0; j < i; j++) {
      const [prevScore, prevAge] = players[j]
      if (prevAge <= age) {
        f[i] = Math.max(f[i], f[j] + score)
      }
    }

    result = Math.max(result, f[i])
  }

  return result
}

console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]))
console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]))
console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1]))
