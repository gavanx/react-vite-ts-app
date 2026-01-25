function maxCapacity(costs, capacity, budget) {
  const n = costs.length
  let maxCap = 0

  // 一台机器
  for (let i = 0; i < n; i++) {
    if (costs[i] < budget) {
      maxCap = Math.max(maxCap, capacity[i])
    }
  }

  // 两台机器，用哈希表记录每个成本对应的最大容量
  const costToMaxCap = new Map() // cost -> max capacity for that cost
  for (let i = 0; i < n; i++) {
    if (!costToMaxCap.has(costs[i]) || capacity[i] > costToMaxCap.get(costs[i])) {
      costToMaxCap.set(costs[i], capacity[i])
    }
  }

  // 将不同成本及其最大容量转为数组并排序
  const arr = Array.from(costToMaxCap.entries()).map(([cost, cap]) => ({ cost, cap }))
  arr.sort((a, b) => a.cost - b.cost)

  const m = arr.length

  // 前缀最大容量
  const prefixMaxCap = new Array(m).fill(0)
  let pmax = 0
  for (let i = 0; i < m; i++) {
    prefixMaxCap[i] = pmax
    pmax = Math.max(pmax, arr[i].cap)
  }

  // 枚举第二台机器
  for (let i = 0; i < m; i++) {
    const remaining = budget - arr[i].cost
    if (remaining <= 0) continue

    // 在第一台机器中找成本 < remaining 的最大容量
    // 二分查找
    let left = 0,
      right = m - 1,
      best = -1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid].cost < remaining) {
        best = mid
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    if (best >= 0) {
      // 确保不选同一台（成本相同但可能是不同原机器，但这里我们已合并相同成本）
      // 如果 best >= i，说明 i 在 [0, best] 中，要排除 i
      if (best < i) {
        maxCap = Math.max(maxCap, arr[i].cap + arr[best].cap)
      } else {
        // 在 [0, best] 中找不等于 i 的最大容量
        // 直接用前缀最大值，但注意前缀最大值可能来自 i
        // 所以我们从 [0, best] 中遍历找不等于 i 的最大容量
        let otherMax = 0
        for (let k = 0; k <= best; k++) {
          if (k !== i) {
            otherMax = Math.max(otherMax, arr[k].cap)
          }
        }
        if (otherMax > 0) {
          maxCap = Math.max(maxCap, arr[i].cap + otherMax)
        }
      }
    }
  }

  return maxCap
}

console.log(maxCapacity([4, 8, 5, 3], [1, 5, 2, 7], 8))
