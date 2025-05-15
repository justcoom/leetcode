// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed
// a string and you must return an array of strings where an uppercase letter is a person standing up

function wave(str) {
    const resArr = []
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === ' ') continue
        const pushEl = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)
        resArr.push(pushEl)
    }
    return resArr
}

console.log(wave('hello'))
console.log(wave('two words'))