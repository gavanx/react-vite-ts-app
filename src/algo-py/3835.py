class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        min_q = deque()
        max_q = deque()
        ans = left = 0
        for right, x in enumerate(nums):
            # 1. 入：元素进入窗口
            while min_q and x <= nums[min_q[-1]]:
                min_q.pop()
            min_q.append(right)

            while max_q and x >= nums[max_q[-1]]:
                max_q.pop()
            max_q.append(right)

            # 2. 出：如果窗口不满足要求，左端点离开窗口
            # 只需改下面这行代码，其余逻辑和 2762 题完全一致
            while (nums[max_q[0]] - nums[min_q[0]]) * (right - left + 1) > k:
                left += 1
                if min_q[0] < left:
                    min_q.popleft()
                if max_q[0] < left:
                    max_q.popleft()

            # 3. 更新答案
            ans += right - left + 1
        return ans
 