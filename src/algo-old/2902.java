import java.util.HashMap;
import java.util.List;

class Solution {
  public int countSubMultisets(List<Integer> nums, int l, int r) {
    final int MOD = 1_000_000_007;
    int total = 0;
    var cnt = new HashMap<Integer, Integer>();
    for (int x : nums) {
      total += x;
      cnt.merge(x, 1, Integer::sum);
    }
    if (l > total) {
      return 0;
    }

    r = Math.min(r, total);
    int[] f = new int[r + 1];
    f[0] = cnt.getOrDefault(0, 0) + 1;
    cnt.remove(0);

    int sum = 0;
    for (var e : cnt.entrySet()) {
      int x = e.getKey(), c = e.getValue();
      int[] newF = f.clone();
      sum = Math.min(sum + x * c, r); // 到目前为止，能选的元素和至多为 sum
      for (int j = x; j <= sum; j++) { // 把循环上界从 r 改成 sum 可以快不少
        newF[j] = (newF[j] + newF[j - x]) % MOD;
        if (j >= (c + 1) * x) {
          newF[j] = (newF[j] - f[j - (c + 1) * x] + MOD) % MOD; // 避免减法产生负数
        }
      }
      f = newF;
    }

    int ans = 0;
    for (int i = l; i <= r; ++i) {
      ans = (ans + f[i]) % MOD;
    }
    return ans;
  }
}

void main() {
  var sol = new Solution();
  System.out.println(
      sol.countSubMultisets(
          List.of(1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5), 10, 20));
}