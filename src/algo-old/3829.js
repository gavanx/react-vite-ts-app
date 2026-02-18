var RideSharingSystem = function () {
  this.r = []
  this.d = []
  this.canceled = new Set()
  this.fr = new Set()
  this.fd = new Set()
}

/**
 * @param {number} riderId
 * @return {void}
 */
RideSharingSystem.prototype.addRider = function (riderId) {
  this.r.push(riderId)
}

/**
 * @param {number} driverId
 * @return {void}
 */
RideSharingSystem.prototype.addDriver = function (driverId) {
  this.d.push(driverId)
}

/**
 * @return {number[]}
 */
RideSharingSystem.prototype.matchDriverWithRider = function () {
  let r
  while (this.r.length > 0) {
    r = this.r[0]
    if (this.fr.has(r) || this.canceled.has(r)) {
      this.r.shift()
      r = undefined
      continue
    }
  }
  if (!r) {
    return [-1, -1]
  }
  let d
  while (this.d.length > 0) {
    d = this.d[0]
    if (this.fd.has(d)) {
      this.d.shift()
      d = undefined
      continue
    }
  }
  if (!d) {
    return [-1, -1]
  }
  this.fr.add(r)
  this.fd.add(d)
  this.d.shift()
  this.r.shift()
  return [r, d]
}

/**
 * @param {number} riderId
 * @return {void}
 */
RideSharingSystem.prototype.cancelRider = function (riderId) {
  this.canceled.add(riderId)
}

/**
 * Your RideSharingSystem object will be instantiated and called as such:
 * var obj = new RideSharingSystem()
 * obj.addRider(riderId)
 * obj.addDriver(driverId)
 * var param_3 = obj.matchDriverWithRider()
 * obj.cancelRider(riderId)
 */
