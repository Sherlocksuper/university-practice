import java.util.List;

public class L2022211813_3_Test {
    public static void main(String[] args) {
        Solution3 solution = new Solution3();

        // 测试示例 1
        int[] nums1 = {1, 2, 3};
        List<Integer> result1 = solution.largestDivisibleSubset(nums1);
        System.out.println("测试 1 的结果: " + result1);  // 应输出 [1, 2] 或 [1, 3]

        // 测试示例 2
        int[] nums2 = {1, 2, 4, 8};
        List<Integer> result2 = solution.largestDivisibleSubset(nums2);
        System.out.println("测试 2 的结果: " + result2);  // 应输出 [1, 2, 4, 8]

        // 测试边界情况
        int[] nums3 = {};
        List<Integer> result3 = solution.largestDivisibleSubset(nums3);
        System.out.println("测试 3 的结果: " + result3);  // 应输出 []

        // 测试单一元素
        int[] nums4 = {10};
        List<Integer> result4 = solution.largestDivisibleSubset(nums4);
        System.out.println("测试 4 的结果: " + result4);  // 应输出 [10]

        // 测试无解情况
        int[] nums5 = {2, 3, 5, 7};
        List<Integer> result5 = solution.largestDivisibleSubset(nums5);
        System.out.println("测试 5 的结果: " + result5);  // 应输出 [2], [3], [5] 或 [7] 之一
    }
}
