// Given the root of a binary tree, return all root-to-leaf paths in any order.
//
//     A leaf is a node with no children.
//
//     Example 1:
//
//
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:
//
// Input: root = [1]
// Output: ["1"]

const root = {
    val: 1,
    left: {
        val: 2,
        right: {
            val: 5,
            left: null,
            right: null
        },
        left: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

const binaryTreePaths = function (root) {
    const res = []

    function dfs(root, str) {
        if (!root) return
        str += root.val
        if (!root.left && !root.right) {
            res.push(str)
        }
        dfs(root.left, str + '->')
        dfs(root.right, str + '->')
    }

    dfs(root, '')
    return res
}

console.log(binaryTreePaths(root))
console.log(binaryTreePaths({val: 1}))
console.log(binaryTreePaths({}))
