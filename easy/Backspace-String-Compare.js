// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
//
//     Note that after backspacing an empty text, the text will continue empty.
//
// Example 1:
//
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
//     Example 2:
//
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
//     Example 3:
//
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

const backspaceCompare2 = function (s, t) {
    const strArr = [s, t]
    const res = []

    for (let i = 0; i < strArr.length; i++) {
        let left = 0
        const arr = []
        const currArr = strArr[i]
        for (let right = 0; right < currArr.length; right++) {
            if (currArr[right] === '#') {
                arr.pop()
                continue
            }

            arr.push(currArr[right])
        }
        res.push(arr.join(''))
    }
    return res[0] === res[1]
};

const backspaceCompare = function (s, t) {

    function getValidString (str) {
        const stack = []
        for (const char of str) {
            if (char === '#' && stack.length) {
                stack.pop()
            } else if (char !== '#') {
                stack.push(char)
            }
        }
        return stack.join('')
    }

    return getValidString(s) === getValidString(t)
}



console.log(backspaceCompare2("ab#c", "ad#c"))
console.log(backspaceCompare2("ab##", "c#d#"))
console.log(backspaceCompare2("a#c", "b"))

