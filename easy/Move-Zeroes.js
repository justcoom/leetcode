// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Note that you must do this in-place without making a copy of the array.
//
//
//
//     Example 1:
//
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
//
// Input: nums = [0]
// Output: [0]

const moveZeroes2 = function (nums) {
    const arr1 = nums.filter(n => n === 0)
    const arr2 = nums.filter(n => n !== 0)
    return [...arr2, ...arr1]
};
const moveZeroes = function (nums) {
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]]
            left++
        }
    }
    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]))