# 更快的写法见【Python3 字典】
from cmath import inf
from typing import List


fmax = lambda a, b: b if b > a else a

class Solution:
    def maxProfit(self, n: int, present: List[int], future: List[int], hierarchy: List[List[int]], budget: int) -> int:
        g = [[] for _ in range(n)]
        for x, y in hierarchy:
            g[x - 1].append(y - 1)

        def dfs(x: int) -> List[List[int]]:
            # 计算从 x 的所有儿子子树 y 中，能得到的最大利润之和
            sub_f = [[0] + [-inf] * budget for _ in range(2)]
            for y in g[x]:
                fy = dfs(y)
                for k, fyk in enumerate(fy):
                    nf = [0] + [-inf] * budget
                    for jy, res_y in enumerate(fyk):
                        if res_y < 0:  # 重要优化：物品价值为负数，一定不选
                            continue
                        for j in range(jy, budget + 1):
                            nf[j] = fmax(nf[j], sub_f[k][j - jy] + res_y)
                    sub_f[k] = nf

            f = [None] * 2
            for k in range(2):
                # 不买 x，转移来源为 sub_f[0]，因为对于子树来说，父节点一定不买
                f[k] = sub_f[0].copy()
                cost = present[x] // (k + 1)
                # 买 x，转移来源为 sub_f[1]，因为对于子树来说，父节点一定买
                for j in range(cost, budget + 1):
                    f[k][j] = fmax(f[k][j], sub_f[1][j - cost] + future[x] - cost)
            return f

        return max(dfs(0)[0])
 