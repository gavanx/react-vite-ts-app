const { AvlTree } = require('datastructures-js')

var avoidFlood = function (rains) {
  const n = rains.length
  const ans = Array(n).fill(-1)
  const fullDay = new Map() // lake -> 装满日
  const dryDay = new AvlTree((a, b) => a - b) // 未被使用的抽水日
  for (let i = 0; i < n; i++) {
    const lake = rains[i]
    if (lake === 0) {
      ans[i] = 1 // 0 不能抽水，随便抽哪个湖都行
      dryDay.insert(i) // 保存抽水日
      continue
    }
    const j = fullDay.get(lake)
    if (j !== undefined) {
      // 必须在 j 之后，i 之前把 lake 抽干
      // 选一个最早的未被使用的抽水日，如果选晚的，可能会导致其他湖没有可用的抽水日
      const node = dryDay.ceil(j)
      if (node === null) {
        return [] // 无法阻止洪水
      }
      ans[node.getValue()] = lake
      dryDay.removeNode(node) // 移除已使用的抽水日
    }
    fullDay.set(lake, i) // 插入或更新装满日
  }
  return ans
}

console.log(avoidFlood([1, 2, 3, 4]))
console.log(avoidFlood([1, 2, 0, 0, 2, 1]))
console.log(avoidFlood([1, 2, 0, 1, 2]))
console.log(avoidFlood([69, 0, 0, 0, 69]))
