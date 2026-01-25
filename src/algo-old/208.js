
class Node {
  constructor() {
    this.son = Array(26).fill(null)
    this.end = false
  }
}

var Trie = function () {
  this.root = new Node()
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root
  for (let c of word) {
    c = c.charCodeAt(0) - 'a'.charCodeAt(0)
    if (cur.son[c] === null) {
      cur.son[c] = new Node()
    }
    cur = cur.son[c]
  }
  cur.end = true
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root
  for (let c of word) {
    c = c.charCodeAt(0) - 'a'.charCodeAt(0)
    if (cur.son[c] === null) {
      return false
    }
    cur = cur.son[c]
  }
  return cur.end
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root
  for (let c of prefix) {
    c = c.charCodeAt(0) - 'a'.charCodeAt(0)
    if (cur.son[c] === null) {
      return false
    }
    cur = cur.son[c]
  }
  return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
