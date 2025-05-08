const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))


console.log('Начало');
await sleep(2000); // Приостанавливаем выполнение на 2 секунды
console.log('Прошло 2 секунды');

function flattenArray(arr) {
    const res = []
    const stack = [...arr]

    while(stack.length) {
        const el = stack.pop()
        if (typeof el === 'object') {
            stack.push(...el)
        } else {
            res.unshift(el)
        }
    }
    return res
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6]