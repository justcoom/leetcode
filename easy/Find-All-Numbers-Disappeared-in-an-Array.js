// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
//
//
//
//     Example 1:
//
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:
//
// Input: nums = [1,1]
// Output: [2]

const findDisappearedNumbers = function (nums) {
    const set = new Set(nums)
    const res = []
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            res.push(i)
        }
    }
    return res
};

const findDisappearedNumbers2 = function (nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        const index = num - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index]; // Помечаем как отрицательное
        }
    }

// Собираем пропущенные числа
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1); // Индекс + 1 = пропущенное число
        }
    }

    return result;
};


console.log(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers([1, 1]))