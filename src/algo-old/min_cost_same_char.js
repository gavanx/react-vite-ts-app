/**
 * Problem:
 * Given a string s of length n and an integer array cost, where cost[i] is the cost of deleting the i-th character of s.
 * You can delete any number of characters from s (or none) such that the final string is non-empty and consists of identical characters.
 * Return the minimum total deletion cost to achieve this.
 */

/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
  let totalCost = 0
  const costMap = new Map()

  // Calculate total cost and sum of costs for each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const c = cost[i]
    totalCost += c
    costMap.set(char, (costMap.get(char) || 0) + c)
  }

  // Find the character that has the maximum total cost (which we want to keep)
  let maxSaved = 0
  for (let saved of costMap.values()) {
    maxSaved = Math.max(maxSaved, saved)
  }

  // The minimum deletion cost is Total Cost - Max Cost of a single character
  return totalCost - maxSaved
}

// Test cases
console.log(minCost('aba', [1, 2, 3])) // Expected: 2 (Keep 'a's: cost 1+3=4. Total 6. 6-4=2)
console.log(minCost('aab', [1, 2, 3])) // Expected: 3 (Keep 'a's: 1+2=3. Total 6. 6-3=3)
console.log(minCost('abc', [1, 2, 3])) // Expected: 3 (Keep 'c': 3. Total 6. 6-3=3)
console.log(minCost('aaaa', [1, 2, 3, 4])) // Expected: 0
