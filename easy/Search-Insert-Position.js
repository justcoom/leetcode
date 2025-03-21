// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
//     You must write an algorithm with O(log n) runtime complexity.
//
//
//
//     Example 1:
//
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
//
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
//
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// O(n) runtime complexity

// const searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const el = nums[i]
//         if (target === el || target < el) {
//             return i
//         }
//         if (target > nums[nums.length - 1]) {
//             return nums.length
//         }
//     }
//     nums.indexOf(target)
// };

const searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))