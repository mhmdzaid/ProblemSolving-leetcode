/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */var isPalindrome = function (head) {
  const stack = [];

  let current = head;
  let length = 0;
  while (current.next !== null) {
    length++;
    current = current.next;
  }

  current = head;

  for (let i = 0; i < length / 2; i++) {
    current = current.next;
  }


  const secondHead = current;

  const reversedList = reverse(secondHead);

  let reversedCurrent = reversedList;
   
  current = head;

  while (reversedCurrent !== null && current !== null) {
    if (current.val === reversedCurrent.val) {
      current = current.next;
      reversedCurrent = reversedCurrent.next;
    } else {
      return false
    }
  }
  return true 
};

const reverse = (head) => {
  let current = head;
  let prev = null;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};