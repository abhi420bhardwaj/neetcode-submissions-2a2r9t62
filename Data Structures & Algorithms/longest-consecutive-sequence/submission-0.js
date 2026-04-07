class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxCount = 0;
        for (const num of set){
            if(!(set.has(num - 1))){
                let k = num;
                let arr = [k];
                while(set.has(k+1)){
                    k += 1;
                    arr.push(k);
                }
                maxCount = Math.max(maxCount,arr.length);
            }
        }
        return maxCount;
    }
}
