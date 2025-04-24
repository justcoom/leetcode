// Given a binary tree, find its minimum depth.
//
//     The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//
//     Note: A leaf is a node with no children.
//
//
//
//     Example 1:
//
//
// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:
//
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

const root = {
    val: 3,
    right: {
        val: 20,
        right: {
            val: 7
        },
        left: {
            val: 15
        }
    },
    left: {
        val: 9
    }
}

// 1ms runtime

const minDepth2 = function (root) {
    if (!root) return 0
    const depth = 1
    const queue = []
    queue.push([root, depth])
    while (queue.length > 0) {
        const [currentNode, depth] = queue.shift()
        if (!currentNode.left && !currentNode.right) {
            return depth
        }
        if (currentNode.left) {
            queue.push([currentNode.left, depth + 1])
        }
        if (currentNode.right) {
            queue.push([currentNode.right, depth + 1])
        }
    }
};

// 5ms runtime

const minDepth = function (root) {
    if (!root) return 0

    if (!root.left) {
        return 1 + minDepth(root.right)
    }
    if (!root.right) {
        return 1 + minDepth(root.left)
    }

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};

const bfs = function (root) {
    const queue = []
    queue.push(root)
    while (queue.length > 0) {
        const currentNode = queue.shift()
        console.log(currentNode.val + " ")
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
    }
};

console.log(minDepth(root))

