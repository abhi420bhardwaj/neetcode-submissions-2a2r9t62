class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        const ans = [];
        for (let i = 0;i<nums.length;i++){
            if(nums[i] > 0) break;
            if(i > 0 && nums[i] == nums[i-1]) continue;
            let target = nums[i]*(-1);
            let j = i+1;
            let k = nums.length - 1;
            while(j<k){
                let sum = nums[j]+nums[k];
                if(sum < target){
                    j++;
                }
                else if(sum > target){
                    k--;
                }
                else{
                    ans.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;

                    while(j < k && nums[j] == nums[j-1]) j++;

                    while(j < k && nums[k] == nums[k+1]) k--;
                }
            }
        }
        return ans;
    }
}
