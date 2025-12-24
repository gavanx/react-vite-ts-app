function minSwaps(nums, forbidden) {
  const n = nums.length

  // 1. 可行性检查：每个值的出现次数不能超过可用位置数
  const freq = new Map()
  const forbiddenFreq = new Map()

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }
  for (const f of forbidden) {
    forbiddenFreq.set(f, (forbiddenFreq.get(f) || 0) + 1)
  }

  for (const [val, count] of freq) {
    const forbiddenCount = forbiddenFreq.get(val) || 0
    if (count > n - forbiddenCount) {
      return -1
    }
  }

  // 2. 贪心构造目标排列
  // 按频率降序排序值
  const values = [...freq.keys()].sort((a, b) => freq.get(b) - freq.get(a))

  // 目标排列
  const target = new Array(n).fill(null)

  // 分配每个值到允许的位置
  for (const val of values) {
    const count = freq.get(val)
    const allowedPositions = []

    // 收集所有允许放置val的位置
    for (let i = 0; i < n; i++) {
      if (forbidden[i] !== val && target[i] === null) {
        allowedPositions.push(i)
      }
    }

    // 分配前count个位置
    for (let k = 0; k < count; k++) {
      target[allowedPositions[k]] = val
    }
  }

  // 3. 计算最小交换次数
  // 构建从原始索引到目标索引的映射
  const valueToIndices = new Map()
  for (let i = 0; i < n; i++) {
    const val = nums[i]
    if (!valueToIndices.has(val)) valueToIndices.set(val, [])
    valueToIndices.get(val).push(i)
  }

  // 构建置换：perm[原始索引] = 目标索引
  const perm = new Array(n)
  for (let i = 0; i < n; i++) {
    const targetVal = target[i]
    const indices = valueToIndices.get(targetVal)
    perm[indices.shift()] = i
  }

  // 环分解
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

  return n - cycles
}

console.log(minSwaps([1, 2, 3], [3, 2, 1])) //  1
console.log(minSwaps([4, 6, 6, 5], [4, 6, 5, 5])) //  1