func minimizeTheDifference(mat [][]int, target int) int {
	dp := make([]bool, min(len(mat)*70, target*2)+1) // 需要枚举的重量不会超过 target*2
	dp[0] = true
	minSum, maxSum := 0, 0
	for _, row := range mat {
		mi, mx := row[0], row[0]
		for _, v := range row[1:] {
			if v > mx {
				mx = v
			} else if v < mi {
				mi = v
			}
		}
		minSum += mi // 求 minSum 是为了防止 target 过小导致 dp 没有记录到
		maxSum = min(maxSum+mx, target*2) // 前 i 组的最大重量，优化枚举时 j 的初始值
		for j := maxSum; j >= 0; j-- {
			dp[j] = false
			for _, v := range row {
				if v <= j && dp[j-v] {
					dp[j] = true
					break
				}
			}
		}
	}
	ans := abs(minSum - target)
	for i, ok := range dp {
		if ok {
			ans = min(ans, abs(i-target))
		}
	}
	return ans
}

func abs(x int) int { if x < 0 { return -x }; return x } 
