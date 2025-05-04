// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//
//     A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
//
//
//
// Example 1:
//
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
//
// Input: s = "axc", t = "ahbgdc"
// Output: false

const isSubsequence = function(s, t) {
    let count = 0

    for (let i = 0; i < s.length; i++) {
        let first = s[i]

        for (let j = i; j < t.length; j++) {
            // let second = t[j]

            if (first === t[j]) {
                first = s[i + 1]
                j = t[j + 1]
                count++
                break
            }
        }
    }

    return count === s.length
};

// console.log(isSubsequence('abc', 'ahbgdc'))
// console.log(isSubsequence("axc", "ahbgdc"))
console.log(isSubsequence("bb", "ahbgdc")) // false