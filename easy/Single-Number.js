// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//
//     You must implement a solution with a linear runtime complexity and use only constant extra space.
//
//
//
//     Example 1:
//
// Input: nums = [2,2,1]
//
// Output: 1
//
// Example 2:
//
// Input: nums = [4,1,2,1,2]
//
// Output: 4
//
// Example 3:
//
// Input: nums = [1]
//
// Output: 1

const singleNumber = function (nums) {
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            set.delete(nums[i])
        } else {
            set.add(nums[i])
        }
    }
    return Array.from(set)[0]
};

// XOR METHOD
const singleNumber2 = function (nums) {
    let uniqueNumber = 0
    for (let i = 0; i < nums.length; i++) {
        uniqueNumber ^= nums[i]
    }
    return uniqueNumber
};

// console.log(singleNumber([2, 2, 1]))
console.log(singleNumber2([4, 1, 2, 1, 2]))