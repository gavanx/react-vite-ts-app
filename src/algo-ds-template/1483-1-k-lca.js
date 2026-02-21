class TreeAncestor {
  constructor(n, parent) {
    const m = n === 0 ? 0 : Math.floor(Math.log2(n))
    this.pa = parent.map((p) => {
      const arr = new Array(m + 1).fill(-1)
      arr[0] = p
      return arr
    })

    for (let i = 0; i < m; i++) {
      for (let x = 0; x < n; x++) {
        const p = this.pa[x][i]
        if (p !== -1) {
          this.pa[x][i + 1] = this.pa[p][i]
        }
      }
    }
  }

  getKthAncestor(node, k) {
    const bitLen = k === 0 ? 0 : Math.floor(Math.log2(k)) + 1
    for (let i = 0; i < bitLen; i++) {
      if ((k >> i) & 1) {
        node = this.pa[node][i]
        if (node < 0) break
      }
    }
    return node
  }

  getKthAncestor2(node, k) {
    while (k > 0 && node !== -1) {
      const lb = k & -k
      const i = lb.toString(2).length - 1
      node = this.pa[node][i]
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
