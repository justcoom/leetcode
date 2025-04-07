const search = function(nums, target) {
    let first = 0
    let last = nums.length - 1
    while (first <= last) {
        const middle = Math.floor((first + last) / 2)
        if (nums[middle] === target) {
            return middle
        }
        if (nums[middle] < target) {
            first = middle + 1
        }
        if (nums[middle] > target) {
            last = middle - 1
        }
    }
    return -1
};

console.log(search([-1,0,3,5,9,12], 9)) // 4