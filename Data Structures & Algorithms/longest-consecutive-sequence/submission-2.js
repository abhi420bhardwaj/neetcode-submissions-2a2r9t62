class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let len = 0;
        const lookup = new Set(nums);
        for (let num of lookup){
            if(!lookup.has(num - 1)){
               let count = 1;
                while (lookup.has(num+count)){
                    count++;
                }
                len = Math.max(len,count);
            }
        }
        return len;
    }
}
