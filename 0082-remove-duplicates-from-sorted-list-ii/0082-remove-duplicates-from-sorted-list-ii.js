/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const frequencyMap = new Map();
    let current = head;
    
    while (current !== null) {
        if (!frequencyMap.has(current.val)) {
            frequencyMap.set(current.val, 1);
        } else {
            frequencyMap.set(current.val, frequencyMap.get(current.val) + 1);
        }
        current = current.next;
    }
    
    current = head;
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    
    while (current !== null) {
        if (frequencyMap.get(current.val) > 1) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    
    return dummy.next
};