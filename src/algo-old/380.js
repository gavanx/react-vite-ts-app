var RandomizedSet = function () {
  this.data = []
  this.map = new Map()
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false
  }
  const index = this.data.length
  this.data.push(val)
  this.map.set(val, index)
  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false
  }
  const index = this.map.get(val)
  const last = this.data.pop()
  this.data[index] = last
  this.set(last, index)
  this.map.delete(val)
  return true
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.data[Math.floor(Math.random() * this.data.length)]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
