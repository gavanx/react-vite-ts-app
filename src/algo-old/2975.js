/**
 * 生成所有两两组合的差值集合
 * @param {number[]} fences 栅栏位置数组
 * @param {number} boundary 边界值
 * @return {Set<number>} 差值集合
 */
function generateDifferences(fences, boundary) {
  // 添加边界值
  const arr = [...fences, 1, boundary]
  arr.sort((a, b) => a - b)

  const result = new Set()
  const n = arr.length

  // 生成所有两两组合的差值
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      result.add(arr[j] - arr[i])
    }
  }

  return result
}

/**
 * 最大化正方形面积
 * @param {number} m 垂直边界
 * @param {number} n 水平边界
 * @param {number[]} hFences 水平栅栏
 * @param {number[]} vFences 垂直栅栏
 * @return {number} 最大正方形面积模 1_000_000_007，无解返回 -1
 */
var maximizeSquareArea = function (m, n, hFences, vFences) {
  const MOD = 1_000_000_007

  // 生成所有可能的差值
  const hSet = generateDifferences(hFences, m)
  const vSet = generateDifferences(vFences, n)

  // 找到两个集合的交集最大值
  let maxCommon = 0

  // 遍历较小的集合以提高效率
  const [smallerSet, largerSet] = hSet.size <= vSet.size ? [hSet, vSet] : [vSet, hSet]

  for (const diff of smallerSet) {
    if (largerSet.has(diff) && diff > maxCommon) {
      maxCommon = diff
    }
  }

  // 计算最大正方形面积
  if (maxCommon === 0) {
    return -1
  }

  // 使用 BigInt 避免可能的溢出
  const area = (BigInt(maxCommon) * BigInt(maxCommon)) % BigInt(MOD)
  return Number(area)
}
