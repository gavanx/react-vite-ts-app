/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const m = mat.length
  const n = mat[0].length

  // 构建二维前缀和数组 s
  const s = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      s[i + 1][j + 1] = s[i + 1][j] + s[i][j + 1] - s[i][j] + mat[i][j]
    }
  }

  // 查询子矩阵和的辅助函数
  const query = (r1, c1, r2, c2) => {
    return s[r2 + 1][c2 + 1] - s[r2 + 1][c1] - s[r1][c2 + 1] + s[r1][c1]
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 尝试扩展边长，直到超过阈值或超出边界
      while (i + ans < m && j + ans < n && query(i, j, i + ans, j + ans) <= threshold) {
        ans++
      }
    }
  }
  return ans
}
