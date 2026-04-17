class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let len = 0;
        const lookup = new Set(nums);
        for (const num of nums){
            if(lookup.has(num - 1)){
                continue;
            }
            else{
                let count = 1;
                let temp = num;
                while (lookup.has(temp+1)){
                    count++;
                    temp++;
                }
                len = Math.max(len,count);
            }
        }
        return len;
    }
}
