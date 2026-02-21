// 定义 0-1 字典树的节点结构
class TrieNode {
  constructor() {
    this.children = [null, null] // 0 和 1 两个子节点
  }
}

// 0-1 字典树类（适配 32 位整数，覆盖 LeetCode 大部分场景）
class BinaryTrie {
  constructor() {
    this.root = new TrieNode()
    this.HIGH_BIT = 30 // 32位整数的最高有效位是第30位（从0开始数，2^30 是十亿级，覆盖int范围）
  }

  /**
   * 插入一个数字到字典树中（从最高位到最低位）
   * @param {number} num 要插入的整数
   */
  insert(num) {
    let node = this.root
    // 从最高位到最低位遍历二进制位
    for (let i = this.HIGH_BIT; i >= 0; i--) {
      const bit = (num >> i) & 1 // 获取第i位的二进制值（0或1）
      // 如果当前位的子节点不存在，创建新节点
      if (!node.children[bit]) {
        node.children[bit] = new TrieNode()
      }
      // 移动到子节点
      node = node.children[bit]
    }
  }

  /**
   * 查询与当前数字异或的最大值
   * @param {number} num 要查询的整数
   * @returns {number} 最大异或值
   */
  queryMaxXor(num) {
    if (!this.root.children[0] && !this.root.children[1]) {
      return -1 // 树为空时返回-1（根据题目需求调整）
    }
    let node = this.root
    let maxXor = 0
    for (let i = this.HIGH_BIT; i >= 0; i--) {
      const bit = (num >> i) & 1
      // 贪心选择相反的位（0选1，1选0），最大化异或结果
      const desiredBit = 1 - bit
      if (node.children[desiredBit]) {
        maxXor = (maxXor << 1) | 1 // 该位异或结果为1，计入最大值
        node = node.children[desiredBit]
      } else {
        maxXor = maxXor << 1 // 只能选相同的位，该位异或结果为0
        node = node.children[bit]
      }
    }
    return maxXor
  }
}
