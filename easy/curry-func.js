const sum = (a, b, c) => {
    return a + b + c
}

const sum2 = (a) => {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const sum3 = (a) => {
    return function (b, c) {
        return a + b + c
    }
}

// console.log(sum(1, 1, 1))
// console.log(sum2(1)(1)(2))


const fixedValue = sum3(2)
console.log(fixedValue(1, 1))