var maximumWhiteTiles = function (tiles, carpetLen) {
  let l = 0, s = 0
  for (let i = 0; i < tiles.length; i++) {
    s += Math.min(carpetLen, tiles[i][1] - tiles[i][0])
    while (l < i && tiles[i][1] - tiles[l][1] >= carpetLen) {
      s-=
      l++
    }
  }
}
