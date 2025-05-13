function identity<T>(value: T): T {
    return value
}

const numberIdentity = identity<number>(42)
const stringIdentity = identity('hello')


// task 1

const x = {a: 1, b: 2, c: 3, d: 4}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

console.log(getProperty(x, 'a'))
console.log(getProperty(x, 'm'))

// task 2

interface User {
    id: string
    name: string
    email: string
}

type MyPartial<Type> = {
    [Key in keyof Type]?: Type[Key]
}

type user = MyPartial<User>

const user: user = {
    name: 'John'
}

type MyPick<T, K extends keyof T> = {
    [Key in K]: T[Key];
};

type user2 = MyPick<User, 'name' | 'id'>

const user2: user2 = {
    id: '12',
    name: '2121'
}

type MyRecord<K extends keyof any, T> = {
    [Key in K]: T
}

type User3 = MyRecord<'first' | 'second', User>

const user3: User3 = {
    first: {name: '12', email: '21', id: '2'},
    second: {name: '12', email: '21', id: '2'}
}

// task 3

type Status = 'new' | 'in-work' | 'done'

type StatusWithBrackets = `[${Status}]`

type StatusWithBrackets2 = {
    [Key in Status]: `[${Key}]`
}[Status]

const value: StatusWithBrackets2 = '[in-work]'



