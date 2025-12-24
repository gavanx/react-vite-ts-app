function minSwaps(nums, forbidden) {
  const n = nums.length

  // 1. 可行性检查：使用Hall定理的简化版本
  const numsCount = new Map()
  const forbiddenCount = new Map()

  for (const num of nums) {
    numsCount.set(num, (numsCount.get(num) || 0) + 1)
  }

  for (const f of forbidden) {
    forbiddenCount.set(f, (forbiddenCount.get(f) || 0) + 1)
  }

  // 如果某个值在forbidden中出现次数过多，无法放置
  for (const [val, count] of numsCount) {
    const fCount = forbiddenCount.get(val) || 0
    if (count > n - fCount) {
      return -1
    }
  }

  // 2. 使用贪心构造可行的目标排列
  const target = new Array(n).fill(null)
  const used = new Set()

  // 按频率降序处理值
  const values = [...numsCount.keys()].sort((a, b) => numsCount.get(b) - numsCount.get(a))

  for (const val of values) {
    const count = numsCount.get(val)
    // 收集所有可以放置val的位置
    const positions = []
    for (let i = 0; i < n; i++) {
      if (forbidden[i] !== val && !used.has(i)) {
        positions.push(i)
      }
    }

    // 分配
    for (let k = 0; k < count; k++) {
      target[positions[k]] = val
      used.add(positions[k])
    }
  }

  // 3. 计算最小交换次数（环分解）
  // 构建位置到目标值的映射
  const posToTarget = new Map()
  for (let i = 0; i < n; i++) {
    posToTarget.set(i, target[i])
  }

  // 由于nums可能有重复值，我们需要构建一个精确的映射
  // 创建一个可用位置的映射
  const available = new Map()
  for (let i = 0; i < n; i++) {
    const val = nums[i]
    if (!available.has(val)) available.set(val, [])
    available.get(val).push(i)
  }

  // 构建置换：当前位置 -> 目标位置
  const perm = new Array(n)
  for (let i = 0; i < n; i++) {
    const targetVal = target[i]
    const pos = available.get(targetVal).shift()
    perm[pos] = i
  }

  // 计算环的数量
  const visited = new Array(n).fill(false)
  let cycles = 0

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue

    let j = i
    while (!visited[j]) {
      visited[j] = true
      j = perm[j]
    }
    cycles++
  }

  // 最小交换次数 = n - cycles
  return n - cycles
}
console.log(minSwaps([1, 2, 3], [3, 2, 1])) //  1
console.log(minSwaps([4, 6, 6, 5], [4, 6, 5, 5])) //  1
