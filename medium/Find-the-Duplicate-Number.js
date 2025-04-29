// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
//
//     There is only one repeated number in nums, return this repeated number.
//
//     You must solve the problem without modifying the array nums and using only constant extra space.
//
//
//
//     Example 1:
//
// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:
//
// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:
//
// Input: nums = [3,3,3,3,3]
// Output: 3

const findDuplicate1 = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i]))
            return nums[i]
    }
};

const findDuplicate2 = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return nums[i]
            }
        }
    }
};
const findDuplicate3 = function(nums) {
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return nums[i]
        }
        set.add(nums[i])
    }
};

const findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};

console.log(findDuplicate([5,3,4,2,2, 3]))