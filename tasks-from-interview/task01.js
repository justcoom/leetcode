// Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min.

const findMaxMin = (nums) => {
    let min = nums[0]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let el = nums[i]
        if (el < min) {
            min = el
        }
        if (el > max) {
            max = el
        }
    }
    return {min, max}
}

console.log(findMaxMin([1, 3, 0, 23, 10, -3, 33]))

// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York'
    },
    {
        name: 'Johan',
        city: 'Berlin'
    },
]

const groupByCity = (array) => {
    const res = {}
    for (let i = 0; i < array.length; i++) {
        const {name, city} = array[i]
        if (city in res) {
            res[city] = [res[city], name]
        } else {
            res[city] = name
        }
    }
    return res
}

// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

console.log(groupByCity(people))

const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
    // ваш код
    if (intervals.length < 2) return intervals

    intervals.sort((a, b) => a[0] - b[0])
    let result = [intervals[0]]
    for (const interval of intervals) {
        let current = result[result.length - 1]
        if (current[1] > interval[0]) {
            current[1] = Math.max(current[1], interval[1])
        } else {
            result.push(interval)
        }
    }
    return result
}

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));