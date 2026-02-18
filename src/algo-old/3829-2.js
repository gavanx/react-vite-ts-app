var RideSharingSystem = function () {
  this.r = []
  this.d = []
  this.rStatus = new Array(1001).fill(0)
  this.dStatus = new Array(1001).fill(0)
}

/**
 * @param {number} riderId
 * @return {void}
 */
RideSharingSystem.prototype.addRider = function (riderId) {
  this.r.push(riderId)
  this.rStatus[riderId] = 0
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
    if (r && this.rStatus[r] !== 0) {
      this.r.shift()
      r = undefined
      continue
    } else {
      break
    }
  }
  if (!r) {
    return [-1, -1]
  }
  let d
  while (this.d.length > 0) {
    d = this.d[0]
    if (d && this.dStatus[d] !== 0) {
      this.d.shift()
      d = undefined
      continue
    } else {
      break
    }
  }
  if (!d) {
    return [-1, -1]
  }
  this.dStatus[d] = 1
  this.rStatus[r] = 1
  this.d.shift()
  this.r.shift()
  return [d, r]
}

/**
 * @param {number} riderId
 * @return {void}
 */
RideSharingSystem.prototype.cancelRider = function (riderId) {
  this.rStatus[riderId] = 2
}

/**
 * Your RideSharingSystem object will be instantiated and called as such:
 * var obj = new RideSharingSystem()
 * obj.addRider(riderId)
 * obj.addDriver(driverId)
 * var param_3 = obj.matchDriverWithRider()
 * obj.cancelRider(riderId)
 */


const rideSharingSystem = new RideSharingSystem(); // 初始化系统
rideSharingSystem.addRider(3); // 乘客 3 加入队列
rideSharingSystem.addDriver(2); // 司机 2 加入队列
rideSharingSystem.addRider(1); // 乘客 1 加入队列
let r = rideSharingSystem.matchDriverWithRider(); // 返回 [2, 3]
console.log(r)
rideSharingSystem.addDriver(5); // 司机 5 变为可用
rideSharingSystem.cancelRider(3); // 乘客 3 已被匹配，取消操作无效
r = rideSharingSystem.matchDriverWithRider(); // 返回 [5, 1]
console.log(r)
r = rideSharingSystem.matchDriverWithRider(); // 返回 [-1, -1]
console.log(r)
