/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let iterator = head;
  let length = 0;
    
  while(iterator!= null) {
    iterator = iterator.next;
    length++;
  }
    
  if(length-n === 0){
      head = head.next
      return head
  }
  iterator = head 
  let prev = null;
    
  for(let i=0;i<length-n;i++){
    prev = iterator;
    iterator = iterator.next;
  }
    
  prev.next = iterator.next;
  iterator = null
    
  return  head
};