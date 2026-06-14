class TrieNode {
  constructor() {
    this.children = [null, null]
  }
}

class BinaryTrie {
  constructor() {
    this.root = new TrieNode()
    this.HIGH_BIT = 30
  }

  insert(num) {
    let node = this.root
    for (let i = this.HIGH_BIT; i >= 0; i--) {
      const bit = (num >> i) & 1
      if (!node.children[bit]) {
        node.children[bit] = new TrieNode()
      }
      node = node.children[bit]
    }
  }

  queryMaxXor(num) {
    if (!this.root.children[0] && !this.root.children[1]) {
      return -1
    }
    let node = this.root
    let maxXor = 0
    for (let i = this.HIGH_BIT; i >= 0; i--) {
      const bit = (num >> i) & 1
      const desiredBit = 1 - bit
      if (node.children[desiredBit]) {
        maxXor = (maxXor << 1) | 1
        node = node.children[desiredBit]
      } else {
        maxXor = maxXor << 1
        node = node.children[bit]
      }
    }
    return maxXor
  }
}
