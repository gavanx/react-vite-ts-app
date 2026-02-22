function getUniquePermutations(num) {
  const digits = num.toString().split('')
  const result = new Set() // 用Set自动去重

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.add(parseInt(current.join(''), 10))
      return
    }

    for (let i = 0; i < remaining.length; i++) {
      const chosen = remaining[i]
      const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      backtrack([...current, chosen], newRemaining)
    }
  }

  backtrack([], digits)
  // 将Set转为数组并排序，让结果更整齐
  return Array.from(result).sort((a, b) => a - b)
}

const numWithDuplicate = 999999999;
const uniquePerms = getUniquePermutations(numWithDuplicate);
console.log(`数字 ${numWithDuplicate} 的不重复全排列是：`, uniquePerms);