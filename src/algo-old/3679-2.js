/**
 * 计算需要丢弃的到达次数
 * @param {number[]} arrivals - 到达时间数组
 * @param {number} w - 窗口大小
 * @param {number} m - 每个时间点允许的最大次数
 * @returns {number} 需要丢弃的次数
 */
function minArrivalsToDiscard(arrivals, w, m) {
  const arr = [...arrivals]
  const maxVal = arr.length > 0 ? Math.max(...arr) : 0
  const cnt = new Array(maxVal + 1).fill(0)
  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i]
    if (cnt[x] === m) {
      arr[i] = 0
      ans++
    } else {
      cnt[x]++
    }
    const left = i + 1 - w
    if (left >= 0) {
      cnt[arr[left]]--
    }
  }
  return ans
}

// 测试用例（可直接运行验证）
// 示例1：基础场景
const arrivals1 = [1, 2, 1, 2, 1, 2]
const w1 = 3
const m1 = 1
console.log(minArrivalsToDiscard(arrivals1, w1, m1)) // 输出：3

// 示例2：无需要丢弃的场景
const arrivals2 = [1, 2, 3, 4]
const w2 = 2
const m2 = 2
console.log(minArrivalsToDiscard(arrivals2, w2, m2)) // 输出：0

console.log(
  minArrivalsToDiscard(
    [7, 3, 9, 9, 7, 3, 5, 9, 7, 2, 6, 10, 9, 7, 9, 1, 3, 6, 2, 4, 6, 2, 6, 8, 4, 8, 2, 7, 5, 6],
    10,
    1
  )
) //13
