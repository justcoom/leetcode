// var a = 1
// function b () {
//     a = 10
//     return
//     function a () {}
// }
// b()
// console.log(a)


function isPalindrome(str) {
    // --1 simple solution for words
    // return str.split('').reverse().join('') === str

    // --2
    // const clearStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    // return clearStr.split('').reverse().join('') === clearStr

    // --3

}

//
// console.log(isPalindrome('hello')) // false
// console.log(isPalindrome('A man, a plan, a canal, Panama')) // true
// console.log(isPalindrome('tenet')) // true


Array.prototype.myFilter = function (callback) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr
}

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i]
        }
    }
}

Array.prototype.myMap = function (callback) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this))
    }
    return newArr
}

Array.prototype.myReduce = function (callback, initialValue) {
    for (let i = 0; i < this.length; i++) {
        initialValue = callback(initialValue, this[i], i, this)
    }
    return initialValue
}

const arr = [1, 2, 3, 4, 5]

console.log(arr.myFilter((x) => x > 2))
console.log(arr.myFind((x) => x === -1))
console.log(arr.myMap((x) => x * 2))
console.log(arr.myReduce((acc, el) => {
    acc.push(el * 5)
    return acc
}, []))

function reconstructTrip(tickets) {
    const map = {}
    for (let i = 0; i < tickets.length; i++) {
        const ticket = tickets[i]
        map[ticket.from] = ticket.to
    }

    let startCity = Object.keys(map).find(from => !Object.values(map).includes(from))

    const res = []
    while (map[startCity]) {
        res.push({from: startCity, to: map[startCity]})
        startCity = map[startCity]
    }

    return res
}

console.log(reconstructTrip([
    {from: 'Спб', to: 'Минск'},
    {from: 'Киев', to: 'Новосибирск'},
    {from: 'Череповец', to: 'Москва'},
    {from: 'Минск', to: 'Киев'},
    {from: 'Москва', to: 'Спб'},
]))