// Given the root of a binary tree, return the length of the diameter of the tree.
//
//     The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
//
//     The length of a path between two nodes is represented by the number of edges between them.
//
//     Example 1:
//
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
//     Example 2:
//
// Input: root = [1,2]
// Output: 1

const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            right: null,
            left: null,
        },
        right: {
            val: 5,
            right: null,
            left: null,
        }
    },
    right: {
        val: 3,
        right: null,
        left: null,
    }
}

function diameterOfBinaryTree(root) {
    let maxDiameter = 0;

    const calculateDepth = (node) => {
        if (!node) return 0;

        const leftDepth = calculateDepth(node.left);
        const rightDepth = calculateDepth(node.right);

        // Обновляем максимальный диаметр
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

        // Возвращаем глубину текущего поддерева
        return Math.max(leftDepth, rightDepth) + 1;
    };

    calculateDepth(root);
    return maxDiameter;
}

console.log(diameterOfBinaryTree(root))

// const dfs = (root) => {
//     if (root === null) return 0
//     console.log(root.val + " ")
//     dfs(root.left)
//     dfs(root.right)
// }
//
// dfs(root)


