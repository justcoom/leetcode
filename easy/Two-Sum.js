// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     You can return the answer in any order.
//
//     Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

var twoSum = function (nums, target) {
    const res = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                res.push(i, j)
                return res
            }
        }
    }
    return []
};

const twoSum2 = (nums, targer) => {
    const res = new Map()
    for (let i = 0; i < nums.length; i++) {
        const temp = targer - nums[i]
        if (res.has(temp)) {
            return [res.get(temp), i]
        }
        res.set(nums[i], i)
    }
    return []
}

console.log(twoSum2([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
console.log(twoSum([2, 5, 5, 11], 10))
