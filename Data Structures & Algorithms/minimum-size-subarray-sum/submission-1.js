class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let sum = 0;
        let ans = Infinity;
        for (let right = 0;right<nums.length;right++){
            sum = sum + nums[right];
            while(sum >= target){
                ans = Math.min(ans,right-l+1);
                sum = sum - nums[l];
                l++;
            }
        }
        if(ans <= nums.length){
            return ans;
        }
        return 0;
    }
}
