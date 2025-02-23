// Write a function to find the longest common prefix string amongst an array of strings.
//
//     If there is no common prefix, return an empty string "".
//
//
//
//     Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = function(strs) {
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return strs[0].slice(0, i)
            }
        }
    }
    return strs[0]
};

const longestCommonPrefix2 = function(strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let string = strs[i];
        while (string.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        };
    }
    return prefix;
};

console.log(longestCommonPrefix2(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["dog","dog","dog"]))
console.log(longestCommonPrefix(['a']))
console.log(longestCommonPrefix(["flower","flower","flower","flower"]))
console.log(longestCommonPrefix(["a","a","b"]))