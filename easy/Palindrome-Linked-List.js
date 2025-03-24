// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
//
// Example 1:
//
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
//
//
// Input: head = [1,2]
// Output: false

const isPalindrome = function(head) {
    const cache = []
    while(head) {
        cache.push(head.val)
        head = head.next
    }
    let left = 0;
    let rigth = cache.length - 1
    while (left < rigth && cache[left] === cache[rigth]) {
        left++
        rigth--
    }
    return rigth <= left
};

const isPalindrome2 = function(head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null
    while (slow) {
        let nextNode = slow.next
        slow.next = prev
        prev = slow
        slow = nextNode
    }

    let firstHalf = head
    let secondHalf = prev
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
            return false
        }
        firstHalf = firstHalf.next
        secondHalf = secondHalf.next
    }
    return true
};