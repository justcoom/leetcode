// Given an array nums of size n, return the majority element.
//
//     The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//
//
//
//     Example 1:
//
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
//
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = function(nums) {
    const cash = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in cash) {
            cash[nums[i]]++
        } else {
            cash[nums[i]] = 1
        }
    }
    for (let key in cash) {
        if(cash[key] > nums.length / 2) {
            return +key
        }
    }
};
const majorityElement2 = function(nums) {
    let res = 0
    let majority = 0
    for (let num of nums) {
        if (majority === 0){
            res = num
        }
        if (num === res) {
            majority += 1
        } else {
            majority -= 1
        }
    }
    return res
};

console.log(majorityElement2([3,2,3]))
console.log(majorityElement2([2,2,1,1,1,2,2]))