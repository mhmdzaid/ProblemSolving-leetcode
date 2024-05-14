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
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  
  let dummy = new ListNode(0);
  dummy.next = head;
  let previous = dummy;

  while (previous.next && previous.next.next) {
    let first = previous.next;
    let second = first.next;

    // Swapping
    previous.next = second;
    first.next = second.next;
    second.next = first;

    // Move to the next pair
    previous = first;
  }

  return dummy.next;
};