class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();
        for (const num of nums){
            map.set(num,(map.get(num)||0)+1);
        }
        for (const val of map.values()){
            if (val > 1){
                return true;
            }
        }
        return false;
    }
}
