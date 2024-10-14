import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @description:
 *
 * 给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，
 * 子集中每一元素对 (answer[i], answer[j]) 都应当满足：
 * answer[i] % answer[j] == 0 ，或
 * answer[j] % answer[i] == 0
 * 如果存在多个有效解子集，返回其中任何一个均可。
 *
 */
class Solution3 {
    public List<Integer> largestDivisibleSubset(int[] nums) {
        int len = nums.length;  // 修正长度初始化
        if (len == 0) {
            return new ArrayList<>();
        }

        Arrays.sort(nums);  // 先对数组进行排序

        // 第 1 步：动态规划找出最大子集的个数、最大子集中的最大整数
        int[] dp = new int[len];
        Arrays.fill(dp, 1);  // 初始化每个位置的子集大小为1
        int[] prev = new int[len];  // 用来记录每个位置的前一个元素的索引
        Arrays.fill(prev, -1);  // 初始化为-1表示没有前一个元素

        int maxSize = 1;
        int maxIndex = 0;

        for (int i = 1; i < len; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] % nums[j] == 0) {
                    if (dp[i] < dp[j] + 1) {
                        dp[i] = dp[j] + 1;
                        prev[i] = j;  // 记录前一个索引
                    }
                }
            }

            if (dp[i] > maxSize) {
                maxSize = dp[i];
                maxIndex = i;
            }
        }

        // 第 2 步：倒推获得最大子集
        List<Integer> res = new ArrayList<>();
        int currentIndex = maxIndex;

        while (currentIndex >= 0) {
            res.add(nums[currentIndex]);
            currentIndex = prev[currentIndex];
        }

        return res;
    }
}
