from collections import deque
from typing import List

class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        minQ = deque()
        maxQ = deque()
        ans = left = 0
        for right, x in enumerate(nums):
            while minQ and x <= nums[minQ[-1]]:
                minQ.pop()
            minQ.append(right)
            while maxQ and x >= nums[maxQ[-1]]:
                maxQ.pop()
            maxQ.append(right)

            while (nums[maxQ[0]] - nums[minQ[0]]) * (right - left + 1) > k:
                left += 1
                if minQ[0] < left:
                    minQ.popleft()
                if maxQ[0] < left:
                    maxQ.popleft()
            ans += right - left + 1
        return ans
 

# 测试用例
if __name__ == "__main__":
    sol = Solution()
     
    nums1 = [1, 3, 2 ]
    k1 = 4
    print(f"{sol.countSubarrays(nums1, k1)}")   
     
    nums2 = [5,5,5,5]
    k2 = 0
    print(f"{sol.countSubarrays(nums2, k2)}")  
     
    nums3 = [1,2,3]
    k3 = 0
    print(f"{sol.countSubarrays(nums3, k3)}")   
