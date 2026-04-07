class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const dupli = new Set(nums);
        if (dupli.size === nums.length) return false;
        return true;
    }
}
