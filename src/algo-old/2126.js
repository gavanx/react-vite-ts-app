var asteroidsDestroyed = function (mass, asteroids) {
  asteroids = asteroids.sort((a, b) => a - b)
  for (const a of asteroids) {
    if (mass >= a) {
      mass += a
    } else {
      return false
    }
  }
  return true
}
