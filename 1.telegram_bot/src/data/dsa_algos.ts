import { AlgorithmType } from "../types/types";

export const Algorithms: AlgorithmType[] = [
  {
    cmd_text: "binary_search",
    desc: "Find a number in a sorted list using binary search",
    code: "int binarySearch(vector<int>& arr, int target) {\n    int left = 0, right = arr.size() - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}",
    cmd: "binary_search",
  },
  {
    cmd_text: "kadane",
    desc: "Find the maximum subarray sum using Kadane’s algorithm",
    code: "int maxSubarraySum(vector<int>& nums) {\n    int maxSum = nums[0], currSum = 0;\n    for (int num : nums) {\n        currSum = max(num, currSum + num);\n        maxSum = max(maxSum, currSum);\n    }\n    return maxSum;\n}",
    cmd: "kadane",
  },
  {
    cmd_text: "rotate_array",
    desc: "Rotate an array to the right by k steps",
    code: "void rotateArray(vector<int>& nums, int k) {\n    k %= nums.size();\n    reverse(nums.begin(), nums.end());\n    reverse(nums.begin(), nums.begin() + k);\n    reverse(nums.begin() + k, nums.end());\n}",
    cmd: "rotate_array",
  },
  {
    cmd_text: "merge_sort",
    desc: "Sort an array using Merge Sort (Divide & Conquer)",
    code: "void mergeSort(vector<int>& arr, int l, int r) {\n    if (l < r) {\n        int m = l + (r - l) / 2;\n        mergeSort(arr, l, m);\n        mergeSort(arr, m + 1, r);\n        merge(arr, l, m, r);\n    }\n}",
    cmd: "merge_sort",
  },
  {
    cmd_text: "quick_sort",
    desc: "Sort an array using Quick Sort (Divide & Conquer)",
    code: "void quickSort(vector<int>& arr, int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}",
    cmd: "quick_sort",
  },
  {
    cmd_text: "two_sum",
    desc: "Find two numbers that add up to target in an array",
    code: "vector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> num_map;\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        if (num_map.count(complement)) return {num_map[complement], i};\n        num_map[nums[i]] = i;\n    }\n    return {};\n}",
    cmd: "two_sum",
  },
  {
    cmd_text: "palindrome_check",
    desc: "Check if a string is a palindrome",
    code: "bool isPalindrome(string s) {\n    int l = 0, r = s.size() - 1;\n    while (l < r) {\n        if (s[l++] != s[r--]) return false;\n    }\n    return true;\n}",
    cmd: "palindrome_check",
  },
  {
    cmd_text: "fibonacci",
    desc: "Find nth Fibonacci number using recursion",
    code: "int fibonacci(int n) {\n    return (n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);\n}",
    cmd: "fibonacci",
  },
  {
    cmd_text: "gcd",
    desc: "Find GCD of two numbers using Euclidean algorithm",
    code: "int gcd(int a, int b) {\n    return (b == 0) ? a : gcd(b, a % b);\n}",
    cmd: "gcd",
  },
  {
    cmd_text: "reverse_string",
    desc: "Reverse a given string",
    code: "string reverseString(string s) {\n    reverse(s.begin(), s.end());\n    return s;\n}",
    cmd: "reverse_string",
  },
  {
    cmd_text: "reverse_array",
    desc: "Reverse an array",
    code: "void reverseArray(vector<int>& arr) {\n    reverse(arr.begin(), arr.end());\n}",
    cmd: "reverse_array",
  },
  {
    cmd_text: "remove_duplicates",
    desc: "Remove duplicates from sorted array",
    code: "int removeDuplicates(vector<int>& nums) {\n    int i = 0;\n    for (int j = 1; j < nums.size(); j++) {\n        if (nums[j] != nums[i]) nums[++i] = nums[j];\n    }\n    return i + 1;\n}",
    cmd: "remove_duplicates",
  },
  {
    cmd_text: "longest_subarray_sum_k",
    desc: "Find the longest subarray with sum K",
    code: "int longestSubarraySumK(vector<int>& nums, int k) {\n    unordered_map<int, int> mp;\n    int sum = 0, maxLen = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        sum += nums[i];\n        if (sum == k) maxLen = i + 1;\n        if (mp.count(sum - k)) maxLen = max(maxLen, i - mp[sum - k]);\n        if (!mp.count(sum)) mp[sum] = i;\n    }\n    return maxLen;\n}",
    cmd: "longest_subarray_sum_k",
  },
  {
    cmd_text: "smallest_missing_number",
    desc: "Find the smallest missing positive number",
    code: "int findSmallestMissing(vector<int>& nums) {\n    sort(nums.begin(), nums.end());\n    int missing = 1;\n    for (int num : nums) {\n        if (num == missing) missing++;\n    }\n    return missing;\n}",
    cmd: "smallest_missing_number",
  },
  {
    cmd_text: "power_of_number",
    desc: "Calculate power of a number using recursion",
    code: "int power(int x, int y) {\n    return (y == 0) ? 1 : x * power(x, y - 1);\n}",
    cmd: "power_of_number",
  },
];
