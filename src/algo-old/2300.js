var successfulPairs = function (spells, potions, success) {
  const potionsSorted = potions.sort((a, b) => a - b)
  const binarySearch = (spell) => {
    let left = 0
    let right = potionsSorted.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (spell * potionsSorted[mid] >= success) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return potionsSorted.length - left
  }

  return spells.map((spell) => binarySearch(spell))
}

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7))
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16))
