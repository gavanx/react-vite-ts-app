class Node {
  constructor() {
    this.son = Array(26).fill(null)
    this.end = false
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word) {
    let cur = this.root
    for (let c of word) {
      c = c.charCodeAt(0) - 'a'.charCodeAt(0)
      if (cur.son[c] === null) {
        // 无路可走？
        cur.son[c] = new Node() // new 出来！
      }
      cur = cur.son[c]
    }
    cur.end = true
  }

  find(word) {
    let cur = this.root
    for (let c of word) {
      c = c.charCodeAt(0) - 'a'.charCodeAt(0)
      if (cur.son[c] === null) {
        // 道不同，不相为谋
        return 0
      }
      cur = cur.son[c]
    }
    // 走过同样的路（2=完全匹配，1=前缀匹配）
    return cur.end ? 2 : 1
  }

  search(word) {
    return this.find(word) === 2
  }

  startsWith(prefix) {
    return this.find(prefix) !== 0
  }
}
