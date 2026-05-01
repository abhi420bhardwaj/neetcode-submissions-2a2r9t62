/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let temp = head;
        let count = 0
        while(temp){
            count++;
            temp = temp.next;
        }
        if(n == count){
            return head.next
        }
        let node = count - n ;
        temp = head;
        count = 1;
        while(temp){
            if (count == node){
                temp.next = temp.next.next;
                break;
            }
            count++;
            temp = temp.next;
        }
        return head;
    }
}
