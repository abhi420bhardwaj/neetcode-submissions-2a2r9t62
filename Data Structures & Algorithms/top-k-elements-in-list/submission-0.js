class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        const result = new Array();
        let count = 0;
        for (const num of nums){
            freq.set(num,(freq.get(num)|| 0) + 1);
        }
        const arr = Array.from({length: nums.length + 1},() => []);
        for(const [key,value] of freq){
            arr[value].push(key);
        }
        for (let i = nums.length;i>0 && count < k;i--){
            for (const numb of arr[i]){
                result.push(numb);
                count++;
            }
        }
        return result;
    }
}
