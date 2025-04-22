// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
//
//
//
//     Example 1:
//
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
//     After sorting, it becomes [0,1,9,16,100].
//     Example 2:
//
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const sortedSquares = function (nums) {
    const arr = nums.map((num) => num * num)
    return arr.sort((a, b) => a - b)
};
const sortedSquares2 = function (nums) {
    const resArr = new Array(nums.length)
    let start = 0
    let end = nums.length - 1
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[start]) > Math.abs(nums[end])) {
            resArr[i] = nums[start] * nums[start]
            start++
        } else {
            resArr[i] = nums[end] * nums[end]
            end--
        }
    }
    return resArr
};

console.log(sortedSquares2([-4, -1, 0, 3, 10]))