var Robot = function (width, height) {
  this.w = width
  this.h = height
  this.s = 0
}

Robot.prototype.step = function (num) {
  this.s = ((this.s + num - 1) % ((this.w + this.h - 2) * 2)) + 1
}

Robot.prototype.getState = function () {
  const w = this.w,
    h = this.h,
    s = this.s
  if (s < w) {
    return [s, 0, 'East']
  } else if (s < w + h - 1) {
    return [w - 1, s - w + 1, 'North']
  } else if (s < w * 2 + h - 2) {
    return [w * 2 + h - s - 3, h - 1, 'West']
  } else {
    return [0, (w + h) * 2 - s - 4, 'South']
  }
}

Robot.prototype.getPos = function () {
  const [x, y, _] = this.getState()
  return [x, y]
}

Robot.prototype.getDir = function () {
  return this.getState()[2]
}
