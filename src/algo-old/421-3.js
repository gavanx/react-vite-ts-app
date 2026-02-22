class TrieNode {
  constructor() {
    this.children = [null, null]
  }
}

class BinaryTrie {
  constructor(high) {
    this.root = new TrieNode()
    this.HIGH_BIT = high || 30
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

var findMaximumXOR = function (nums) {
  const trie = new BinaryTrie(Math.max(...nums).toString(2).length - 1)
  let maxResult = 0
  trie.insert(nums[0])
  for (let i = 1; i < nums.length; i++) {
    maxResult = Math.max(maxResult, trie.queryMaxXor(nums[i]))
    trie.insert(nums[i])
  }
  return maxResult
}

// 测试用例
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8])) // 输出 28（25 ^ 3 = 28）
console.log(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70])) // 输出 127
