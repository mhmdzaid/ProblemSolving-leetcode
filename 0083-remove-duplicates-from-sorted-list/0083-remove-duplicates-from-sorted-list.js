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

  const map = new Map();
  let iterator = head;
  let pevious = iterator;

    while(iterator !== null) {
        
    if(!map.has(iterator.val)){
      map.set(iterator.val, true);
    } else{
      previous.next = iterator.next
      iterator = previous
    }
    previous = iterator
    iterator = iterator.next;
  }
  return head;
};