class TreeAncestor {
  /**
   * 初始化倍增数组
   * @param {number} n 节点总数
   * @param {number[]} parent 父节点数组（parent[x] 是节点x的直接父节点）
   */
  constructor(n, parent) {
    // 计算最大倍增次数 m = log2(n) 的整数部分（替代Python的n.bit_length()-1）
    const m = n === 0 ? 0 : Math.floor(Math.log2(n))
    // 初始化倍增数组 pa：pa[x][i] 表示x的2^i级祖先，初始时pa[x][0] = parent[x]，其余为-1
    this.pa = parent.map((p) => {
      const arr = new Array(m + 1).fill(-1)
      arr[0] = p
      return arr
    })

    // 预处理倍增数组：递推计算pa[x][i+1] = pa[pa[x][i]][i]
    for (let i = 0; i < m; i++) {
      for (let x = 0; x < n; x++) {
        const p = this.pa[x][i]
        if (p !== -1) {
          this.pa[x][i + 1] = this.pa[p][i]
        }
      }
    }
  }

  /**
   * 方式1：按二进制位遍历查询第k个祖先
   * @param {number} node 目标节点
   * @param {number} k 要查询的祖先层级
   * @returns {number} 第k个祖先（不存在返回-1）
   */
  getKthAncestor(node, k) {
    // 遍历k的每一个二进制位（从低到高）
    const bitLen = k === 0 ? 0 : Math.floor(Math.log2(k)) + 1
    for (let i = 0; i < bitLen; i++) {
      // 检查k的第i位是否为1
      if ((k >> i) & 1) {
        node = this.pa[node][i]
        // 提前终止：节点不存在祖先
        if (node < 0) break
      }
    }
    return node
  }

  /**
   * 方式2：消去k的最低位1查询第k个祖先（更高效）
   * @param {number} node 目标节点
   * @param {number} k 要查询的祖先层级
   * @returns {number} 第k个祖先（不存在返回-1）
   */
  getKthAncestor2(node, k) {
    while (k > 0 && node !== -1) {
      // 取k的最低位1（lowbit操作）
      const lb = k & -k
      // 计算lowbit对应的倍增层级（lb=2^i → i = lb.bit_length()-1）
      const i = lb.toString(2).length - 1
      // 跳2^i级祖先
      node = this.pa[node][i]
      // 消去最低位1
      k ^= lb
    }
    return node
  }
}

// 测试示例
// 构建树形结构：0是根，1→0，2→1，3→2，4→3
const ta = new TreeAncestor(5, [-1, 0, 1, 2, 3])
console.log(ta.getKthAncestor(4, 2)) // 输出：2（4的第2个祖先是2）
console.log(ta.getKthAncestor2(4, 3)) // 输出：1（4的第3个祖先是1）
console.log(ta.getKthAncestor(4, 5)) // 输出：-1（不存在第5个祖先）
